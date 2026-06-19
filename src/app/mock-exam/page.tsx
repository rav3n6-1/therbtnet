import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { exams } from '@/data/exams';
import { questions } from '@/data/questions';
import QuizEngine from '@/components/QuizEngine';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: '85-Question RBT Mock Exam Simulator | Timed Practice',
  description:
    'Test your behavior analysis skills with our free, independent 85-question mock exam. Includes a 90-minute limit and detailed conceptual explanations.',
  path: '/mock-exam',
});

export default function MockExamPage() {
  const mockExam = exams.find((e) => e.slug === 'mock-exam');

  if (!mockExam) {
    notFound();
  }

  // Use all available questions as the mock exam pool
  const mockQuestions = questions;

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
          RBT Mock Exam Simulator
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Simulate the exam under timed conditions. This simulator contains 85 practice items and must be completed within 90 minutes. This is an independent practice tool — not an official certification exam.
        </p>
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-4 text-xs text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-400">
        ⚠️ <strong>Non-Affiliation Notice:</strong> This mock exam simulator is an independent educational tool. It is not affiliated with, sponsored by, or endorsed by the BACB®. All questions are original practice items and do not reproduce official exam content.
      </div>

      <QuizEngine
        examSlug={mockExam.slug}
        questions={mockQuestions}
        mode="mock"
        title="85-Question Mock Exam Simulator"
        durationMinutes={90}
      />
    </div>
  );
}
