import { Metadata } from 'next';
import { exams } from '@/data/exams';
import PracticeTestCard from '@/components/PracticeTestCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Free RBT Practice Tests 2026 | Independent Prep',
  description:
    'Review your behavior analysis knowledge with our free, independent Registered Behavior Technician practice tests.',
  path: '/practice-tests',
});

export default function PracticeTestsPage() {
  const practiceExams = exams.filter((e) => e.mode === 'practice');

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Practice Tests', href: '/practice-tests' },
  ];

  return (
    <div className="space-y-10">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Free RBT Practice Tests
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          These practice tests are designed to cover all key content domains of behavior analysis. All questions are original practice items and not official certification exam items.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {practiceExams.map((exam) => (
          <PracticeTestCard key={exam.slug} exam={exam} />
        ))}
      </div>

      {/* Mock Exam CTA card */}
      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 dark:border-indigo-950/40 dark:bg-indigo-950/10 p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="space-y-2 max-w-xl text-center sm:text-left">
          <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
            Endurance Simulation
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Looking for a timed mock exam?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Test your knowledge under timed conditions. Try our timed mock exam simulation with a 90-minute limit representing the structure of the RBT outline.
          </p>
        </div>
        <Link
          href="/mock-exam"
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 px-6 text-sm font-semibold text-center transition-colors shrink-0"
        >
          Start Mock Exam
        </Link>
      </div>

      {/* Link to topic quizzes */}
      <div className="text-center py-4 border-t border-slate-200/50 dark:border-slate-800/40">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Want to focus on specific behavior analysis concepts?{' '}
          <Link href="/topic-quizzes" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            Try Topic-Specific Quizzes →
          </Link>
        </p>
      </div>
    </div>
  );
}
