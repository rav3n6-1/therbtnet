/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Flashcard Data
 *
 * Placeholder flashcards for UI testing. All content is original
 * and marked as placeholder. Not official BACB material.
 * ────────────────────────────────────────────────────────────── */

import { Flashcard } from "@/types";

export const flashcards: Flashcard[] = [
  {
    id: "fc-001",
    topicSlug: "measurement",
    front: "What is frequency recording?",
    back: "Counting the number of times a behavior occurs within a specified observation period. Often expressed as a rate (count per unit of time).",
    difficulty: "easy",
    status: "placeholder",
  },
  {
    id: "fc-002",
    topicSlug: "measurement",
    front: "What is the difference between latency and inter-response time?",
    back: "Latency is the time between a stimulus (e.g., an instruction) and the start of the behavior. Inter-response time (IRT) is the time between two consecutive occurrences of the same behavior.",
    difficulty: "medium",
    status: "placeholder",
  },
  {
    id: "fc-003",
    topicSlug: "assessment",
    front: "What is a paired stimulus (forced-choice) preference assessment?",
    back: "A structured preference assessment where two items are presented simultaneously, and the learner selects one. Each item is paired with every other item across trials to produce a rank order of preference.",
    difficulty: "easy",
    status: "placeholder",
  },
  {
    id: "fc-004",
    topicSlug: "assessment",
    front: "Name the four common functions of behavior.",
    back: "1. Attention (social positive)\n2. Escape/Avoidance (social negative)\n3. Access to tangibles (social positive)\n4. Automatic/Sensory reinforcement (non-social)",
    difficulty: "easy",
    status: "placeholder",
  },
  {
    id: "fc-005",
    topicSlug: "skill-acquisition",
    front: "What is prompt fading?",
    back: "The systematic reduction of prompts (assistance) so the learner can eventually respond independently. Methods include most-to-least, least-to-most, and time delay procedures.",
    difficulty: "easy",
    status: "placeholder",
  },
  {
    id: "fc-006",
    topicSlug: "skill-acquisition",
    front: "What is the difference between forward chaining and backward chaining?",
    back: "Forward chaining: Teaching steps of a task analysis in order, starting with the first step. The learner completes the taught steps independently and the trainer completes the rest.\n\nBackward chaining: Teaching steps in reverse order, starting with the last step. The trainer completes all steps except the last, which the learner performs independently.",
    difficulty: "medium",
    status: "placeholder",
  },
  {
    id: "fc-007",
    topicSlug: "behavior-reduction",
    front: "What is an extinction burst?",
    back: "A temporary increase in the frequency, intensity, or duration of a behavior when reinforcement is first withheld. This is an expected and normal part of the extinction process.",
    difficulty: "easy",
    status: "placeholder",
  },
  {
    id: "fc-008",
    topicSlug: "behavior-reduction",
    front: "What is Differential Reinforcement of Alternative behavior (DRA)?",
    back: "A procedure that provides reinforcement for a specific alternative behavior while withholding reinforcement for the challenging behavior. The alternative behavior should serve the same function as the challenging behavior.",
    difficulty: "medium",
    status: "placeholder",
  },
  {
    id: "fc-009",
    topicSlug: "documentation-reporting",
    front: "Why is it important to document session data immediately?",
    back: "Immediate documentation ensures accuracy and reliability of data. Delayed recording increases the risk of forgetting details, which can lead to inaccurate data and poor clinical decisions.",
    difficulty: "easy",
    status: "placeholder",
  },
  {
    id: "fc-010",
    topicSlug: "documentation-reporting",
    front: "What should you do if you notice a significant behavior change during a session?",
    back: "Document the change accurately and communicate with your supervising BCBA promptly. Do not independently modify the treatment plan or ignore significant changes.",
    difficulty: "easy",
    status: "placeholder",
  },
  {
    id: "fc-011",
    topicSlug: "professional-conduct",
    front: "What should an RBT do if a family asks for clinical advice outside the treatment plan?",
    back: "Refer the family to the supervising BCBA. Providing clinical advice or recommendations is outside the RBT scope of practice.",
    difficulty: "easy",
    status: "placeholder",
  },
  {
    id: "fc-012",
    topicSlug: "professional-conduct",
    front: "What is the RBT's role regarding behavior intervention plans?",
    back: "RBTs implement behavior intervention plans as written and directed by their supervising BCBA. They do not independently create, design, or modify behavior intervention plans.",
    difficulty: "easy",
    status: "placeholder",
  },
];

export function getFlashcardsByTopic(topicSlug: string): Flashcard[] {
  return flashcards.filter((fc) => fc.topicSlug === topicSlug);
}

export function getAllFlashcardTopics(): string[] {
  return [...new Set(flashcards.map((fc) => fc.topicSlug))];
}
