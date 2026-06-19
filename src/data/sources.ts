/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Source References
 *
 * Metadata for every source cited by questions, study guides,
 * and other educational content. Each entry records publisher,
 * access date, and source type for audit-trail purposes.
 * ────────────────────────────────────────────────────────────── */

import { Source } from "@/types";

export const sources: Source[] = [
  {
    id: "src-bacb-task-list",
    title: "RBT Task List (2nd ed.)",
    publisher: "Behavior Analyst Certification Board",
    sourceType: "official",
    url: "https://www.bacb.com/rbt/",
    datePublished: "2018-01-01",
    dateAccessed: "2025-12-01",
    notes:
      "Publicly available task-list headings used only as generic topic labels. No copyrighted content reproduced.",
  },
  {
    id: "src-bacb-handbook",
    title: "RBT Handbook",
    publisher: "Behavior Analyst Certification Board",
    sourceType: "official",
    url: "https://www.bacb.com/rbt/",
    dateAccessed: "2025-12-01",
    notes:
      "Referenced for publicly stated eligibility requirements only. No copyrighted content reproduced.",
  },
  {
    id: "src-cooper-aba",
    title: "Applied Behavior Analysis (3rd ed.)",
    publisher: "Pearson",
    sourceType: "textbook",
    datePublished: "2020-01-01",
    dateAccessed: "2025-12-01",
    notes:
      "Standard ABA textbook referenced for general concept definitions. No content directly copied.",
  },
  {
    id: "src-internal",
    title: "TheRBT.net Internal Review",
    publisher: "TheRBT.net",
    sourceType: "internal-review",
    dateAccessed: "2025-12-01",
    notes: "Original educational material created by the TheRBT.net content team.",
  },
];

export function getSourceById(id: string): Source | undefined {
  return sources.find((s) => s.id === id);
}
