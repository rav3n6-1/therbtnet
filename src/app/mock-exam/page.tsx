import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { exams } from '@/data/exams';
import { questions } from '@/data/questions';
import QuizEngine from '@/components/QuizEngine';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Free RBT Mock Exam Simulator 2026 | 85 Questions',
  description:
    'Take a free 85-question RBT mock exam with a 90-minute timer, readiness score, topic breakdowns, and detailed explanations. Independent practice.',
  path: '/mock-exam',
});

export const dynamic = 'force-dynamic';

export default function MockExamPage() {
  const mockExam = exams.find((e) => e.slug === 'mock-exam');

  if (!mockExam) {
    notFound();
  }

  // Use questions assigned to the mock exam
  const mockQuestions = questions.filter((q) => q.examSlug === 'mock-exam');
  const questionCount = mockQuestions.length;
  console.log("Mock Exam Questions Count in Page Component:", questionCount);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Practice Tests', href: '/practice-tests' },
    { label: 'Mock Exam', href: '/mock-exam' },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Free RBT Mock Exam Simulator: 85 Practice Questions
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Simulate the exam under timed conditions with {questionCount} original practice questions and a 90-minute limit. Complete the session to see your readiness score, topic breakdowns, and detailed explanations. This is an independent practice tool — not an official certification exam.
        </p>
      </div>

      <div className="space-y-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-4 text-xs text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-400">
          ⚠️ <strong>Non-Affiliation Notice:</strong> This mock exam simulator is an independent educational tool. It is not affiliated with, sponsored by, or endorsed by the BACB®. All questions are original practice items and do not reproduce official exam content.
        </div>
      </div>

      <QuizEngine
        examSlug={mockExam.slug}
        questions={mockQuestions}
        mode="mock"
        title="RBT Mock Exam Simulator"
        durationMinutes={90}
      />
    </div>
  );
}
