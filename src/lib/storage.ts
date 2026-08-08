/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – localStorage Wrapper
 *
 * All quiz progress, bookmarks, and analytics are stored
 * under the namespace key prefix: therbt_progress_v1
 * ────────────────────────────────────────────────────────────── */

import { QuizState, QuizResult, QuizAnswer, ExamMode } from "@/types";

const NAMESPACE = "therbt_progress_v1";

// ─── Low-level helpers ───────────────────────────────────────

function getKey(key: string): string {
  return `${NAMESPACE}_${key}`;
}

function safeGet<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(getKey(key));
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function safeSet<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getKey(key), JSON.stringify(value));
  } catch {
    // localStorage quota exceeded or unavailable — fail silently
  }
}

function safeRemove(key: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(getKey(key));
  } catch {
    // fail silently
  }
}

// ─── Quiz State ──────────────────────────────────────────────

export function saveQuizState(state: QuizState): void {
  safeSet(`quiz_${state.examSlug}`, state);
}

export function loadQuizState(examSlug: string): QuizState | null {
  return safeGet<QuizState>(`quiz_${examSlug}`);
}

export function clearQuizState(examSlug: string): void {
  safeRemove(`quiz_${examSlug}`);
}

export function createInitialQuizState(
  examSlug: string,
  questionIds: string[],
  mode: ExamMode
): QuizState {
  return {
    examSlug,
    mode,
    currentIndex: 0,
    answers: questionIds.map((id) => ({
      questionId: id,
      selectedChoiceId: null,
      isCorrect: null,
      isBookmarked: false,
      isFlagged: false,
    })),
    startedAt: new Date().toISOString(),
    isSubmitted: false,
  };
}

// ─── Quiz Results ────────────────────────────────────────────

export function saveQuizResult(result: QuizResult): void {
  const results = loadAllResults();
  results.push(result);
  safeSet("results", results);
}

export function loadAllResults(): QuizResult[] {
  return safeGet<QuizResult[]>("results") ?? [];
}

export function loadResultsForExam(examSlug: string): QuizResult[] {
  return loadAllResults().filter((r) => r.examSlug === examSlug);
}

// ─── Bookmarks ───────────────────────────────────────────────

export function getBookmarkedQuestions(): string[] {
  return safeGet<string[]>("bookmarks") ?? [];
}

export function toggleBookmark(questionId: string): boolean {
  const bookmarks = getBookmarkedQuestions();
  const index = bookmarks.indexOf(questionId);
  if (index === -1) {
    bookmarks.push(questionId);
  } else {
    bookmarks.splice(index, 1);
  }
  safeSet("bookmarks", bookmarks);
  return index === -1; // returns true if now bookmarked
}

export function isBookmarked(questionId: string): boolean {
  return getBookmarkedQuestions().includes(questionId);
}

// ─── Completed Tests ─────────────────────────────────────────

export function getCompletedExams(): string[] {
  return safeGet<string[]>("completed_exams") ?? [];
}

export function markExamCompleted(examSlug: string): void {
  const completed = getCompletedExams();
  if (!completed.includes(examSlug)) {
    completed.push(examSlug);
    safeSet("completed_exams", completed);
  }
}

export function isExamCompleted(examSlug: string): boolean {
  return getCompletedExams().includes(examSlug);
}

// ─── Flashcard Progress ──────────────────────────────────────

export interface FlashcardProgress {
  known: string[];
  unknown: string[];
  lastStudied?: string;
}

export function getFlashcardProgress(): FlashcardProgress {
  return safeGet<FlashcardProgress>("flashcard_progress") ?? {
    known: [],
    unknown: [],
  };
}

export function markFlashcardKnown(id: string): void {
  const progress = getFlashcardProgress();
  progress.known = [...new Set([...progress.known, id])];
  progress.unknown = progress.unknown.filter((u) => u !== id);
  progress.lastStudied = new Date().toISOString();
  safeSet("flashcard_progress", progress);
}

export function markFlashcardUnknown(id: string): void {
  const progress = getFlashcardProgress();
  progress.unknown = [...new Set([...progress.unknown, id])];
  progress.known = progress.known.filter((k) => k !== id);
  progress.lastStudied = new Date().toISOString();
  safeSet("flashcard_progress", progress);
}

export function resetFlashcardProgress(): void {
  safeRemove("flashcard_progress");
}

// ─── Simple Analytics ────────────────────────────────────────

export interface SimpleAnalytics {
  totalQuestionsAnswered: number;
  totalTestsCompleted: number;
  totalStudyTimeSeconds: number;
  lastActiveDate: string;
}

export function getAnalytics(): SimpleAnalytics {
  return safeGet<SimpleAnalytics>("analytics") ?? {
    totalQuestionsAnswered: 0,
    totalTestsCompleted: 0,
    totalStudyTimeSeconds: 0,
    lastActiveDate: new Date().toISOString(),
  };
}

