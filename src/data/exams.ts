/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Exam / Practice Test Definitions
 *
 * Each entry defines a practice test or mock exam. Questions
 * are linked via examSlug or topicSlugs at runtime.
 * ────────────────────────────────────────────────────────────── */

import { Exam } from "@/types";

export const exams: Exam[] = [
  {
    slug: "practice-test-1",
    title: "RBT Practice Test 1",
    description:
      "A broad practice test covering all major content areas. Original practice questions — not official BACB exam items.",
    questionCount: 12,
    durationMinutes: 20,
    mode: "practice",
    difficulty: "mixed",
    topicSlugs: [
      "measurement",
      "assessment",
      "skill-acquisition",
      "behavior-reduction",
      "documentation-reporting",
      "professional-conduct",
    ],
    status: "placeholder",
  },
  {
    slug: "practice-test-2",
    title: "RBT Practice Test 2",
    description:
      "Additional practice questions emphasizing skill acquisition and behavior reduction. Original practice questions — not official BACB exam items.",
    questionCount: 0,
    durationMinutes: 20,
    mode: "practice",
    difficulty: "mixed",
    topicSlugs: ["skill-acquisition", "behavior-reduction"],
    status: "placeholder",
  },
  {
    slug: "practice-test-3",
    title: "RBT Practice Test 3",
    description:
      "Practice questions focused on measurement, documentation, and professional conduct. Original practice questions — not official BACB exam items.",
    questionCount: 0,
    durationMinutes: 20,
    mode: "practice",
    difficulty: "mixed",
    topicSlugs: ["measurement", "documentation-reporting", "professional-conduct"],
    status: "placeholder",
  },
  {
    slug: "practice-test-4",
    title: "RBT Practice Test 4",
    description:
      "Advanced-level practice questions across all content areas. Original practice questions — not official BACB exam items.",
    questionCount: 0,
    durationMinutes: 25,
    mode: "practice",
    difficulty: "hard",
    topicSlugs: [
      "measurement",
      "assessment",
      "skill-acquisition",
      "behavior-reduction",
      "documentation-reporting",
      "professional-conduct",
    ],
    status: "placeholder",
  },
  {
    slug: "mock-exam",
    title: "85-Question Mock Exam",
    description:
      "Full-length practice mock exam with 85 original questions and a 90-minute timer. This is a practice simulation — not an official BACB exam.",
    questionCount: 12, // Using available placeholder questions; will be 85 with real content
    durationMinutes: 90,
    mode: "mock",
    difficulty: "mixed",
    topicSlugs: [
      "measurement",
      "assessment",
      "skill-acquisition",
      "behavior-reduction",
      "documentation-reporting",
      "professional-conduct",
    ],
    status: "placeholder",
  },
];

export function getExamBySlug(slug: string): Exam | undefined {
  return exams.find((e) => e.slug === slug);
}

export function getPracticeExams(): Exam[] {
  return exams.filter((e) => e.mode === "practice");
}

export function getMockExam(): Exam | undefined {
  return exams.find((e) => e.mode === "mock");
}
