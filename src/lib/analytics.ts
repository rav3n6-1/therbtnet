/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – GA4 Analytics Utility
 *
 * Typed wrapper around window.gtag for custom event tracking.
 * Safely no-ops during SSR or when GA is not loaded.
 * Prevents duplicate events caused by React rerenders.
 *
 * No PII is ever sent — no names, emails, IP info, or free-text answers.
 * ────────────────────────────────────────────────────────────── */

// ─── Types ───────────────────────────────────────────────────

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// ─── Dedup Guard ─────────────────────────────────────────────

/**
 * Tracks one-shot events handed to gtag during this page's lifetime.
 * Keyed on `${eventName}__${uniqueId}` to prevent rerender-driven duplicates.
 */
const firedEvents = new Set<string>();

function makeDedupKey(eventName: string, uniqueId: string): string {
  return `${eventName}__${uniqueId}`;
}

// ─── Core Tracking ──────────────────────────────────────────

/**
 * Send a custom GA4 event. Safely no-ops during SSR or if gtag is unavailable.
 */
export function trackEvent(name: string, params?: GtagEventParams): boolean {
  if (typeof window === "undefined") return false;
  if (typeof window.gtag !== "function") return false;

  // Strip undefined values
  const cleanParams: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        cleanParams[key] = value;
      }
    }
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${name}`, cleanParams);
  }

  window.gtag("event", name, cleanParams);
  return true;
}

/**
 * Fire a one-shot event that should only be sent once per unique ID.
 * Returns true when handed to gtag, false when unavailable or already sent.
 */
function trackOnce(
  name: string,
  uniqueId: string,
  params?: GtagEventParams
): boolean {
  const key = makeDedupKey(name, uniqueId);
  if (firedEvents.has(key)) {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics] SKIPPED (duplicate): ${name}`, { uniqueId });
    }
    return false;
  }
  if (!trackEvent(name, params)) return false;
  firedEvents.add(key);
  return true;
}

// ─── Practice Test Events ────────────────────────────────────

// Completion helpers require an attempt identifier (the saved quiz's startedAt).
// It is used only for local deduplication and is not sent to GA4.

export function trackPracticeTestStart(params: {
  test_id: string;
  test_name: string;
  question_count: number;
}): void {
  trackEvent("practice_test_start", params);
}

export function trackPracticeTestQuestionAnswered(params: {
  test_id: string;
  question_number: number;
  domain: string;
  is_correct: boolean;
}): void {
  trackEvent("practice_test_question_answered", params);
}

export function trackPracticeTestComplete(params: {
  test_id: string;
  test_name: string;
  question_count: number;
  score_percent: number;
  correct_answers: number;
  duration_seconds: number;
  domains_attempted: string;
}, attemptId: string): boolean {
  return trackOnce("practice_test_complete", JSON.stringify([params.test_id, attemptId]), params);
}

// ─── Mock Exam Events ────────────────────────────────────────

export function trackMockExamStart(params: {
  test_id: string;
  test_name: string;
  question_count: number;
}): void {
  trackEvent("mock_exam_start", params);
}

export function trackMockExamQuestionAnswered(params: {
  test_id: string;
  question_number: number;
  domain: string;
  is_correct: boolean;
}): void {
  trackEvent("mock_exam_question_answered", params);
}

export function trackMockExamComplete(params: {
  test_id: string;
  test_name: string;
  question_count: number;
  score_percent: number;
  correct_answers: number;
  duration_seconds: number;
  domains_attempted: string;
}, attemptId: string): boolean {
  return trackOnce("mock_exam_complete", JSON.stringify([params.test_id, attemptId]), params);
}

// ─── Domain / Topic Quiz Events ──────────────────────────────

export function trackDomainQuizStart(params: {
  domain: string;
  quiz_id: string;
  question_count: number;
}): void {
  trackEvent("domain_quiz_start", params);
}

export function trackDomainQuizComplete(params: {
  domain: string;
  quiz_id: string;
  score_percent: number;
  question_count: number;
}, attemptId: string): boolean {
  return trackOnce("domain_quiz_complete", JSON.stringify([params.quiz_id, attemptId]), params);
}

// ─── Readiness Feature Events ────────────────────────────────

export function trackReadinessScoreView(params: {
  readiness_score: number;
  questions_used: number;
  weakest_domain: string;
}): boolean {
  // Dedup on a session key since readiness can be viewed multiple times
  // but we only want one event per result screen render
  const uniqueKey = `readiness_${params.questions_used}_${params.readiness_score}`;
  return trackOnce("readiness_score_view", uniqueKey, params);
}

export function trackWeakDomainRecommendationClick(params: {
  source_domain: string;
  destination_path: string;
  readiness_score: number;
}): void {
  trackEvent("weak_domain_recommendation_click", params);
}

export function trackContinueStudyingClick(params: {
  readiness_score: number;
  destination_path: string;
}): void {
  trackEvent("continue_studying_click", params);
}

// ─── Utility ─────────────────────────────────────────────────

/**
 * Determine quiz type from examSlug.
 * topic-* → 'domain', mock-exam → 'mock', everything else → 'practice'
 */
export function getQuizType(
  examSlug: string
): "practice" | "mock" | "domain" {
  if (examSlug.startsWith("topic-")) return "domain";
  if (examSlug === "mock-exam") return "mock";
  return "practice";
}

/**
 * Reset the dedup guard (useful for testing).
 */
export function _resetFiredEvents(): void {
  firedEvents.clear();
}
