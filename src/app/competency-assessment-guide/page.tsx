import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'RBT Competency Assessment Guide | Supervision Overview',
  description:
    'Information regarding the Registered Behavior Technician competency assessment. Understand the role of direct supervision and candidate competencies.',
  path: '/competency-assessment-guide',
});

export default function CompetencyGuidePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Exam Info', href: '/exam-format' },
    { label: 'Competency Assessment Guide', href: '/competency-assessment-guide' },
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          RBT Competency Assessment Overview
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          The competency assessment is a critical step in obtaining and maintaining RBT certification. Here is an overview of what the assessment involves.
        </p>
      </div>

      {/* Supervisor Callout */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 text-sm text-indigo-900 dark:border-indigo-950/40 dark:bg-indigo-950/10 dark:text-indigo-400">
        📋 <strong>Clinical Assessment Notice:</strong> Competency assessments must be conducted by a qualified supervisor (BCBA, BCaBA, or approved assessor). <strong>TheRBT.net does not conduct competency assessments or issue task check-offs.</strong> Study tools on this site are for conceptual review purposes only.
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Role of the Assessment</h3>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Unlike multiple-choice tests, the competency assessment evaluates your ability to perform behavior analysis tasks in practical settings. This includes demonstrating skills directly with clients or through roleplay simulations under direct observation by your assessor.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">What the Assessment Covers</h3>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Assessors will evaluate direct application tasks from the RBT task list content areas, which commonly include:
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>✓ Preference and functional assessment support</li>
            <li>✓ Discrete trial teaching and prompting skills</li>
            <li>✓ Implementation of reinforcement systems</li>
            <li>✓ Accurate session documentation and note-taking</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 text-center space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Official Supervision Guidelines</h3>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          The competency assessment document templates and observation criteria must match current BACB directives. Please verify current templates and supervisor criteria directly on the official board website.
        </p>
        <a
          href="https://www.bacb.com/rbt/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 px-6 text-sm font-semibold transition-colors"
        >
          View BACB RBT Assessment Documents ↗
        </a>
      </div>
    </div>
  );
}
