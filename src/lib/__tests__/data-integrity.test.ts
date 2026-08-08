/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Application Data Integrity Unit Tests
 *
 * Verifies that all datasets (questions, exams, topics, flashcards)
 * maintain complete structural integrity, valid cross-references,
 * non-empty fields, and compliance rules.
 * ────────────────────────────────────────────────────────────── */

import { describe, it, expect } from "vitest";
import { questions } from "@/data/questions";
import { exams } from "@/data/exams";
import { topics } from "@/data/topics";
import { flashcards } from "@/data/flashcards";

describe("Question Bank Integrity", () => {
  it("contains exactly 160 total questions", () => {
    expect(questions.length).toBe(160);
  });

  it("ensures every question ID is unique", () => {
    const ids = new Set<string>();
    for (const q of questions) {
      expect(ids.has(q.id)).toBe(false);
      ids.add(q.id);
    }
  });

  it("never contains official BACB questions (isOfficialQuestion must be false)", () => {
    for (const q of questions) {
      expect(q.isOfficialQuestion).toBe(false);
    }
  });

  it("validates required fields for every question", () => {
    const validDifficulties = new Set(["easy", "medium", "hard"]);
    const validStatuses = new Set(["placeholder", "draft", "reviewed", "verified"]);
    const validChoiceIds = new Set(["A", "B", "C", "D"]);

    for (const q of questions) {
      expect(q.id).toBeTruthy();
      expect(typeof q.id).toBe("string");

      expect(q.stem).toBeTruthy();
      expect(q.stem.trim().length).toBeGreaterThan(10);

      expect(q.topicSlug).toBeTruthy();
      expect(validDifficulties.has(q.difficulty)).toBe(true);
      expect(validStatuses.has(q.status)).toBe(true);

      expect(q.explanation).toBeTruthy();
      expect(q.explanation.trim().length).toBeGreaterThan(5);

      expect(validChoiceIds.has(q.correctChoiceId)).toBe(true);
    }
  });

  it("validates choices structure for every question", () => {
    for (const q of questions) {
      expect(q.choices).toHaveLength(4);

      const choiceIds = q.choices.map((c) => c.id);
      expect(choiceIds).toEqual(["A", "B", "C", "D"]);

      for (const choice of q.choices) {
        expect(choice.text).toBeTruthy();
        expect(choice.text.trim().length).toBeGreaterThan(0);
      }

      // Ensure correct choice ID exists in choices array
      const correctChoice = q.choices.find((c) => c.id === q.correctChoiceId);
      expect(correctChoice).toBeDefined();
    }
  });
});

describe("Exam Configurations Integrity", () => {
  it("has valid exams array", () => {
    expect(exams.length).toBe(4);
  });

  it("ensures all exam slugs are unique", () => {
    const slugs = new Set<string>();
    for (const exam of exams) {
      expect(slugs.has(exam.slug)).toBe(false);
      slugs.add(exam.slug);
    }
  });

  it("matches exam questionCount with questions data", () => {
    for (const exam of exams) {
      const examQuestions = questions.filter((q) => q.examSlug === exam.slug);
      expect(examQuestions.length).toBe(exam.questionCount);
    }
  });

  it("ensures exam topicSlugs reference valid topics", () => {
    const validTopicSlugs = new Set(topics.map((t) => t.slug));
    for (const exam of exams) {
      for (const slug of exam.topicSlugs) {
        expect(validTopicSlugs.has(slug)).toBe(true);
      }
    }
  });
});

describe("Topic Cross-Reference Integrity", () => {
  it("ensures all questions reference valid topics in topics.ts", () => {
    const validTopicSlugs = new Set(topics.map((t) => t.slug));
    for (const q of questions) {
      expect(validTopicSlugs.has(q.topicSlug)).toBe(true);
    }
  });

  it("verifies every topic has at least 15 questions in questions.ts", () => {
    const topicSlugs = topics.map((t) => t.slug);
    for (const slug of topicSlugs) {
      const count = questions.filter((q) => q.topicSlug === slug).length;
      expect(count).toBeGreaterThanOrEqual(15);
    }
  });
});

describe("Flashcards Integrity", () => {
  it("has a valid non-empty set of flashcards", () => {
    expect(flashcards.length).toBeGreaterThan(0);
  });

  it("ensures all flashcard IDs are unique", () => {
    const ids = new Set<string>();
    for (const card of flashcards) {
      expect(ids.has(card.id)).toBe(false);
      ids.add(card.id);
    }
  });

  it("ensures all flashcards reference valid topic slugs", () => {
    const validTopicSlugs = new Set(topics.map((t) => t.slug));
    for (const card of flashcards) {
      expect(validTopicSlugs.has(card.topicSlug)).toBe(true);
      expect(card.front.trim().length).toBeGreaterThan(0);
      expect(card.back.trim().length).toBeGreaterThan(0);
    }
  });
});
