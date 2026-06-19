/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Study Guide Data
 *
 * Placeholder study-guide content for each topic area.
 * Sections use plain text (no HTML) — the renderer will
 * handle formatting. Replace with verified content later.
 * ────────────────────────────────────────────────────────────── */

import { StudyGuide } from "@/types";

export const studyGuides: StudyGuide[] = [
  {
    slug: "measurement",
    title: "Measurement in ABA",
    description:
      "Learn about data collection methods, measurement systems, and graphing procedures used in applied behavior analysis practice.",
    estimatedReadTime: "10 min",
    sections: [
      {
        heading: "Overview",
        body: "Measurement is a foundational skill for behavior technicians. Accurate data collection allows supervisors to make informed decisions about treatment plans. This section covers the key measurement concepts you should understand.",
        callout:
          "This study guide contains placeholder content for UI demonstration. Replace with verified educational content before production use.",
      },
      {
        heading: "Key Concepts",
        body: "• Frequency/Rate: Counting the number of times a behavior occurs, often expressed as a rate per unit of time.\n• Duration: Measuring how long a behavior lasts from onset to offset.\n• Latency: Measuring the time between a stimulus (such as an instruction) and the beginning of the behavior.\n• Inter-Response Time (IRT): The time between two consecutive occurrences of a behavior.\n• Partial Interval Recording: Noting whether a behavior occurred at any point during each interval.\n• Whole Interval Recording: Noting whether a behavior occurred throughout the entire interval.\n• Momentary Time Sampling: Checking whether a behavior is occurring at the exact moment an interval ends.",
      },
      {
        heading: "Common Mistakes",
        body: "• Confusing partial interval recording with whole interval recording.\n• Forgetting to record data immediately, leading to inaccurate records.\n• Mixing up latency and inter-response time.\n• Not establishing clear definitions of the target behavior before collecting data.",
      },
      {
        heading: "Practice Tips",
        body: "Practice identifying which measurement method is most appropriate for different scenarios. Think about what aspect of the behavior is most important — how often it occurs, how long it lasts, or how quickly it begins after an instruction.",
      },
    ],
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
  },
  {
    slug: "assessment",
    title: "Assessment Procedures",
    description:
      "Understand preference assessments, functional behavior assessment concepts, and how assessments guide treatment decisions.",
    estimatedReadTime: "12 min",
    sections: [
      {
        heading: "Overview",
        body: "Assessment is the process of gathering information to understand behavior and identify effective reinforcers. RBTs assist with various assessment procedures under the direction of their supervising BCBA.",
        callout:
          "This study guide contains placeholder content for UI demonstration. Replace with verified educational content before production use.",
      },
      {
        heading: "Preference Assessments",
        body: "• Free Operant Observation: Observing the learner interacting with freely available items to identify potential reinforcers.\n• Single Stimulus: Presenting one item at a time and measuring approach or avoidance responses.\n• Paired Stimulus (Forced-Choice): Presenting two items simultaneously and recording which item is selected.\n• Multiple Stimulus With Replacement (MSWR): Presenting an array of items, recording selection, and replacing the chosen item.\n• Multiple Stimulus Without Replacement (MSWO): Presenting an array of items, recording selection, and removing the chosen item from subsequent presentations.",
      },
      {
        heading: "Functional Behavior Assessment",
        body: "Understanding why a behavior occurs (its function) is essential for developing effective interventions. Common functions of behavior include attention, escape/avoidance, access to tangible items, and automatic/sensory reinforcement. RBTs may assist with indirect and descriptive assessments under supervision.",
      },
      {
        heading: "Common Mistakes",
        body: "• Assuming preferences are static — they change over time and should be reassessed regularly.\n• Confusing indirect assessments (interviews, questionnaires) with direct assessments (observation).\n• Attempting to conduct a functional analysis independently, which is outside the RBT scope of practice.",
      },
    ],
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
  },
  {
    slug: "skill-acquisition",
    title: "Skill Acquisition Procedures",
    description:
      "Study prompting strategies, reinforcement procedures, teaching methods, and generalization concepts.",
    estimatedReadTime: "15 min",
    sections: [
      {
        heading: "Overview",
        body: "Skill acquisition is a major component of ABA services. Behavior technicians implement teaching procedures designed by their supervising BCBA to help learners acquire new skills across various domains.",
        callout:
          "This study guide contains placeholder content for UI demonstration. Replace with verified educational content before production use.",
      },
      {
        heading: "Prompting and Prompt Fading",
        body: "• Types of Prompts: Verbal, gestural, model, physical (full and partial), visual, positional.\n• Prompt Hierarchy: Most-to-least and least-to-most prompting strategies.\n• Prompt Fading: Systematically reducing prompts to promote independence.\n• Time Delay: Inserting a brief delay between the instruction and the prompt to give the learner an opportunity to respond independently.",
      },
      {
        heading: "Reinforcement",
        body: "• Positive Reinforcement: Adding a stimulus after a behavior to increase its future occurrence.\n• Negative Reinforcement: Removing an aversive stimulus after a behavior to increase its future occurrence.\n• Reinforcement Schedules: Continuous (CRF) and intermittent (FR, VR, FI, VI) schedules.\n• Shaping: Reinforcing successive approximations toward a target behavior.",
      },
      {
        heading: "Teaching Strategies",
        body: "• Discrete Trial Training (DTT): Structured teaching with clear antecedent, response, and consequence.\n• Natural Environment Teaching (NET): Teaching within the natural context using the learner's motivation.\n• Task Analysis: Breaking complex skills into smaller, teachable steps.\n• Chaining: Forward chaining, backward chaining, and total task chaining.",
      },
      {
        heading: "Generalization and Maintenance",
        body: "• Generalization: The ability to perform a learned skill across different settings, people, materials, or situations.\n• Maintenance: Continuing to perform a skill over time after teaching has ended.\n• Strategies include varying materials, settings, and instructors during teaching.",
      },
    ],
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
  },
  {
    slug: "behavior-reduction",
    title: "Behavior Reduction Strategies",
    description:
      "Learn about antecedent and consequence-based strategies for reducing challenging behaviors.",
    estimatedReadTime: "12 min",
    sections: [
      {
        heading: "Overview",
        body: "Behavior reduction involves strategies to decrease challenging behaviors. RBTs implement these strategies as directed by their supervising BCBA and should never independently develop or modify behavior reduction procedures.",
        callout:
          "This study guide contains placeholder content for UI demonstration. Replace with verified educational content before production use.",
      },
      {
        heading: "Antecedent-Based Strategies",
        body: "• Noncontingent Reinforcement (NCR): Providing reinforcement on a time-based schedule regardless of behavior.\n• Environmental Modifications: Changing the environment to reduce the likelihood of challenging behavior.\n• Establishing Operations/Motivating Operations: Understanding how motivation affects the value of reinforcers.\n• Choice Making: Offering choices to reduce challenging behavior related to escape or control.",
      },
      {
        heading: "Consequence-Based Strategies",
        body: "• Differential Reinforcement: Reinforcing desired behaviors while withholding reinforcement for challenging behaviors (DRA, DRO, DRI, DRL).\n• Extinction: Withholding reinforcement that previously maintained a behavior.\n• Response Cost: Removing a reinforcer contingent on challenging behavior.\n• Note: Punishment procedures require special consideration and careful supervision.",
      },
      {
        heading: "Extinction Procedures",
        body: "• Extinction involves withholding the reinforcement that maintains a behavior.\n• Extinction Burst: A temporary increase in behavior when reinforcement is first withheld — this is expected.\n• Spontaneous Recovery: The reappearance of a previously extinguished behavior after time has passed.\n• Extinction should be used carefully and always under BCBA supervision.",
      },
    ],
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
  },
  {
    slug: "documentation-reporting",
    title: "Documentation and Reporting",
    description:
      "Best practices for session documentation, data reporting, and professional communication.",
    estimatedReadTime: "8 min",
    sections: [
      {
        heading: "Overview",
        body: "Accurate documentation is essential for effective ABA services. Behavior technicians must maintain clear, objective, and timely records of sessions, data, and any significant events.",
        callout:
          "This study guide contains placeholder content for UI demonstration. Replace with verified educational content before production use.",
      },
      {
        heading: "Session Documentation",
        body: "• Record data during or immediately after each session.\n• Use objective, observable language — avoid interpretations or assumptions.\n• Document what occurred, what procedures were implemented, and client responses.\n• Note any deviations from the behavior intervention plan.\n• Record any significant events, incidents, or concerns.",
      },
      {
        heading: "Data Reporting",
        body: "• Communicate data and observations to the supervising BCBA regularly.\n• Report significant changes in behavior promptly.\n• Ensure data accuracy before sharing.\n• Follow organizational policies for data storage and confidentiality.\n• Never fabricate or alter data.",
      },
    ],
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
  },
  {
    slug: "professional-conduct",
    title: "Professional Conduct and Scope of Practice",
    description:
      "Ethical guidelines, professional boundaries, and the RBT role within the supervisory framework.",
    estimatedReadTime: "10 min",
    sections: [
      {
        heading: "Overview",
        body: "Professional conduct is a critical responsibility for every RBT. Understanding your scope of practice, ethical obligations, and supervisory requirements helps ensure quality services and protects both clients and practitioners.",
        callout:
          "This study guide contains placeholder content for UI demonstration. Replace with verified educational content before production use.",
      },
      {
        heading: "Scope of Practice",
        body: "• RBTs implement behavior-analytic services under supervision — they do not design interventions independently.\n• RBTs do not conduct functional analyses, design behavior intervention plans, or provide clinical recommendations independently.\n• RBTs follow the behavior intervention plan as written and consult their supervisor regarding any questions or concerns.\n• The RBT credential requires ongoing supervision to maintain.",
      },
      {
        heading: "Ethical Conduct",
        body: "• Maintain client confidentiality at all times.\n• Maintain professional boundaries with clients and their families.\n• Report concerns about client welfare appropriately.\n• Do not accept gifts that could influence professional judgment.\n• Be honest and accurate in all professional communications.\n• Obtain necessary consents before providing services.",
      },
      {
        heading: "Supervision Requirements",
        body: "• RBTs must receive ongoing supervision from a qualified supervisor (typically a BCBA or BCaBA under BCBA supervision).\n• Supervision requirements include both individual and group formats.\n• Always verify current supervision requirements through official BACB resources, as they may change.\n• Document supervision contacts as required by your organization and certification requirements.",
      },
    ],
    sourceRefs: ["src-internal"],
    lastVerified: "2025-12-01",
    status: "placeholder",
  },
];

export function getStudyGuideBySlug(slug: string): StudyGuide | undefined {
  return studyGuides.find((sg) => sg.slug === slug);
}

export function getAllStudyGuideSlugs(): string[] {
  return studyGuides.map((sg) => sg.slug);
}
