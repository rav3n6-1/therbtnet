/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Analytics Utility Unit Tests
 * ────────────────────────────────────────────────────────────── */

import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  trackEvent,
  trackPracticeTestStart,
  trackPracticeTestComplete,
  trackPracticeTestQuestionAnswered,
  trackMockExamComplete,
  trackDomainQuizComplete,
  trackReadinessScoreView,
  getQuizType,
  _resetFiredEvents,
} from "../analytics";

// ─── Setup ───────────────────────────────────────────────────

// Mock window.gtag
const mockGtag = vi.fn();

beforeEach(() => {
  _resetFiredEvents();
  mockGtag.mockClear();

  // Ensure window exists and has gtag
  if (typeof globalThis.window === "undefined") {
    // @ts-expect-error - creating minimal window mock for testing
    globalThis.window = {};
  }
  window.gtag = mockGtag;
});

// ─── trackEvent ──────────────────────────────────────────────

describe("trackEvent", () => {
  it("calls window.gtag with event name and params", () => {
    trackEvent("test_event", { key: "value", count: 42 });

    expect(mockGtag).toHaveBeenCalledWith("event", "test_event", {
      key: "value",
      count: 42,
    });
  });

  it("strips undefined values from params", () => {
    trackEvent("test_event", {
      present: "yes",
      missing: undefined,
    });

    expect(mockGtag).toHaveBeenCalledWith("event", "test_event", {
      present: "yes",
    });
  });

  it("does not crash when gtag is not available", () => {
    window.gtag = undefined;
    expect(() => trackEvent("test_event")).not.toThrow();
  });

  it("works with no params", () => {
    trackEvent("simple_event");
    expect(mockGtag).toHaveBeenCalledWith("event", "simple_event", {});
  });
});

// ─── Dedup Guard ─────────────────────────────────────────────

describe("dedup guard", () => {
  it("fires practice_test_complete only once per test_id", () => {
    const params = {
      test_id: "practice-test-1",
      test_name: "Test 1",
      question_count: 25,
      score_percent: 72,
      correct_answers: 18,
      duration_seconds: 600,
      domains_attempted: "measurement,assessment",
    };

    const firstFire = trackPracticeTestComplete(params);
    expect(firstFire).toBe(true);
    expect(mockGtag).toHaveBeenCalledTimes(1);

    const secondFire = trackPracticeTestComplete(params);
    expect(secondFire).toBe(false);
    expect(mockGtag).toHaveBeenCalledTimes(1); // not called again
  });

  it("allows different test_ids to fire separately", () => {
    const base = {
      test_name: "Test",
      question_count: 25,
      score_percent: 72,
      correct_answers: 18,
      duration_seconds: 600,
      domains_attempted: "measurement",
    };

    trackPracticeTestComplete({ ...base, test_id: "practice-test-1" });
    trackPracticeTestComplete({ ...base, test_id: "practice-test-2" });

    expect(mockGtag).toHaveBeenCalledTimes(2);
  });

  it("fires mock_exam_complete only once", () => {
    const params = {
      test_id: "mock-exam",
      test_name: "Mock Exam",
      question_count: 85,
      score_percent: 68,
      correct_answers: 58,
      duration_seconds: 4500,
      domains_attempted: "measurement,assessment",
    };

    expect(trackMockExamComplete(params)).toBe(true);
    expect(trackMockExamComplete(params)).toBe(false);
    expect(mockGtag).toHaveBeenCalledTimes(1);
  });

  it("fires domain_quiz_complete only once per quiz_id", () => {
    const params = {
      domain: "measurement",
      quiz_id: "topic-measurement",
      score_percent: 80,
      question_count: 28,
    };

    expect(trackDomainQuizComplete(params)).toBe(true);
    expect(trackDomainQuizComplete(params)).toBe(false);
    expect(mockGtag).toHaveBeenCalledTimes(1);
  });

  it("fires readiness_score_view with dedup on content", () => {
    const params = {
      readiness_score: 72,
      questions_used: 20,
      weakest_domain: "measurement",
    };

    expect(trackReadinessScoreView(params)).toBe(true);
    expect(trackReadinessScoreView(params)).toBe(false);
    expect(mockGtag).toHaveBeenCalledTimes(1);
  });

  it("resets dedup state correctly", () => {
    const params = {
      test_id: "practice-test-1",
      test_name: "Test 1",
      question_count: 25,
      score_percent: 72,
      correct_answers: 18,
      duration_seconds: 600,
      domains_attempted: "measurement",
    };

    trackPracticeTestComplete(params);
    expect(mockGtag).toHaveBeenCalledTimes(1);

    _resetFiredEvents();
    trackPracticeTestComplete(params);
    expect(mockGtag).toHaveBeenCalledTimes(2);
  });
});

// ─── Non-deduped events ──────────────────────────────────────

describe("non-deduped events", () => {
  it("trackPracticeTestStart fires every time", () => {
    const params = {
      test_id: "practice-test-1",
      test_name: "Test 1",
      question_count: 25,
    };

    trackPracticeTestStart(params);
    trackPracticeTestStart(params);

    expect(mockGtag).toHaveBeenCalledTimes(2);
  });

  it("trackPracticeTestQuestionAnswered fires every time", () => {
    const params = {
      test_id: "practice-test-1",
      question_number: 1,
      domain: "measurement",
      is_correct: true,
    };

    trackPracticeTestQuestionAnswered(params);
    trackPracticeTestQuestionAnswered(params);

    expect(mockGtag).toHaveBeenCalledTimes(2);
  });
});

// ─── getQuizType ─────────────────────────────────────────────

describe("getQuizType", () => {
  it("identifies domain quizzes", () => {
    expect(getQuizType("topic-measurement")).toBe("domain");
    expect(getQuizType("topic-skill-acquisition")).toBe("domain");
  });

  it("identifies mock exam", () => {
    expect(getQuizType("mock-exam")).toBe("mock");
  });

  it("identifies practice tests", () => {
    expect(getQuizType("practice-test-1")).toBe("practice");
    expect(getQuizType("practice-test-2")).toBe("practice");
    expect(getQuizType("practice-test-3")).toBe("practice");
  });

  it("defaults unknown slugs to practice", () => {
    expect(getQuizType("unknown-slug")).toBe("practice");
  });
});
