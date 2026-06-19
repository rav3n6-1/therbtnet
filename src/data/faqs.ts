/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – FAQ Data
 *
 * Platform FAQs with compliance-safe, honest answers.
 * ────────────────────────────────────────────────────────────── */

import { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Is TheRBT.net an official BACB resource?",
    answer:
      "No. TheRBT.net is an independent exam-preparation platform. We are not affiliated with, sponsored by, endorsed by, or approved by the Behavior Analyst Certification Board, Inc. (BACB®). For official certification requirements and policies, please visit the BACB website directly.",
    category: "platform",
  },
  {
    id: "faq-2",
    question: "Are these real RBT exam questions?",
    answer:
      "No. All practice questions on TheRBT.net are original educational materials created for study and review purposes. They are not official BACB exam items, nor are they copied from any official exam. Our questions are designed to help you practice concepts relevant to the RBT content areas based on publicly available information.",
    category: "platform",
  },
  {
    id: "faq-3",
    question: "Can this site guarantee I will pass the RBT exam?",
    answer:
      "No. No study resource can guarantee exam results. TheRBT.net provides practice questions and study materials to support your preparation, but your exam performance depends on many factors including your training, supervised experience, and individual study. We encourage you to use multiple study resources and consult your supervising BCBA for guidance.",
    category: "platform",
  },
  {
    id: "faq-4",
    question: "How should I use the practice tests?",
    answer:
      "We recommend starting with a topic quiz to identify your strengths and areas for improvement. Then work through the full practice tests to build exam-day stamina. Use the study guides to review concepts you find challenging, and revisit incorrect answers to deepen your understanding. The mock exam simulates practice testing conditions with a timer.",
    category: "study",
  },
  {
    id: "faq-5",
    question: "Where should I verify official RBT certification requirements?",
    answer:
      'Always verify current eligibility requirements, exam format, and certification policies directly through the BACB website (bacb.com). Requirements may change, and TheRBT.net cannot guarantee that our information reflects the most current official policies.',
    category: "exam",
  },
  {
    id: "faq-6",
    question: "Is the 85-question mock exam the same format as the real exam?",
    answer:
      "Our mock exam uses a similar question count and time limit based on publicly available information about the RBT exam format. However, it is a practice simulation only and may not reflect the exact format, scoring, or content distribution of the actual exam. For the most current exam specifications, please refer to the BACB website.",
    category: "exam",
  },
  {
    id: "faq-7",
    question: "Do I need to create an account to use TheRBT.net?",
    answer:
      "No. All practice tests, study guides, and flashcards are currently available without an account. Your progress is saved locally in your browser using localStorage. Note that clearing your browser data will reset your progress.",
    category: "platform",
  },
  {
    id: "faq-8",
    question: "Is my data stored anywhere?",
    answer:
      "Your quiz progress, bookmarks, and scores are stored only in your browser's local storage. We do not currently collect personal data or send your progress to any server. See our Privacy Policy for more details.",
    category: "platform",
  },
  {
    id: "faq-9",
    question: "How often is the content updated?",
    answer:
      "We review and update our content periodically. Each study guide and question set includes a 'last verified' date. However, we recommend always checking the BACB website for the most current official information about the RBT exam and certification requirements.",
    category: "general",
  },
  {
    id: "faq-10",
    question: "Can I use TheRBT.net on my phone?",
    answer:
      "Yes. TheRBT.net is fully responsive and designed to work well on mobile phones, tablets, and desktop computers. The quiz engine, flashcards, and study guides are all optimized for mobile use.",
    category: "general",
  },
];

export function getFAQsByCategory(category: FAQ["category"]): FAQ[] {
  return faqs.filter((f) => f.category === category);
}
