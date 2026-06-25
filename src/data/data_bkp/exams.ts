/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Practice Test Configurations
 *
 * Three practice tests plus one 85-item mock simulation.
 * All items are independent practice content, not official exam items.
 * ────────────────────────────────────────────────────────────── */

import { Exam } from "@/types";

export const exams: Exam[] = [
  {
    "slug": "practice-test-1",
    "title": "Practice Test 1: Foundations",
    "description": "Twenty-five original practice items covering all six content areas with emphasis on core definitions, measurement, assessment, and basic teaching procedures. Independent study resource; not an official certification examination.",
    "questionCount": 25,
    "durationMinutes": 40,
    "mode": "practice",
    "difficulty": "mixed",
    "topicSlugs": [
      "measurement",
      "assessment",
      "skill-acquisition",
      "behavior-reduction",
      "documentation-reporting",
      "professional-conduct"
    ],
    "status": "reviewed"
  },
  {
    "slug": "practice-test-2",
    "title": "Practice Test 2: Teaching and Behavior Support",
    "description": "Twenty-five original practice items emphasizing behavior acquisition, behavior reduction, implementation fidelity, and supervised clinical decision boundaries.",
    "questionCount": 25,
    "durationMinutes": 40,
    "mode": "practice",
    "difficulty": "mixed",
    "topicSlugs": [
      "measurement",
      "assessment",
      "skill-acquisition",
      "behavior-reduction",
      "documentation-reporting",
      "professional-conduct"
    ],
    "status": "reviewed"
  },
  {
    "slug": "practice-test-3",
    "title": "Practice Test 3: Applied Judgment",
    "description": "Twenty-five original scenario-based practice items emphasizing data quality, documentation, ethics, generalization, and professional communication.",
    "questionCount": 25,
    "durationMinutes": 40,
    "mode": "practice",
    "difficulty": "mixed",
    "topicSlugs": [
      "measurement",
      "assessment",
      "skill-acquisition",
      "behavior-reduction",
      "documentation-reporting",
      "professional-conduct"
    ],
    "status": "reviewed"
  },
  {
    "slug": "mock-exam",
    "title": "85-Item Mock Exam Simulation",
    "description": "A 90-minute simulation containing 85 original practice items. Its domain mix proportionally extends the published scored-item percentages for study purposes; it does not represent the undisclosed placement of unscored examination items. It is not official, retired, recalled, or approved examination content.",
    "questionCount": 85,
    "durationMinutes": 90,
    "mode": "mock",
    "difficulty": "mixed",
    "topicSlugs": [
      "measurement",
      "assessment",
      "skill-acquisition",
      "behavior-reduction",
      "documentation-reporting",
      "professional-conduct"
    ],
    "status": "reviewed"
  }
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
