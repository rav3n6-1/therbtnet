import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'RBT 40-Hour Training Guide | Requirement Overview',
  description:
    'Overview of the 40-hour training requirement for Registered Behavior Technician certification. Learn how to verify coursework with official BACB policies.',
  path: '/40-hour-training-guide',
});

export default function TrainingGuidePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Exam Info', href: '/exam-format' },
    { label: '40-Hour Training Guide', href: '/40-hour-training-guide' },
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          RBT 40-Hour Training Requirement
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Aspiring Registered Behavior Technicians must complete a 40-hour didactic training curriculum based on the RBT Test Content Outline. Here is an overview of what this requirement entails.
        </p>
      </div>

      {/* Prominent Disclaimer Callout */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 text-sm text-indigo-900 dark:border-indigo-950/40 dark:bg-indigo-950/10 dark:text-indigo-400">
        💡 <strong>Course Provider Notice:</strong> TheRBT.net is an exam-preparation and conceptual study resource only. <strong>TheRBT.net does not provide the 40-hour training course.</strong> Candidates must obtain their 40-hour didactic certificate through qualified external providers and verify current coursework guidelines in the official BACB Handbook.
      </div>

      {/* Content Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">General Role of Training</h3>
          <p className="text-sm leading-relaxed text-slate-505 text-slate-500 dark:text-slate-400">
            The 40-hour training course ensures candidates obtain basic didactic education on the principles of applied behavior analysis, measurement, reinforcement, ethics, and professional boundaries. It must be completed within a specific timeframe prior to submitting your certification application.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Selecting a Course</h3>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-normal">
            When selecting a training program, candidates should ensure:
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>✓ It is conducted by a qualified behavior analyst (BCBA/BCaBA)</li>
            <li>✓ It covers the entire 3rd Edition RBT Test Content Outline areas</li>
            <li>✓ Includes training on ethics and professional conduct rules</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 text-center space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Verify with Official Sources</h3>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Requirements, audit periods, and provider specifications are maintained solely by the BACB. Always refer to the official RBT Handbook for current timelines and document templates.
        </p>
        <a
          href="https://www.bacb.com/rbt/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 px-6 text-sm font-semibold transition-colors"
        >
          View BACB RBT Information Center ↗
        </a>
      </div>
    </div>
  );
}
