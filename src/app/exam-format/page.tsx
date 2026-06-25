import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { SHORT_DISCLAIMER } from '@/data/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'RBT Certification Exam Format & Prep Structure',
  description:
    'Learn about the Registered Behavior Technician certification exam structure, timed conditions, content-areas, and how to use our practice platform.',
  path: '/exam-format',
});

export default function ExamFormatPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Exam Info', href: '/exam-format' },
    { label: 'Exam Format', href: '/exam-format' },
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          RBT Exam Format & Prep Info
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Understanding the structure of the RBT certification exam will help you organize your study schedule and build test-taking confidence.
        </p>
      </div>

      {/* Non-affiliation banner */}
      <div className="rounded-xl border border-amber-250 bg-amber-50/30 p-5 text-sm text-slate-700 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-slate-300 space-y-2">
        <strong className="text-amber-800 dark:text-amber-400">⚠️ Compliance Disclaimer</strong>
        <p className="leading-relaxed text-xs sm:text-sm">
          {SHORT_DISCLAIMER} For official certification policies, application steps, and the latest exam manuals, please refer to the Behavior Analyst Certification Board website directly.
        </p>
      </div>

      {/* Grid of Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">About Our Prep Platform</h3>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            TheRBT.net is an independent educational database providing original conceptual study items. We do not host or reproduce official exam items. All quiz items are original scenarios developed by behavior analysts to test concepts in the RBT Test Content Outline.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Practice Exam Structure</h3>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Our timed mock exam simulator reflects the standard distribution of tasks:
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>📊 85 Multiple Choice Items</li>
            <li>⏱ 90 Minutes Total Duration</li>
            <li>🎯 Domain-weighted distribution</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">How to Use Our Practice Tools</h3>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          We recommend a structured preparation sequence to maximize conceptual clarity:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="space-y-2 border-l-2 border-indigo-500 pl-4">
            <h4 className="font-bold text-slate-800 dark:text-white text-sm">1. Target Domains</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Read study guides and take domain quizzes (e.g. Measurement) to clarify rules.
            </p>
          </div>
          <div className="space-y-2 border-l-2 border-indigo-500 pl-4">
            <h4 className="font-bold text-slate-800 dark:text-white text-sm">2. Simulate Exams</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Complete the timed mock exam simulator to build focus and study pacing.
            </p>
          </div>
          <div className="space-y-2 border-l-2 border-indigo-500 pl-4">
            <h4 className="font-bold text-slate-800 dark:text-white text-sm">3. conceptual rationales</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Review all rationale explanations for both correct and incorrect choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
