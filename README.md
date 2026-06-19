# TheRBT.net - Independent RBT Exam Prep Platform

An independent study and practice-exam platform for aspiring Registered Behavior Technicians (RBT). Aligned with behavior analysis task lists, this application is designed for modular, data-driven content expansions.

---

## 1. Project Overview
TheRBT.net provides aspiring Registered Behavior Technicians with conceptual study tools, interactive flashcards, domain-specific quizzes, and full-length simulated mock exams. The platform is built with a focus on compliance, non-affiliation, and content integrity.

---

## 2. Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 (CSS-based config inline)
- **State & Storage:** Namespaced browser Local Storage (`therbt_progress_v1`)

---

## 3. How to Run
First, install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build the production bundle:
```bash
npm run build
```

---

## 4. Route Map
- **Homepage (`/`):** Dashboard with CTA highlights, study workflow, and faq accordion.
- **Practice Tests (`/practice-tests`):** Listing of all practice exams.
- **Practice Test Room (`/practice-tests/[slug]`):** Dynamic practice engine room with immediate feedback.
- **Mock Exam (`/mock-exam`):** Full 85-question simulation with a 90-minute limit.
- **Topic Quizzes (`/topic-quizzes`):** List of domain content areas.
- **Topic Quiz Session (`/topic-quizzes/[topic]`):** Dynamic domain quiz.
- **Study Guides (`/study-guide`):** Conceptual guides index.
- **Study Guide Detail (`/study-guide/[slug]`):** Conceptual reviews and citations.
- **Flashcards (`/flashcards`):** Interactive 3D deck of acronyms and terms.
- **Exam Info (`/exam-format`):** Explains simulated structure and platform guidelines.
- **40-Hour Training Guide (`/40-hour-training-guide`):** Non-affiliation overview.
- **Competency Guide (`/competency-assessment-guide`):** Task checklist structure.
- **Resources (`/resources`):** Glossary, schedules, and official BACB external links.
- **Disclaimer (`/disclaimer`):** Detailed non-affiliation trademark disclaimers.
- **Privacy (`/privacy-policy`):** Information on browser-only local storage.
- **Terms (`/terms`):** Usage limits and educational definitions.
- **Contact (`/contact`):** Feedback form UI.

---

## 5. Data Files
All platform content is driven by TypeScript schema structures in `src/data/`:
- `questions.ts`: Practice questions, correct choices, rationales, and exclusions.
- `exams.ts`: Test settings, question limits, durations, and modes.
- `topics.ts`: Labels, icons, and subtopic lists.
- `studyGuides.ts`: Text layouts, callouts, and read times.
- `flashcards.ts`: Core definition front/back cards.
- `faqs.ts`: Common questions and answers.
- `sources.ts`: Reference lists for auditor tracking.
- `navigation.ts`: Header/Footer links and global disclaimers.

---

## 6. How to Add a New Question
1. Open [questions.ts](file:///Users/asjadsair/code/therbtnet/src/data/questions.ts).
2. Append a new item to the `questions` array matching the `Question` interface:
```typescript
{
  id: "q-meas-003",
  topicSlug: "measurement",
  subtopic: "data-collection",
  difficulty: "medium",
  stem: "A behavior technician records...",
  choices: [
    { id: "A", text: "Choice 1" },
    { id: "B", text: "Choice 2" },
    { id: "C", text: "Choice 3" },
    { id: "D", text: "Choice 4" }
  ],
  correctChoiceId: "A",
  explanation: "Immediate conceptual rationale...",
  whyOthersAreWrong: {
    B: "Choice B is incorrect because...",
    C: "Choice C is incorrect because...",
    D: "Choice D is incorrect because..."
  },
  sourceRefs: ["src-internal"],
  lastVerified: "2026-06-19",
  status: "verified",
  isOfficialQuestion: false
}
```

---

## 7. How to Add a New Practice Test
1. Open [exams.ts](file:///Users/asjadsair/code/therbtnet/src/data/exams.ts).
2. Append a new item to the `exams` array matching the `Exam` interface:
```typescript
{
  slug: "practice-test-5",
  title: "RBT Practice Test 5",
  description: "Description of the practice test...",
  questionCount: 15,
  durationMinutes: 30,
  mode: "practice",
  difficulty: "mixed",
  topicSlugs: ["measurement", "assessment"],
  status: "verified"
}
```

---

## 8. Content Verification Policy
All educational content must be original, source-reviewed, and marked with a review status. Official certification requirements must be verified against current BACB materials before publication. Practice questions must not be copied from official exams, remembered exam items, copyrighted question banks, or third-party proprietary materials. Each reviewed content item should include source references, last verified date, and reviewer status.

---

## 9. Trademark & Disclaimer Policy
This platform is strictly independent. It does not imply that it is official, approved, sponsored, or affiliated with the Behavior Analyst Certification Board (BACB®).

- **Short Notice:** Visible in page headers/heroes.
- **Detailed Disclaimer:** Displayed in the footer and dedicated `/disclaimer` page.
- **Trademark Notice:** Registered trademarks of BACB® are acknowledged with non-affiliation statements.

---

## 10. Future Roadmap
1. **Interactive Study Dashboard:** Personalized stats, daily streak goals, and calendar widgets.
2. **User Authentication:** Optional backend database syncing for multi-device study tracking.
3. **Advanced Diagnostics:** Analytics dashboards to pinpoint weak domains and generate auto-customized revision tests.
