/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Original Study Guides
 *
 * Six independently written domain guides aligned to the publicly
 * identified 2026 RBT content areas. No official task wording or
 * examination content is reproduced.
 * Content status: reviewed. Last internal review: 2026-06-24
 * ────────────────────────────────────────────────────────────── */

import { StudyGuide } from "@/types";

export const studyGuides: StudyGuide[] = [
  {
    "slug": "measurement",
    "title": "Data Collection and Graphing",
    "description": "Learn how technicians define behavior, select and implement measurement systems, calculate common values, maintain data quality, and update graphs accurately.",
    "estimatedReadTime": "22 min",
    "status": "reviewed",
    "lastVerified": "2026-06-24",
    "sourceRefs": [
      "src-bacb-tco-3e",
      "src-cooper-aba-3e",
      "src-internal-review"
    ],
    "sections": [
      {
        "heading": "Why measurement matters",
        "body": "Behavior-analytic decisions depend on observable evidence. A technician’s job is not to decide whether a person is doing “better” based on impression; it is to record defined events in a way that allows the supervisor to evaluate change. Good measurement is objective, consistent, feasible in the service setting, and matched to the dimension of behavior that matters.\n\nBefore collecting data, review the operational definition. It should identify what counts, what does not count, and where an episode begins and ends. When a definition is unclear, request clarification rather than creating a personal interpretation. Small differences in how staff apply a definition can produce large differences in the graph."
      },
      {
        "heading": "Continuous measurement",
        "body": "Continuous systems attempt to capture every relevant occurrence during the observation period. Count is the total number of responses. Rate adjusts count for observation time, such as responses per hour. Duration measures how long behavior lasts. Latency measures the delay from a specified antecedent to response onset. Interresponse time measures the time between successive responses.\n\nOther useful measures include percentage of opportunities and trials to criterion. Percentage is calculated by dividing successful opportunities by total opportunities and multiplying by 100. Trials to criterion records how many teaching opportunities are needed before a predefined standard is met. Record units clearly; a number without its unit can be misleading.",
        "callout": "Choose the measure specified in the plan. Do not switch from count to duration, or from raw count to rate, without authorization."
      },
      {
        "heading": "Permanent products",
        "body": "Some behavior leaves a measurable result after the response is complete. Examples include assembled items, completed forms, dishes placed in storage, or correctly sorted materials. Permanent-product measurement can be efficient because the observer may not need to watch the behavior occur.\n\nThe product must be caused by the target behavior, distinguishable from products made by others, and available for reliable counting. A completed worksheet may not be a valid product of independent work if another person filled it in. When the plan requires direct observation of quality, prompts, or safety, a permanent product alone may be insufficient."
      },
      {
        "heading": "Discontinuous measurement",
        "body": "Discontinuous systems estimate behavior from samples. Partial-interval recording scores an interval if behavior occurred at any time during it; it can overestimate the proportion of time occupied by behavior. Whole-interval recording scores an interval only if behavior occurred throughout it; it can underestimate occurrence. Momentary time sampling records whether behavior is occurring at a specific instant, often at the end of the interval.\n\nThese systems are useful when continuous recording is impractical, but they do not produce the same information as exact count or duration. Interval length, observation schedule, and the behavior’s pattern affect the estimate. Follow the specified timing and avoid watching only when behavior seems likely."
      },
      {
        "heading": "Data quality and observer agreement",
        "body": "Accurate data require correct definitions, reliable timing tools, complete records, and consistent implementation. Observer drift occurs when a person gradually changes how they apply a definition. Periodic retraining and comparison with examples can reduce drift.\n\nInterobserver agreement compares independent records from the same observation. High agreement supports confidence that observers applied the system similarly, but it does not prove that the definition itself is clinically useful. Treatment integrity or procedural fidelity is a separate question: Was the intervention delivered as written? A session can have accurate measurement and poor implementation, or the reverse."
      },
      {
        "heading": "Graphing and visual features",
        "body": "On a typical line graph, the horizontal axis represents sessions, dates, or time, and the vertical axis represents the measured value. Data points are plotted in sequence and connected within the same condition when appropriate. Condition-change lines and labels show when a meaningful change in baseline, teaching, or intervention occurred.\n\nVisual review often considers level, trend, and variability. Level is the general magnitude of the data. Trend is the overall direction. Variability is the amount of fluctuation. Technicians should enter data accurately and promptly, not interpret beyond their assigned role or alter data to make a pattern look cleaner."
      },
      {
        "heading": "Common calculations",
        "body": "Rate equals count divided by observation time. Convert time into the same unit requested by the program. For example, 15 responses in 30 minutes equals 0.5 responses per minute or 30 responses per hour. Percentage equals correct responses divided by total opportunities multiplied by 100.\n\nFor total-count agreement, divide the smaller count by the larger count and multiply by 100. Other agreement formulas exist, so use the formula specified by the supervisor or system. Keep raw values available; a calculated percentage should be traceable to its numerator and denominator."
      },
      {
        "heading": "Errors, missing data, and corrections",
        "body": "Never estimate data from memory when direct recording was required. If data are missing, mark them according to policy rather than entering zero; zero means the behavior was observed and did not occur. If an entry is wrong, use the approved correction process. Electronic systems may preserve an audit trail, while paper systems may require a single-line correction, date, and initials.\n\nReport equipment failures, unclear definitions, interrupted observations, or deviations that may affect interpretation. Honest documentation of a limitation is more useful than a precise-looking value that was not actually measured.",
        "callout": "A known data error should be corrected transparently. Do not delete valid low scores, backfill plausible values, or change raw records to match a graph."
      }
    ]
  },
  {
    "slug": "assessment",
    "title": "Behavior Assessment",
    "description": "Understand preference assessments, descriptive observation, skill assessment assistance, and the technician’s supervised role in functional assessment.",
    "estimatedReadTime": "19 min",
    "status": "reviewed",
    "lastVerified": "2026-06-24",
    "sourceRefs": [
      "src-bacb-tco-3e",
      "src-cooper-aba-3e",
      "src-preference-assessment-research",
      "src-functional-assessment-research",
      "src-internal-review"
    ],
    "sections": [
      {
        "heading": "The technician’s role in assessment",
        "body": "Technicians may gather information, prepare materials, present assessment trials, record responses, and assist with procedures after training. They do not independently diagnose, determine behavioral function, select assessment conditions, or make clinical recommendations. The supervisor is responsible for assessment design and interpretation.\n\nBefore beginning, review the purpose, response definitions, materials, trial sequence, prompting rules, stopping criteria, data codes, and safety procedures. Standardization matters: changing instructions, rearranging conditions inconsistently, or giving extra prompts can invalidate results."
      },
      {
        "heading": "Preference and reinforcement are different",
        "body": "A preference assessment identifies items or activities selected more often than alternatives. A reinforcer is defined by its effect: when delivered after a response, it increases or maintains future responding. A highly selected item may fail to function as a reinforcer in a particular teaching arrangement, and an item’s value can change with recent access, deprivation, illness, or context.\n\nPreference should therefore be reassessed as the plan directs. The technician records selections and engagement without assuming that a favorite item will always work or that refusal means the person has no preferences."
      },
      {
        "heading": "Single-stimulus and paired-stimulus formats",
        "body": "In a single-stimulus assessment, one item is presented at a time and the observer records approach, rejection, or engagement. This can be useful for people who have difficulty selecting from arrays, though it may identify many items as preferred without ranking them clearly.\n\nIn a paired-stimulus assessment, two items are presented together on each trial. Across planned pairings, the person’s selections are used to create a relative hierarchy. Position should be balanced, access duration should be consistent, and the technician should not influence choices through gaze, tone, or placement."
      },
      {
        "heading": "Multiple-stimulus and free-operant formats",
        "body": "A multiple-stimulus-without-replacement assessment presents an array, removes the selected item, rearranges the remaining options, and repeats the trial. A with-replacement version returns the selected item to the array, which changes the information produced.\n\nIn a free-operant assessment, several activities are available continuously and the observer measures engagement or allocation of time. Because the person can move among options, the format may resemble natural choice more closely. Follow the protocol for access, blocking, item interaction, and timing."
      },
      {
        "heading": "Indirect and descriptive assessment",
        "body": "Indirect methods gather information through interviews, questionnaires, rating scales, and record review. They can identify patterns and guide direct observation but depend on memory and interpretation.\n\nDescriptive assessment records behavior as it occurs in natural contexts. ABC recording captures antecedents, observable behavior, and immediate consequences. Scatterplots summarize occurrence across periods or activities. These data may suggest hypotheses, but correlation does not prove function. The technician should report patterns neutrally rather than state that a function is confirmed."
      },
      {
        "heading": "Assisting with functional analysis",
        "body": "A functional analysis systematically arranges test and control conditions to evaluate the effect of potential reinforcers. Because conditions may evoke challenging behavior, implementation requires qualified design, training, safety planning, and close supervision.\n\nThe technician’s responsibilities may include setting up materials, delivering the programmed antecedents and consequences, collecting data, and reporting deviations. Do not add conditions, alter consequences, or continue when stopping criteria require termination. A control condition provides a comparison; it does not guarantee that behavior will be absent."
      },
      {
        "heading": "Skill assessments",
        "body": "Skill assessments measure current performance across defined responses. Some are standardized; others are program-specific probes. The technician should use the specified instruction, materials, wait time, prompts, and scoring rule. If a response is close but does not meet the criterion, score it according to the rule and add an objective note if allowed.\n\nTeaching during a probe can change what is being measured unless the procedure specifically includes instruction. Separate independent, prompted, incorrect, and no-response codes accurately."
      },
      {
        "heading": "Assessment integrity and reporting",
        "body": "Document deviations immediately: extra prompts, missed trials, item-position errors, unavailable materials, interruptions, illness, or safety events. Do not relabel prompted responses as independent or selectively repeat only poor trials. The supervisor decides whether affected data are usable.\n\nAssessment results should be communicated through authorized channels and interpreted by qualified personnel. The technician can describe what occurred—such as “the learner selected puzzles on 6 of 8 opportunities”—without converting that observation into a diagnosis or treatment recommendation.",
        "callout": "Descriptive patterns generate questions; they do not by themselves prove why behavior occurs."
      }
    ]
  },
  {
    "slug": "skill-acquisition",
    "title": "Behavior Acquisition",
    "description": "Review reinforcement, structured and naturalistic teaching, chaining, prompting, stimulus control, shaping, generalization, and maintenance.",
    "estimatedReadTime": "28 min",
    "status": "reviewed",
    "lastVerified": "2026-06-24",
    "sourceRefs": [
      "src-bacb-tco-3e",
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-rbt-ethics-code-2",
      "src-internal-review"
    ],
    "sections": [
      {
        "heading": "Start with the written program",
        "body": "A skill-acquisition program should identify the target response, prerequisites, materials, antecedent or instruction, prompting sequence, error correction, reinforcement schedule, data method, mastery criterion, and generalization plan. Review the program before teaching and ask for clarification when any step is unclear.\n\nImplementation fidelity matters because changes in wording, timing, prompts, or reinforcement can place behavior under unintended control. The technician implements and reports; the supervisor designs and revises."
      },
      {
        "heading": "Reinforcement fundamentals",
        "body": "Positive reinforcement adds a consequence after behavior; negative reinforcement removes or postpones a stimulus. In both cases, the defining effect is an increase in future behavior. A stimulus is not a reinforcer merely because it is edible, preferred, or praised by adults.\n\nReinforcement should be contingent, timely, and matched to the response. Long delays can strengthen intervening behavior. During acquisition, every correct response may be reinforced. After stable performance, the supervisor may thin the schedule so the skill persists under more natural conditions."
      },
      {
        "heading": "Conditioned reinforcement and token systems",
        "body": "Conditioned reinforcers acquire value through learning. Tokens are generalized conditioned reinforcers when they are exchangeable for several backup reinforcers. A token system should specify how tokens are earned, the exchange requirement, available backup choices, exchange timing, and any authorized response-cost rules.\n\nDo not give unearned tokens, remove earned tokens without an approved procedure, or change exchange prices during a session. Frequently check whether backup reinforcers remain valuable."
      },
      {
        "heading": "Discrete-trial teaching",
        "body": "A discrete trial includes a clear antecedent, a response opportunity, a programmed consequence, data recording, and a brief pause before the next trial. Materials should be ready, attention secured as the program directs, and instructions delivered consistently.\n\nScore independent, prompted, incorrect, and no responses accurately. After an error, use the specified correction procedure rather than rapid repetition or an invented prompt. Keep the pace efficient while allowing the programmed response interval."
      },
      {
        "heading": "Naturalistic and incidental teaching",
        "body": "Naturalistic teaching embeds instruction in play, routines, conversation, or daily activities. The technician may capture an existing motivation or arrange the environment so the learner has a reason to communicate or act. The consequence is often naturally related to the response, such as opening bubbles after a request for bubbles.\n\nNaturalistic does not mean unplanned. Targets, prompts, reinforcement, data, and boundaries still come from the program. Follow the learner’s interests while preserving the teaching objective and respecting communication of choice or refusal."
      },
      {
        "heading": "Task analysis and chaining",
        "body": "A task analysis breaks a complex routine into observable steps. In forward chaining, the first step is taught first and later steps are assisted. In backward chaining, earlier steps are assisted and the final step is taught first. Total-task presentation gives the learner an opportunity to perform every step on each trial, with prompts as needed.\n\nUse the exact step definitions and prompting plan. Record performance step by step when required; a single “completed” score may hide where assistance is still needed."
      },
      {
        "heading": "Prompting and prompt fading",
        "body": "Prompts may be physical, model, gestural, visual, positional, or verbal. Most-to-least prompting begins with strong assistance and fades it. Least-to-most provides an independent opportunity before adding progressively more help. Time delay increases the interval between the natural cue and the prompt.\n\nThe goal is independent responding under the intended cue. Extra repetitions, habitual verbal hints, or predictable item positions can create prompt dependence. Deliver prompts exactly as specified and distinguish prompted responses in the data."
      },
      {
        "heading": "Stimulus control, discrimination, and shaping",
        "body": "Stimulus control exists when a response occurs more reliably in the presence of the relevant antecedent. Discrimination training differentially reinforces responding to the correct stimulus. Rotate positions and examples so irrelevant features do not control responding.\n\nShaping reinforces successive approximations to a terminal response. Advance criteria systematically after the current approximation is reliable enough, rather than changing expectations randomly. The supervisor establishes criteria and determines when to move forward."
      },
      {
        "heading": "Generalization, maintenance, and fluency",
        "body": "Generalization means the skill occurs with new people, settings, materials, examples, or response forms. Program varied exemplars and common natural cues. Maintenance means the skill continues after intensive teaching or after time has passed. Periodic practice and naturally occurring reinforcement support maintenance.\n\nAccuracy alone may be insufficient when a skill must be performed efficiently. Fluency combines correct performance with a useful pace. Report narrow responding, slow performance, or loss of skill so the supervisor can adjust programming.",
        "callout": "A mastered response should become useful outside the teaching table, not remain dependent on one person, one prompt, or one set of materials."
      }
    ]
  },
  {
    "slug": "behavior-reduction",
    "title": "Behavior Reduction",
    "description": "Learn the logic of function-based intervention, antecedent strategies, differential reinforcement, extinction, safety procedures, and accurate implementation.",
    "estimatedReadTime": "25 min",
    "status": "reviewed",
    "lastVerified": "2026-06-24",
    "sourceRefs": [
      "src-bacb-tco-3e",
      "src-cooper-aba-3e",
      "src-miltenberger-7e",
      "src-rbt-ethics-code-2",
      "src-internal-review"
    ],
    "sections": [
      {
        "heading": "Function-based thinking",
        "body": "Challenging behavior is interpreted in relation to environmental events, not moral labels. Common functional classes include social attention, escape from demands, access to items or activities, and automatic reinforcement. The same response can serve different functions for different people or across contexts.\n\nThe technician does not determine function independently. Implement the plan, collect objective data, and report patterns. Function-based treatment aims to make appropriate behavior an efficient way to obtain the relevant outcome."
      },
      {
        "heading": "Antecedent strategies",
        "body": "Antecedent interventions change conditions before behavior occurs. Examples include visual schedules, choices, activity warnings, demand modification, high-probability request sequences, noncontingent access, and prompts for functional communication. These strategies are not interchangeable; each must match the plan and clinical rationale.\n\nPreventive support does not mean avoiding every challenge. It means arranging conditions that promote successful responding while teaching needed skills."
      },
      {
        "heading": "Replacement behavior",
        "body": "A strong replacement response is understandable, low effort, socially appropriate, and functionally equivalent to the challenging behavior. If throwing materials produces a break, an appropriate break request should reliably produce a break under the programmed conditions.\n\nThe alternative must often be reinforced more efficiently at first. A long, difficult sentence may not compete with a quick challenging response. Practice the replacement before escalation and ensure communication materials are available."
      },
      {
        "heading": "Differential reinforcement",
        "body": "DRA reinforces a specific alternative response. DRI reinforces a response physically incompatible with the target. DRO reinforces intervals in which the target behavior does not occur. DRL reinforces a lower rate when the behavior is acceptable but too frequent.\n\nInitial criteria should permit success. If intervals are too long or response requirements too difficult, the learner may rarely contact reinforcement. Follow the schedule, reset rules, and reinforcement delivery specified in the plan."
      },
      {
        "heading": "Extinction",
        "body": "Extinction means the reinforcer that maintained a response is no longer delivered for that response. It is function specific: ignoring is extinction only when attention is the maintaining reinforcer. Extinction is usually combined with reinforcement of an appropriate alternative.\n\nTemporary increases in frequency, intensity, duration, or variability may occur when extinction begins. Spontaneous recovery may occur after a period of reduced responding. Inconsistent implementation can create intermittent reinforcement and increase persistence.",
        "callout": "Do not implement extinction or ignore behavior merely because it seems convenient. Follow a complete, authorized, safety-reviewed plan."
      },
      {
        "heading": "Consequence procedures and restrictions",
        "body": "Response cost removes a specified conditioned reinforcer after behavior. Other punishment procedures add or remove consequences to reduce responding. Technicians never introduce penalties, reprimand systems, blocking, restraint, or response cost independently.\n\nAny restrictive component must be authorized, trained, monitored, and implemented with dignity. Reinforcement-based and least-restrictive options should be emphasized, and client welfare must outweigh staff convenience."
      },
      {
        "heading": "Crisis and emergency procedures",
        "body": "A crisis plan should define warning signs, staff roles, protective actions, stopping criteria, communication, medical follow-up, and documentation. The technician uses only procedures for which they are trained and authorized. Immediate safety takes priority over routine teaching.\n\nFor severe behavior not covered by the plan, obtain assistance, use the least restrictive trained safety response available under policy, and notify the supervisor or emergency services as required. Do not invent restraint or seclusion procedures."
      },
      {
        "heading": "Treatment integrity and side effects",
        "body": "Behavior-reduction data are difficult to interpret when staff deliver reinforcement inconsistently, omit antecedent supports, or alter prompts. Report fidelity problems honestly and seek coaching. Potential side effects can include bursts, emotional responding, aggression, avoidance, or changes in other settings.\n\nA reduction in one context may not generalize. Behavior may increase where the former reinforcer remains available, a pattern that can resemble behavioral contrast. Continue accurate observation across settings and communicate changes promptly."
      },
      {
        "heading": "Ethical implementation",
        "body": "Use neutral language and protect dignity even during difficult episodes. Do not frame behavior as manipulation, defiance, or bad character. Reinforce communication and choice when the plan permits, preserve privacy, and avoid unnecessary audiences.\n\nThe technician’s responsibility is precise, compassionate implementation—not independent treatment design. When a procedure appears unsafe, unclear, or inconsistent with the plan, pause when necessary for safety and seek immediate supervisory guidance."
      }
    ]
  },
  {
    "slug": "documentation-reporting",
    "title": "Documentation and Reporting",
    "description": "Build reliable records, objective session notes, secure communication, incident reports, and appropriate escalation habits.",
    "estimatedReadTime": "18 min",
    "status": "reviewed",
    "lastVerified": "2026-06-24",
    "sourceRefs": [
      "src-bacb-tco-3e",
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "sections": [
      {
        "heading": "Purpose of documentation",
        "body": "Documentation supports continuity of care, clinical decisions, supervision, legal and payer requirements, and accountability. Records must truthfully represent what occurred. A polished note is not useful if it omits significant events or contains invented values.\n\nComplete documentation within the required time frame. Delayed notes rely on memory and increase the risk of error. Keep raw data available so summaries and graphs can be checked."
      },
      {
        "heading": "Objective language",
        "body": "Describe what a person did, said, or produced. Include measurable details such as count, duration, percentage, prompts, or task steps when relevant. Avoid labels such as lazy, manipulative, noncompliant, or had a bad attitude unless a term is operationally defined in the plan.\n\nSeparate direct observation from reports. Write “caregiver reported two hours of sleep” rather than presenting the information as something you observed."
      },
      {
        "heading": "Session-note content",
        "body": "A routine note commonly includes relevant context, goals or procedures implemented, measurable performance, prompt levels, reinforcement, significant behavior, health or safety events, environmental changes, and communications. Follow the employer’s format and include only information relevant to services.\n\nDo not diagnose, recommend treatment changes outside scope, or fill notes with personal opinion. Avoid copy-and-paste language that inaccurately repeats events from another day."
      },
      {
        "heading": "Communicating changes",
        "body": "Report significant new behavior, sudden increases or decreases, injury, illness, medication changes, sleep concerns, environmental disruptions, suspected abuse or neglect, and procedural barriers according to policy. Some matters require immediate contact rather than waiting for the next supervision meeting.\n\nWhen a family requests a clinical change, listen and relay the concern accurately. Do not promise a new intervention or give advice outside the current plan."
      },
      {
        "heading": "Incident reporting",
        "body": "Incident reports should identify observable events, timing, location, people notified, procedures used, injury or property impact, first aid or medical care, and follow-up required. Use neutral language and avoid assigning blame.\n\nRoutine notes and incident forms may both be required. Confidentiality does not mean omitting an event; it means documenting it through secure, authorized systems."
      },
      {
        "heading": "Record security",
        "body": "Store paper and electronic records only in approved locations. Use individual credentials, lock screens, protect devices, and transmit information through authorized secure channels. Share only with people who are permitted and need the information.\n\nDo not place identifiable client information into unapproved AI tools, personal email, social media, consumer messaging apps, or public cloud storage. A missing name does not guarantee that a person cannot be identified from context."
      },
      {
        "heading": "Corrections and discrepancies",
        "body": "Correct errors through the approved amendment process. Do not erase an audit trail, use another person’s login, or alter raw data to make it match a graph. If the graph and source sheet differ, preserve both, report the discrepancy, and reconcile them transparently.\n\nMissing data should be marked as missing, not zero. Zero communicates that observation occurred and the behavior did not."
      },
      {
        "heading": "Handoffs and supervision communication",
        "body": "A useful handoff is concise, factual, and limited to what the next authorized team member needs for continuity and safety. Report pending follow-up, current risks, changes in reinforcer value, and important contextual variables.\n\nWhen instructions are unclear, request clarification before implementation. Document meaningful procedural deviations and supervision contacts as required.",
        "callout": "Never create, backfill, sign, or attest to observations you did not make."
      }
    ]
  },
  {
    "slug": "professional-conduct",
    "title": "Ethics and Professional Conduct",
    "description": "Study scope, competence, supervision, dignity, confidentiality, boundaries, public statements, cultural humility, and ethical escalation.",
    "estimatedReadTime": "24 min",
    "status": "reviewed",
    "lastVerified": "2026-06-24",
    "sourceRefs": [
      "src-bacb-tco-3e",
      "src-rbt-ethics-code-2",
      "src-bacb-handbook-2026",
      "src-internal-review"
    ],
    "sections": [
      {
        "heading": "A supervised role",
        "body": "A behavior technician implements services under qualified direction and close supervision. The role does not include independent assessment interpretation, diagnosis, treatment design, plan modification, or clinical recommendations. When asked for services outside the plan, refer the request to the supervisor.\n\nAccurately describe your credential and role. Do not use titles you do not hold, guarantee outcomes, or imply that you practice independently."
      },
      {
        "heading": "Competence and supervision",
        "body": "Accept assignments only when you have the necessary training and demonstrated skill. For an unfamiliar procedure, request instruction, modeling, rehearsal, feedback, or reassignment before independent implementation. Asking for support is a professional safeguard, not a weakness.\n\nTrack required supervision honestly. If oversight is unavailable, document attempts and use organizational escalation channels. Informal coworker conversation cannot be relabeled as qualified supervision."
      },
      {
        "heading": "Dignity, autonomy, and assent",
        "body": "Protect privacy during personal care, use respectful language, offer choices when appropriate, and recognize functional communication of refusal, discomfort, or a need for a break. Follow authorized assent-responsive and safety procedures.\n\nA client’s disability does not justify jokes, public discussion, unnecessary restriction, or coercion. Data collection never outweighs immediate safety or basic dignity."
      },
      {
        "heading": "Confidentiality",
        "body": "Client identity, service status, images, diagnoses, records, schedules, and case details are confidential. In public, generally allow the client or caregiver to decide whether to acknowledge the relationship. Do not confirm that someone receives services merely because another person already suspects it.\n\nUse approved systems and disclose the minimum necessary information to authorized recipients. Privacy obligations continue after employment ends."
      },
      {
        "heading": "Boundaries and multiple relationships",
        "body": "Private caregiving, friendship, romantic involvement, business arrangements, and social events can create multiple relationships and conflicts. Gifts, invitations, and requests for private services should be handled under current ethics requirements and employer policy with supervisory consultation.\n\nNever use secrecy to manage a boundary issue. Disclose potential conflicts early so reassignment or safeguards can be considered."
      },
      {
        "heading": "Cultural humility and nondiscrimination",
        "body": "Avoid assuming that a family is uncooperative because their communication, routines, language, or values differ from yours. Ask respectful questions within scope, seek interpretation or consultation through approved channels, and adapt implementation only with clinical authorization.\n\nChallenge or report discriminatory and demeaning conduct through appropriate procedures. Cultural difference is not pathology."
      },
      {
        "heading": "Public statements and social media",
        "body": "Professional claims must be accurate. Do not advertise cures, guarantee improvement, exaggerate competence, or present yourself as equivalent to a licensed professional. Social-media privacy settings do not make client content safe to post.\n\nClient stories, images, and data require applicable authorization, privacy protection, organizational approval, and sometimes formal research or presentation review."
      },
      {
        "heading": "Conflicts and data integrity",
        "body": "Financial incentives, performance pressure, or loyalty to coworkers never justify changing data. Record what occurred, preserve source documents, and disclose conflicts through proper channels. Do not sign another person’s note or lend credentials.\n\nWhen an instruction appears inconsistent with the plan or potentially harmful, prioritize immediate safety, seek clarification, and use escalation policy."
      },
      {
        "heading": "A practical ethical decision process",
        "body": "When uncertain, pause when feasible. Identify the client-welfare risk, review current requirements and policy, consult qualified supervision, document material guidance, and choose the least harmful authorized action. Emergencies may require immediate protective action and later review.\n\nEthical practice is not memorizing slogans. It is a repeatable process of accurate representation, consultation, respect, transparency, and prioritizing the client over convenience or personal gain.",
        "callout": "Status marked “reviewed” means the material passed internal checks; obtain independent qualified-SME review before representing it as clinically verified."
      }
    ]
  }
];

export function getStudyGuideBySlug(slug: string): StudyGuide | undefined {
  return studyGuides.find((sg) => sg.slug === slug);
}

export function getAllStudyGuideSlugs(): string[] {
  return studyGuides.map((sg) => sg.slug);
}
