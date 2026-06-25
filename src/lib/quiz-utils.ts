/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Quiz Utility Functions
 * ────────────────────────────────────────────────────────────── */

import { Question, QuizAnswer, QuizResult, TopicScore } from "@/types";
import { topics } from "@/data/topics";

/**
 * Calculate quiz results from answered questions.
 */
export function calculateResults(
  examSlug: string,
  questions: Question[],
  answers: QuizAnswer[],
  startedAt: string
): QuizResult {
  let correctCount = 0;
  const topicMap = new Map<string, { correct: number; total: number }>();

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const a = answers[i];

    // Track per-topic
    const current = topicMap.get(q.topicSlug) ?? { correct: 0, total: 0 };
    current.total += 1;

    if (a?.selectedChoiceId === q.correctChoiceId) {
      correctCount += 1;
      current.correct += 1;
    }

    topicMap.set(q.topicSlug, current);
  }

  const topicBreakdown: TopicScore[] = Array.from(topicMap.entries()).map(
    ([slug, data]) => ({
      topicSlug: slug,
      topicTitle: topics.find((t) => t.slug === slug)?.title ?? slug,
      correct: data.correct,
      total: data.total,
      percentage: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
    })
  );

  const now = new Date().toISOString();
  const timeSpent = Math.round(
    (new Date(now).getTime() - new Date(startedAt).getTime()) / 1000
  );

  return {
    examSlug,
    score: correctCount,
    totalQuestions: questions.length,
    percentage: questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0,
    topicBreakdown,
    completedAt: now,
    timeSpentSeconds: timeSpent,
  };
}

/**
 * Format seconds into MM:SS or HH:MM:SS.
 */
export function formatTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (hours > 0) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${pad(minutes)}:${pad(seconds)}`;
}

/**
 * Get a human-readable difficulty label with color class.
 */
export function getDifficultyConfig(difficulty: string): {
  label: string;
  colorClass: string;
  bgClass: string;
} {
  switch (difficulty) {
    case "easy":
      return {
        label: "Easy",
        colorClass: "text-emerald-700 dark:text-emerald-400",
        bgClass: "bg-emerald-100 dark:bg-emerald-900/30",
      };
    case "medium":
      return {
        label: "Medium",
        colorClass: "text-amber-700 dark:text-amber-400",
        bgClass: "bg-amber-100 dark:bg-amber-900/30",
      };
    case "hard":
      return {
        label: "Hard",
        colorClass: "text-rose-700 dark:text-rose-400",
        bgClass: "bg-rose-100 dark:bg-rose-900/30",
      };
    default:
      return {
        label: "Mixed",
        colorClass: "text-orange-700 dark:text-orange-400",
        bgClass: "bg-orange-100 dark:bg-orange-900/30",
      };
  }
}

/**
 * Shuffle an array (Fisher–Yates).
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get a practice score label — careful wording, not "pass/fail".
 */
export function getScoreLabel(percentage: number): {
  label: string;
  description: string;
  colorClass: string;
} {
  if (percentage >= 85) {
    return {
      label: "Strong Readiness",
      description:
        "Your practice score suggests strong preparation. Continue reviewing all topic areas.",
      colorClass: "text-emerald-600 dark:text-emerald-400",
    };
  }
  if (percentage >= 70) {
    return {
      label: "Moderate Readiness",
      description:
        "Your practice score shows moderate preparation. Focus on weaker topic areas for improvement.",
      colorClass: "text-amber-600 dark:text-amber-400",
    };
  }
  return {
    label: "Needs More Practice",
    description:
      "Your practice score suggests additional study is recommended. Review the study guides and retake practice tests.",
    colorClass: "text-rose-600 dark:text-rose-400",
  };
}
