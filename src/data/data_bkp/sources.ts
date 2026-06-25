/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Source Metadata
 *
 * Metadata supports content review and auditability. Referencing a
 * source does not imply endorsement, affiliation, or reproduction.
 * ────────────────────────────────────────────────────────────── */

import { Source } from "@/types";

export const sources: Source[] = [
  {
    "id": "src-bacb-handbook-2026",
    "title": "Registered Behavior Technician Handbook (January 2026 update)",
    "publisher": "Behavior Analyst Certification Board",
    "sourceType": "official",
    "url": "https://www.bacb.com/rbt-handbook/",
    "datePublished": "2026-01-02",
    "dateAccessed": "2026-06-24",
    "notes": "Used to verify the current examination format, content-area blueprint, supervision context, credential requirements, and public compliance information. No examination items or protected wording reproduced."
  },
  {
    "id": "src-bacb-tco-3e",
    "title": "RBT Test Content Outline (3rd ed.)",
    "publisher": "Behavior Analyst Certification Board",
    "sourceType": "official",
    "url": "https://www.bacb.com/rbt/",
    "dateAccessed": "2026-06-24",
    "notes": "Used only to align original educational content with the publicly identified six content areas. No official tasks, sample items, or examination content reproduced."
  },
  {
    "id": "src-rbt-ethics-code-2",
    "title": "RBT Ethics Code (2.0)",
    "publisher": "Behavior Analyst Certification Board",
    "sourceType": "official",
    "url": "https://www.bacb.com/ethics-information/ethics-codes/",
    "dateAccessed": "2026-06-24",
    "notes": "Used as a current standards reference for original ethics scenarios. Code text is not reproduced."
  },
  {
    "id": "src-cooper-aba-3e",
    "title": "Applied Behavior Analysis (3rd ed.)",
    "publisher": "Pearson",
    "sourceType": "textbook",
    "datePublished": "2020-01-01",
    "dateAccessed": "2026-06-24",
    "notes": "General conceptual reference for measurement, assessment, skill acquisition, behavior reduction, and visual analysis. All explanations are independently written."
  },
  {
    "id": "src-miltenberger-7e",
    "title": "Behavior Modification: Principles and Procedures (7th ed.)",
    "publisher": "Cengage",
    "sourceType": "textbook",
    "dateAccessed": "2026-06-24",
    "notes": "Secondary conceptual reference for behavioral principles and procedures. No textbook passages are reproduced."
  },
  {
    "id": "src-preference-assessment-research",
    "title": "Foundational preference-assessment research",
    "publisher": "Journal of Applied Behavior Analysis",
    "sourceType": "peer-reviewed",
    "dateAccessed": "2026-06-24",
    "notes": "Includes Fisher et al. on paired-stimulus assessment and DeLeon & Iwata on multiple-stimulus assessment without replacement; used to verify general procedural distinctions."
  },
  {
    "id": "src-functional-assessment-research",
    "title": "Foundational functional-analysis research",
    "publisher": "Journal of Applied Behavior Analysis",
    "sourceType": "peer-reviewed",
    "dateAccessed": "2026-06-24",
    "notes": "Includes Iwata and colleagues' experimental analysis work; used to verify general distinctions among test, control, descriptive, and indirect assessment approaches."
  },
  {
    "id": "src-internal-review",
    "title": "TheRBT.net Original Content Review Record",
    "publisher": "TheRBT.net",
    "sourceType": "internal-review",
    "dateAccessed": "2026-06-24",
    "notes": "Original scenarios, distractors, explanations, and study text created for TheRBT.net and checked for schema integrity, internal consistency, duplication, and prohibited claims. Status 'reviewed' does not replace independent BCBA/qualified-SME approval."
  }
];

export function getSourceById(id: string): Source | undefined {
  return sources.find((s) => s.id === id);
}
