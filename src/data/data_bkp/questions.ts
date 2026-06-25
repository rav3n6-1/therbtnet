/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Original Production Practice Items
 *
 * 160 independently written practice items aligned to the six
 * publicly identified 2026 RBT content areas.
 *
 * These are NOT official, retired, recalled, or BACB-approved items.
 * No official sample question or protected examination wording is used.
 * Content status is "reviewed" pending independent qualified-SME sign-off.
 * Last internal review: 2026-06-24
 * ────────────────────────────────────────────────────────────── */

import { Question } from "@/types";

export const questions: Question[] = [
  {
    "id": "q-meas-001",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "continuous-measurement",
    "difficulty": "easy",
    "stem": "During a 40-minute session, a learner independently asks for a break 12 times. Which measure is the technician recording when documenting 12 occurrences?",
    "choices": [
      {
        "id": "A",
        "text": "Count"
      },
      {
        "id": "B",
        "text": "Duration"
      },
      {
        "id": "C",
        "text": "Latency"
      },
      {
        "id": "D",
        "text": "Interresponse time"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Count records the number of times a discrete response occurs during the observation period.",
    "whyOthersAreWrong": {
      "B": "Duration measures how long behavior lasts.",
      "C": "Latency measures the delay from a specified event to the start of behavior.",
      "D": "Interresponse time measures the time between successive responses."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-002",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "continuous-measurement",
    "difficulty": "medium",
    "stem": "A client completes 18 sorting responses during a 30-minute teaching period. What is the response rate per hour?",
    "choices": [
      {
        "id": "A",
        "text": "9 per hour"
      },
      {
        "id": "B",
        "text": "36 per hour"
      },
      {
        "id": "C",
        "text": "18 per hour"
      },
      {
        "id": "D",
        "text": "54 per hour"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Thirty minutes is one-half hour, so 18 responses divided by 0.5 hour equals 36 responses per hour.",
    "whyOthersAreWrong": {
      "A": "Nine per hour would incorrectly divide the count by two.",
      "C": "Eighteen is the raw count, not the hourly rate.",
      "D": "Fifty-four does not follow from converting 30 minutes to one hour."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-003",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "continuous-measurement",
    "difficulty": "easy",
    "stem": "A technician starts a timer when a crying episode begins and stops it when the crying has been absent for the termination period specified in the plan. What is being measured?",
    "choices": [
      {
        "id": "A",
        "text": "Frequency"
      },
      {
        "id": "B",
        "text": "Latency"
      },
      {
        "id": "C",
        "text": "Duration"
      },
      {
        "id": "D",
        "text": "Permanent product"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Duration is the elapsed time from the defined start of an episode to its defined end.",
    "whyOthersAreWrong": {
      "A": "Frequency counts episodes but does not measure their length.",
      "B": "Latency is the delay before behavior starts.",
      "D": "Permanent-product measurement examines an observable result left by behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-004",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "continuous-measurement",
    "difficulty": "easy",
    "stem": "After the instruction “put your shoes away,” the technician records the number of seconds until the learner begins moving toward the shoe rack. Which measure is this?",
    "choices": [
      {
        "id": "A",
        "text": "Rate"
      },
      {
        "id": "B",
        "text": "Duration"
      },
      {
        "id": "C",
        "text": "Whole-interval recording"
      },
      {
        "id": "D",
        "text": "Latency"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Latency measures the time between a specified antecedent, such as an instruction, and the onset of the response.",
    "whyOthersAreWrong": {
      "A": "Rate expresses count per unit of time.",
      "B": "Duration measures how long the response lasts after it begins.",
      "C": "Whole-interval recording asks whether behavior occurred throughout an interval."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-005",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "continuous-measurement",
    "difficulty": "medium",
    "stem": "A learner taps the desk, pauses, and taps again. The technician records the seconds from the end of the first tap to the beginning of the next tap. What measure is used?",
    "choices": [
      {
        "id": "A",
        "text": "Interresponse time"
      },
      {
        "id": "B",
        "text": "Latency"
      },
      {
        "id": "C",
        "text": "Duration"
      },
      {
        "id": "D",
        "text": "Trials to criterion"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Interresponse time is the elapsed time between two successive occurrences of a response.",
    "whyOthersAreWrong": {
      "B": "Latency begins with a specified antecedent, not the preceding response.",
      "C": "Duration measures the length of one occurrence.",
      "D": "Trials to criterion counts learning opportunities needed to reach a performance standard."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-006",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "continuous-measurement",
    "difficulty": "medium",
    "stem": "A learner follows 16 of 20 one-step instructions independently. What percentage of opportunities was correct?",
    "choices": [
      {
        "id": "A",
        "text": "64%"
      },
      {
        "id": "B",
        "text": "80%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "125%"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "The percentage is 16 divided by 20, multiplied by 100, which equals 80%.",
    "whyOthersAreWrong": {
      "A": "Sixty-four percent results from an incorrect calculation.",
      "C": "Seventy-five percent would equal 15 correct responses out of 20.",
      "D": "A percentage above 100 is not possible for 16 successes in 20 opportunities."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-007",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "continuous-measurement",
    "difficulty": "hard",
    "stem": "A skill criterion is three consecutive sessions at 90% or higher. Performance is 85%, 95%, 90%, 80%, 92%, 94%, and 96%. On which session is criterion first met?",
    "choices": [
      {
        "id": "A",
        "text": "Session 3"
      },
      {
        "id": "B",
        "text": "Session 5"
      },
      {
        "id": "C",
        "text": "Session 7"
      },
      {
        "id": "D",
        "text": "Session 6"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Only sessions 5, 6, and 7 form three consecutive sessions at or above 90%, so criterion is first met at session 7.",
    "whyOthersAreWrong": {
      "A": "Sessions 1 through 3 include 85%, which is below criterion.",
      "B": "At session 5 there is only one qualifying session in the new sequence.",
      "D": "At session 6 there are only two consecutive qualifying sessions."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-008",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "permanent-product",
    "difficulty": "easy",
    "stem": "To measure room-cleaning completion, the technician counts how many assigned items are in their labeled storage locations after the routine ends. This is an example of:",
    "choices": [
      {
        "id": "A",
        "text": "Momentary time sampling"
      },
      {
        "id": "B",
        "text": "Latency recording"
      },
      {
        "id": "C",
        "text": "Partial-interval recording"
      },
      {
        "id": "D",
        "text": "Permanent-product measurement"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Permanent-product measurement evaluates an observable environmental result produced by behavior after the behavior has occurred.",
    "whyOthersAreWrong": {
      "A": "Momentary time sampling observes behavior at selected instants.",
      "B": "Latency measures time to response onset.",
      "C": "Partial-interval recording notes whether behavior occurred at any point in an interval."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-009",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "discontinuous-measurement",
    "difficulty": "easy",
    "stem": "A 20-minute observation is divided into 1-minute intervals. The technician marks an interval if humming occurs at any time during that minute. Which method is this?",
    "choices": [
      {
        "id": "A",
        "text": "Partial-interval recording"
      },
      {
        "id": "B",
        "text": "Whole-interval recording"
      },
      {
        "id": "C",
        "text": "Momentary time sampling"
      },
      {
        "id": "D",
        "text": "Event recording"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Partial-interval recording scores an interval when the behavior occurs at least once during any part of that interval.",
    "whyOthersAreWrong": {
      "B": "Whole-interval recording requires behavior throughout the entire interval.",
      "C": "Momentary time sampling checks only at the designated observation moment.",
      "D": "Event recording counts each occurrence rather than scoring intervals."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-010",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "discontinuous-measurement",
    "difficulty": "medium",
    "stem": "A teacher wants an estimate of sustained on-task behavior. The observer scores an interval only when the student remains on task for the entire interval. Which method is being used?",
    "choices": [
      {
        "id": "A",
        "text": "Partial interval"
      },
      {
        "id": "B",
        "text": "Whole interval"
      },
      {
        "id": "C",
        "text": "Momentary time sampling"
      },
      {
        "id": "D",
        "text": "Frequency"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Whole-interval recording requires the target behavior to occur throughout the complete interval.",
    "whyOthersAreWrong": {
      "A": "Partial interval requires occurrence during any portion of the interval.",
      "C": "Momentary time sampling checks behavior only at a specific instant.",
      "D": "Frequency counts discrete responses rather than sustained behavior across intervals."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-011",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "discontinuous-measurement",
    "difficulty": "easy",
    "stem": "At the end of every 2-minute interval, the technician looks up and records whether the learner is seated at that exact moment. Which method is this?",
    "choices": [
      {
        "id": "A",
        "text": "Whole-interval recording"
      },
      {
        "id": "B",
        "text": "Duration recording"
      },
      {
        "id": "C",
        "text": "Momentary time sampling"
      },
      {
        "id": "D",
        "text": "Permanent product"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Momentary time sampling records whether behavior is occurring at the designated instant, commonly the end of each interval.",
    "whyOthersAreWrong": {
      "A": "Whole-interval recording requires observation across the full interval.",
      "B": "Duration uses elapsed time from behavior onset to offset.",
      "D": "Permanent product measures a result left after behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-012",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "discontinuous-measurement",
    "difficulty": "hard",
    "stem": "Which statement best describes a common measurement bias of partial-interval recording?",
    "choices": [
      {
        "id": "A",
        "text": "It may underestimate how often brief behavior occurs."
      },
      {
        "id": "B",
        "text": "It always produces the same value as duration recording."
      },
      {
        "id": "C",
        "text": "It cannot be used with repeated behavior."
      },
      {
        "id": "D",
        "text": "It may overestimate the proportion of time behavior occurs."
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Because any occurrence causes the entire interval to be scored, partial-interval recording can overestimate the proportion of observation time occupied by behavior.",
    "whyOthersAreWrong": {
      "A": "Partial interval is more likely to overestimate occurrence across time than to miss every brief event.",
      "B": "Interval scores and measured duration need not be equal.",
      "C": "The method is often used with behavior that can recur within intervals."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-013",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "discontinuous-measurement",
    "difficulty": "hard",
    "stem": "Which statement best describes a common measurement bias of whole-interval recording?",
    "choices": [
      {
        "id": "A",
        "text": "It may underestimate the proportion of time behavior occurs."
      },
      {
        "id": "B",
        "text": "It always overestimates high-rate behavior."
      },
      {
        "id": "C",
        "text": "It records every response exactly."
      },
      {
        "id": "D",
        "text": "It measures latency rather than occurrence."
      }
    ],
    "correctChoiceId": "A",
    "explanation": "An interval is scored only when behavior lasts for the full interval, so whole-interval recording can underestimate the actual proportion of time behavior occurs.",
    "whyOthersAreWrong": {
      "B": "The usual concern is underestimation of occurrence across time.",
      "C": "It produces interval estimates rather than an exact count of every response.",
      "D": "Latency is a separate continuous measure."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-014",
    "examSlug": "mock-exam",
    "topicSlug": "measurement",
    "subtopic": "data-quality",
    "difficulty": "medium",
    "stem": "Two observers independently collect data during the same session so their records can be compared. The main purpose is to evaluate:",
    "choices": [
      {
        "id": "A",
        "text": "Treatment integrity"
      },
      {
        "id": "B",
        "text": "Interobserver agreement"
      },
      {
        "id": "C",
        "text": "Social validity"
      },
      {
        "id": "D",
        "text": "Preference stability"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Interobserver agreement assesses the extent to which independent observers record the same events consistently.",
    "whyOthersAreWrong": {
      "A": "Treatment integrity evaluates whether procedures were implemented as written.",
      "C": "Social validity concerns the importance and acceptability of goals and procedures.",
      "D": "Preference stability concerns whether selected items remain preferred over time."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-015",
    "examSlug": "practice-test-1",
    "topicSlug": "measurement",
    "subtopic": "data-quality",
    "difficulty": "hard",
    "stem": "Observer 1 records 24 responses and Observer 2 records 20 responses. Using total-count agreement, what is the agreement percentage?",
    "choices": [
      {
        "id": "A",
        "text": "20%"
      },
      {
        "id": "B",
        "text": "120%"
      },
      {
        "id": "C",
        "text": "83.3%"
      },
      {
        "id": "D",
        "text": "96%"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Total-count agreement is the smaller count divided by the larger count, multiplied by 100: 20 ÷ 24 × 100 = 83.3%.",
    "whyOthersAreWrong": {
      "A": "Twenty percent is not obtained by the total-count formula.",
      "B": "Agreement is not calculated by dividing the larger count by the smaller count.",
      "D": "Ninety-six percent does not match the recorded totals."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-016",
    "examSlug": "practice-test-1",
    "topicSlug": "measurement",
    "subtopic": "operational-definitions",
    "difficulty": "medium",
    "stem": "Which target definition is most observable and measurable?",
    "choices": [
      {
        "id": "A",
        "text": "“Acts disrespectfully”"
      },
      {
        "id": "B",
        "text": "“Has a bad attitude”"
      },
      {
        "id": "C",
        "text": "“Rolls eyes whenever annoyed”"
      },
      {
        "id": "D",
        "text": "“Says ‘no,’ turns the head away, or pushes the material more than 10 cm within 10 seconds of an instruction”"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "The final definition specifies observable actions, a measurable displacement, and a time boundary that different observers can apply.",
    "whyOthersAreWrong": {
      "A": "“Disrespectfully” requires subjective judgment.",
      "B": "“Bad attitude” is an inferred state rather than an observable response.",
      "C": "“Annoyed” is inferred and “rolls eyes” lacks clear boundaries."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-017",
    "examSlug": "practice-test-1",
    "topicSlug": "measurement",
    "subtopic": "graphing",
    "difficulty": "easy",
    "stem": "On a standard line graph, where is time or session number usually displayed?",
    "choices": [
      {
        "id": "A",
        "text": "On the horizontal axis"
      },
      {
        "id": "B",
        "text": "On the vertical axis"
      },
      {
        "id": "C",
        "text": "Inside the legend only"
      },
      {
        "id": "D",
        "text": "As the graph title"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "The horizontal, or x-axis, commonly represents the passage of time, sessions, days, or observation periods.",
    "whyOthersAreWrong": {
      "B": "The vertical axis usually displays the measured dimension of behavior.",
      "C": "A legend identifies data series or conditions but does not replace an axis.",
      "D": "The title describes the graph but does not display sequential observations."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-018",
    "examSlug": "practice-test-1",
    "topicSlug": "measurement",
    "subtopic": "graphing",
    "difficulty": "easy",
    "stem": "What does the vertical axis on a behavior graph typically represent?",
    "choices": [
      {
        "id": "A",
        "text": "The observer’s name"
      },
      {
        "id": "B",
        "text": "The measured value of the target behavior"
      },
      {
        "id": "C",
        "text": "The order of treatment conditions only"
      },
      {
        "id": "D",
        "text": "The date the plan was written"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "The vertical, or y-axis, displays the measured dimension, such as count, rate, duration, or percentage.",
    "whyOthersAreWrong": {
      "A": "Observer identity belongs in records, not as the standard response axis.",
      "C": "Conditions are typically labeled across phases rather than serving as the measured-value axis.",
      "D": "Plan dates are documentation details, not the dependent variable."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-019",
    "examSlug": "practice-test-2",
    "topicSlug": "measurement",
    "subtopic": "graphing",
    "difficulty": "medium",
    "stem": "A data path rises steadily across six sessions. Which visual feature is most directly described?",
    "choices": [
      {
        "id": "A",
        "text": "Level"
      },
      {
        "id": "B",
        "text": "Variability"
      },
      {
        "id": "C",
        "text": "Trend"
      },
      {
        "id": "D",
        "text": "Latency"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Trend is the overall direction of the data path over time, such as increasing, decreasing, or stable.",
    "whyOthersAreWrong": {
      "A": "Level refers to the general magnitude or position of data.",
      "B": "Variability refers to the spread or fluctuation of data points.",
      "D": "Latency is a response measure, not a visual-analysis feature."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-020",
    "examSlug": "practice-test-2",
    "topicSlug": "measurement",
    "subtopic": "graphing",
    "difficulty": "medium",
    "stem": "Data points alternate sharply between low and high values with no consistent direction. Which feature is most evident?",
    "choices": [
      {
        "id": "A",
        "text": "Stable level"
      },
      {
        "id": "B",
        "text": "Decreasing trend"
      },
      {
        "id": "C",
        "text": "Perfect treatment integrity"
      },
      {
        "id": "D",
        "text": "High variability"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Large session-to-session fluctuations indicate high variability.",
    "whyOthersAreWrong": {
      "A": "A stable level would show relatively little fluctuation.",
      "B": "The pattern has no consistent downward direction.",
      "C": "A behavior graph alone does not establish whether procedures were implemented correctly."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-021",
    "examSlug": "practice-test-2",
    "topicSlug": "measurement",
    "subtopic": "graphing",
    "difficulty": "medium",
    "stem": "A vertical line is placed between baseline sessions and sessions in which a teaching procedure begins. What does the line communicate?",
    "choices": [
      {
        "id": "A",
        "text": "A change in conditions"
      },
      {
        "id": "B",
        "text": "A calculation error"
      },
      {
        "id": "C",
        "text": "A missing data point"
      },
      {
        "id": "D",
        "text": "A change in the behavior’s definition automatically"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "A condition-change line marks where a meaningful change in the observation or intervention condition occurred.",
    "whyOthersAreWrong": {
      "B": "Calculation errors should be corrected in the record rather than represented as a phase line.",
      "C": "Missing observations are handled as missing data, not as condition changes.",
      "D": "A definition change may justify a condition note, but the line does not automatically mean the definition changed."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-022",
    "examSlug": "practice-test-3",
    "topicSlug": "measurement",
    "subtopic": "graphing",
    "difficulty": "hard",
    "stem": "A technician realizes that one data point was entered as 42 when the paper record shows 24. What is the best action?",
    "choices": [
      {
        "id": "A",
        "text": "Delete the entire graph and recreate it from memory"
      },
      {
        "id": "B",
        "text": "Correct the entry according to agency procedure and preserve an audit trail when required"
      },
      {
        "id": "C",
        "text": "Leave the error because graphs may not be changed"
      },
      {
        "id": "D",
        "text": "Change nearby points so the pattern appears consistent"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Data-entry errors should be corrected promptly using the organization’s approved correction process, with transparency and an audit trail when applicable.",
    "whyOthersAreWrong": {
      "A": "Reconstructing from memory risks additional inaccuracies.",
      "C": "Known errors should not remain uncorrected merely because the graph was already created.",
      "D": "Changing accurate data to improve appearance is falsification."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-023",
    "examSlug": "practice-test-3",
    "topicSlug": "measurement",
    "subtopic": "sampling-selection",
    "difficulty": "hard",
    "stem": "A behavior has a clear beginning and end, occurs about four times per session, and every occurrence can be observed. Which measure would usually provide the most direct record of occurrence?",
    "choices": [
      {
        "id": "A",
        "text": "Momentary time sampling"
      },
      {
        "id": "B",
        "text": "Whole-interval recording"
      },
      {
        "id": "C",
        "text": "Frequency recording"
      },
      {
        "id": "D",
        "text": "Partial-interval recording"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "When discrete occurrences are observable and manageable to count, frequency provides a direct measure of each event.",
    "whyOthersAreWrong": {
      "A": "Momentary time sampling gives an estimate based on selected instants.",
      "B": "Whole interval estimates sustained occurrence across intervals.",
      "D": "Partial interval estimates whether behavior occurred within intervals."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-024",
    "examSlug": "practice-test-3",
    "topicSlug": "measurement",
    "subtopic": "sampling-selection",
    "difficulty": "hard",
    "stem": "A technician cannot continuously watch a long classroom period but can briefly observe at scheduled moments. Which system is most practical for estimating whether a student is engaged at those moments?",
    "choices": [
      {
        "id": "A",
        "text": "Duration recording"
      },
      {
        "id": "B",
        "text": "Latency recording"
      },
      {
        "id": "C",
        "text": "Permanent-product recording"
      },
      {
        "id": "D",
        "text": "Momentary time sampling"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Momentary time sampling permits brief observations at predetermined moments rather than continuous observation.",
    "whyOthersAreWrong": {
      "A": "Duration requires observing onset and offset across episodes.",
      "B": "Latency requires timing from a specified event to response onset.",
      "C": "Permanent product requires a lasting outcome that can be counted afterward."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-025",
    "examSlug": "practice-test-3",
    "topicSlug": "measurement",
    "subtopic": "data-display",
    "difficulty": "medium",
    "stem": "A technician must record the percentage of independent responses immediately after each teaching session. Which action best supports accurate graphing?",
    "choices": [
      {
        "id": "A",
        "text": "Calculate from the session record and enter it using the established graphing procedure"
      },
      {
        "id": "B",
        "text": "Estimate the percentage later from memory"
      },
      {
        "id": "C",
        "text": "Round every value to the nearest 25%"
      },
      {
        "id": "D",
        "text": "Record only sessions with improvement"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "The technician should calculate from the original data and enter all required values according to the established procedure.",
    "whyOthersAreWrong": {
      "B": "Memory-based estimates reduce accuracy.",
      "C": "Unrequired coarse rounding can distort the data.",
      "D": "Omitting poorer sessions creates a misleading record."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-026",
    "examSlug": "practice-test-3",
    "topicSlug": "measurement",
    "subtopic": "data-quality",
    "difficulty": "hard",
    "stem": "A technician records the target behavior accurately but delivers programmed prompts inconsistently. Which two dimensions should be evaluated separately?",
    "choices": [
      {
        "id": "A",
        "text": "Preference and latency"
      },
      {
        "id": "B",
        "text": "Measurement accuracy and procedural fidelity"
      },
      {
        "id": "C",
        "text": "Rate and permanent product"
      },
      {
        "id": "D",
        "text": "Social validity and response effort"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Accurate measurement concerns whether behavior was recorded correctly; procedural fidelity concerns whether the intervention was implemented as written.",
    "whyOthersAreWrong": {
      "A": "Preference and latency do not describe the two problems.",
      "C": "Rate and permanent product are measurement systems, not implementation quality dimensions.",
      "D": "Social validity and response effort address different questions."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-001",
    "examSlug": "mock-exam",
    "topicSlug": "assessment",
    "subtopic": "preference-assessments",
    "difficulty": "easy",
    "stem": "A technician places six leisure items on a table, allows the learner to choose one, removes the selected item, rearranges the remaining items, and presents the smaller array again. Which assessment format is this?",
    "choices": [
      {
        "id": "A",
        "text": "Single-stimulus"
      },
      {
        "id": "B",
        "text": "Paired-stimulus"
      },
      {
        "id": "C",
        "text": "Multiple-stimulus without replacement"
      },
      {
        "id": "D",
        "text": "Free-operant"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "In a multiple-stimulus-without-replacement assessment, several items are presented together and each selected item is removed from later trials.",
    "whyOthersAreWrong": {
      "A": "Single-stimulus assessment presents one item at a time.",
      "B": "Paired-stimulus assessment presents two items per trial.",
      "D": "Free-operant assessment allows unrestricted interaction rather than repeated array trials."
    },
    "sourceRefs": [
      "src-preference-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-002",
    "examSlug": "mock-exam",
    "topicSlug": "assessment",
    "subtopic": "preference-assessments",
    "difficulty": "easy",
    "stem": "A technician presents one item at a time and records whether the learner approaches, rejects, or ignores it. Which preference assessment is described?",
    "choices": [
      {
        "id": "A",
        "text": "Paired-stimulus"
      },
      {
        "id": "B",
        "text": "Multiple-stimulus without replacement"
      },
      {
        "id": "C",
        "text": "Functional analysis"
      },
      {
        "id": "D",
        "text": "Single-stimulus"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "A single-stimulus preference assessment presents one item per trial and records approach or engagement.",
    "whyOthersAreWrong": {
      "A": "Paired-stimulus assessment presents two items together.",
      "B": "Multiple-stimulus assessment presents an array.",
      "C": "A functional analysis tests variables related to problem behavior, not preference."
    },
    "sourceRefs": [
      "src-preference-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-003",
    "examSlug": "mock-exam",
    "topicSlug": "assessment",
    "subtopic": "preference-assessments",
    "difficulty": "medium",
    "stem": "During a paired-stimulus preference assessment, what should the technician generally do after the learner selects an item?",
    "choices": [
      {
        "id": "A",
        "text": "Provide brief access as specified, record the selection, and continue the planned pairings"
      },
      {
        "id": "B",
        "text": "Declare the item a permanent reinforcer and stop the assessment"
      },
      {
        "id": "C",
        "text": "Offer both items at once for the rest of the session"
      },
      {
        "id": "D",
        "text": "Change the scoring rule based on which item the technician prefers"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "The technician follows the assessment protocol: provide the specified access, record the choice, and complete the planned comparisons.",
    "whyOthersAreWrong": {
      "B": "A preference assessment does not by itself prove that an item will function as a reinforcer in every context.",
      "C": "Changing the format mid-assessment reduces consistency.",
      "D": "Scoring must follow the protocol rather than personal preference."
    },
    "sourceRefs": [
      "src-preference-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-004",
    "examSlug": "mock-exam",
    "topicSlug": "assessment",
    "subtopic": "preference-assessments",
    "difficulty": "medium",
    "stem": "Why should preferred items be reassessed rather than assumed to remain constant?",
    "choices": [
      {
        "id": "A",
        "text": "A preferred item always stops working after one use"
      },
      {
        "id": "B",
        "text": "Preferences can shift across time, settings, and motivating conditions"
      },
      {
        "id": "C",
        "text": "Reassessment converts every preferred item into a reinforcer"
      },
      {
        "id": "D",
        "text": "Preference assessments are required before every response"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Preference is dynamic; recent access, deprivation, illness, context, and other variables can change what a person selects.",
    "whyOthersAreWrong": {
      "A": "Preferred items do not automatically lose value after one use.",
      "C": "Preference and reinforcer effectiveness are related but not identical.",
      "D": "Assessment frequency should follow the plan and clinical need, not occur before every response."
    },
    "sourceRefs": [
      "src-preference-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-005",
    "examSlug": "mock-exam",
    "topicSlug": "assessment",
    "subtopic": "preference-assessments",
    "difficulty": "hard",
    "stem": "An item is selected most often in a preference assessment, but providing it after correct responses does not increase responding. What is the best conclusion?",
    "choices": [
      {
        "id": "A",
        "text": "The assessment was necessarily conducted incorrectly"
      },
      {
        "id": "B",
        "text": "The learner has no preferences"
      },
      {
        "id": "C",
        "text": "The item was preferred but did not function as a reinforcer under those conditions"
      },
      {
        "id": "D",
        "text": "The response definition must be changed"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Selection indicates relative preference; reinforcement is demonstrated only when a consequence increases future responding under specified conditions.",
    "whyOthersAreWrong": {
      "A": "A valid preference result can still fail to predict reinforcer effectiveness in a particular arrangement.",
      "B": "The learner’s selection pattern shows a preference, even if the item did not strengthen the target response.",
      "D": "A lack of reinforcement effect does not automatically invalidate the response definition."
    },
    "sourceRefs": [
      "src-preference-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-006",
    "examSlug": "mock-exam",
    "topicSlug": "assessment",
    "subtopic": "descriptive-assessment",
    "difficulty": "easy",
    "stem": "The technician records what happened immediately before a behavior, the behavior itself, and what happened immediately afterward. What type of record is this?",
    "choices": [
      {
        "id": "A",
        "text": "Scatterplot"
      },
      {
        "id": "B",
        "text": "Task analysis"
      },
      {
        "id": "C",
        "text": "Preference hierarchy"
      },
      {
        "id": "D",
        "text": "ABC recording"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "ABC recording documents antecedents, the observable behavior, and immediate consequences in sequence.",
    "whyOthersAreWrong": {
      "A": "A scatterplot summarizes when behavior occurs across time blocks.",
      "B": "A task analysis breaks a skill into teachable steps.",
      "C": "A preference hierarchy ranks selected items."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-007",
    "examSlug": "mock-exam",
    "topicSlug": "assessment",
    "subtopic": "descriptive-assessment",
    "difficulty": "medium",
    "stem": "During ABC recording, which entry is the most objective description of behavior?",
    "choices": [
      {
        "id": "A",
        "text": "“Pushed the worksheet off the desk and said ‘no’”"
      },
      {
        "id": "B",
        "text": "“Became frustrated”"
      },
      {
        "id": "C",
        "text": "“Was trying to escape”"
      },
      {
        "id": "D",
        "text": "“Acted manipulative”"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "The third entry describes observable actions and speech without inferring emotion or purpose.",
    "whyOthersAreWrong": {
      "B": "“Frustrated” is an inferred internal state.",
      "C": "“Trying to escape” states a hypothesized function rather than the observed response.",
      "D": "“Manipulative” is judgmental and not operationally defined."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-008",
    "examSlug": "mock-exam",
    "topicSlug": "assessment",
    "subtopic": "descriptive-assessment",
    "difficulty": "medium",
    "stem": "A scatterplot shows that a target behavior occurs most often during the final 15 minutes before lunch. What can the technician appropriately report?",
    "choices": [
      {
        "id": "A",
        "text": "The confirmed function of the behavior"
      },
      {
        "id": "B",
        "text": "The time pattern observed in the data"
      },
      {
        "id": "C",
        "text": "A new intervention that should replace the plan"
      },
      {
        "id": "D",
        "text": "That hunger is definitely the cause"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "The technician may report the observed temporal pattern while avoiding causal claims that the data do not establish.",
    "whyOthersAreWrong": {
      "A": "A scatterplot alone does not confirm behavioral function.",
      "C": "RBTs do not independently redesign intervention plans.",
      "D": "The timing may suggest questions for assessment but does not prove hunger caused the behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-009",
    "examSlug": "mock-exam",
    "topicSlug": "assessment",
    "subtopic": "functional-assessment-assistance",
    "difficulty": "medium",
    "stem": "A supervisor asks the technician to collect data during several test and control conditions of a functional analysis. What is the technician’s appropriate role?",
    "choices": [
      {
        "id": "A",
        "text": "Design new conditions independently"
      },
      {
        "id": "B",
        "text": "Interpret the results for the family without supervision"
      },
      {
        "id": "C",
        "text": "Implement assigned procedures precisely, collect data, and report concerns"
      },
      {
        "id": "D",
        "text": "Stop any condition that produces behavior without following the safety plan"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "The technician may assist by implementing trained procedures and collecting data under supervision while following safety and communication protocols.",
    "whyOthersAreWrong": {
      "A": "Condition design and clinical decision-making belong to the qualified supervisor.",
      "B": "Independent interpretation and recommendations are outside the RBT role.",
      "D": "Safety concerns should be handled according to the approved plan and supervisor direction, not by improvisation."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-010",
    "examSlug": "practice-test-1",
    "topicSlug": "assessment",
    "subtopic": "functional-assessment-assistance",
    "difficulty": "hard",
    "stem": "During an assessment session, a condition is labeled “attention.” Which consequence would most clearly match that test condition when the target behavior occurs, assuming the supervisor’s protocol specifies it?",
    "choices": [
      {
        "id": "A",
        "text": "Removal of a difficult task"
      },
      {
        "id": "B",
        "text": "Access to a preferred object"
      },
      {
        "id": "C",
        "text": "No programmed social consequence"
      },
      {
        "id": "D",
        "text": "Brief social attention"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "An attention test condition arranges attention contingent on the target behavior so its effect can be compared with control conditions.",
    "whyOthersAreWrong": {
      "A": "Task removal tests sensitivity to escape from demands.",
      "B": "Access to an item tests a tangible consequence.",
      "C": "No programmed social consequence is more consistent with an alone or ignore arrangement, depending on the protocol."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-011",
    "examSlug": "practice-test-1",
    "topicSlug": "assessment",
    "subtopic": "functional-assessment-assistance",
    "difficulty": "hard",
    "stem": "Why is a control condition included in a functional analysis?",
    "choices": [
      {
        "id": "A",
        "text": "To provide a comparison condition with relevant needs often available and little programmed reinforcement for the target behavior"
      },
      {
        "id": "B",
        "text": "To guarantee that no behavior occurs"
      },
      {
        "id": "C",
        "text": "To punish the target behavior"
      },
      {
        "id": "D",
        "text": "To replace direct observation with interviews"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "A control condition provides a comparison against test conditions and typically minimizes relevant establishing operations while arranging noncontingent access to attention, preferred materials, or breaks as specified.",
    "whyOthersAreWrong": {
      "B": "Behavior may still occur in a control condition.",
      "C": "The purpose is experimental comparison, not punishment.",
      "D": "Functional analysis is a direct experimental assessment rather than a substitute for all other assessment methods."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-012",
    "examSlug": "practice-test-1",
    "topicSlug": "assessment",
    "subtopic": "skill-assessment-assistance",
    "difficulty": "easy",
    "stem": "A supervisor gives the technician a checklist of communication skills to probe exactly as written. What should the technician do first?",
    "choices": [
      {
        "id": "A",
        "text": "Change difficult items to make the learner score higher"
      },
      {
        "id": "B",
        "text": "Review the protocol, materials, response definitions, and prompting rules before beginning"
      },
      {
        "id": "C",
        "text": "Teach every item before assessing it"
      },
      {
        "id": "D",
        "text": "Skip data collection until the end of the week"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Accurate assessment assistance requires understanding the standardized instructions, materials, response criteria, prompting rules, and recording method before implementation.",
    "whyOthersAreWrong": {
      "A": "Changing items invalidates the planned assessment.",
      "C": "Teaching during an assessment can alter what is being measured unless the protocol calls for it.",
      "D": "Data should be recorded according to the assessment procedure, not reconstructed later."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-013",
    "examSlug": "practice-test-2",
    "topicSlug": "assessment",
    "subtopic": "skill-assessment-assistance",
    "difficulty": "medium",
    "stem": "During a skill probe, the learner gives a response that is close to correct but does not meet the written criterion. What should the technician record?",
    "choices": [
      {
        "id": "A",
        "text": "Correct, because effort matters"
      },
      {
        "id": "B",
        "text": "Correct if the caregiver is watching"
      },
      {
        "id": "C",
        "text": "Incorrect or the protocol’s specified code, while noting relevant observations objectively"
      },
      {
        "id": "D",
        "text": "Omit the trial"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "The technician applies the pre-established scoring rule consistently and may add an objective note if the protocol permits.",
    "whyOthersAreWrong": {
      "A": "Effort may be acknowledged separately but does not change the scoring criterion.",
      "B": "Scoring must not depend on who is present.",
      "D": "Omitting a completed trial creates missing and potentially biased data."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-014",
    "examSlug": "practice-test-2",
    "topicSlug": "assessment",
    "subtopic": "assessment-integrity",
    "difficulty": "hard",
    "stem": "A technician accidentally gives extra prompts on several no-prompt assessment trials. What is the best response?",
    "choices": [
      {
        "id": "A",
        "text": "Score all responses as independent"
      },
      {
        "id": "B",
        "text": "Hide the error and repeat only low-scoring trials"
      },
      {
        "id": "C",
        "text": "Change the protocol for future sessions without approval"
      },
      {
        "id": "D",
        "text": "Report the deviation, document affected trials, and follow supervisor direction about whether they remain usable"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Assessment deviations should be disclosed promptly so the supervisor can judge data validity and determine corrective action.",
    "whyOthersAreWrong": {
      "A": "Prompted responses cannot be relabeled as independent.",
      "B": "Concealing errors and selectively repeating trials compromises integrity.",
      "C": "Protocol changes require supervisory authorization."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-015",
    "examSlug": "practice-test-3",
    "topicSlug": "assessment",
    "subtopic": "assessment-interpretation",
    "difficulty": "medium",
    "stem": "ABC data show that challenging behavior is often followed by adults talking to the learner. Which statement is most appropriate for the technician?",
    "choices": [
      {
        "id": "A",
        "text": "The pattern suggests attention may be relevant and should be reviewed by the supervisor"
      },
      {
        "id": "B",
        "text": "Attention is proven to be the function"
      },
      {
        "id": "C",
        "text": "Adults must stop speaking to the learner immediately"
      },
      {
        "id": "D",
        "text": "The behavior is intentional"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Descriptive patterns can generate hypotheses, but they do not prove function; the technician should report the pattern to the supervisor.",
    "whyOthersAreWrong": {
      "B": "Correlation in descriptive data is not experimental confirmation.",
      "C": "Intervention changes should not be made independently from a descriptive pattern.",
      "D": "Intent is not established by ABC data."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-016",
    "examSlug": "practice-test-3",
    "topicSlug": "assessment",
    "subtopic": "preference-assessments",
    "difficulty": "hard",
    "stem": "In a free-operant preference assessment, which measure is most useful for comparing activities that are continuously available?",
    "choices": [
      {
        "id": "A",
        "text": "Number of task-analysis steps"
      },
      {
        "id": "B",
        "text": "Time engaged with each activity"
      },
      {
        "id": "C",
        "text": "Latency to a demand"
      },
      {
        "id": "D",
        "text": "Percentage of intervals with problem behavior only"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Free-operant assessments commonly compare allocation of engagement time across simultaneously available activities.",
    "whyOthersAreWrong": {
      "A": "Task-analysis steps measure skill performance, not preference allocation.",
      "C": "Latency to a demand does not rank continuously available activities.",
      "D": "Problem-behavior intervals do not directly measure engagement with each option."
    },
    "sourceRefs": [
      "src-preference-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-001",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "skill-acquisition-plan",
    "difficulty": "easy",
    "stem": "Before beginning a new teaching program, which information should the technician confirm in the written plan?",
    "choices": [
      {
        "id": "A",
        "text": "Only the name of the learner"
      },
      {
        "id": "B",
        "text": "The technician’s preferred teaching style"
      },
      {
        "id": "C",
        "text": "The target response, teaching procedure, prompting strategy, reinforcement arrangement, and data method"
      },
      {
        "id": "D",
        "text": "A promise that every session will produce mastery"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "A usable skill-acquisition plan specifies what to teach, how to teach it, how responses will be prompted and reinforced, and how progress will be measured.",
    "whyOthersAreWrong": {
      "A": "The learner’s name alone is insufficient to implement the program.",
      "B": "Personal preference does not replace the authorized procedure.",
      "D": "No ethical teaching plan can guarantee mastery in every session."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-002",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "reinforcement",
    "difficulty": "easy",
    "stem": "A learner completes a dressing step, receives enthusiastic praise, and later completes the step more often. In this example, praise functioned as:",
    "choices": [
      {
        "id": "A",
        "text": "Negative reinforcement"
      },
      {
        "id": "B",
        "text": "Positive punishment"
      },
      {
        "id": "C",
        "text": "Extinction"
      },
      {
        "id": "D",
        "text": "Positive reinforcement"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Praise was added after the response and the response increased, which defines positive reinforcement.",
    "whyOthersAreWrong": {
      "A": "Negative reinforcement involves removing or postponing a stimulus after behavior.",
      "B": "Punishment decreases future behavior.",
      "C": "Extinction withholds the reinforcer that previously maintained behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-003",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "reinforcement",
    "difficulty": "easy",
    "stem": "A student asks appropriately for a short break. The work materials are removed for two minutes, and appropriate break requests increase. The break functions as:",
    "choices": [
      {
        "id": "A",
        "text": "Negative reinforcement"
      },
      {
        "id": "B",
        "text": "Positive punishment"
      },
      {
        "id": "C",
        "text": "Automatic punishment"
      },
      {
        "id": "D",
        "text": "Extinction"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Removal of the work demand follows the request and increases future requesting, so the request is negatively reinforced.",
    "whyOthersAreWrong": {
      "B": "Positive punishment adds a consequence and decreases behavior.",
      "C": "The example describes a socially mediated consequence, not automatic punishment.",
      "D": "Extinction would withhold the consequence that previously reinforced the response."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-004",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "reinforcement",
    "difficulty": "medium",
    "stem": "Which observation is required before calling a consequence a reinforcer?",
    "choices": [
      {
        "id": "A",
        "text": "The consequence looks enjoyable"
      },
      {
        "id": "B",
        "text": "The behavior it follows increases or is maintained"
      },
      {
        "id": "C",
        "text": "The consequence was recommended by a caregiver"
      },
      {
        "id": "D",
        "text": "The consequence is edible"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "A stimulus is identified as a reinforcer by its demonstrated effect on future behavior, not by appearance or category.",
    "whyOthersAreWrong": {
      "A": "An enjoyable-looking event may not strengthen the target response.",
      "C": "Caregiver input can guide assessment but does not establish behavioral effect.",
      "D": "Edible items are not automatically reinforcers for every person or circumstance."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-005",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "reinforcement-schedules",
    "difficulty": "easy",
    "stem": "A teaching plan directs the technician to reinforce every correct response during initial instruction. Which schedule is this?",
    "choices": [
      {
        "id": "A",
        "text": "Fixed interval"
      },
      {
        "id": "B",
        "text": "Variable ratio"
      },
      {
        "id": "C",
        "text": "Continuous reinforcement"
      },
      {
        "id": "D",
        "text": "Fixed ratio 5"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Continuous reinforcement provides reinforcement after each occurrence of the target response.",
    "whyOthersAreWrong": {
      "A": "A fixed-interval schedule makes reinforcement available after a set time period.",
      "B": "A variable-ratio schedule reinforces after a changing number of responses.",
      "D": "Fixed ratio 5 reinforces after every fifth response."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-006",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "reinforcement-schedules",
    "difficulty": "medium",
    "stem": "Why might a supervisor thin a reinforcement schedule after a skill becomes stable?",
    "choices": [
      {
        "id": "A",
        "text": "To eliminate all positive consequences immediately"
      },
      {
        "id": "B",
        "text": "To make data collection unnecessary"
      },
      {
        "id": "C",
        "text": "To ensure the learner fails occasionally"
      },
      {
        "id": "D",
        "text": "To make reinforcement less predictable or less frequent while maintaining the skill under more natural conditions"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Schedule thinning gradually moves performance from dense teaching reinforcement toward sustainable, naturally occurring reinforcement.",
    "whyOthersAreWrong": {
      "A": "Abruptly removing reinforcement may weaken responding.",
      "B": "Data remain important during schedule changes.",
      "C": "The goal is durable performance, not arranging failure."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-007",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "conditioned-reinforcement",
    "difficulty": "medium",
    "stem": "Tokens initially have little value, but they can be exchanged for several preferred activities. After training, the learner works to earn tokens. The tokens are:",
    "choices": [
      {
        "id": "A",
        "text": "Generalized conditioned reinforcers"
      },
      {
        "id": "B",
        "text": "Unconditioned punishers"
      },
      {
        "id": "C",
        "text": "Establishing operations"
      },
      {
        "id": "D",
        "text": "Prompts"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Tokens acquire reinforcing value through association with multiple backup reinforcers, making them generalized conditioned reinforcers.",
    "whyOthersAreWrong": {
      "B": "They increase work behavior rather than decrease it.",
      "C": "An establishing operation changes the current value of a consequence and related behavior.",
      "D": "A prompt assists a response before or during its occurrence."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-008",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "discrete-trial-teaching",
    "difficulty": "easy",
    "stem": "Which sequence best represents a basic discrete teaching trial?",
    "choices": [
      {
        "id": "A",
        "text": "Consequence, data review, instruction, lunch break"
      },
      {
        "id": "B",
        "text": "Instruction or cue, learner response, consequence, brief pause"
      },
      {
        "id": "C",
        "text": "Prompt fading, graphing, assessment, diagnosis"
      },
      {
        "id": "D",
        "text": "Free play, no cue, no consequence, end session"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "A discrete trial has a clear antecedent or instruction, an opportunity to respond, a programmed consequence, and an intertrial interval.",
    "whyOthersAreWrong": {
      "A": "This sequence does not organize a teaching opportunity.",
      "C": "These are broader clinical activities, not the components of one trial.",
      "D": "A discrete trial includes a planned cue and consequence arrangement."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-009",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "discrete-trial-teaching",
    "difficulty": "medium",
    "stem": "A learner gives an incorrect response during a discrete trial. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Invent a new correction procedure"
      },
      {
        "id": "B",
        "text": "Mark it correct if the learner appears upset"
      },
      {
        "id": "C",
        "text": "Follow the program’s specified error-correction procedure and record the response accurately"
      },
      {
        "id": "D",
        "text": "Repeat the instruction rapidly until the learner guesses correctly"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Error correction must be implemented consistently as written, with accurate data on independent, prompted, and incorrect responses.",
    "whyOthersAreWrong": {
      "A": "Program changes require supervisor authorization.",
      "B": "Emotional state does not change the scoring criterion.",
      "D": "Rapid, unplanned repetition can create prompt dependence and poor instructional control."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-010",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "naturalistic-teaching",
    "difficulty": "easy",
    "stem": "A child reaches for a closed bubble container during play. The technician waits for an appropriate request and then opens the bubbles. This is an example of:",
    "choices": [
      {
        "id": "A",
        "text": "Whole-interval recording"
      },
      {
        "id": "B",
        "text": "Response cost"
      },
      {
        "id": "C",
        "text": "A functional analysis"
      },
      {
        "id": "D",
        "text": "Naturalistic teaching using the learner’s current motivation"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "The teaching opportunity is embedded in play and uses the learner’s immediate interest in bubbles to evoke communication.",
    "whyOthersAreWrong": {
      "A": "Whole-interval recording is a measurement system.",
      "B": "Response cost removes a conditioned reinforcer following behavior.",
      "C": "A functional analysis systematically tests variables maintaining problem behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-011",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "naturalistic-teaching",
    "difficulty": "medium",
    "stem": "What is a key difference between naturalistic teaching and highly structured discrete-trial teaching?",
    "choices": [
      {
        "id": "A",
        "text": "Naturalistic teaching often follows learner motivation and occurs within ongoing activities"
      },
      {
        "id": "B",
        "text": "Naturalistic teaching never uses prompts"
      },
      {
        "id": "C",
        "text": "Discrete-trial teaching never uses reinforcement"
      },
      {
        "id": "D",
        "text": "Naturalistic teaching does not require data"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Naturalistic teaching embeds planned instruction in activities and often captures or arranges motivating events while still using prompts, reinforcement, and data as appropriate.",
    "whyOthersAreWrong": {
      "B": "Prompts may be used and faded in naturalistic teaching.",
      "C": "Reinforcement is central to discrete-trial teaching.",
      "D": "Data collection remains necessary when required by the plan."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-012",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "task-analysis",
    "difficulty": "easy",
    "stem": "What is a task analysis?",
    "choices": [
      {
        "id": "A",
        "text": "A list of preferred items"
      },
      {
        "id": "B",
        "text": "A sequence that breaks a complex skill into observable teachable steps"
      },
      {
        "id": "C",
        "text": "A graph of response rate"
      },
      {
        "id": "D",
        "text": "A hypothesis about behavioral function"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "A task analysis specifies the component responses and order needed to complete a complex skill.",
    "whyOthersAreWrong": {
      "A": "Preferred items are identified through preference assessment.",
      "C": "A rate graph displays measurement data.",
      "D": "A functional hypothesis concerns variables maintaining behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-013",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "chaining",
    "difficulty": "easy",
    "stem": "In forward chaining, which step is typically taught first?",
    "choices": [
      {
        "id": "A",
        "text": "The final step only"
      },
      {
        "id": "B",
        "text": "A randomly selected step each trial"
      },
      {
        "id": "C",
        "text": "The first step of the task sequence"
      },
      {
        "id": "D",
        "text": "Every step except the first"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Forward chaining begins with the first step and adds later steps as earlier components are mastered.",
    "whyOthersAreWrong": {
      "A": "Teaching the final step first describes backward chaining.",
      "B": "Random order does not preserve the planned response chain.",
      "D": "The trainer may assist with later steps, but the first step is the initial teaching target."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-014",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "chaining",
    "difficulty": "easy",
    "stem": "In backward chaining, the technician completes earlier steps and teaches the learner to perform:",
    "choices": [
      {
        "id": "A",
        "text": "The first step"
      },
      {
        "id": "B",
        "text": "Only the easiest step"
      },
      {
        "id": "C",
        "text": "A different step each day"
      },
      {
        "id": "D",
        "text": "The final step"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Backward chaining begins by teaching the final step, allowing the learner to contact the natural outcome at the end of the chain.",
    "whyOthersAreWrong": {
      "A": "Teaching the first step first is forward chaining.",
      "B": "Step selection is based on the chain procedure, not ease alone.",
      "C": "Changing the target step arbitrarily would not constitute systematic chaining."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-015",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "chaining",
    "difficulty": "medium",
    "stem": "A plan uses total-task presentation. What does the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Provide an opportunity to complete every step on each teaching trial, prompting individual steps as needed"
      },
      {
        "id": "B",
        "text": "Teach only the last step until mastery"
      },
      {
        "id": "C",
        "text": "Teach one isolated step per month"
      },
      {
        "id": "D",
        "text": "Complete the entire task for the learner without response opportunities"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Total-task presentation exposes the learner to the full chain each trial while assistance is provided at specific steps according to the plan.",
    "whyOthersAreWrong": {
      "B": "Teaching only the last step is backward chaining.",
      "C": "The procedure does not require such a long or arbitrary schedule.",
      "D": "The learner must have opportunities to perform components."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-016",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "prompting",
    "difficulty": "easy",
    "stem": "Which is an example of a model prompt?",
    "choices": [
      {
        "id": "A",
        "text": "The technician says, “Fold the towel”"
      },
      {
        "id": "B",
        "text": "The technician demonstrates folding the towel for the learner to imitate"
      },
      {
        "id": "C",
        "text": "The technician moves the learner’s hands through the response"
      },
      {
        "id": "D",
        "text": "The towel is placed on the table"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "A model prompt demonstrates the desired response so the learner can imitate it.",
    "whyOthersAreWrong": {
      "A": "A spoken instruction is a verbal cue or prompt depending on the program.",
      "C": "Moving the learner’s body is a physical prompt.",
      "D": "Placing materials may be part of the antecedent arrangement but is not necessarily a model."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-017",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "prompting",
    "difficulty": "easy",
    "stem": "Which prompt is most intrusive?",
    "choices": [
      {
        "id": "A",
        "text": "A subtle gesture"
      },
      {
        "id": "B",
        "text": "A visual cue"
      },
      {
        "id": "C",
        "text": "A full physical prompt"
      },
      {
        "id": "D",
        "text": "A brief verbal hint"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "A full physical prompt provides direct physical guidance through the response and is generally more intrusive than visual, gestural, or verbal assistance.",
    "whyOthersAreWrong": {
      "A": "A subtle gesture provides limited assistance.",
      "B": "A visual cue does not physically guide the response.",
      "D": "A brief verbal hint is less intrusive than full physical guidance."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-018",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "prompting",
    "difficulty": "medium",
    "stem": "A most-to-least prompting procedure begins with:",
    "choices": [
      {
        "id": "A",
        "text": "The minimum assistance and increases only after errors"
      },
      {
        "id": "B",
        "text": "No prompts under any circumstance"
      },
      {
        "id": "C",
        "text": "A delay before every instruction"
      },
      {
        "id": "D",
        "text": "A highly controlling prompt that is systematically reduced"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Most-to-least prompting starts with enough assistance to ensure a correct response, then fades to less intrusive prompts.",
    "whyOthersAreWrong": {
      "A": "Starting with minimal help describes least-to-most prompting.",
      "B": "The procedure explicitly uses prompts.",
      "C": "Time delay may be a fading procedure but does not define most-to-least prompting."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-019",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "prompting",
    "difficulty": "medium",
    "stem": "A least-to-most prompting procedure is best described as:",
    "choices": [
      {
        "id": "A",
        "text": "Beginning with an opportunity for independent responding and adding assistance as needed"
      },
      {
        "id": "B",
        "text": "Starting with full physical guidance on every trial forever"
      },
      {
        "id": "C",
        "text": "Removing the instruction after an error"
      },
      {
        "id": "D",
        "text": "Reinforcing only prompted responses"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Least-to-most prompting allows independent responding first and then provides progressively more assistance if the response does not occur or is incorrect.",
    "whyOthersAreWrong": {
      "B": "Prompts should be faded, not maintained indefinitely without clinical rationale.",
      "C": "Errors are handled according to the program, not by automatically removing the instruction.",
      "D": "Independent correct responses are typically important reinforcement targets."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-020",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "prompt-fading",
    "difficulty": "medium",
    "stem": "The technician waits zero seconds before prompting on early trials, then gradually increases the delay after the instruction. Which fading method is this?",
    "choices": [
      {
        "id": "A",
        "text": "Response cost"
      },
      {
        "id": "B",
        "text": "Time delay"
      },
      {
        "id": "C",
        "text": "Backward chaining"
      },
      {
        "id": "D",
        "text": "Stimulus satiation"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Time delay transfers control by increasing the interval between the natural cue and the prompt, creating an opportunity for independent responding.",
    "whyOthersAreWrong": {
      "A": "Response cost removes a conditioned reinforcer after behavior.",
      "C": "Backward chaining teaches a task sequence from the final step.",
      "D": "Satiation concerns reduced reinforcer value following repeated access."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-021",
    "examSlug": "mock-exam",
    "topicSlug": "skill-acquisition",
    "subtopic": "prompt-fading",
    "difficulty": "hard",
    "stem": "A learner answers only after the technician repeats the question three times, although the written plan calls for one presentation followed by a timed prompt. What is the main concern?",
    "choices": [
      {
        "id": "A",
        "text": "The learner has mastered generalization"
      },
      {
        "id": "B",
        "text": "The repeated cue is automatically a reinforcer"
      },
      {
        "id": "C",
        "text": "Prompt dependence may be strengthened by the repeated, unplanned cue"
      },
      {
        "id": "D",
        "text": "The data no longer need to distinguish prompted responses"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Repeated, extra cues can become the controlling stimulus and make the learner wait for them instead of responding to the intended instruction.",
    "whyOthersAreWrong": {
      "A": "Reliance on repeated cues indicates limited stimulus control, not generalization.",
      "B": "The effect described is prompt control, not necessarily reinforcement.",
      "D": "Accurate data should continue to distinguish response conditions."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-022",
    "examSlug": "practice-test-1",
    "topicSlug": "skill-acquisition",
    "subtopic": "stimulus-control-transfer",
    "difficulty": "medium",
    "stem": "The goal of stimulus-control transfer is for behavior to occur:",
    "choices": [
      {
        "id": "A",
        "text": "Only when the technician is standing nearby"
      },
      {
        "id": "B",
        "text": "Only after an error"
      },
      {
        "id": "C",
        "text": "Without any antecedent"
      },
      {
        "id": "D",
        "text": "In response to the intended natural cue rather than an extra prompt"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Stimulus-control transfer shifts responding from prompts to the antecedent that should naturally signal the response.",
    "whyOthersAreWrong": {
      "A": "Dependence on technician presence is often something to reduce.",
      "B": "The goal is not to require an error before responding.",
      "C": "Operant behavior occurs in context; the goal is control by the appropriate antecedent, not no antecedent."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-023",
    "examSlug": "practice-test-1",
    "topicSlug": "skill-acquisition",
    "subtopic": "discrimination-training",
    "difficulty": "easy",
    "stem": "A learner is reinforced for touching a red card when asked for red but not for touching a blue card. The procedure is teaching:",
    "choices": [
      {
        "id": "A",
        "text": "Stimulus discrimination"
      },
      {
        "id": "B",
        "text": "Extinction burst"
      },
      {
        "id": "C",
        "text": "Duration recording"
      },
      {
        "id": "D",
        "text": "Response generalization"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Differential reinforcement across stimuli teaches the learner to respond differently when the relevant cues differ.",
    "whyOthersAreWrong": {
      "B": "An extinction burst is a temporary increase when reinforcement is withheld.",
      "C": "Duration is a measurement dimension.",
      "D": "Response generalization involves untrained forms of a response."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-024",
    "examSlug": "practice-test-1",
    "topicSlug": "skill-acquisition",
    "subtopic": "discrimination-training",
    "difficulty": "medium",
    "stem": "During receptive-label training, the technician always places the correct card on the left. The learner chooses the left position regardless of the card. What should be reported?",
    "choices": [
      {
        "id": "A",
        "text": "Evidence that the learner knows every label"
      },
      {
        "id": "B",
        "text": "Possible position bias that may interfere with discrimination"
      },
      {
        "id": "C",
        "text": "A successful maintenance outcome"
      },
      {
        "id": "D",
        "text": "Proof that the left card is a generalized reinforcer"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Consistent item placement may create control by position rather than the relevant stimulus, so the technician should report the pattern and follow the program’s rotation procedure.",
    "whyOthersAreWrong": {
      "A": "Selecting by location does not demonstrate label discrimination.",
      "C": "Maintenance requires durable performance under intended cues.",
      "D": "The position is functioning as an unintended cue, not a reinforcer."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-025",
    "examSlug": "practice-test-1",
    "topicSlug": "skill-acquisition",
    "subtopic": "shaping",
    "difficulty": "easy",
    "stem": "A child currently says “ba” for “ball.” The plan reinforces progressively closer pronunciations until “ball” occurs. This procedure is:",
    "choices": [
      {
        "id": "A",
        "text": "Extinction"
      },
      {
        "id": "B",
        "text": "Backward chaining"
      },
      {
        "id": "C",
        "text": "Shaping"
      },
      {
        "id": "D",
        "text": "Momentary time sampling"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Shaping reinforces successive approximations that increasingly resemble the terminal response.",
    "whyOthersAreWrong": {
      "A": "Extinction withholds reinforcement for a previously reinforced response.",
      "B": "Backward chaining teaches the final step of a sequence first.",
      "D": "Momentary time sampling is a discontinuous measurement method."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-026",
    "examSlug": "practice-test-1",
    "topicSlug": "skill-acquisition",
    "subtopic": "shaping",
    "difficulty": "hard",
    "stem": "When shaping a response, when should the criterion generally change?",
    "choices": [
      {
        "id": "A",
        "text": "After every incorrect response"
      },
      {
        "id": "B",
        "text": "Whenever the technician becomes bored"
      },
      {
        "id": "C",
        "text": "Only after the learner performs the final response perfectly"
      },
      {
        "id": "D",
        "text": "According to the plan after the current approximation occurs reliably enough to move closer to the terminal response"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Shaping criteria are advanced systematically after sufficient performance at the current approximation, as specified or directed by the supervisor.",
    "whyOthersAreWrong": {
      "A": "Changing after every error is unstable and not systematic.",
      "B": "Technician preference is not a clinical decision rule.",
      "C": "Waiting for the final response before advancing would defeat the purpose of shaping approximations."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-027",
    "examSlug": "practice-test-1",
    "topicSlug": "skill-acquisition",
    "subtopic": "token-systems",
    "difficulty": "medium",
    "stem": "A token board requires five tokens before exchange. The learner has earned four tokens and asks to exchange early. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Follow the written exchange rule unless the supervisor has authorized a change"
      },
      {
        "id": "B",
        "text": "Add a fifth token to prevent disappointment"
      },
      {
        "id": "C",
        "text": "Remove all tokens as punishment"
      },
      {
        "id": "D",
        "text": "Change the requirement permanently during the session"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Token systems depend on consistent earning and exchange rules; deviations should occur only under approved procedures.",
    "whyOthersAreWrong": {
      "B": "Giving an unearned token changes the contingency.",
      "C": "Removing earned tokens without an authorized response-cost procedure is inappropriate.",
      "D": "The technician should not independently redesign the system."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-028",
    "examSlug": "practice-test-2",
    "topicSlug": "skill-acquisition",
    "subtopic": "generalization",
    "difficulty": "easy",
    "stem": "A learner is taught to request help with one instructor and later requests help with a different instructor without direct teaching. This is an example of:",
    "choices": [
      {
        "id": "A",
        "text": "Extinction"
      },
      {
        "id": "B",
        "text": "Generalization across people"
      },
      {
        "id": "C",
        "text": "Response cost"
      },
      {
        "id": "D",
        "text": "Latency"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "The skill occurred with a new person, showing transfer across an untrained stimulus or context.",
    "whyOthersAreWrong": {
      "A": "Extinction is withholding reinforcement for a previously reinforced response.",
      "C": "Response cost removes a conditioned reinforcer.",
      "D": "Latency measures time to begin responding."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-029",
    "examSlug": "practice-test-2",
    "topicSlug": "skill-acquisition",
    "subtopic": "generalization",
    "difficulty": "medium",
    "stem": "Which teaching arrangement is most likely to support generalization of sorting laundry?",
    "choices": [
      {
        "id": "A",
        "text": "Use only one identical pair of socks in one location"
      },
      {
        "id": "B",
        "text": "Prompt every response forever"
      },
      {
        "id": "C",
        "text": "Practice with varied clothing, baskets, rooms, and instructors while preserving the relevant sorting rule"
      },
      {
        "id": "D",
        "text": "Stop reinforcement immediately after the first correct trial"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Programming common variation across materials, settings, and people helps the learner respond to relevant features in new examples.",
    "whyOthersAreWrong": {
      "A": "Teaching with one example can produce narrow stimulus control.",
      "B": "Permanent prompting prevents independent performance.",
      "D": "Abrupt removal of reinforcement may weaken a newly acquired skill."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-030",
    "examSlug": "practice-test-2",
    "topicSlug": "skill-acquisition",
    "subtopic": "maintenance",
    "difficulty": "easy",
    "stem": "A skill remains accurate when checked several weeks after direct teaching has ended. This demonstrates:",
    "choices": [
      {
        "id": "A",
        "text": "Punishment"
      },
      {
        "id": "B",
        "text": "Establishing operation"
      },
      {
        "id": "C",
        "text": "Observer drift"
      },
      {
        "id": "D",
        "text": "Maintenance"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Maintenance is continued performance after the intensive teaching period or after time has passed.",
    "whyOthersAreWrong": {
      "A": "Punishment is a consequence that decreases behavior.",
      "B": "An establishing operation changes consequence value and evoking effects.",
      "C": "Observer drift is a change in how an observer applies definitions over time."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-031",
    "examSlug": "practice-test-2",
    "topicSlug": "skill-acquisition",
    "subtopic": "maintenance",
    "difficulty": "medium",
    "stem": "Which action best supports maintenance after a learner masters hand washing?",
    "choices": [
      {
        "id": "A",
        "text": "Arrange periodic opportunities and natural consequences while gradually reducing artificial supports as planned"
      },
      {
        "id": "B",
        "text": "Remove all opportunities to wash hands"
      },
      {
        "id": "C",
        "text": "Continue full physical prompts indefinitely"
      },
      {
        "id": "D",
        "text": "Teach an unrelated response instead"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Maintenance is supported through continued contact with relevant cues, opportunities, and natural or thinned reinforcement.",
    "whyOthersAreWrong": {
      "B": "Without opportunities, the skill cannot be practiced or contacted.",
      "C": "Indefinite full prompting prevents independent maintenance.",
      "D": "Teaching an unrelated response does not maintain the mastered chain."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-032",
    "examSlug": "practice-test-2",
    "topicSlug": "skill-acquisition",
    "subtopic": "motivating-operations",
    "difficulty": "medium",
    "stem": "A learner has just had unlimited access to crackers before a session, and crackers are less effective as a reward. This change is best described as:",
    "choices": [
      {
        "id": "A",
        "text": "A discriminative stimulus for crackers"
      },
      {
        "id": "B",
        "text": "An abolishing operation for crackers"
      },
      {
        "id": "C",
        "text": "A response prompt"
      },
      {
        "id": "D",
        "text": "A conditioned punisher"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Recent unrestricted access can reduce the current reinforcing value of crackers and reduce behavior that previously produced them.",
    "whyOthersAreWrong": {
      "A": "A discriminative stimulus signals availability of reinforcement rather than changing its value.",
      "C": "A prompt assists performance of a response.",
      "D": "The example concerns reduced reinforcement value, not punishment."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-033",
    "examSlug": "practice-test-2",
    "topicSlug": "skill-acquisition",
    "subtopic": "motivating-operations",
    "difficulty": "hard",
    "stem": "A difficult task has been presented for a long period without a break, and appropriate break requests increase. The extended work period may function as:",
    "choices": [
      {
        "id": "A",
        "text": "A generalized conditioned reinforcer"
      },
      {
        "id": "B",
        "text": "A permanent product"
      },
      {
        "id": "C",
        "text": "An establishing operation that increases the value of a break"
      },
      {
        "id": "D",
        "text": "A model prompt"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Prolonged work can increase the current value of task removal and evoke behavior that has produced breaks in the past.",
    "whyOthersAreWrong": {
      "A": "The work period is not a token or stimulus paired with multiple reinforcers.",
      "B": "A permanent product is an outcome left by behavior.",
      "D": "A model prompt demonstrates the response."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-034",
    "examSlug": "practice-test-2",
    "topicSlug": "skill-acquisition",
    "subtopic": "errorless-learning",
    "difficulty": "medium",
    "stem": "A program provides an immediate controlling prompt on early trials and then systematically delays or fades it. What is the main instructional aim?",
    "choices": [
      {
        "id": "A",
        "text": "Increase errors to make learning memorable"
      },
      {
        "id": "B",
        "text": "Keep behavior under permanent prompt control"
      },
      {
        "id": "C",
        "text": "Avoid reinforcement"
      },
      {
        "id": "D",
        "text": "Reduce errors while transferring control to the natural cue"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Errorless teaching arrangements seek high rates of correct responding while prompts are systematically faded to the intended cue.",
    "whyOthersAreWrong": {
      "A": "The procedure is designed to minimize, not maximize, errors.",
      "B": "Prompt fading is intended to prevent permanent prompt dependence.",
      "C": "Correct responses are commonly reinforced according to the plan."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-035",
    "examSlug": "practice-test-3",
    "topicSlug": "skill-acquisition",
    "subtopic": "incidental-teaching",
    "difficulty": "medium",
    "stem": "During snack, the learner points toward juice. The technician arranges a brief communication opportunity, prompts the planned request if needed, and immediately provides juice. What makes this incidental teaching?",
    "choices": [
      {
        "id": "A",
        "text": "The opportunity arises within a naturally occurring activity around an item the learner wants"
      },
      {
        "id": "B",
        "text": "No data are collected"
      },
      {
        "id": "C",
        "text": "The technician changes the target spontaneously"
      },
      {
        "id": "D",
        "text": "The response is never reinforced"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Incidental teaching uses naturally occurring motivation and contexts while the teaching target and prompting plan remain intentional.",
    "whyOthersAreWrong": {
      "B": "Data may still be collected.",
      "C": "The teaching target should come from the authorized program.",
      "D": "Access to juice provides the planned consequence."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-036",
    "examSlug": "practice-test-3",
    "topicSlug": "skill-acquisition",
    "subtopic": "fluency",
    "difficulty": "hard",
    "stem": "A learner performs a mastered response accurately but so slowly that it is not useful in daily routines. Which additional performance dimension may need instruction?",
    "choices": [
      {
        "id": "A",
        "text": "Preference"
      },
      {
        "id": "B",
        "text": "Fluency"
      },
      {
        "id": "C",
        "text": "Extinction"
      },
      {
        "id": "D",
        "text": "Observer agreement"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Fluency combines accuracy with an efficient pace that allows the skill to function in natural contexts.",
    "whyOthersAreWrong": {
      "A": "Preference concerns relative selection of stimuli.",
      "C": "Extinction is a behavior-reduction procedure.",
      "D": "Observer agreement evaluates consistency of measurement."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-037",
    "examSlug": "practice-test-3",
    "topicSlug": "skill-acquisition",
    "subtopic": "program-implementation",
    "difficulty": "hard",
    "stem": "The written program says to provide a visual prompt, wait five seconds, then use a model prompt if needed. The technician instead gives a verbal hint immediately. What is the best action after noticing the error?",
    "choices": [
      {
        "id": "A",
        "text": "Continue the verbal hint because it seemed helpful"
      },
      {
        "id": "B",
        "text": "Rewrite the plan after the session"
      },
      {
        "id": "C",
        "text": "Return to the written procedure, record or report the deviation as required, and seek clarification if needed"
      },
      {
        "id": "D",
        "text": "Mark all affected trials independent"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Technicians should implement programs with fidelity, disclose meaningful deviations, and obtain supervisory guidance rather than making unauthorized changes.",
    "whyOthersAreWrong": {
      "A": "Perceived helpfulness does not authorize a different prompt sequence.",
      "B": "Program revision is the supervisor’s responsibility.",
      "D": "Responses influenced by extra prompts cannot be scored as independent."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-038",
    "examSlug": "practice-test-3",
    "topicSlug": "skill-acquisition",
    "subtopic": "generalization",
    "difficulty": "hard",
    "stem": "A learner says “dog” only when shown the exact training photograph. Which next step best addresses overly narrow stimulus control, if included in the plan?",
    "choices": [
      {
        "id": "A",
        "text": "Use the same photograph indefinitely"
      },
      {
        "id": "B",
        "text": "Reinforce saying “dog” for every animal"
      },
      {
        "id": "C",
        "text": "Stop presenting dog examples"
      },
      {
        "id": "D",
        "text": "Teach with varied examples of dogs and across relevant contexts"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Multiple exemplars can broaden control to the relevant features shared by dogs rather than one specific picture.",
    "whyOthersAreWrong": {
      "A": "Continued use of one example may preserve narrow control.",
      "B": "Reinforcing the label for every animal would weaken discrimination.",
      "C": "Removing opportunities would not build generalization."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-001",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "functions-of-behavior",
    "difficulty": "easy",
    "stem": "A learner throws materials, and the task is removed. Throwing becomes more likely during future demands. Which function is most consistent with this pattern?",
    "choices": [
      {
        "id": "A",
        "text": "Escape from demands"
      },
      {
        "id": "B",
        "text": "Access to attention"
      },
      {
        "id": "C",
        "text": "Access to tangibles"
      },
      {
        "id": "D",
        "text": "Automatic reinforcement"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Task removal follows the behavior and the behavior increases in demand contexts, which is consistent with socially mediated escape reinforcement.",
    "whyOthersAreWrong": {
      "B": "Attention would involve social interaction delivered after the behavior.",
      "C": "Tangible access would involve receiving an item or activity.",
      "D": "Automatic reinforcement does not depend on another person removing a task."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-002",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "functions-of-behavior",
    "difficulty": "easy",
    "stem": "A child shouts, an adult immediately looks over and talks to the child, and shouting increases when adults are busy. Which function may be relevant?",
    "choices": [
      {
        "id": "A",
        "text": "Escape"
      },
      {
        "id": "B",
        "text": "Attention"
      },
      {
        "id": "C",
        "text": "Automatic reinforcement"
      },
      {
        "id": "D",
        "text": "Access to sleep"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "The behavior is followed by social interaction and occurs when attention is limited, suggesting attention may be a relevant reinforcer.",
    "whyOthersAreWrong": {
      "A": "Escape would involve postponing or removing a demand or aversive event.",
      "C": "Automatic reinforcement occurs without socially mediated consequences.",
      "D": "Access to sleep is not supported by the described pattern."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-003",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "functions-of-behavior",
    "difficulty": "easy",
    "stem": "A learner grabs a tablet, and staff allow tablet access. Grabbing later occurs more often when the tablet is visible. Which function is most likely?",
    "choices": [
      {
        "id": "A",
        "text": "Attention"
      },
      {
        "id": "B",
        "text": "Escape"
      },
      {
        "id": "C",
        "text": "Access to a tangible item"
      },
      {
        "id": "D",
        "text": "Automatic reinforcement"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "The response produces access to the tablet, making tangible reinforcement the most consistent hypothesis.",
    "whyOthersAreWrong": {
      "A": "No social attention consequence is described.",
      "B": "No demand is removed.",
      "D": "Tablet delivery is socially mediated rather than automatic."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-004",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "functions-of-behavior",
    "difficulty": "medium",
    "stem": "A person repeatedly rocks while alone, and the behavior continues without observable social consequences. Which function should be considered?",
    "choices": [
      {
        "id": "A",
        "text": "Attention"
      },
      {
        "id": "B",
        "text": "Escape from instructions"
      },
      {
        "id": "C",
        "text": "Access to food"
      },
      {
        "id": "D",
        "text": "Automatic reinforcement"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Persistence in the absence of social consequences may indicate that sensory consequences produced by the behavior itself are reinforcing.",
    "whyOthersAreWrong": {
      "A": "Attention requires another person to deliver social consequences.",
      "B": "No instruction or task removal is described.",
      "C": "No food consequence is described."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-005",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "function-based-treatment",
    "difficulty": "medium",
    "stem": "Why should replacement behavior generally produce the same type of outcome as the challenging behavior?",
    "choices": [
      {
        "id": "A",
        "text": "A functionally equivalent response can compete effectively because it accesses the relevant reinforcer"
      },
      {
        "id": "B",
        "text": "All replacement behavior must look physically similar"
      },
      {
        "id": "C",
        "text": "It eliminates the need for reinforcement"
      },
      {
        "id": "D",
        "text": "It proves the original behavior was intentional"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "A replacement response is more likely to be used when it efficiently obtains the outcome that previously maintained the challenging behavior.",
    "whyOthersAreWrong": {
      "B": "Functional equivalence concerns outcome, not physical appearance.",
      "C": "Replacement behavior usually requires reinforcement during teaching.",
      "D": "Behavioral function does not establish intent."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-006",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "antecedent-strategies",
    "difficulty": "easy",
    "stem": "Before a difficult worksheet, the technician offers a choice of pencil color and lets the learner choose which section to complete first, as written in the plan. This is:",
    "choices": [
      {
        "id": "A",
        "text": "Extinction"
      },
      {
        "id": "B",
        "text": "An antecedent strategy"
      },
      {
        "id": "C",
        "text": "Response cost"
      },
      {
        "id": "D",
        "text": "Overcorrection"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Choice is arranged before the target behavior to alter the context and increase cooperation.",
    "whyOthersAreWrong": {
      "A": "Extinction withholds a maintaining reinforcer after behavior.",
      "C": "Response cost removes a conditioned reinforcer after behavior.",
      "D": "Overcorrection is a consequence procedure, not the antecedent arrangement described."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-007",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "antecedent-strategies",
    "difficulty": "medium",
    "stem": "A visual schedule shows that computer time follows two short work tasks. What is the likely purpose of this antecedent support?",
    "choices": [
      {
        "id": "A",
        "text": "Punish refusal"
      },
      {
        "id": "B",
        "text": "Measure duration"
      },
      {
        "id": "C",
        "text": "Increase predictability and clarify the sequence of activities"
      },
      {
        "id": "D",
        "text": "Withhold all reinforcement"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "A visual schedule can make transitions and response requirements more predictable before behavior occurs.",
    "whyOthersAreWrong": {
      "A": "Displaying a schedule is not punishment.",
      "B": "A schedule may support behavior but does not itself measure elapsed time.",
      "D": "It communicates when reinforcement or preferred activity is available rather than withholding all reinforcement."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-008",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "antecedent-strategies",
    "difficulty": "medium",
    "stem": "A plan calls for interspersing several easy instructions among harder ones. This procedure is intended to:",
    "choices": [
      {
        "id": "A",
        "text": "Create an extinction burst"
      },
      {
        "id": "B",
        "text": "Reduce interobserver agreement"
      },
      {
        "id": "C",
        "text": "Convert demands into automatic reinforcement"
      },
      {
        "id": "D",
        "text": "Build behavioral momentum and increase the likelihood of responding to the harder instruction"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "A sequence of high-probability responses can establish momentum before a lower-probability request.",
    "whyOthersAreWrong": {
      "A": "An extinction burst follows removal of reinforcement, not a high-probability request sequence.",
      "B": "The strategy is an intervention, not a measurement comparison.",
      "C": "The demands remain socially arranged."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-009",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "antecedent-strategies",
    "difficulty": "hard",
    "stem": "A learner often asks for a break only after problem behavior begins. Which antecedent-focused adjustment best supports earlier appropriate communication, if authorized in the plan?",
    "choices": [
      {
        "id": "A",
        "text": "Provide planned opportunities or cues to request a break before escalation"
      },
      {
        "id": "B",
        "text": "Wait for severe behavior before showing the break card"
      },
      {
        "id": "C",
        "text": "Remove the communication card from view"
      },
      {
        "id": "D",
        "text": "Deliver breaks only on a fixed schedule regardless of the plan"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Prompting and reinforcing the alternative request before escalation can make the appropriate response easier and more efficient.",
    "whyOthersAreWrong": {
      "B": "Waiting until escalation misses the preventive teaching opportunity.",
      "C": "Removing the response support makes communication less accessible.",
      "D": "Independent schedule changes are not authorized and may not be function based."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-010",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "differential-reinforcement",
    "difficulty": "easy",
    "stem": "A learner is reinforced for appropriately asking for help, while problem behavior no longer produces help. Which procedure is this?",
    "choices": [
      {
        "id": "A",
        "text": "DRI"
      },
      {
        "id": "B",
        "text": "DRA"
      },
      {
        "id": "C",
        "text": "DRO"
      },
      {
        "id": "D",
        "text": "DRL"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Differential reinforcement of alternative behavior reinforces a specific appropriate alternative while withholding reinforcement for the target behavior.",
    "whyOthersAreWrong": {
      "A": "DRI reinforces a behavior that cannot occur at the same time as the target.",
      "C": "DRO reinforces the absence of the target during an interval.",
      "D": "DRL reinforces reduced rates of a behavior rather than an alternative response."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-011",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "differential-reinforcement",
    "difficulty": "easy",
    "stem": "A learner receives reinforcement for keeping both hands in pockets, a response that cannot occur at the same time as hand biting. Which procedure is this?",
    "choices": [
      {
        "id": "A",
        "text": "DRA"
      },
      {
        "id": "B",
        "text": "DRO"
      },
      {
        "id": "C",
        "text": "DRI"
      },
      {
        "id": "D",
        "text": "DRL"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Differential reinforcement of incompatible behavior reinforces a response that is physically incompatible with the target response.",
    "whyOthersAreWrong": {
      "A": "DRA does not require the alternative response to be physically incompatible.",
      "B": "DRO reinforces intervals without the target, not a named incompatible response.",
      "D": "DRL targets a lower rate of behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-012",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "differential-reinforcement",
    "difficulty": "medium",
    "stem": "A learner earns reinforcement after each 5-minute interval in which no shouting occurs. Which procedure is this?",
    "choices": [
      {
        "id": "A",
        "text": "DRA"
      },
      {
        "id": "B",
        "text": "DRI"
      },
      {
        "id": "C",
        "text": "DRL"
      },
      {
        "id": "D",
        "text": "DRO"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Differential reinforcement of other behavior provides reinforcement when the target behavior is absent for the specified interval.",
    "whyOthersAreWrong": {
      "A": "DRA reinforces a particular alternative response.",
      "B": "DRI reinforces a response that cannot co-occur with the target.",
      "C": "DRL reinforces a lower rate rather than complete interval absence."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-013",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "differential-reinforcement",
    "difficulty": "medium",
    "stem": "A student asks the same appropriate question 30 times per class. The goal is to reduce, not eliminate, question asking. Which procedure may fit that goal?",
    "choices": [
      {
        "id": "A",
        "text": "DRL"
      },
      {
        "id": "B",
        "text": "DRA"
      },
      {
        "id": "C",
        "text": "DRI"
      },
      {
        "id": "D",
        "text": "DRO"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Differential reinforcement of low rates is used when a behavior is acceptable but should occur less often.",
    "whyOthersAreWrong": {
      "B": "DRA would reinforce a different response.",
      "C": "DRI would reinforce an incompatible response.",
      "D": "DRO targets intervals with no occurrence, which may be inconsistent with retaining appropriate question asking."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-014",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "differential-reinforcement",
    "difficulty": "hard",
    "stem": "A DRO interval is set much longer than the learner can currently complete without the target behavior. What is a likely problem?",
    "choices": [
      {
        "id": "A",
        "text": "The procedure becomes DRI automatically"
      },
      {
        "id": "B",
        "text": "Reinforcement may be too infrequent to establish success"
      },
      {
        "id": "C",
        "text": "The target behavior must increase permanently"
      },
      {
        "id": "D",
        "text": "Data collection is no longer needed"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Initial differential-reinforcement criteria should allow attainable contact with reinforcement and can be adjusted systematically by the supervisor.",
    "whyOthersAreWrong": {
      "A": "DRO remains based on absence, regardless of interval difficulty.",
      "C": "A difficult interval may reduce effectiveness but does not guarantee permanent increase.",
      "D": "Data are necessary to evaluate and adjust the procedure."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-015",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "extinction",
    "difficulty": "easy",
    "stem": "What defines extinction in operant behavior?",
    "choices": [
      {
        "id": "A",
        "text": "A consequence that physically blocks behavior"
      },
      {
        "id": "B",
        "text": "Reinforcing every response"
      },
      {
        "id": "C",
        "text": "Discontinuing the reinforcer that previously maintained a response"
      },
      {
        "id": "D",
        "text": "Removing all preferred items from the environment"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Extinction occurs when the maintaining reinforcer is no longer delivered for the target response.",
    "whyOthersAreWrong": {
      "A": "Blocking may be a safety procedure but is not the definition of extinction.",
      "B": "Reinforcing every response is continuous reinforcement.",
      "D": "Removing unrelated preferred items is not function-based extinction."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-016",
    "examSlug": "mock-exam",
    "topicSlug": "behavior-reduction",
    "subtopic": "extinction",
    "difficulty": "medium",
    "stem": "Soon after extinction begins, the target behavior becomes louder and more frequent for a short period. This pattern is called:",
    "choices": [
      {
        "id": "A",
        "text": "Spontaneous recovery"
      },
      {
        "id": "B",
        "text": "Stimulus generalization"
      },
      {
        "id": "C",
        "text": "Behavioral maintenance"
      },
      {
        "id": "D",
        "text": "Extinction burst"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "An extinction burst is a temporary increase in response frequency, intensity, duration, or variability after reinforcement is first withheld.",
    "whyOthersAreWrong": {
      "A": "Spontaneous recovery is reappearance after a period in which the extinguished response had decreased.",
      "B": "Stimulus generalization is responding in the presence of new but similar stimuli.",
      "C": "Maintenance is continued performance over time."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-017",
    "examSlug": "practice-test-1",
    "topicSlug": "behavior-reduction",
    "subtopic": "extinction",
    "difficulty": "medium",
    "stem": "A behavior decreased during extinction, was absent for several days, and briefly reappeared at the next session. This is:",
    "choices": [
      {
        "id": "A",
        "text": "Spontaneous recovery"
      },
      {
        "id": "B",
        "text": "DRA"
      },
      {
        "id": "C",
        "text": "A preference shift"
      },
      {
        "id": "D",
        "text": "Procedural fidelity"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Spontaneous recovery is the temporary reappearance of an extinguished response after time has passed.",
    "whyOthersAreWrong": {
      "B": "DRA is reinforcement of an alternative behavior.",
      "C": "No change in item preference is described.",
      "D": "Procedural fidelity refers to accurate implementation, not the response pattern."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-018",
    "examSlug": "practice-test-1",
    "topicSlug": "behavior-reduction",
    "subtopic": "extinction",
    "difficulty": "hard",
    "stem": "Why is consistency across caregivers and staff important when implementing extinction?",
    "choices": [
      {
        "id": "A",
        "text": "Consistency guarantees no escalation"
      },
      {
        "id": "B",
        "text": "Intermittent delivery of the former reinforcer can strengthen persistence and make behavior harder to reduce"
      },
      {
        "id": "C",
        "text": "It removes the need to teach replacement skills"
      },
      {
        "id": "D",
        "text": "It proves the function without assessment"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Occasional reinforcement during extinction can create a highly persistent intermittent schedule; coordinated implementation and reinforcement of alternatives are important.",
    "whyOthersAreWrong": {
      "A": "Extinction may still produce bursts or variability even when implemented consistently.",
      "C": "Functionally equivalent replacement skills should usually be taught and reinforced.",
      "D": "Consistency does not substitute for assessment."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-019",
    "examSlug": "practice-test-1",
    "topicSlug": "behavior-reduction",
    "subtopic": "extinction",
    "difficulty": "hard",
    "stem": "A plan uses escape extinction for task refusal. Which action would violate the plan if no safety exception applies?",
    "choices": [
      {
        "id": "A",
        "text": "Continuing the task with the programmed prompting and break-request procedure"
      },
      {
        "id": "B",
        "text": "Reinforcing an appropriate break request"
      },
      {
        "id": "C",
        "text": "Removing the task immediately after refusal"
      },
      {
        "id": "D",
        "text": "Following the stated safety criteria"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "If refusal previously produced task removal, removing the task contingent on refusal delivers the maintaining escape reinforcer and conflicts with escape extinction.",
    "whyOthersAreWrong": {
      "A": "Continuing instruction as written is consistent with the procedure.",
      "B": "Reinforcing an appropriate alternative request is often part of function-based treatment.",
      "D": "Safety criteria remain mandatory."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-020",
    "examSlug": "practice-test-1",
    "topicSlug": "behavior-reduction",
    "subtopic": "consequence-strategies",
    "difficulty": "medium",
    "stem": "A plan includes response cost within a token system. What does response cost involve?",
    "choices": [
      {
        "id": "A",
        "text": "Adding tokens after correct responding"
      },
      {
        "id": "B",
        "text": "Ignoring all behavior"
      },
      {
        "id": "C",
        "text": "Increasing task difficulty before behavior occurs"
      },
      {
        "id": "D",
        "text": "Removing a specified amount of an earned conditioned reinforcer after a defined behavior"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Response cost is a negative-punishment procedure in which a specified reinforcer, often tokens, is removed contingent on behavior.",
    "whyOthersAreWrong": {
      "A": "Adding tokens for correct responding is positive reinforcement.",
      "B": "Ignoring may be an extinction procedure only when attention maintains behavior.",
      "C": "Changing task difficulty is an antecedent manipulation."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-021",
    "examSlug": "practice-test-2",
    "topicSlug": "behavior-reduction",
    "subtopic": "consequence-strategies",
    "difficulty": "hard",
    "stem": "A technician believes a new penalty would reduce a behavior quickly. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Do not add it independently; continue the authorized plan and discuss the concern with the supervisor"
      },
      {
        "id": "B",
        "text": "Test the penalty once without documenting it"
      },
      {
        "id": "C",
        "text": "Ask the family to administer it secretly"
      },
      {
        "id": "D",
        "text": "Replace reinforcement with the penalty"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Technicians implement approved plans and do not independently introduce punishment or other clinical procedures.",
    "whyOthersAreWrong": {
      "B": "An undocumented trial is still an unauthorized intervention.",
      "C": "Secrecy violates ethical and clinical accountability.",
      "D": "Reinforcement-based components should not be removed without clinical authorization."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-022",
    "examSlug": "practice-test-2",
    "topicSlug": "behavior-reduction",
    "subtopic": "safety-and-crisis",
    "difficulty": "easy",
    "stem": "A crisis plan identifies specific warning signs, protective actions, and conditions for contacting emergency support. During escalation, the technician should:",
    "choices": [
      {
        "id": "A",
        "text": "Invent a more restrictive procedure"
      },
      {
        "id": "B",
        "text": "Follow the trained plan exactly and prioritize immediate safety"
      },
      {
        "id": "C",
        "text": "Continue teaching goals as though nothing is happening"
      },
      {
        "id": "D",
        "text": "Post details online to request advice"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Crisis procedures require prior training, faithful implementation, and attention to safety and dignity.",
    "whyOthersAreWrong": {
      "A": "Untrained or more restrictive improvisation can increase risk.",
      "C": "Immediate safety takes priority over routine instruction.",
      "D": "Posting client details breaches confidentiality and is not an emergency protocol."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-023",
    "examSlug": "practice-test-2",
    "topicSlug": "behavior-reduction",
    "subtopic": "safety-and-crisis",
    "difficulty": "medium",
    "stem": "A technician encounters a severe behavior not covered by the current plan. What is the best immediate response?",
    "choices": [
      {
        "id": "A",
        "text": "Create a restraint procedure independently"
      },
      {
        "id": "B",
        "text": "Ignore the event because it is not in the plan"
      },
      {
        "id": "C",
        "text": "Use the least restrictive trained safety procedures available, obtain assistance, and notify the supervisor according to policy"
      },
      {
        "id": "D",
        "text": "Ask another client to help"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Unexpected severe behavior calls for immediate safety measures within training and policy, prompt assistance, and supervisory notification.",
    "whyOthersAreWrong": {
      "A": "Independent creation of restraint or crisis procedures is unsafe and outside scope.",
      "B": "Ignoring a serious safety event is inappropriate.",
      "D": "Involving another client creates additional risk and confidentiality concerns."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-024",
    "examSlug": "practice-test-2",
    "topicSlug": "behavior-reduction",
    "subtopic": "safety-and-crisis",
    "difficulty": "hard",
    "stem": "After a crisis procedure is used, what documentation is most appropriate?",
    "choices": [
      {
        "id": "A",
        "text": "A judgment that the client was “out of control”"
      },
      {
        "id": "B",
        "text": "Only the technician’s emotional reaction"
      },
      {
        "id": "C",
        "text": "No note, because crisis events are confidential"
      },
      {
        "id": "D",
        "text": "Objective details required by policy, including observable events, procedures used, injuries or medical follow-up, and notifications"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Crisis documentation should be factual, timely, complete, and handled through authorized confidential systems.",
    "whyOthersAreWrong": {
      "A": "Judgmental labels are not objective descriptions.",
      "B": "Personal reactions do not replace required event details.",
      "C": "Confidentiality requires secure documentation, not omission."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-025",
    "examSlug": "practice-test-2",
    "topicSlug": "behavior-reduction",
    "subtopic": "treatment-integrity",
    "difficulty": "medium",
    "stem": "A behavior-reduction plan specifies reinforcement for a communication response on every occurrence. The technician sometimes forgets to deliver it. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Acknowledge and report the fidelity problem, correct implementation, and seek coaching if needed"
      },
      {
        "id": "B",
        "text": "Change the data to show perfect implementation"
      },
      {
        "id": "C",
        "text": "Stop collecting target-behavior data"
      },
      {
        "id": "D",
        "text": "Blame the learner for poor progress"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Implementation errors should be addressed transparently because treatment effects cannot be interpreted confidently when procedures are inconsistent.",
    "whyOthersAreWrong": {
      "B": "Falsifying records is unethical.",
      "C": "Measurement remains necessary.",
      "D": "Progress problems require objective review, not blame."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-026",
    "examSlug": "practice-test-2",
    "topicSlug": "behavior-reduction",
    "subtopic": "side-effects",
    "difficulty": "hard",
    "stem": "A target behavior decreases in the treatment setting but increases sharply in another setting where reinforcement is still available. This pattern may reflect:",
    "choices": [
      {
        "id": "A",
        "text": "Permanent generalization"
      },
      {
        "id": "B",
        "text": "Behavioral contrast or setting-specific treatment effects"
      },
      {
        "id": "C",
        "text": "Abolishing operation only"
      },
      {
        "id": "D",
        "text": "Perfect maintenance"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Different reinforcement conditions across settings can produce uneven change, including behavioral contrast or limited generalization.",
    "whyOthersAreWrong": {
      "A": "The increase elsewhere shows treatment has not generalized fully.",
      "C": "Abolishing operations concern current reinforcer value and do not fully describe the cross-setting pattern.",
      "D": "Maintenance would involve continued desired change, not a sharp increase."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-027",
    "examSlug": "practice-test-2",
    "topicSlug": "behavior-reduction",
    "subtopic": "replacement-skills",
    "difficulty": "medium",
    "stem": "A learner’s behavior is maintained by access to adult help. Which replacement response is most functionally appropriate?",
    "choices": [
      {
        "id": "A",
        "text": "Sitting quietly without a way to obtain help"
      },
      {
        "id": "B",
        "text": "A motor imitation response unrelated to help"
      },
      {
        "id": "C",
        "text": "An efficient, understandable request for help"
      },
      {
        "id": "D",
        "text": "Completing more difficult tasks without assistance"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "An appropriate help request accesses the same outcome and can replace the challenging behavior when it is taught and reinforced efficiently.",
    "whyOthersAreWrong": {
      "A": "Quiet sitting does not communicate the needed outcome.",
      "B": "An unrelated response is not functionally equivalent.",
      "D": "Increasing difficulty may raise the value of help rather than teach a replacement."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-028",
    "examSlug": "practice-test-3",
    "topicSlug": "behavior-reduction",
    "subtopic": "data-based-decisions",
    "difficulty": "hard",
    "stem": "Problem behavior rises for two sessions after a schedule change. What is the technician’s best action?",
    "choices": [
      {
        "id": "A",
        "text": "Reverse the plan without approval"
      },
      {
        "id": "B",
        "text": "Assume the increase proves the intervention can never work"
      },
      {
        "id": "C",
        "text": "Delete the first two sessions as outliers"
      },
      {
        "id": "D",
        "text": "Continue implementing the authorized plan safely, collect accurate data, and promptly report the change to the supervisor"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "The technician supplies accurate implementation and data while the supervisor evaluates whether the increase reflects an expected transition, an error, or a needed plan adjustment.",
    "whyOthersAreWrong": {
      "A": "Clinical changes require supervisory direction.",
      "B": "Two sessions alone do not justify a definitive conclusion.",
      "C": "Valid observations should not be deleted merely because they are inconvenient."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-029",
    "examSlug": "practice-test-3",
    "topicSlug": "behavior-reduction",
    "subtopic": "reinforcement-quality",
    "difficulty": "medium",
    "stem": "A replacement response requires a long sentence, while the challenging behavior produces the same outcome immediately. What change may the supervisor consider?",
    "choices": [
      {
        "id": "A",
        "text": "Make the replacement response easier and reinforcement more immediate"
      },
      {
        "id": "B",
        "text": "Make the replacement response even harder"
      },
      {
        "id": "C",
        "text": "Delay reinforcement only for the replacement response"
      },
      {
        "id": "D",
        "text": "Stop teaching communication"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Replacement behavior competes better when it is efficient, low effort, and reliably reinforced relative to the challenging behavior.",
    "whyOthersAreWrong": {
      "B": "Higher effort can reduce use of the replacement response.",
      "C": "Slower reinforcement weakens the alternative’s competitiveness.",
      "D": "Removing communication teaching leaves the original need unaddressed."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-001",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "objective-documentation",
    "difficulty": "easy",
    "stem": "Which sentence is most appropriate for an objective session note?",
    "choices": [
      {
        "id": "A",
        "text": "“The client was lazy during work.”"
      },
      {
        "id": "B",
        "text": "“The client completed 7 of 10 work steps independently and requested two breaks.”"
      },
      {
        "id": "C",
        "text": "“The client had a terrible attitude.”"
      },
      {
        "id": "D",
        "text": "“The client wanted to make staff angry.”"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "The second statement reports observable, measurable performance and communication without assigning motives or judgmental labels.",
    "whyOthersAreWrong": {
      "A": "“Lazy” is subjective and judgmental.",
      "C": "“Terrible attitude” is not operationally defined.",
      "D": "The statement infers intent that was not directly observed."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-002",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "objective-documentation",
    "difficulty": "easy",
    "stem": "When should session data and required notes generally be completed?",
    "choices": [
      {
        "id": "A",
        "text": "Several weeks later from memory"
      },
      {
        "id": "B",
        "text": "Only when behavior improves"
      },
      {
        "id": "C",
        "text": "As close to the service period as agency policy requires"
      },
      {
        "id": "D",
        "text": "After discussing the case on social media"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Timely documentation reduces memory error and supports clinical continuity, billing, and accountability.",
    "whyOthersAreWrong": {
      "A": "Delayed reconstruction increases inaccuracy.",
      "B": "All required sessions and outcomes should be documented, not only improvement.",
      "D": "Client information must not be discussed through unauthorized public channels."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-003",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "objective-documentation",
    "difficulty": "medium",
    "stem": "A learner cried for 4 minutes after a transition. Which note is best?",
    "choices": [
      {
        "id": "A",
        "text": "“The learner was devastated.”"
      },
      {
        "id": "B",
        "text": "“The learner hates cleanup.”"
      },
      {
        "id": "C",
        "text": "“The learner behaved badly for a long time.”"
      },
      {
        "id": "D",
        "text": "“The learner cried from 10:14 to 10:18 after the timer signaled cleanup; the planned transition procedure was implemented.”"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "The second note identifies observable behavior, timing, context, and the implemented procedure without inference.",
    "whyOthersAreWrong": {
      "A": "“Devastated” is an inferred emotional state.",
      "B": "“Hates” is an unsupported conclusion.",
      "C": "“Badly” and “a long time” are vague and judgmental."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-004",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "data-reporting",
    "difficulty": "easy",
    "stem": "A technician notices that a learner’s seizure medication was changed that morning. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Document the reported change and promptly inform the supervisor according to policy"
      },
      {
        "id": "B",
        "text": "Give advice about the medication dose"
      },
      {
        "id": "C",
        "text": "Ignore it because technicians do not prescribe"
      },
      {
        "id": "D",
        "text": "Post the medication name in a staff group that is not approved for client information"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Medication changes can affect behavior, health, and interpretation of data, so they should be reported through approved channels without offering medical advice.",
    "whyOthersAreWrong": {
      "B": "Medication recommendations are outside the technician’s role.",
      "C": "Not prescribing does not remove the duty to report relevant variables.",
      "D": "Unauthorized sharing violates confidentiality."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-005",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "data-reporting",
    "difficulty": "easy",
    "stem": "Which event should be communicated promptly to the supervisor rather than saved only for a routine monthly summary?",
    "choices": [
      {
        "id": "A",
        "text": "The technician’s favorite lunch"
      },
      {
        "id": "B",
        "text": "A significant new behavior or sudden change in established behavior"
      },
      {
        "id": "C",
        "text": "A television program discussed by staff"
      },
      {
        "id": "D",
        "text": "An unrelated traffic delay from last week"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Unexpected, significant behavior changes may require timely clinical or safety review.",
    "whyOthersAreWrong": {
      "A": "Personal preferences are not clinical information.",
      "C": "Unrelated staff conversation is not reportable client data.",
      "D": "An old unrelated delay does not inform treatment."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-006",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "data-reporting",
    "difficulty": "medium",
    "stem": "A caregiver reports that the client slept only two hours. The technician cannot verify this directly. How should it be documented?",
    "choices": [
      {
        "id": "A",
        "text": "As an established medical fact"
      },
      {
        "id": "B",
        "text": "As proof of the behavior’s function"
      },
      {
        "id": "C",
        "text": "As a caregiver report, clearly attributed to the caregiver"
      },
      {
        "id": "D",
        "text": "It should never be documented"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Relevant third-party information may be recorded with clear attribution, distinguishing reported information from direct observation.",
    "whyOthersAreWrong": {
      "A": "The technician did not directly establish the fact.",
      "B": "Sleep information may be relevant but does not prove behavioral function.",
      "D": "Relevant contextual information can be documented according to policy."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-007",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "incident-reporting",
    "difficulty": "medium",
    "stem": "A client falls, has visible swelling, and receives first aid. What documentation is most appropriate?",
    "choices": [
      {
        "id": "A",
        "text": "Mention it only in a private text to a friend"
      },
      {
        "id": "B",
        "text": "Wait to see whether anyone asks"
      },
      {
        "id": "C",
        "text": "Record that the client was careless"
      },
      {
        "id": "D",
        "text": "Complete required incident documentation with objective details and notifications, in addition to routine session records as policy requires"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Health and safety events require timely, objective reporting through the organization’s authorized incident process.",
    "whyOthersAreWrong": {
      "A": "A friend is not an authorized recipient of client information.",
      "B": "Delayed reporting can compromise safety and compliance.",
      "C": "“Careless” is a judgment, not an objective event description."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-008",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "communication",
    "difficulty": "medium",
    "stem": "A parent asks whether the treatment plan should be changed. What is the technician’s best response?",
    "choices": [
      {
        "id": "A",
        "text": "Listen respectfully, document or relay the concern, and refer the clinical decision to the supervisor"
      },
      {
        "id": "B",
        "text": "Promise to change the plan tomorrow"
      },
      {
        "id": "C",
        "text": "Argue that the current plan is always correct"
      },
      {
        "id": "D",
        "text": "Provide a new intervention from an online forum"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "The technician can receive and accurately communicate concerns but should refer treatment-design decisions to the qualified supervisor.",
    "whyOthersAreWrong": {
      "B": "The technician cannot promise an independent clinical change.",
      "C": "Concerns should be heard rather than dismissed.",
      "D": "Unreviewed online advice is not an authorized treatment plan."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-009",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "communication",
    "difficulty": "hard",
    "stem": "A supervisor gives an instruction that the technician does not understand. What should the technician do before implementing it?",
    "choices": [
      {
        "id": "A",
        "text": "Guess and avoid asking questions"
      },
      {
        "id": "B",
        "text": "Request clarification and, when relevant, demonstration or competency support"
      },
      {
        "id": "C",
        "text": "Ask a family member to define the clinical procedure"
      },
      {
        "id": "D",
        "text": "Change the instruction to something familiar"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Clarification protects the client and supports procedural fidelity; uncertainty should be resolved through the supervisor.",
    "whyOthersAreWrong": {
      "A": "Guessing can produce implementation errors.",
      "C": "Clinical procedure clarification belongs with qualified supervisory personnel.",
      "D": "Changing procedures independently is outside scope."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-010",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "confidential-records",
    "difficulty": "easy",
    "stem": "Where should paper data sheets containing client information be stored?",
    "choices": [
      {
        "id": "A",
        "text": "On the dashboard of an unlocked car"
      },
      {
        "id": "B",
        "text": "In a public waiting room"
      },
      {
        "id": "C",
        "text": "In the secure location authorized by the organization"
      },
      {
        "id": "D",
        "text": "At home where visitors can view them"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Client records must be protected from unauthorized access and handled according to organizational and legal requirements.",
    "whyOthersAreWrong": {
      "A": "An unlocked vehicle exposes records to loss or access.",
      "B": "A public area is not secure.",
      "D": "Home storage is inappropriate unless explicitly authorized and secured."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-011",
    "examSlug": "mock-exam",
    "topicSlug": "documentation-reporting",
    "subtopic": "confidential-records",
    "difficulty": "medium",
    "stem": "A technician needs to send a session update. Which method is appropriate?",
    "choices": [
      {
        "id": "A",
        "text": "A personal social-media direct message"
      },
      {
        "id": "B",
        "text": "A public group chat"
      },
      {
        "id": "C",
        "text": "A message to an unrelated coworker"
      },
      {
        "id": "D",
        "text": "An organization-approved secure communication channel to authorized recipients"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Client information should be transmitted only through approved secure systems and only to people who are authorized to receive it.",
    "whyOthersAreWrong": {
      "A": "Personal social media is generally not an approved clinical system.",
      "B": "Public group communication exposes confidential information.",
      "C": "Unrelated staff have no need to know."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-012",
    "examSlug": "practice-test-1",
    "topicSlug": "documentation-reporting",
    "subtopic": "record-corrections",
    "difficulty": "medium",
    "stem": "A technician writes the wrong time in an electronic note. What is the best correction?",
    "choices": [
      {
        "id": "A",
        "text": "Use the system’s approved correction or amendment process without concealing the original record"
      },
      {
        "id": "B",
        "text": "Delete the entire client record"
      },
      {
        "id": "C",
        "text": "Ask another technician to log in and change it"
      },
      {
        "id": "D",
        "text": "Leave the known error uncorrected"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Corrections should be transparent, attributable, and consistent with policy so the record retains integrity.",
    "whyOthersAreWrong": {
      "B": "Deleting the entire record destroys valid documentation.",
      "C": "Using another person’s credentials violates security and accountability.",
      "D": "Known material errors should be corrected."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-013",
    "examSlug": "practice-test-1",
    "topicSlug": "documentation-reporting",
    "subtopic": "record-integrity",
    "difficulty": "hard",
    "stem": "A coworker asks the technician to enter data for a session the coworker conducted. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Enter plausible values to help the team"
      },
      {
        "id": "B",
        "text": "Decline to attest to observations not personally made and follow policy for correcting missing documentation"
      },
      {
        "id": "C",
        "text": "Copy data from the previous session"
      },
      {
        "id": "D",
        "text": "Sign the coworker’s name"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Records must accurately identify who observed and documented services; fabricated or misattributed data undermine clinical and legal integrity.",
    "whyOthersAreWrong": {
      "A": "Plausible values are still fabricated.",
      "C": "Prior-session data do not represent the current session.",
      "D": "Signing another person’s name is misrepresentation."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-014",
    "examSlug": "practice-test-1",
    "topicSlug": "documentation-reporting",
    "subtopic": "session-notes",
    "difficulty": "medium",
    "stem": "Which information is most useful in a routine session note?",
    "choices": [
      {
        "id": "A",
        "text": "Personal criticism of the family"
      },
      {
        "id": "B",
        "text": "Speculation about diagnosis"
      },
      {
        "id": "C",
        "text": "Relevant context, procedures implemented, measurable performance, significant events, and required communications"
      },
      {
        "id": "D",
        "text": "Unrelated details about the technician’s weekend"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "A session note should support continuity of care by documenting relevant, objective service information.",
    "whyOthersAreWrong": {
      "A": "Personal criticism is unprofessional and not clinically useful.",
      "B": "Diagnosis is outside the technician’s role and speculation is not objective.",
      "D": "Unrelated personal details do not belong in the client record."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-015",
    "examSlug": "practice-test-2",
    "topicSlug": "documentation-reporting",
    "subtopic": "data-discrepancies",
    "difficulty": "hard",
    "stem": "A graph in the electronic system does not match the raw session sheet. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Alter the raw sheet to match the graph"
      },
      {
        "id": "B",
        "text": "Choose whichever value looks better"
      },
      {
        "id": "C",
        "text": "Ignore the discrepancy because the graph is automated"
      },
      {
        "id": "D",
        "text": "Preserve the source record, report the discrepancy, and correct the entry through the approved process"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Raw data should be preserved and discrepancies resolved transparently so clinical decisions rely on accurate information.",
    "whyOthersAreWrong": {
      "A": "Changing source data to fit an error is falsification.",
      "B": "Appearance is not a valid selection rule.",
      "C": "Automation does not eliminate the need to investigate mismatches."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-016",
    "examSlug": "practice-test-3",
    "topicSlug": "documentation-reporting",
    "subtopic": "mandated-reporting",
    "difficulty": "hard",
    "stem": "A technician observes information that may trigger a legal or organizational reporting duty. What is the safest professional response?",
    "choices": [
      {
        "id": "A",
        "text": "Follow applicable law and organizational policy immediately, including contacting designated supervisors or authorities as required"
      },
      {
        "id": "B",
        "text": "Investigate independently for several weeks"
      },
      {
        "id": "C",
        "text": "Promise secrecy before hearing details"
      },
      {
        "id": "D",
        "text": "Discuss the allegation with unrelated families"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Potential abuse, neglect, or other reportable events require prompt action under jurisdictional law and employer policy; the technician should not conduct a private investigation.",
    "whyOthersAreWrong": {
      "B": "Delaying to investigate may violate reporting timelines and exceeds the role.",
      "C": "Confidentiality cannot be promised when reporting duties may apply.",
      "D": "Unrelated families are not authorized recipients."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-017",
    "examSlug": "practice-test-3",
    "topicSlug": "documentation-reporting",
    "subtopic": "supervision-records",
    "difficulty": "medium",
    "stem": "Why should a technician accurately record supervision contacts and training activities when required?",
    "choices": [
      {
        "id": "A",
        "text": "To replace clinical data"
      },
      {
        "id": "B",
        "text": "To support accountability, competency development, and compliance with credential and employer requirements"
      },
      {
        "id": "C",
        "text": "To allow the technician to practice independently"
      },
      {
        "id": "D",
        "text": "To advertise private services"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Accurate supervision records document oversight and professional development but do not replace client data or expand scope.",
    "whyOthersAreWrong": {
      "A": "Supervision records and clinical outcome data serve different purposes.",
      "C": "RBT practice remains supervised.",
      "D": "The records are not marketing material."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-018",
    "examSlug": "practice-test-3",
    "topicSlug": "documentation-reporting",
    "subtopic": "handoff-communication",
    "difficulty": "medium",
    "stem": "At the end of a shift, what is the best handoff to the next authorized team member?",
    "choices": [
      {
        "id": "A",
        "text": "A vague statement that the client was difficult"
      },
      {
        "id": "B",
        "text": "Every personal detail the technician knows about the family"
      },
      {
        "id": "C",
        "text": "A concise, objective summary of clinically relevant events, current status, and any required follow-up through an approved channel"
      },
      {
        "id": "D",
        "text": "No information, even when a safety follow-up is pending"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "A good handoff communicates necessary facts for continuity and safety while limiting disclosure to relevant information.",
    "whyOthersAreWrong": {
      "A": "“Difficult” is vague and judgmental.",
      "B": "Only relevant information should be shared on a need-to-know basis.",
      "D": "Withholding necessary safety information can place the client at risk."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-019",
    "examSlug": "practice-test-3",
    "topicSlug": "documentation-reporting",
    "subtopic": "documentation-boundaries",
    "difficulty": "hard",
    "stem": "A technician uses an AI writing tool that is not approved by the employer and pastes identifiable client notes into it. What is the primary problem?",
    "choices": [
      {
        "id": "A",
        "text": "The note may become too objective"
      },
      {
        "id": "B",
        "text": "AI automatically becomes the clinical supervisor"
      },
      {
        "id": "C",
        "text": "The session data become permanent-product measures"
      },
      {
        "id": "D",
        "text": "Confidential information may be disclosed to an unauthorized system"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Identifiable client information must not be entered into unapproved external systems; tools must comply with organizational privacy and security rules.",
    "whyOthersAreWrong": {
      "A": "The privacy problem exists regardless of writing quality.",
      "B": "A software tool cannot replace required human supervision.",
      "C": "Use of a writing tool does not change the behavioral measurement dimension."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-001",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "scope-of-practice",
    "difficulty": "easy",
    "stem": "A family asks the technician to design a toilet-training program. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Refer the request to the supervising clinician and continue only authorized procedures"
      },
      {
        "id": "B",
        "text": "Design the program using personal experience"
      },
      {
        "id": "C",
        "text": "Search online and begin the most popular method"
      },
      {
        "id": "D",
        "text": "Ask another technician to approve a plan"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Designing or independently modifying clinical programs is outside the technician’s role; the request should be referred to the qualified supervisor.",
    "whyOthersAreWrong": {
      "B": "Personal experience does not authorize independent treatment design.",
      "C": "Online popularity is not clinical authorization.",
      "D": "A peer technician cannot provide the required supervisory approval."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-002",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "competence",
    "difficulty": "easy",
    "stem": "A supervisor assigns a procedure the technician has never been trained to implement. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Attempt it once to appear confident"
      },
      {
        "id": "B",
        "text": "Request training, clarification, and competency support before independent implementation"
      },
      {
        "id": "C",
        "text": "Refuse all future supervision"
      },
      {
        "id": "D",
        "text": "Ask the client to explain the procedure"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Technicians should work within demonstrated competence and obtain training or support before implementing unfamiliar procedures.",
    "whyOthersAreWrong": {
      "A": "Untrained implementation can endanger the client and compromise treatment.",
      "C": "The appropriate response is to seek support, not reject supervision generally.",
      "D": "The client is not responsible for training staff."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-003",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "client-dignity",
    "difficulty": "easy",
    "stem": "Which action best protects client dignity during personal-care teaching?",
    "choices": [
      {
        "id": "A",
        "text": "Discuss the client’s performance loudly in a hallway"
      },
      {
        "id": "B",
        "text": "Invite visitors to observe without authorization"
      },
      {
        "id": "C",
        "text": "Use privacy safeguards, respectful language, and only necessary assistance"
      },
      {
        "id": "D",
        "text": "Use embarrassing jokes to encourage cooperation"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Dignity is supported by privacy, respectful interaction, individualized assistance, and minimizing unnecessary exposure.",
    "whyOthersAreWrong": {
      "A": "Public discussion exposes private information.",
      "B": "Observation requires appropriate authorization and need.",
      "D": "Embarrassment is not a respectful teaching strategy."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-004",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "confidentiality",
    "difficulty": "easy",
    "stem": "A neighbor asks whether a child they recognize receives services from the technician’s employer. What is the best response?",
    "choices": [
      {
        "id": "A",
        "text": "Confirm only that the child attends the clinic"
      },
      {
        "id": "B",
        "text": "Share general progress but omit the diagnosis"
      },
      {
        "id": "C",
        "text": "Ask why the neighbor wants to know, then decide"
      },
      {
        "id": "D",
        "text": "State that the technician cannot confirm or discuss who receives services"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Even confirming that someone is a client can disclose protected information; the technician should not confirm or deny service status.",
    "whyOthersAreWrong": {
      "A": "Attendance itself may be confidential.",
      "B": "Progress information remains confidential even without a diagnosis.",
      "C": "The neighbor’s reason does not create authorization."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-005",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "professional-boundaries",
    "difficulty": "medium",
    "stem": "A caregiver invites the technician to a private family celebration unrelated to services. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Consider organizational policy and discuss boundary concerns with the supervisor before responding"
      },
      {
        "id": "B",
        "text": "Accept automatically to build rapport"
      },
      {
        "id": "C",
        "text": "Attend secretly"
      },
      {
        "id": "D",
        "text": "Offer to provide therapy during the event"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Social invitations can create multiple-relationship and boundary risks; the technician should follow policy and seek supervisory guidance.",
    "whyOthersAreWrong": {
      "B": "Rapport does not eliminate boundary concerns.",
      "C": "Secrecy increases ethical risk.",
      "D": "Providing services in an unplanned social setting is not authorized."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-006",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "gifts",
    "difficulty": "medium",
    "stem": "A family offers the technician an expensive electronic device as a thank-you gift. What is the best action?",
    "choices": [
      {
        "id": "A",
        "text": "Accept because refusing may seem rude"
      },
      {
        "id": "B",
        "text": "Follow the applicable ethics requirements and employer policy, and consult the supervisor before accepting any questionable gift"
      },
      {
        "id": "C",
        "text": "Sell it and donate the money"
      },
      {
        "id": "D",
        "text": "Accept it but do not tell anyone"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "High-value gifts can create conflicts, expectations, or exploitation concerns and should be handled transparently under current rules and policy.",
    "whyOthersAreWrong": {
      "A": "Politeness does not override professional obligations.",
      "C": "Taking possession to sell it still accepts the gift.",
      "D": "Concealment is inconsistent with professional accountability."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-007",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "multiple-relationships",
    "difficulty": "medium",
    "stem": "A technician is asked to provide paid babysitting for a current client outside service hours. What is the primary concern?",
    "choices": [
      {
        "id": "A",
        "text": "It automatically improves treatment integrity"
      },
      {
        "id": "B",
        "text": "It is required whenever a family asks"
      },
      {
        "id": "C",
        "text": "It may create a multiple relationship and blur professional boundaries"
      },
      {
        "id": "D",
        "text": "It converts the technician into an independent supervisor"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Combining service and private caregiving roles can create conflicts, exploitation risk, and unclear boundaries.",
    "whyOthersAreWrong": {
      "A": "An additional role does not improve treatment integrity automatically.",
      "B": "Families cannot require staff to enter private arrangements.",
      "D": "Babysitting does not confer supervisory qualifications."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-008",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "social-media",
    "difficulty": "easy",
    "stem": "A technician wants to post a photo from a client session because the client’s face is partly covered. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Post it if the technician’s account is private"
      },
      {
        "id": "B",
        "text": "Post it without the client’s name"
      },
      {
        "id": "C",
        "text": "Ask followers whether the photo seems identifiable"
      },
      {
        "id": "D",
        "text": "Do not post client-related content unless explicitly authorized under law, policy, and informed consent requirements"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Client images and service details require strict authorization; partial concealment or a private account does not make posting appropriate.",
    "whyOthersAreWrong": {
      "A": "Private accounts can still disclose or redistribute content.",
      "B": "Context, location, or appearance may identify the client even without a name.",
      "C": "Public polling compounds the disclosure."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-009",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "public-statements",
    "difficulty": "medium",
    "stem": "Which professional statement is most appropriate for a technician’s public profile?",
    "choices": [
      {
        "id": "A",
        "text": "“I provide supervised behavior-technician services within my training and assigned role.”"
      },
      {
        "id": "B",
        "text": "“I cure autism using my own method.”"
      },
      {
        "id": "C",
        "text": "“I am equivalent to a licensed psychologist.”"
      },
      {
        "id": "D",
        "text": "“My clients always improve.”"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "The second statement accurately represents the supervised technician role without guarantees or unsupported claims.",
    "whyOthersAreWrong": {
      "B": "Claims of cure and a proprietary independent method are misleading.",
      "C": "A behavior technician is not equivalent to a psychologist.",
      "D": "Outcome guarantees are inaccurate and unethical."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-010",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "supervision",
    "difficulty": "easy",
    "stem": "Why is ongoing supervision essential for technician services?",
    "choices": [
      {
        "id": "A",
        "text": "It allows the technician to practice independently afterward without limits"
      },
      {
        "id": "B",
        "text": "It provides clinical direction, performance feedback, competency support, and accountability"
      },
      {
        "id": "C",
        "text": "It replaces the need to follow written plans"
      },
      {
        "id": "D",
        "text": "It is only a payroll formality"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "The technician role is designed for practice under qualified oversight, with supervision supporting safe and effective implementation.",
    "whyOthersAreWrong": {
      "A": "Supervision does not convert the role into independent practice.",
      "C": "Written plans remain important.",
      "D": "Supervision is a substantive clinical and credential requirement."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-011",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "supervision",
    "difficulty": "hard",
    "stem": "A technician has repeatedly requested supervision but cannot obtain the required oversight. What is the best response?",
    "choices": [
      {
        "id": "A",
        "text": "Continue indefinitely and conceal the gap"
      },
      {
        "id": "B",
        "text": "Ask a family member to supervise"
      },
      {
        "id": "C",
        "text": "Document attempts, use organizational escalation channels, and avoid practicing outside applicable supervision requirements"
      },
      {
        "id": "D",
        "text": "Describe ordinary coworker conversations as formal supervision"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Supervision gaps should be addressed transparently through appropriate channels; required supervision cannot be fabricated or replaced by unqualified oversight.",
    "whyOthersAreWrong": {
      "A": "Concealing a gap threatens clients and credential compliance.",
      "B": "Family members are not automatically qualified supervisors.",
      "D": "Mislabeling informal contact is inaccurate documentation."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-012",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "conflicts-of-interest",
    "difficulty": "medium",
    "stem": "A technician receives a bonus only if recorded client progress exceeds a target. What should the technician do when data do not meet the target?",
    "choices": [
      {
        "id": "A",
        "text": "Adjust the data slightly to protect the bonus"
      },
      {
        "id": "B",
        "text": "Omit difficult sessions"
      },
      {
        "id": "C",
        "text": "Ask the client to perform after the session so the numbers can be changed"
      },
      {
        "id": "D",
        "text": "Record the actual data and raise any conflict-of-interest concern through proper channels"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Data must remain accurate regardless of financial incentives; conflicting incentives should be disclosed and managed.",
    "whyOthersAreWrong": {
      "A": "Changing valid data is falsification.",
      "B": "Selective omission creates a misleading record.",
      "C": "Post-session performance does not alter what occurred during the measured session."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-013",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "cultural-responsiveness",
    "difficulty": "medium",
    "stem": "A family’s communication practice differs from what the technician expects. What is the most professional response?",
    "choices": [
      {
        "id": "A",
        "text": "Ask respectful questions within the technician’s role, avoid stereotypes, and consult the supervisor about culturally responsive implementation"
      },
      {
        "id": "B",
        "text": "Assume the family is uncooperative"
      },
      {
        "id": "C",
        "text": "Insist that the family adopt the technician’s customs"
      },
      {
        "id": "D",
        "text": "Document the difference as pathology"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Culturally responsive practice requires humility, respectful inquiry, and adaptation through appropriate clinical channels rather than assumptions.",
    "whyOthersAreWrong": {
      "B": "Labeling without understanding is biased.",
      "C": "The technician should not impose personal customs.",
      "D": "Cultural difference is not itself pathology."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-014",
    "examSlug": "mock-exam",
    "topicSlug": "professional-conduct",
    "subtopic": "assent-and-autonomy",
    "difficulty": "medium",
    "stem": "During a low-risk teaching activity, a client repeatedly communicates “stop,” and the plan includes an assent-withdrawal procedure. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Ignore all communication until the session ends"
      },
      {
        "id": "B",
        "text": "Follow the planned pause or withdrawal procedure and notify the supervisor as required"
      },
      {
        "id": "C",
        "text": "Threaten a loss unrelated to the program"
      },
      {
        "id": "D",
        "text": "Physically force completion because data are needed"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "The technician should follow authorized procedures that recognize communication, choice, and withdrawal while preserving safety and clinical accountability.",
    "whyOthersAreWrong": {
      "A": "Ignoring clear communication conflicts with the plan and dignity.",
      "C": "Unplanned threats are inappropriate.",
      "D": "Data collection does not justify unnecessary coercion."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-015",
    "examSlug": "practice-test-1",
    "topicSlug": "professional-conduct",
    "subtopic": "dual-relationships",
    "difficulty": "hard",
    "stem": "A technician discovers that a newly assigned client is the child of a close personal friend. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Keep the friendship secret"
      },
      {
        "id": "B",
        "text": "Use personal knowledge to alter the plan"
      },
      {
        "id": "C",
        "text": "Disclose the potential conflict to the appropriate supervisor and follow reassignment or management procedures"
      },
      {
        "id": "D",
        "text": "Discuss the client with mutual friends"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "A close preexisting relationship can impair objectivity and confidentiality, so it should be disclosed and managed through the organization.",
    "whyOthersAreWrong": {
      "A": "Concealment prevents appropriate risk management.",
      "B": "Personal knowledge does not authorize program changes.",
      "D": "Mutual friends are not authorized recipients."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-016",
    "examSlug": "practice-test-1",
    "topicSlug": "professional-conduct",
    "subtopic": "client-welfare",
    "difficulty": "hard",
    "stem": "A supervisor directs a procedure that appears inconsistent with the written plan and may pose immediate harm. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Implement it silently regardless of risk"
      },
      {
        "id": "B",
        "text": "Post the dispute online"
      },
      {
        "id": "C",
        "text": "Ask the client to choose which staff member is correct"
      },
      {
        "id": "D",
        "text": "Pause when necessary for safety, seek immediate clarification through appropriate channels, and follow emergency or escalation policy"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Client safety takes priority; concerning discrepancies should be addressed promptly through supervision and organizational safeguards.",
    "whyOthersAreWrong": {
      "A": "Blind implementation is not appropriate when immediate harm is reasonably suspected.",
      "B": "Public posting breaches confidentiality and does not resolve clinical risk.",
      "C": "The client should not be placed in the middle of a staff conflict."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-017",
    "examSlug": "practice-test-2",
    "topicSlug": "professional-conduct",
    "subtopic": "accurate-credentials",
    "difficulty": "easy",
    "stem": "A technician’s certification has expired. How should the technician represent their status?",
    "choices": [
      {
        "id": "A",
        "text": "Stop representing themselves as currently certified and follow the required reinstatement or application process"
      },
      {
        "id": "B",
        "text": "Continue using the credential until an employer notices"
      },
      {
        "id": "C",
        "text": "Use the credential only on social media"
      },
      {
        "id": "D",
        "text": "Ask a coworker to lend their certification number"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Credential status must be represented accurately; an expired credential cannot be presented as current.",
    "whyOthersAreWrong": {
      "B": "Continued use is misrepresentation.",
      "C": "Public profiles are also professional representations.",
      "D": "Credential numbers are individual and cannot be shared."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-018",
    "examSlug": "practice-test-2",
    "topicSlug": "professional-conduct",
    "subtopic": "professional-communication",
    "difficulty": "medium",
    "stem": "A technician disagrees with a caregiver’s statement during a session. Which response is most appropriate?",
    "choices": [
      {
        "id": "A",
        "text": "Tell the caregiver they are wrong in front of the client"
      },
      {
        "id": "B",
        "text": "Respond respectfully, avoid arguing, clarify observable facts within scope, and involve the supervisor when clinical decisions are needed"
      },
      {
        "id": "C",
        "text": "End services immediately"
      },
      {
        "id": "D",
        "text": "Share the disagreement with other families"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Professional communication remains respectful and focused on facts, role boundaries, and appropriate escalation.",
    "whyOthersAreWrong": {
      "A": "Public confrontation can damage dignity and collaboration.",
      "C": "The technician does not independently terminate services over ordinary disagreement.",
      "D": "Other families have no role or need to know."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-019",
    "examSlug": "practice-test-3",
    "topicSlug": "professional-conduct",
    "subtopic": "privacy",
    "difficulty": "hard",
    "stem": "A technician recognizes a client in a public place. What is usually the best approach?",
    "choices": [
      {
        "id": "A",
        "text": "Call out the client’s name and workplace connection"
      },
      {
        "id": "B",
        "text": "Introduce the client as someone receiving ABA services"
      },
      {
        "id": "C",
        "text": "Allow the client or caregiver to decide whether to acknowledge the relationship, while protecting confidentiality"
      },
      {
        "id": "D",
        "text": "Take a photograph to document the encounter"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Avoiding unsolicited acknowledgment protects the client from disclosure; the technician can respond naturally if the client initiates contact.",
    "whyOthersAreWrong": {
      "A": "Calling attention to the relationship may reveal confidential information.",
      "B": "Service status should not be disclosed publicly.",
      "D": "A photograph is unnecessary and may create an additional privacy breach."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-020",
    "examSlug": "practice-test-3",
    "topicSlug": "professional-conduct",
    "subtopic": "service-continuity",
    "difficulty": "medium",
    "stem": "A technician plans to leave the employer and wants to tell the family privately before notifying the clinical team. What is the most professional action?",
    "choices": [
      {
        "id": "A",
        "text": "Promise to continue services privately without authorization"
      },
      {
        "id": "B",
        "text": "Ask the family to keep the departure secret"
      },
      {
        "id": "C",
        "text": "Take copies of client records for future use"
      },
      {
        "id": "D",
        "text": "Follow organizational transition and communication procedures so services and boundaries are managed appropriately"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Transitions should be coordinated through authorized channels to protect continuity, confidentiality, and role boundaries.",
    "whyOthersAreWrong": {
      "A": "Private service arrangements may violate scope, contracts, and supervision requirements.",
      "B": "Secrecy undermines coordinated care.",
      "C": "Client records belong in authorized systems and must not be taken."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-021",
    "examSlug": "practice-test-3",
    "topicSlug": "professional-conduct",
    "subtopic": "ethical-decision-making",
    "difficulty": "hard",
    "stem": "When uncertain whether an action is professionally appropriate, what is the best general process?",
    "choices": [
      {
        "id": "A",
        "text": "Pause when feasible, review current requirements and policy, consult qualified supervision, document relevant guidance, and prioritize client welfare"
      },
      {
        "id": "B",
        "text": "Choose whichever option is fastest"
      },
      {
        "id": "C",
        "text": "Rely only on what a friend would do"
      },
      {
        "id": "D",
        "text": "Proceed secretly and ask forgiveness later"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Ethical uncertainty should be resolved through current standards, policy, qualified consultation, and a client-centered risk assessment.",
    "whyOthersAreWrong": {
      "B": "Speed alone is not an ethical decision criterion.",
      "C": "Friends may not know the applicable requirements or context.",
      "D": "Secrecy prevents accountability and may expose the client to harm."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-022",
    "examSlug": "practice-test-3",
    "topicSlug": "professional-conduct",
    "subtopic": "non-discrimination",
    "difficulty": "medium",
    "stem": "A coworker makes a demeaning remark about a client’s disability. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Join the joke to avoid conflict"
      },
      {
        "id": "B",
        "text": "Protect the client’s dignity, address or report the conduct through appropriate channels, and follow workplace policy"
      },
      {
        "id": "C",
        "text": "Repeat the remark in the session note"
      },
      {
        "id": "D",
        "text": "Ignore all discriminatory conduct"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Technicians should support respectful, nondiscriminatory services and use established reporting or escalation procedures.",
    "whyOthersAreWrong": {
      "A": "Participation compounds harm.",
      "C": "A demeaning remark is not a clinical observation to reproduce as commentary.",
      "D": "Ignoring misconduct may leave the client unprotected."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-027",
    "examSlug": "practice-test-1",
    "topicSlug": "measurement",
    "subtopic": "graphing",
    "difficulty": "hard",
    "stem": "Two adjacent conditions have similar average levels, but one condition shows much less session-to-session fluctuation. Which feature differs most clearly?",
    "choices": [
      {
        "id": "A",
        "text": "Trend"
      },
      {
        "id": "B",
        "text": "Response definition"
      },
      {
        "id": "C",
        "text": "Variability"
      },
      {
        "id": "D",
        "text": "Observation duration"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "When average magnitude is similar but the spread of data points differs, variability is the clearest distinguishing feature.",
    "whyOthersAreWrong": {
      "A": "Trend concerns direction over time, which is not described as different.",
      "B": "The scenario compares graph patterns, not the wording of the definition.",
      "D": "Observation duration may affect measurement but is not the visual feature described."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-039",
    "examSlug": "practice-test-1",
    "topicSlug": "skill-acquisition",
    "subtopic": "reinforcement-schedules",
    "difficulty": "hard",
    "stem": "A learner receives reinforcement after an unpredictable number of correct responses centered around five. Which schedule is described?",
    "choices": [
      {
        "id": "A",
        "text": "Fixed ratio 5"
      },
      {
        "id": "B",
        "text": "Fixed interval 5 minutes"
      },
      {
        "id": "C",
        "text": "Variable interval 5 minutes"
      },
      {
        "id": "D",
        "text": "Variable ratio 5"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "A variable-ratio schedule delivers reinforcement after a changing number of responses that averages around the stated value.",
    "whyOthersAreWrong": {
      "A": "Fixed ratio 5 reinforces after exactly every fifth response.",
      "B": "Fixed interval schedules are based on elapsed time, not response count.",
      "C": "Variable interval schedules use changing time intervals."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-023",
    "examSlug": "practice-test-1",
    "topicSlug": "professional-conduct",
    "subtopic": "gifts",
    "difficulty": "hard",
    "stem": "A family offers the technician a small culturally meaningful item, and current policy allows some low-value gifts under defined conditions. What is the best response?",
    "choices": [
      {
        "id": "A",
        "text": "Review the applicable rule and organizational policy, and consult the supervisor when any uncertainty remains"
      },
      {
        "id": "B",
        "text": "Accept immediately without recording it"
      },
      {
        "id": "C",
        "text": "Reject it publicly and criticize the custom"
      },
      {
        "id": "D",
        "text": "Trade it for additional service time"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Gift decisions should follow current requirements and policy while being handled respectfully and transparently.",
    "whyOthersAreWrong": {
      "B": "Automatic acceptance ignores applicable conditions and disclosure rules.",
      "C": "Disrespecting a cultural practice is unnecessary and unprofessional.",
      "D": "Exchanging gifts for services creates a financial and boundary problem."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-asmt-017",
    "examSlug": "practice-test-2",
    "topicSlug": "assessment",
    "subtopic": "preference-assessments",
    "difficulty": "hard",
    "stem": "During an MSWO assessment, the technician repeatedly leaves selected items in the array. What is the main problem?",
    "choices": [
      {
        "id": "A",
        "text": "The assessment automatically becomes a functional analysis"
      },
      {
        "id": "B",
        "text": "The procedure has shifted away from the without-replacement format and may change the ranking produced"
      },
      {
        "id": "C",
        "text": "All selections must be scored as incorrect"
      },
      {
        "id": "D",
        "text": "The items become punishers"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "In MSWO, selected items are removed; returning them changes the procedure and can allow one item to be selected repeatedly.",
    "whyOthersAreWrong": {
      "A": "A preference-format deviation does not create experimental functional-analysis conditions.",
      "C": "Selections still occurred, although the protocol deviation must be reported.",
      "D": "Repeated availability does not make an item a punisher."
    },
    "sourceRefs": [
      "src-preference-assessment-research",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-030",
    "examSlug": "practice-test-2",
    "topicSlug": "behavior-reduction",
    "subtopic": "antecedent-strategies",
    "difficulty": "hard",
    "stem": "A plan provides brief attention on a time-based schedule to reduce attention-maintained calling out. This antecedent arrangement is best described as:",
    "choices": [
      {
        "id": "A",
        "text": "Response cost"
      },
      {
        "id": "B",
        "text": "DRA only"
      },
      {
        "id": "C",
        "text": "Noncontingent reinforcement"
      },
      {
        "id": "D",
        "text": "Escape extinction"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Noncontingent reinforcement delivers the relevant reinforcer according to time rather than contingent on the target behavior.",
    "whyOthersAreWrong": {
      "A": "Response cost removes a conditioned reinforcer following behavior.",
      "B": "DRA requires reinforcement contingent on a specified alternative response.",
      "D": "Escape extinction concerns withholding task removal for escape-maintained behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-doc-020",
    "examSlug": "practice-test-2",
    "topicSlug": "documentation-reporting",
    "subtopic": "objective-documentation",
    "difficulty": "hard",
    "stem": "A session was shortened because the building lost power. Which note is best?",
    "choices": [
      {
        "id": "A",
        "text": "“The session failed because management was irresponsible.”"
      },
      {
        "id": "B",
        "text": "“Nothing important happened.”"
      },
      {
        "id": "C",
        "text": "“The client could not cope with darkness.”"
      },
      {
        "id": "D",
        "text": "“The session ended at 2:35 p.m. after a building-wide power outage; the supervisor and caregiver were notified according to policy.”"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "The second note objectively states the event, time, effect on service, and required communication without blame or unsupported inference.",
    "whyOthersAreWrong": {
      "A": "Blame is not necessary clinical documentation.",
      "B": "The interruption affected service and should be recorded.",
      "C": "The statement infers an internal inability not established by the facts."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-meas-028",
    "examSlug": "practice-test-3",
    "topicSlug": "measurement",
    "subtopic": "continuous-measurement",
    "difficulty": "medium",
    "stem": "Across a 50-minute observation, a behavior occurs for a total of 10 minutes. What percentage of the observation contained the behavior?",
    "choices": [
      {
        "id": "A",
        "text": "20%"
      },
      {
        "id": "B",
        "text": "10%"
      },
      {
        "id": "C",
        "text": "40%"
      },
      {
        "id": "D",
        "text": "50%"
      }
    ],
    "correctChoiceId": "A",
    "explanation": "Ten minutes divided by fifty minutes, multiplied by 100, equals 20%.",
    "whyOthersAreWrong": {
      "B": "Ten is the duration in minutes, not the percentage.",
      "C": "Forty percent would equal 20 minutes of behavior.",
      "D": "Fifty percent would equal 25 minutes of behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-acq-040",
    "examSlug": "practice-test-3",
    "topicSlug": "skill-acquisition",
    "subtopic": "prompt-fading",
    "difficulty": "hard",
    "stem": "A visual prompt is gradually made smaller and less noticeable across trials until the natural material controls responding. This is an example of:",
    "choices": [
      {
        "id": "A",
        "text": "Response cost"
      },
      {
        "id": "B",
        "text": "Stimulus fading"
      },
      {
        "id": "C",
        "text": "Backward chaining"
      },
      {
        "id": "D",
        "text": "DRO"
      }
    ],
    "correctChoiceId": "B",
    "explanation": "Stimulus fading gradually changes an added cue so control transfers to the relevant natural stimulus.",
    "whyOthersAreWrong": {
      "A": "Response cost removes a reinforcer after behavior.",
      "C": "Backward chaining teaches a sequence from the final step.",
      "D": "DRO reinforces periods without a target behavior."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-red-031",
    "examSlug": "practice-test-3",
    "topicSlug": "behavior-reduction",
    "subtopic": "differential-reinforcement",
    "difficulty": "hard",
    "stem": "A learner receives reinforcement for completing work with zero aggression during a 10-minute interval, but appropriate help requests are not specifically required. Which procedure is this?",
    "choices": [
      {
        "id": "A",
        "text": "DRA"
      },
      {
        "id": "B",
        "text": "DRI"
      },
      {
        "id": "C",
        "text": "DRO"
      },
      {
        "id": "D",
        "text": "DRL"
      }
    ],
    "correctChoiceId": "C",
    "explanation": "Reinforcement is based on the absence of aggression during the interval, which is a DRO arrangement.",
    "whyOthersAreWrong": {
      "A": "DRA would require a specified alternative response such as asking for help.",
      "B": "DRI would reinforce a named behavior physically incompatible with aggression.",
      "D": "DRL would reinforce a lower rate rather than no aggression during the interval."
    },
    "sourceRefs": [
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  },
  {
    "id": "q-eth-024",
    "examSlug": "practice-test-3",
    "topicSlug": "professional-conduct",
    "subtopic": "confidentiality",
    "difficulty": "hard",
    "stem": "A technician receives a subpoena or other legal request for client records directly. What should the technician do?",
    "choices": [
      {
        "id": "A",
        "text": "Send the complete record immediately from personal email"
      },
      {
        "id": "B",
        "text": "Delete the records to protect confidentiality"
      },
      {
        "id": "C",
        "text": "Discuss the request with friends who understand law"
      },
      {
        "id": "D",
        "text": "Preserve the request and promptly follow organizational legal, privacy, and supervisory procedures rather than responding independently"
      }
    ],
    "correctChoiceId": "D",
    "explanation": "Legal requests require prompt handling through authorized organizational and legal channels; the technician should not independently release or destroy records.",
    "whyOthersAreWrong": {
      "A": "Personal email and independent disclosure may violate privacy and legal process.",
      "B": "Destroying records is improper and may be unlawful.",
      "C": "Friends are not authorized legal or clinical advisors for the case."
    },
    "sourceRefs": [
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "lastVerified": "2026-06-24",
    "status": "reviewed",
    "isOfficialQuestion": false
  }
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
