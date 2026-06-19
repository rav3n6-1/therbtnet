/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Navigation Configuration
 * ────────────────────────────────────────────────────────────── */

import { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Practice Tests",
    href: "/practice-tests",
    children: [
      { label: "All Practice Tests", href: "/practice-tests" },
      { label: "85-Question Mock Exam", href: "/mock-exam" },
      { label: "Topic Quizzes", href: "/topic-quizzes" },
    ],
  },
  { label: "Study Guide", href: "/study-guide" },
  { label: "Flashcards", href: "/flashcards" },
  {
    label: "Exam Info",
    href: "/exam-format",
    children: [
      { label: "Exam Format", href: "/exam-format" },
      { label: "40-Hour Training Guide", href: "/40-hour-training-guide" },
      { label: "Competency Assessment Guide", href: "/competency-assessment-guide" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

export const footerNav: NavItem[] = [
  { label: "Practice Tests", href: "/practice-tests" },
  { label: "Study Guide", href: "/study-guide" },
  { label: "Exam Format", href: "/exam-format" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export const SITE_NAME = "TheRBT.net";
export const SITE_URL = "https://therbt.net";

export const SHORT_DISCLAIMER =
  "Independent study resource. Not affiliated with or endorsed by the BACB®. Practice questions are original and are not official BACB exam items.";

export const FOOTER_DISCLAIMER =
  "Registered Behavior Technician® and RBT® are registered trademarks of the Behavior Analyst Certification Board, Inc.® (BACB®). TheRBT.net is an independent exam-preparation resource and is not affiliated with, sponsored by, endorsed by, or approved by the BACB®. Our practice questions, explanations, study guides, and mock exams are original educational materials based on publicly available exam information and are not official BACB exam questions. For official certification requirements, policies, and exam information, please refer to the BACB website.";
