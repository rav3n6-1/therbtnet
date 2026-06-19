import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { FOOTER_DISCLAIMER } from '@/data/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'Trademark Disclaimers & Non-Affiliation Policies | TheRBT.net',
  description:
    'Read our complete trademark disclaimers, non-affiliation policies, and independent content compliance statements.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Trademark & Non-Affiliation Disclaimer
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Please read this page carefully to understand the independent, educational nature of this preparation resource.
        </p>
      </div>

      {/* Main Full Disclaimer Box */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Official Disclaimer Statement</h2>
          <p className="text-sm text-slate-650 dark:text-slate-350 text-slate-600">
            {FOOTER_DISCLAIMER}
          </p>
        </div>

        <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Content Originality Policy</h2>
          <p className="text-sm text-slate-600 dark:text-slate-350">
            All practice questions, answers, explanation notes, study guides, and flashcard content on TheRBT.net are original works created by our team for conceptual review. Under no circumstances do we utilize or reproduce official exam items, remembered questions from exam attempts, or copyrighted materials from third-party certification resources.
          </p>
        </div>

        <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Educational Use Limitation</h2>
          <p className="text-sm text-slate-600 dark:text-slate-350">
            The study materials, quizzes, and simulated tests provided on this website are designed for educational review and self-assessment purposes only. They should not be considered formal behavioral analysis training or clinical supervision. Users are responsible for satisfying official certification conditions through approved routes.
          </p>
        </div>

        <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. No Guarantee of Performance</h2>
          <p className="text-sm text-slate-600 dark:text-slate-350">
            While our resources are designed to help candidates prepare, TheRBT.net makes no warranties or guarantees regarding performance outcomes on any official board exam or competency assessment. Passing practice tests on this platform is a study indicator only and does not warrant certification approval.
          </p>
        </div>
      </div>
    </div>
  );
}
