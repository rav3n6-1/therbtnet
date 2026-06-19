/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – localStorage Wrapper
 *
 * All quiz progress, bookmarks, and analytics are stored
 * under the namespace key prefix: therbt_progress_v1
 * ────────────────────────────────────────────────────────────── */

import { QuizState, QuizResult, QuizAnswer, ChoiceId, ExamMode } from "@/types";

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
