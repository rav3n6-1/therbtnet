/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Storage Layer Integrity Unit Tests
 * ────────────────────────────────────────────────────────────── */

import { describe, it, expect, beforeEach } from "vitest";
import {
  saveQuizState,
  loadQuizState,
  clearQuizState,
  saveQuizResult,
  loadAllResults,
  loadResultsForExam,
  toggleBookmark,
  isBookmarked,
  getBookmarkedQuestions,
  markExamCompleted,
  isExamCompleted,
  getFlashcardProgress,
  markFlashcardKnown,
  markFlashcardUnknown,
  resetFlashcardProgress,
  loadProgress,
  saveProgress,
  mergeQuizIntoProgress,
  RbtProgress,
} from "../storage";
import { QuizState, QuizResult } from "@/types";

// ─── localStorage Mocking ────────────────────────────────────

const localStorageStore = new Map<string, string>();

const localStorageMock = {
  getItem: (key: string) => localStorageStore.get(key) ?? null,
  setItem: (key: string, value: string) => localStorageStore.set(key, value),
  removeItem: (key: string) => localStorageStore.delete(key),
  clear: () => localStorageStore.clear(),
};

beforeEach(() => {
  localStorageStore.clear();
  // @ts-expect-error - minimal window mock for testing
  globalThis.window = {
    localStorage: localStorageMock,
  };
  // @ts-expect-error - assign to global localStorage
  globalThis.localStorage = localStorageMock;
});

describe("Quiz State Storage", () => {
  it("saves and loads quiz state correctly", () => {
    const mockState: QuizState = {
      examSlug: "practice-test-1",
      mode: "practice",
      currentIndex: 2,
      answers: [],
      startedAt: new Date().toISOString(),
      isSubmitted: false,
    };

    saveQuizState(mockState);
    const loaded = loadQuizState("practice-test-1");
    expect(loaded).toEqual(mockState);
  });

  it("clears quiz state correctly", () => {
    const mockState: QuizState = {
      examSlug: "practice-test-1",
      mode: "practice",
      currentIndex: 0,
      answers: [],
      startedAt: new Date().toISOString(),
      isSubmitted: false,
    };

    saveQuizState(mockState);
    clearQuizState("practice-test-1");
    expect(loadQuizState("practice-test-1")).toBeNull();
  });
});

describe("Quiz Results Storage", () => {
  it("saves and loads all quiz results", () => {
    const result1: QuizResult = {
      examSlug: "practice-test-1",
      score: 20,
      totalQuestions: 25,
      percentage: 80,
      topicBreakdown: [],
      completedAt: new Date().toISOString(),
      timeSpentSeconds: 300,
    };

    const result2: QuizResult = {
      examSlug: "practice-test-2",
      score: 22,
      totalQuestions: 25,
      percentage: 88,
      topicBreakdown: [],
      completedAt: new Date().toISOString(),
      timeSpentSeconds: 350,
    };

    saveQuizResult(result1);
    saveQuizResult(result2);

    const all = loadAllResults();
    expect(all).toHaveLength(2);
    expect(all[0].examSlug).toBe("practice-test-1");
    expect(all[1].examSlug).toBe("practice-test-2");

    const filtered = loadResultsForExam("practice-test-1");
    expect(filtered).toHaveLength(1);
    expect(filtered[0].score).toBe(20);
  });
});

describe("Bookmarks & Exam Completion", () => {
  it("toggles and checks bookmarks correctly", () => {
    expect(isBookmarked("q-1")).toBe(false);

    const added = toggleBookmark("q-1");
    expect(added).toBe(true);
    expect(isBookmarked("q-1")).toBe(true);
    expect(getBookmarkedQuestions()).toEqual(["q-1"]);

    const removed = toggleBookmark("q-1");
    expect(removed).toBe(false);
    expect(isBookmarked("q-1")).toBe(false);
  });

  it("marks exam completed correctly", () => {
    expect(isExamCompleted("practice-test-1")).toBe(false);

    markExamCompleted("practice-test-1");
    expect(isExamCompleted("practice-test-1")).toBe(true);

    // Duplicate marking does not duplicate array entry
    markExamCompleted("practice-test-1");
    expect(isExamCompleted("practice-test-1")).toBe(true);
  });
});

describe("Flashcard Progress Storage", () => {
  it("tracks known and unknown flashcards", () => {
    markFlashcardKnown("fc-1");
    markFlashcardUnknown("fc-2");

    const progress = getFlashcardProgress();
    expect(progress.known).toContain("fc-1");
    expect(progress.unknown).toContain("fc-2");

    // Moving from unknown to known
    markFlashcardKnown("fc-2");
    const updated = getFlashcardProgress();
    expect(updated.known).toContain("fc-2");
    expect(updated.unknown).not.toContain("fc-2");

    resetFlashcardProgress();
    expect(getFlashcardProgress().known).toEqual([]);
  });
});

describe("RBT Progress Persistence & Merging", () => {
  it("returns null when no progress exists", () => {
    expect(loadProgress()).toBeNull();
  });

  it("handles corrupted JSON in localStorage gracefully", () => {
    localStorageMock.setItem("therbt_progress_v1_readiness_progress", "invalid-json{");
    expect(loadProgress()).toBeNull();
  });

  it("rejects invalid schema version", () => {
    const invalidVersion = {
      version: 99,
      totalQuestionsAnswered: 10,
    };
    localStorageMock.setItem(
      "therbt_progress_v1_readiness_progress",
      JSON.stringify(invalidVersion)
    );
    expect(loadProgress()).toBeNull();
  });

  it("merges quiz results and deduplicates questions by questionId", () => {
    const quizResult: QuizResult = {
      examSlug: "practice-test-1",
      score: 2,
      totalQuestions: 2,
      percentage: 100,
      topicBreakdown: [],
      completedAt: new Date().toISOString(),
      timeSpentSeconds: 120,
    };

    const topicMap = {
      "q-1": "measurement",
      "q-2": "assessment",
    };

    const answerMap = {
      "q-1": true,
      "q-2": false,
    };

    // First session
    const progress1 = mergeQuizIntoProgress(quizResult, topicMap, answerMap);
    expect(progress1.totalQuestionsAnswered).toBe(2);
    expect(progress1.totalCorrect).toBe(1);
    expect(progress1.readinessScore).toBe(50);
    expect(progress1.domains["measurement"].attempted).toBe(1);
    expect(progress1.domains["measurement"].correct).toBe(1);

    // Second session re-attempting q-2 and answering it correctly
    const answerMap2 = {
      "q-2": true,
    };
    const progress2 = mergeQuizIntoProgress(quizResult, topicMap, answerMap2);

    // Total unique questions should still be 2 (q-1 and q-2)
    expect(progress2.totalQuestionsAnswered).toBe(2);
    // Now both q-1 and q-2 are correct!
    expect(progress2.totalCorrect).toBe(2);
    expect(progress2.readinessScore).toBe(100);
  });
});
