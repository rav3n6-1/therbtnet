/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Readiness Score Calculation Engine
 *
 * Pure business logic for RBT Readiness Score computation.
 * No React dependencies — testable in isolation.
 *
 * The Readiness Score is an estimate based on practice question
 * performance. It is NOT an official BACB score or pass prediction.
 * ────────────────────────────────────────────────────────────── */

import { topics } from "@/data/topics";

// ─── Readiness Bands (Centralized Config) ────────────────────

export interface ReadinessBand {
  min: number;
  max: number;
  label: string;
  description: string;
  colorClass: string;
}

export const READINESS_BANDS: ReadinessBand[] = [
  {
    min: 85,
    max: 100,
    label: "Strong readiness",
    description:
      "Your practice score suggests strong preparation. Continue reviewing all topic areas.",
    colorClass: "text-emerald-600 dark:text-emerald-400",
  },
  {
    min: 70,
    max: 84,
    label: "Developing readiness",
    description:
      "Your practice score shows developing preparation. Focus on weaker topic areas for improvement.",
    colorClass: "text-amber-600 dark:text-amber-400",
  },
  {
    min: 50,
    max: 69,
    label: "More preparation recommended",
    description:
      "Your practice score suggests additional study is recommended. Review the study guides and focus on weaker areas.",
    colorClass: "text-orange-600 dark:text-orange-400",
  },
  {
    min: 0,
    max: 49,
    label: "Build your foundations",
    description:
      "Your practice score suggests foundational review is needed. Start with the study guides and retake practice tests.",
    colorClass: "text-rose-600 dark:text-rose-400",
  },
];

/**
 * Minimum number of questions before the score is considered
 * reliable enough to display without an "Early estimate" qualifier.
 */
export const MIN_QUESTIONS_FOR_CONFIDENCE = 15;

/**
 * Minimum number of attempts in a single domain before it's
 * considered for weakest-domain recommendations.
 */
export const MIN_DOMAIN_ATTEMPTS = 3;

// ─── Domain Score Types ──────────────────────────────────────

export interface DomainScore {
  domainSlug: string;
  domainTitle: string;
  attempted: number;
  correct: number;
  percentage: number;
  performanceLabel: DomainPerformanceLabel;
}

export type DomainPerformanceLabel = "Strong" | "Review" | "Focus here";

export interface OverallReadiness {
  score: number;
  totalAnswered: number;
  totalCorrect: number;
  isEarlyEstimate: boolean;
  band: ReadinessBand;
}

export interface WeakDomainRecommendation {
  domainSlug: string;
  domainTitle: string;
  percentage: number;
  quizPath: string;
}

// ─── Readiness Band Lookup ───────────────────────────────────

/**
 * Get the readiness band for a given percentage score.
 */
export function getReadinessBand(percentage: number): ReadinessBand {
  const clamped = Math.max(0, Math.min(100, Math.round(percentage)));
  for (const band of READINESS_BANDS) {
    if (clamped >= band.min && clamped <= band.max) {
      return band;
    }
  }
  // Fallback to lowest band (should never reach here)
  return READINESS_BANDS[READINESS_BANDS.length - 1];
}

// ─── Domain Performance Label ────────────────────────────────

/**
 * Get a human-readable performance label for a domain score.
 */
export function getDomainPerformanceLabel(
  percentage: number
): DomainPerformanceLabel {
  if (percentage >= 80) return "Strong";
  if (percentage >= 65) return "Review";
  return "Focus here";
}

/**
 * Get the CSS color class for a domain performance label.
 */
export function getDomainPerformanceLabelColor(
  label: DomainPerformanceLabel
): string {
  switch (label) {
    case "Strong":
      return "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30";
    case "Review":
      return "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30";
    case "Focus here":
      return "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30";
  }
}

// ─── Domain Score Calculation ────────────────────────────────

/**
 * Calculate per-domain scores from the progress domain map.
 * Returns sorted array (weakest first).
 */
export function calculateDomainScores(
  domains: Record<string, { attempted: number; correct: number; percentage: number }>
): DomainScore[] {
  const scores: DomainScore[] = [];

  for (const [slug, data] of Object.entries(domains)) {
    if (data.attempted === 0) continue;

    const topic = topics.find((t) => t.slug === slug);
    const percentage =
      data.attempted > 0
        ? Math.round((data.correct / data.attempted) * 100)
        : 0;

    scores.push({
      domainSlug: slug,
      domainTitle: topic?.title ?? slug,
      attempted: data.attempted,
      correct: data.correct,
      percentage,
      performanceLabel: getDomainPerformanceLabel(percentage),
    });
  }

  // Sort: weakest first
  scores.sort((a, b) => a.percentage - b.percentage);

  return scores;
}

// ─── Overall Readiness Calculation ───────────────────────────

/**
 * Calculate the overall readiness score from progress data.
 */
export function calculateOverallReadiness(progress: {
  totalQuestionsAnswered: number;
  totalCorrect: number;
}): OverallReadiness {
  const { totalQuestionsAnswered, totalCorrect } = progress;

  if (totalQuestionsAnswered === 0) {
    return {
      score: 0,
      totalAnswered: 0,
      totalCorrect: 0,
      isEarlyEstimate: true,
      band: READINESS_BANDS[READINESS_BANDS.length - 1],
    };
  }

  const score = Math.round((totalCorrect / totalQuestionsAnswered) * 100);

  return {
    score,
    totalAnswered: totalQuestionsAnswered,
    totalCorrect,
    isEarlyEstimate: totalQuestionsAnswered < MIN_QUESTIONS_FOR_CONFIDENCE,
    band: getReadinessBand(score),
  };
}

// ─── Weakest Domain Recommendations ─────────────────────────

/**
 * Identify the weakest sufficiently-attempted domains.
 * Returns at most `maxCount` recommendations, sorted weakest first.
 * Excludes domains with fewer than MIN_DOMAIN_ATTEMPTS attempts.
 */
export function getWeakestDomains(
  domainScores: DomainScore[],
  maxCount: number = 2
): WeakDomainRecommendation[] {
  return domainScores
    .filter((d) => d.attempted >= MIN_DOMAIN_ATTEMPTS)
    .filter((d) => d.performanceLabel !== "Strong")
    .slice(0, maxCount)
    .map((d) => ({
      domainSlug: d.domainSlug,
      domainTitle: d.domainTitle,
      percentage: d.percentage,
      quizPath: getTopicQuizPath(d.domainSlug),
    }));
}

// ─── Path Helpers ────────────────────────────────────────────

/**
 * Get the deep-link path for a topic quiz.
 */
export function getTopicQuizPath(topicSlug: string): string {
  return `/topic-quizzes/${topicSlug}`;
}
