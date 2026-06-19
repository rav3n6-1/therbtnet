/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Topic Definitions
 *
 * Generic, non-copyrighted topic labels aligned with publicly
 * available RBT exam content-area descriptions.
 * ────────────────────────────────────────────────────────────── */

import { Topic } from "@/types";

export const topics: Topic[] = [
  {
    slug: "measurement",
    title: "Measurement",
    description:
      "Concepts related to data collection methods, measurement systems, and graphing procedures used in applied behavior analysis.",
    icon: "📊",
    subtopics: [
      { slug: "data-collection", title: "Data Collection Methods" },
      { slug: "graphing", title: "Graphing and Visual Analysis" },
      { slug: "measurement-systems", title: "Measurement Systems" },
    ],
    questionCount: 2,
  },
  {
    slug: "assessment",
    title: "Assessment",
    description:
      "Topics covering preference assessments, functional behavior assessment concepts, and initial assessment procedures.",
    icon: "🔍",
    subtopics: [
      { slug: "preference-assessments", title: "Preference Assessments" },
      { slug: "functional-assessment", title: "Functional Behavior Assessment" },
    ],
    questionCount: 2,
  },
  {
    slug: "skill-acquisition",
    title: "Skill Acquisition",
    description:
      "Procedures and concepts for teaching new skills, including prompting, reinforcement, and teaching strategies.",
    icon: "📚",
    subtopics: [
      { slug: "prompting", title: "Prompting and Prompt Fading" },
      { slug: "reinforcement", title: "Reinforcement Procedures" },
      { slug: "teaching-strategies", title: "Teaching Strategies" },
      { slug: "generalization", title: "Generalization and Maintenance" },
    ],
    questionCount: 2,
  },
  {
    slug: "behavior-reduction",
    title: "Behavior Reduction",
    description:
      "Concepts related to identifying and reducing challenging behaviors, including antecedent and consequence-based strategies.",
    icon: "⚖️",
    subtopics: [
      { slug: "antecedent-strategies", title: "Antecedent-Based Strategies" },
      { slug: "consequence-strategies", title: "Consequence-Based Strategies" },
      { slug: "extinction", title: "Extinction Procedures" },
    ],
    questionCount: 2,
  },
  {
    slug: "documentation-reporting",
    title: "Documentation and Reporting",
    description:
      "Practices for maintaining records, documenting sessions, reporting data, and ensuring accurate communication.",
    icon: "📝",
    subtopics: [
      { slug: "session-notes", title: "Session Documentation" },
      { slug: "data-reporting", title: "Data Reporting" },
    ],
    questionCount: 2,
  },
  {
    slug: "professional-conduct",
    title: "Professional Conduct and Scope of Practice",
    description:
      "Ethical guidelines, professional boundaries, scope of practice for RBTs, and supervision requirements.",
    icon: "🤝",
    subtopics: [
      { slug: "ethical-conduct", title: "Ethical Conduct" },
      { slug: "scope-of-practice", title: "Scope of Practice" },
      { slug: "supervision", title: "Supervision Requirements" },
    ],
    questionCount: 2,
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getAllTopicSlugs(): string[] {
  return topics.map((t) => t.slug);
}
