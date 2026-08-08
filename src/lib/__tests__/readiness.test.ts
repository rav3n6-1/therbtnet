/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Readiness Calculation Unit Tests
 * ────────────────────────────────────────────────────────────── */

import { describe, it, expect } from "vitest";
import {
  getReadinessBand,
  getDomainPerformanceLabel,
  calculateDomainScores,
  calculateOverallReadiness,
  getWeakestDomains,
  getTopicQuizPath,
  READINESS_BANDS,
  MIN_QUESTIONS_FOR_CONFIDENCE,
  MIN_DOMAIN_ATTEMPTS,
} from "../readiness";

// ─── getReadinessBand ────────────────────────────────────────

describe("getReadinessBand", () => {
  it("returns 'Strong readiness' for 85–100", () => {
    expect(getReadinessBand(85).label).toBe("Strong readiness");
    expect(getReadinessBand(100).label).toBe("Strong readiness");
    expect(getReadinessBand(92).label).toBe("Strong readiness");
  });

  it("returns 'Developing readiness' for 70–84", () => {
    expect(getReadinessBand(70).label).toBe("Developing readiness");
    expect(getReadinessBand(84).label).toBe("Developing readiness");
    expect(getReadinessBand(77).label).toBe("Developing readiness");
  });

  it("returns 'More preparation recommended' for 50–69", () => {
    expect(getReadinessBand(50).label).toBe("More preparation recommended");
    expect(getReadinessBand(69).label).toBe("More preparation recommended");
    expect(getReadinessBand(60).label).toBe("More preparation recommended");
  });

  it("returns 'Build your foundations' for 0–49", () => {
    expect(getReadinessBand(0).label).toBe("Build your foundations");
    expect(getReadinessBand(49).label).toBe("Build your foundations");
    expect(getReadinessBand(25).label).toBe("Build your foundations");
  });

  it("clamps values outside 0–100", () => {
    expect(getReadinessBand(-5).label).toBe("Build your foundations");
    expect(getReadinessBand(150).label).toBe("Strong readiness");
  });

  it("handles boundary values correctly", () => {
    expect(getReadinessBand(49).label).toBe("Build your foundations");
    expect(getReadinessBand(50).label).toBe("More preparation recommended");
    expect(getReadinessBand(69).label).toBe("More preparation recommended");
    expect(getReadinessBand(70).label).toBe("Developing readiness");
    expect(getReadinessBand(84).label).toBe("Developing readiness");
    expect(getReadinessBand(85).label).toBe("Strong readiness");
  });

  it("rounds fractional scores", () => {
    expect(getReadinessBand(84.6).label).toBe("Strong readiness");
    expect(getReadinessBand(49.4).label).toBe("Build your foundations");
  });
});

// ─── getDomainPerformanceLabel ───────────────────────────────

describe("getDomainPerformanceLabel", () => {
  it("returns 'Strong' for >= 80", () => {
    expect(getDomainPerformanceLabel(80)).toBe("Strong");
    expect(getDomainPerformanceLabel(100)).toBe("Strong");
  });

  it("returns 'Review' for 65–79", () => {
    expect(getDomainPerformanceLabel(65)).toBe("Review");
    expect(getDomainPerformanceLabel(79)).toBe("Review");
  });

  it("returns 'Focus here' for < 65", () => {
    expect(getDomainPerformanceLabel(0)).toBe("Focus here");
    expect(getDomainPerformanceLabel(64)).toBe("Focus here");
  });
});

// ─── calculateOverallReadiness ───────────────────────────────

describe("calculateOverallReadiness", () => {
  it("calculates correct score", () => {
    const result = calculateOverallReadiness({
      totalQuestionsAnswered: 20,
      totalCorrect: 16,
    });
    expect(result.score).toBe(80);
    expect(result.totalAnswered).toBe(20);
    expect(result.totalCorrect).toBe(16);
    expect(result.isEarlyEstimate).toBe(false);
  });

  it("handles zero questions", () => {
    const result = calculateOverallReadiness({
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
    });
    expect(result.score).toBe(0);
    expect(result.isEarlyEstimate).toBe(true);
    expect(result.band.label).toBe("Build your foundations");
  });

  it("marks early estimate when under threshold", () => {
    const result = calculateOverallReadiness({
      totalQuestionsAnswered: 10,
      totalCorrect: 8,
    });
    expect(result.isEarlyEstimate).toBe(true);
    expect(result.score).toBe(80);
  });

  it("does not mark early estimate at threshold", () => {
    const result = calculateOverallReadiness({
      totalQuestionsAnswered: MIN_QUESTIONS_FOR_CONFIDENCE,
      totalCorrect: 12,
    });
    expect(result.isEarlyEstimate).toBe(false);
  });

  it("rounds to nearest integer", () => {
    const result = calculateOverallReadiness({
      totalQuestionsAnswered: 3,
      totalCorrect: 1,
    });
    expect(result.score).toBe(33); // 33.33... rounds to 33
  });

  it("returns correct band", () => {
    const result = calculateOverallReadiness({
      totalQuestionsAnswered: 20,
      totalCorrect: 18,
    });
    expect(result.band.label).toBe("Strong readiness");
  });
});

// ─── calculateDomainScores ───────────────────────────────────

