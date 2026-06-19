/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Shared Type Definitions
 * ────────────────────────────────────────────────────────────── */

// ─── Question ────────────────────────────────────────────────

export type Difficulty = "easy" | "medium" | "hard";
export type ChoiceId = "A" | "B" | "C" | "D";
export type ContentStatus = "placeholder" | "draft" | "reviewed" | "verified";

export interface Choice {
  id: ChoiceId;
  text: string;
}

export interface Question {
  id: string;
  examSlug?: string;
  topicSlug: string;
  subtopic?: string;
  difficulty: Difficulty;
  stem: string;
  choices: Choice[];
  correctChoiceId: ChoiceId;
  explanation: string;
  whyOthersAreWrong?: Partial<Record<ChoiceId, string>>;
  sourceRefs: string[];
  lastVerified: string;
  status: ContentStatus;
  /** Must always be false – this platform never hosts official BACB exam items. */
  isOfficialQuestion: false;
}

// ─── Exam / Practice Test ────────────────────────────────────

export type ExamMode = "practice" | "mock";

export interface Exam {
  slug: string;
  title: string;
  description: string;
  questionCount: number;
  durationMinutes?: number;
  mode: ExamMode;
  difficulty: "mixed" | Difficulty;
  topicSlugs: string[];
  status: ContentStatus;
}

// ─── Topic ───────────────────────────────────────────────────

export interface Subtopic {
  slug: string;
  title: string;
  description?: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  icon: string;
  subtopics: Subtopic[];
  questionCount: number;
}

// ─── Study Guide ─────────────────────────────────────────────

export interface StudyGuideSection {
  heading: string;
  body: string;
  callout?: string;
}

export interface StudyGuide {
  slug: string;
  title: string;
  description: string;
  estimatedReadTime: string;
  sections: StudyGuideSection[];
  sourceRefs: string[];
  lastVerified: string;
  status: ContentStatus;
}

// ─── Flashcard ───────────────────────────────────────────────

export interface Flashcard {
  id: string;
  topicSlug: string;
  front: string;
  back: string;
  difficulty: Difficulty;
  status: ContentStatus;
}

// ─── FAQ ─────────────────────────────────────────────────────

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "platform" | "exam" | "study" | "general";
}

// ─── Source ──────────────────────────────────────────────────

export type SourceType =
  | "official"
  | "academic"
  | "textbook"
  | "peer-reviewed"
  | "internal-review"
  | "other";

export interface Source {
  id: string;
  title: string;
  publisher: string;
  sourceType: SourceType;
  url?: string;
  datePublished?: string;
  dateAccessed: string;
  notes?: string;
}

// ─── Navigation ──────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

// ─── Resource Card ───────────────────────────────────────────

export interface Resource {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  sourceRefs: string[];
  status: ContentStatus;
}

// ─── Quiz Engine State ───────────────────────────────────────

export interface QuizAnswer {
  questionId: string;
  selectedChoiceId: ChoiceId | null;
  isCorrect: boolean | null;
  isBookmarked: boolean;
  isFlagged: boolean;
  timeSpentSeconds?: number;
}

export interface QuizState {
  examSlug: string;
  mode: ExamMode;
  currentIndex: number;
  answers: QuizAnswer[];
  startedAt: string;
  completedAt?: string;
  isSubmitted: boolean;
}

export interface QuizResult {
  examSlug: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  topicBreakdown: TopicScore[];
  completedAt: string;
  timeSpentSeconds: number;
}

export interface TopicScore {
  topicSlug: string;
  topicTitle: string;
  correct: number;
  total: number;
  percentage: number;
}
