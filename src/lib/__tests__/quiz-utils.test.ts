/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Quiz Utilities & Scoring Unit Tests
 * ────────────────────────────────────────────────────────────── */

import { describe, it, expect } from "vitest";
import {
  calculateResults,
  formatTime,
  getDifficultyConfig,
  shuffleArray,
} from "../quiz-utils";
import { Question, QuizAnswer } from "@/types";

const mockQuestions: Question[] = [
  {
    id: "q-1",
    examSlug: "practice-test-1",
    topicSlug: "measurement",
    difficulty: "easy",
    stem: "Question 1 stem text",
    choices: [
      { id: "A", text: "Choice A" },
      { id: "B", text: "Choice B" },
      { id: "C", text: "Choice C" },
      { id: "D", text: "Choice D" },
    ],
    correctChoiceId: "A",
    explanation: "Explanation 1",
    sourceRefs: [],
    lastVerified: "2026-01-01",
    status: "reviewed",
    isOfficialQuestion: false,
  },
  {
    id: "q-2",
    examSlug: "practice-test-1",
    topicSlug: "measurement",
    difficulty: "medium",
    stem: "Question 2 stem text",
    choices: [
      { id: "A", text: "Choice A" },
      { id: "B", text: "Choice B" },
      { id: "C", text: "Choice C" },
      { id: "D", text: "Choice D" },
    ],
    correctChoiceId: "B",
    explanation: "Explanation 2",
    sourceRefs: [],
    lastVerified: "2026-01-01",
    status: "reviewed",
    isOfficialQuestion: false,
  },
  {
    id: "q-3",
    examSlug: "practice-test-1",
    topicSlug: "assessment",
    difficulty: "hard",
    stem: "Question 3 stem text",
    choices: [
      { id: "A", text: "Choice A" },
      { id: "B", text: "Choice B" },
      { id: "C", text: "Choice C" },
      { id: "D", text: "Choice D" },
    ],
    correctChoiceId: "C",
    explanation: "Explanation 3",
    sourceRefs: [],
    lastVerified: "2026-01-01",
    status: "reviewed",
    isOfficialQuestion: false,
  },
];

describe("calculateResults", () => {
  it("calculates total score and percentage correctly", () => {
    const mockAnswers: QuizAnswer[] = [
      { questionId: "q-1", selectedChoiceId: "A", isCorrect: true, isBookmarked: false, isFlagged: false },
      { questionId: "q-2", selectedChoiceId: "B", isCorrect: true, isBookmarked: false, isFlagged: false },
      { questionId: "q-3", selectedChoiceId: "A", isCorrect: false, isBookmarked: false, isFlagged: false },
    ];

    const startedAt = new Date(Date.now() - 60000).toISOString(); // 60s ago
    const result = calculateResults("practice-test-1", mockQuestions, mockAnswers, startedAt);

    expect(result.examSlug).toBe("practice-test-1");
    expect(result.score).toBe(2);
    expect(result.totalQuestions).toBe(3);
    expect(result.percentage).toBe(67); // 2/3 = 66.666... -> 67%
    expect(result.timeSpentSeconds).toBeGreaterThanOrEqual(59);
  });

  it("calculates per-topic breakdown correctly", () => {
    const mockAnswers: QuizAnswer[] = [
      { questionId: "q-1", selectedChoiceId: "A", isCorrect: true, isBookmarked: false, isFlagged: false },
      { questionId: "q-2", selectedChoiceId: "C", isCorrect: false, isBookmarked: false, isFlagged: false },
      { questionId: "q-3", selectedChoiceId: "C", isCorrect: true, isBookmarked: false, isFlagged: false },
    ];

    const startedAt = new Date().toISOString();
    const result = calculateResults("practice-test-1", mockQuestions, mockAnswers, startedAt);

    const measurementTopic = result.topicBreakdown.find((t) => t.topicSlug === "measurement");
    expect(measurementTopic).toBeDefined();
    expect(measurementTopic?.total).toBe(2);
    expect(measurementTopic?.correct).toBe(1);
    expect(measurementTopic?.percentage).toBe(50);

    const assessmentTopic = result.topicBreakdown.find((t) => t.topicSlug === "assessment");
    expect(assessmentTopic).toBeDefined();
    expect(assessmentTopic?.total).toBe(1);
    expect(assessmentTopic?.correct).toBe(1);
    expect(assessmentTopic?.percentage).toBe(100);
  });
});

describe("formatTime", () => {
  it("formats seconds to MM:SS", () => {
    expect(formatTime(0)).toBe("00:00");
    expect(formatTime(5)).toBe("00:05");
    expect(formatTime(65)).toBe("01:05");
    expect(formatTime(599)).toBe("09:59");
  });

  it("formats large seconds count to HH:MM:SS", () => {
    expect(formatTime(3600)).toBe("01:00:00");
    expect(formatTime(3665)).toBe("01:01:05");
  });
});

describe("getDifficultyConfig", () => {
  it("returns appropriate configurations for difficulties", () => {
    expect(getDifficultyConfig("easy").label).toBe("Easy");
    expect(getDifficultyConfig("medium").label).toBe("Medium");
    expect(getDifficultyConfig("hard").label).toBe("Hard");
    expect(getDifficultyConfig("unknown").label).toBe("Mixed");
  });
});

describe("shuffleArray", () => {
  it("maintains array length and elements", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffleArray(input);
    expect(shuffled).toHaveLength(input.length);
    expect(new Set(shuffled)).toEqual(new Set(input));
  });
});