export function updateAnalytics(update: Partial<SimpleAnalytics>): void {
  const current = getAnalytics();
  safeSet("analytics", {
    ...current,
    ...update,
    lastActiveDate: new Date().toISOString(),
  });
}

// ─── RBT Readiness Progress ─────────────────────────────────

export interface RbtProgress {
  version: 1;
  lastUpdated: string;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  readinessScore: number;
  domains: Record<
    string,
    { attempted: number; correct: number; percentage: number }
  >;
  /** Maps questionId → latest isCorrect result for deduplication */
  questionResults: Record<string, boolean>;
  completedTests: string[];
}

const PROGRESS_KEY = "readiness_progress";

function createEmptyProgress(): RbtProgress {
  return {
    version: 1,
    lastUpdated: new Date().toISOString(),
    totalQuestionsAnswered: 0,
    totalCorrect: 0,
    readinessScore: 0,
    domains: {},
    questionResults: {},
    completedTests: [],
  };
}

/**
 * Load the accumulated readiness progress from localStorage.
 * Returns null if no progress exists or data is corrupted/outdated.
 */
export function loadProgress(): RbtProgress | null {
  const data = safeGet<RbtProgress>(PROGRESS_KEY);
  if (!data) return null;

  // Version check — reject incompatible schemas
  if (typeof data.version !== "number" || data.version !== 1) return null;

  // Basic shape validation
  if (
    typeof data.totalQuestionsAnswered !== "number" ||
    typeof data.totalCorrect !== "number" ||
    typeof data.domains !== "object" ||
    typeof data.questionResults !== "object"
  ) {
    return null;
  }

  return data;
}

/**
 * Save progress to localStorage.
 */
export function saveProgress(progress: RbtProgress): void {
  safeSet(PROGRESS_KEY, progress);
}

/**
 * Merge a completed quiz result into the accumulated progress.
 *
 * Uses per-question deduplication: if a question was previously answered,
 * the old result is replaced with the new one, and domain/total counts
 * are recalculated from scratch to ensure accuracy.
 *
 * @param result - The quiz result to merge
 * @param questionTopicMap - Map of questionId → topicSlug for domain attribution
 */
export function mergeQuizIntoProgress(
  result: QuizResult,
  questionTopicMap: Record<string, string>,
  questionCorrectMap: Record<string, boolean>
): RbtProgress {
  const existing = loadProgress() ?? createEmptyProgress();

  // Update per-question results (latest answer wins)
  const updatedQuestionResults = { ...existing.questionResults };
  for (const [questionId, isCorrect] of Object.entries(questionCorrectMap)) {
    updatedQuestionResults[questionId] = isCorrect;
  }

  // Add test to completed list if not already there
  const completedTests = existing.completedTests.includes(result.examSlug)
    ? existing.completedTests
    : [...existing.completedTests, result.examSlug];

  // Recalculate everything from the question-level results
  let totalCorrect = 0;
  let totalAnswered = 0;
  const domainMap: Record<string, { correct: number; attempted: number }> = {};

  for (const [questionId, isCorrect] of Object.entries(
    updatedQuestionResults
  )) {
    totalAnswered++;
    if (isCorrect) totalCorrect++;

    const topicSlug = questionTopicMap[questionId];
    if (topicSlug) {
      if (!domainMap[topicSlug]) {
        domainMap[topicSlug] = { correct: 0, attempted: 0 };
      }
      domainMap[topicSlug].attempted++;
      if (isCorrect) domainMap[topicSlug].correct++;
    }
  }

  // Calculate domain percentages
  const domains: RbtProgress["domains"] = {};
  for (const [slug, data] of Object.entries(domainMap)) {
    domains[slug] = {
      attempted: data.attempted,
      correct: data.correct,
      percentage:
        data.attempted > 0
          ? Math.round((data.correct / data.attempted) * 100)
          : 0,
    };
  }

  // Calculate overall readiness score
  const readinessScore =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const progress: RbtProgress = {
    version: 1,
    lastUpdated: new Date().toISOString(),
    totalQuestionsAnswered: totalAnswered,
    totalCorrect,
    readinessScore,
    domains,
    questionResults: updatedQuestionResults,
    completedTests,
  };

  saveProgress(progress);
  return progress;
}

// ─── Update Answer ───────────────────────────────────────────

export function updateQuizAnswer(
  state: QuizState,
  questionIndex: number,
  update: Partial<QuizAnswer>
): QuizState {
  const newAnswers = [...state.answers];
  newAnswers[questionIndex] = { ...newAnswers[questionIndex], ...update };
  return { ...state, answers: newAnswers };
}