describe("calculateDomainScores", () => {
  it("calculates correct percentages", () => {
    const scores = calculateDomainScores({
      measurement: { attempted: 10, correct: 8, percentage: 80 },
      assessment: { attempted: 8, correct: 5, percentage: 63 },
    });

    expect(scores).toHaveLength(2);
    // Should be sorted weakest first
    expect(scores[0].domainSlug).toBe("assessment");
    expect(scores[0].percentage).toBe(63);
    expect(scores[1].domainSlug).toBe("measurement");
    expect(scores[1].percentage).toBe(80);
  });

  it("recalculates percentages from attempted/correct", () => {
    const scores = calculateDomainScores({
      measurement: { attempted: 10, correct: 7, percentage: 0 }, // stale percentage
    });

    expect(scores[0].percentage).toBe(70); // recalculated
  });

  it("skips domains with 0 attempts", () => {
    const scores = calculateDomainScores({
      measurement: { attempted: 0, correct: 0, percentage: 0 },
      assessment: { attempted: 5, correct: 3, percentage: 60 },
    });

    expect(scores).toHaveLength(1);
    expect(scores[0].domainSlug).toBe("assessment");
  });

  it("assigns correct performance labels", () => {
    const scores = calculateDomainScores({
      measurement: { attempted: 10, correct: 9, percentage: 90 },
      assessment: { attempted: 10, correct: 7, percentage: 70 },
      "skill-acquisition": { attempted: 10, correct: 5, percentage: 50 },
    });

    // Sorted weakest first
    expect(scores[0].performanceLabel).toBe("Focus here"); // 50%
    expect(scores[1].performanceLabel).toBe("Review"); // 70%
    expect(scores[2].performanceLabel).toBe("Strong"); // 90%
  });

  it("handles empty domains object", () => {
    const scores = calculateDomainScores({});
    expect(scores).toHaveLength(0);
  });

  it("resolves topic titles from topics data", () => {
    const scores = calculateDomainScores({
      measurement: { attempted: 5, correct: 4, percentage: 80 },
    });

    expect(scores[0].domainTitle).toBe("Data Collection and Graphing");
  });
});

// ─── getWeakestDomains ───────────────────────────────────────

describe("getWeakestDomains", () => {
  const mockScores = calculateDomainScores({
    measurement: { attempted: 10, correct: 9, percentage: 90 },
    assessment: { attempted: 8, correct: 5, percentage: 63 },
    "skill-acquisition": { attempted: 12, correct: 7, percentage: 58 },
    "behavior-reduction": { attempted: 10, correct: 7, percentage: 70 },
    "professional-conduct": { attempted: 6, correct: 5, percentage: 83 },
  });

  it("returns weakest domains", () => {
    const weak = getWeakestDomains(mockScores, 2);
    expect(weak).toHaveLength(2);
    expect(weak[0].domainSlug).toBe("skill-acquisition");
    expect(weak[1].domainSlug).toBe("assessment");
  });

  it("respects maxCount", () => {
    const weak = getWeakestDomains(mockScores, 1);
    expect(weak).toHaveLength(1);
    expect(weak[0].domainSlug).toBe("skill-acquisition");
  });

  it("filters domains with insufficient attempts", () => {
    const scoresWithLowAttempts = calculateDomainScores({
      measurement: { attempted: 2, correct: 0, percentage: 0 }, // too few
      assessment: { attempted: 5, correct: 2, percentage: 40 },
    });

    const weak = getWeakestDomains(scoresWithLowAttempts, 2);
    expect(weak).toHaveLength(1);
    expect(weak[0].domainSlug).toBe("assessment");
  });

  it("excludes 'Strong' domains", () => {
    const allStrong = calculateDomainScores({
      measurement: { attempted: 10, correct: 9, percentage: 90 },
      assessment: { attempted: 10, correct: 8, percentage: 80 },
    });

    const weak = getWeakestDomains(allStrong, 2);
    expect(weak).toHaveLength(0);
  });

  it("returns empty array when no domains qualify", () => {
    const empty = getWeakestDomains([], 2);
    expect(empty).toHaveLength(0);
  });

  it("includes quiz path for deep linking", () => {
    const weak = getWeakestDomains(mockScores, 1);
    expect(weak[0].quizPath).toBe("/topic-quizzes/skill-acquisition");
  });
});

// ─── getTopicQuizPath ────────────────────────────────────────

describe("getTopicQuizPath", () => {
  it("generates correct path", () => {
    expect(getTopicQuizPath("measurement")).toBe("/topic-quizzes/measurement");
    expect(getTopicQuizPath("skill-acquisition")).toBe(
      "/topic-quizzes/skill-acquisition"
    );
  });
});

// ─── READINESS_BANDS config ──────────────────────────────────

describe("READINESS_BANDS config", () => {
  it("has 4 bands", () => {
    expect(READINESS_BANDS).toHaveLength(4);
  });

  it("covers 0–100 without gaps", () => {
    // Verify bands are contiguous
    for (let score = 0; score <= 100; score++) {
      const band = getReadinessBand(score);
      expect(band).toBeDefined();
      expect(band.label).toBeTruthy();
    }
  });

  it("bands do not overlap", () => {
    const seen = new Set<number>();
    for (const band of READINESS_BANDS) {
      for (let i = band.min; i <= band.max; i++) {
        expect(seen.has(i)).toBe(false);
        seen.add(i);
      }
    }
  });
});
