/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Placeholder Practice Questions
 *
 * ⚠️  ALL questions below are ORIGINAL PLACEHOLDERS created for
 *     UI testing only. They are NOT official BACB exam items.
 *     Status: "placeholder" — must be replaced with verified
 *     original content before production use.
 * ────────────────────────────────────────────────────────────── */

import { Question } from "@/types";

export const questions: Question[] = [
  // ── Measurement ────────────────────────────────────────────
  {
    id: "q-meas-001",
    topicSlug: "measurement",
    subtopic: "data-collection",
    difficulty: "easy",
    stem: "A behavior technician is asked to record whether a behavior occurs at any point during each 15-second interval. Which data collection method is being described?",
    choices: [
      { id: "A", text: "Frequency recording" },
      { id: "B", text: "Partial interval recording" },
      { id: "C", text: "Whole interval recording" },
      { id: "D", text: "Momentary time sampling" },
    ],
    correctChoiceId: "B",
    explanation:
      "Partial interval recording involves noting whether a behavior occurred at any point during a specified time interval. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Frequency recording counts each individual occurrence of a behavior, not whether it occurred during an interval.",
      C: "Whole interval recording requires the behavior to occur throughout the entire interval.",
      D: "Momentary time sampling checks whether the behavior is occurring at the exact moment the interval ends.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },
  {
    id: "q-meas-002",
    topicSlug: "measurement",
    subtopic: "graphing",
    difficulty: "medium",
    stem: "When graphing behavioral data, what does a phase change line typically indicate?",
    choices: [
      { id: "A", text: "A change in the observer recording data" },
      { id: "B", text: "A change in conditions or intervention" },
      { id: "C", text: "The end of data collection" },
      { id: "D", text: "A significant increase in the target behavior" },
    ],
    correctChoiceId: "B",
    explanation:
      "A phase change line on a graph indicates a change in experimental conditions or the introduction/removal of an intervention. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Observer changes may be noted differently but are not indicated by phase change lines.",
      C: "The end of data collection is simply the last data point, not marked by a phase change line.",
      D: "Behavioral changes are shown by the data path, not phase lines.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },

  // ── Assessment ─────────────────────────────────────────────
  {
    id: "q-asmt-001",
    topicSlug: "assessment",
    subtopic: "preference-assessments",
    difficulty: "easy",
    stem: "Which type of preference assessment involves presenting two items at a time and asking the learner to choose one?",
    choices: [
      { id: "A", text: "Free operant observation" },
      { id: "B", text: "Single stimulus assessment" },
      { id: "C", text: "Paired stimulus (forced-choice) assessment" },
      { id: "D", text: "Multiple stimulus without replacement" },
    ],
    correctChoiceId: "C",
    explanation:
      "A paired stimulus assessment, also called a forced-choice assessment, presents two items at a time and records which item the learner selects. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Free operant observation involves observing the learner interact with freely available items without structured trials.",
      B: "Single stimulus assessment presents one item at a time and measures approach or avoidance.",
      D: "Multiple stimulus without replacement presents an array of items and removes chosen items from subsequent presentations.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },
  {
    id: "q-asmt-002",
    topicSlug: "assessment",
    subtopic: "functional-assessment",
    difficulty: "medium",
    stem: "An indirect assessment method for identifying the function of behavior typically involves:",
    choices: [
      { id: "A", text: "Directly observing the behavior in a controlled setting" },
      { id: "B", text: "Manipulating environmental variables systematically" },
      { id: "C", text: "Interviewing caregivers or reviewing records" },
      { id: "D", text: "Conducting a functional analysis" },
    ],
    correctChoiceId: "C",
    explanation:
      "Indirect assessments gather information about behavior through interviews, questionnaires, rating scales, and record reviews rather than direct observation. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Direct observation in controlled settings describes a descriptive or experimental assessment approach.",
      B: "Systematic manipulation of environmental variables is part of a functional analysis.",
      D: "A functional analysis is an experimental method, not an indirect assessment.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },

  // ── Skill Acquisition ──────────────────────────────────────
  {
    id: "q-skill-001",
    topicSlug: "skill-acquisition",
    subtopic: "prompting",
    difficulty: "easy",
    stem: "What is the primary goal of prompt fading?",
    choices: [
      { id: "A", text: "To increase the learner's dependence on adult assistance" },
      { id: "B", text: "To gradually remove prompts so the learner responds independently" },
      { id: "C", text: "To introduce new prompts over time" },
      { id: "D", text: "To replace verbal prompts with physical prompts" },
    ],
    correctChoiceId: "B",
    explanation:
      "Prompt fading involves systematically reducing the level of assistance provided to the learner so they can eventually perform the skill independently. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Prompt fading aims to decrease, not increase, dependence on assistance.",
      C: "Prompt fading removes existing prompts rather than introducing new ones.",
      D: "Prompt fading does not necessarily involve changing the type of prompt, but rather reducing support.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },
  {
    id: "q-skill-002",
    topicSlug: "skill-acquisition",
    subtopic: "reinforcement",
    difficulty: "medium",
    stem: "A behavior technician provides a sticker after a learner correctly completes a task, and the learner begins completing similar tasks more frequently. The sticker is functioning as a:",
    choices: [
      { id: "A", text: "Negative reinforcer" },
      { id: "B", text: "Positive reinforcer" },
      { id: "C", text: "Positive punisher" },
      { id: "D", text: "Discriminative stimulus" },
    ],
    correctChoiceId: "B",
    explanation:
      "A positive reinforcer is a stimulus that, when added after a behavior, increases the future likelihood of that behavior. The sticker increased task completion, making it a positive reinforcer. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Negative reinforcement involves removing an aversive stimulus to increase behavior, not adding a stimulus.",
      C: "Positive punishment involves adding a stimulus that decreases behavior.",
      D: "A discriminative stimulus signals the availability of reinforcement but does not follow the behavior.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },

  // ── Behavior Reduction ─────────────────────────────────────
  {
    id: "q-behred-001",
    topicSlug: "behavior-reduction",
    subtopic: "antecedent-strategies",
    difficulty: "easy",
    stem: "Which of the following is an example of an antecedent-based intervention?",
    choices: [
      { id: "A", text: "Providing a consequence after the behavior occurs" },
      { id: "B", text: "Modifying the environment before the behavior occurs" },
      { id: "C", text: "Ignoring the behavior when it occurs" },
      { id: "D", text: "Recording data on the behavior" },
    ],
    correctChoiceId: "B",
    explanation:
      "Antecedent-based interventions modify the environment or conditions before a behavior occurs to prevent or reduce the likelihood of challenging behavior. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Providing a consequence is a consequence-based strategy, not antecedent-based.",
      C: "Ignoring a behavior is a form of extinction, which is a consequence-based procedure.",
      D: "Data recording is a measurement activity, not an intervention strategy.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },
  {
    id: "q-behred-002",
    topicSlug: "behavior-reduction",
    subtopic: "extinction",
    difficulty: "hard",
    stem: "During the implementation of an extinction procedure, a temporary increase in the frequency or intensity of the target behavior is called:",
    choices: [
      { id: "A", text: "Spontaneous recovery" },
      { id: "B", text: "Response generalization" },
      { id: "C", text: "An extinction burst" },
      { id: "D", text: "Behavioral contrast" },
    ],
    correctChoiceId: "C",
    explanation:
      "An extinction burst refers to the temporary increase in the frequency, duration, or intensity of a behavior when reinforcement is first withheld. This is a common and expected phenomenon during extinction. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Spontaneous recovery is the reappearance of a previously extinguished behavior after a period of time, not the initial increase.",
      B: "Response generalization involves the spread of treatment effects to other behaviors, not an increase in the target behavior.",
      D: "Behavioral contrast refers to changes in behavior in one context when reinforcement conditions change in another context.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },

  // ── Documentation and Reporting ────────────────────────────
  {
    id: "q-doc-001",
    topicSlug: "documentation-reporting",
    subtopic: "session-notes",
    difficulty: "easy",
    stem: "What is the most important reason for a behavior technician to document session data accurately and promptly?",
    choices: [
      { id: "A", text: "To impress the supervising BCBA" },
      { id: "B", text: "To ensure reliable data for clinical decision-making" },
      { id: "C", text: "To reduce the amount of supervision needed" },
      { id: "D", text: "To fulfill billing requirements only" },
    ],
    correctChoiceId: "B",
    explanation:
      "Accurate and timely documentation ensures that data used for clinical decisions about the client's treatment plan is reliable. This is essential for effective service delivery. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Documentation serves a clinical purpose, not impression management.",
      C: "Documentation requirements are separate from supervision requirements.",
      D: "While billing may require documentation, the primary purpose is clinical decision-making.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },
  {
    id: "q-doc-002",
    topicSlug: "documentation-reporting",
    subtopic: "data-reporting",
    difficulty: "medium",
    stem: "If a behavior technician notices a significant change in a client's behavior during a session, they should:",
    choices: [
      { id: "A", text: "Wait until the next scheduled supervision meeting to report it" },
      { id: "B", text: "Modify the behavior intervention plan independently" },
      { id: "C", text: "Document the change and communicate with the supervisor promptly" },
      { id: "D", text: "Ignore the change as it is likely temporary" },
    ],
    correctChoiceId: "C",
    explanation:
      "Significant behavioral changes should be documented and communicated to the supervising BCBA promptly so that appropriate clinical decisions can be made. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Significant changes may require immediate attention and should not wait for the next scheduled meeting.",
      B: "Behavior technicians should not independently modify intervention plans — this is outside their scope of practice.",
      D: "Ignoring significant changes could compromise client safety and treatment effectiveness.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },

  // ── Professional Conduct ───────────────────────────────────
  {
    id: "q-prof-001",
    topicSlug: "professional-conduct",
    subtopic: "scope-of-practice",
    difficulty: "easy",
    stem: "Which of the following activities is within the scope of practice for a Registered Behavior Technician?",
    choices: [
      { id: "A", text: "Designing a new behavior intervention plan" },
      { id: "B", text: "Conducting a functional analysis independently" },
      { id: "C", text: "Implementing a behavior intervention plan as directed by a supervisor" },
      { id: "D", text: "Providing clinical recommendations to the family" },
    ],
    correctChoiceId: "C",
    explanation:
      "RBTs implement behavior intervention plans under the supervision of a qualified supervisor (such as a BCBA). They do not independently design plans, conduct functional analyses, or make clinical recommendations. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Designing behavior intervention plans is within the scope of a BCBA, not an RBT.",
      B: "Conducting a functional analysis independently is outside the RBT scope of practice.",
      D: "Providing clinical recommendations is the responsibility of the supervising BCBA.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },
  {
    id: "q-prof-002",
    topicSlug: "professional-conduct",
    subtopic: "ethical-conduct",
    difficulty: "medium",
    stem: "A client's family member asks the behavior technician for advice on managing a behavior at home that is not addressed in the current treatment plan. The behavior technician should:",
    choices: [
      { id: "A", text: "Provide advice based on personal experience" },
      { id: "B", text: "Refer the family member to the supervising BCBA" },
      { id: "C", text: "Create a new intervention for the home setting" },
      { id: "D", text: "Tell the family member the behavior is not important" },
    ],
    correctChoiceId: "B",
    explanation:
      "Questions about behaviors not addressed in the current treatment plan should be referred to the supervising BCBA. Providing advice or creating interventions outside the existing plan is beyond the RBT scope of practice. This is a placeholder question for UI testing purposes.",
    whyOthersAreWrong: {
      A: "Providing personal advice on clinical matters is outside the RBT scope of practice.",
      C: "Creating new interventions is the responsibility of the supervising BCBA.",
      D: "Dismissing the family's concerns is unprofessional and unhelpful.",
    },
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
    isOfficialQuestion: false,
  },
];

export function getQuestionsByExamSlug(slug: string): Question[] {
  return questions.filter((q) => q.examSlug === slug);
}

export function getQuestionsByTopicSlug(topicSlug: string): Question[] {
  return questions.filter((q) => q.topicSlug === topicSlug);
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
