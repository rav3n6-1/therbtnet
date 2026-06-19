import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { FOOTER_DISCLAIMER } from '@/data/navigation';

export const metadata: Metadata = buildMetadata({
  title: 'About Our Platform | TheRBT.net Independent Study Site',
  description:
    'Learn about our mission to provide high-quality, independent study guides, flashcards, and mock exams for behavior technician preparation.',
  path: '/about',
});

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          About TheRBT.net
        </h1>
        <p className="text-lg leading-relaxed text-slate-650 text-slate-600 dark:text-slate-350">
          TheRBT.net is an independent educational resource created to help learners practice and review concepts relevant to Registered Behavior Technician preparation. It is not affiliated with, sponsored by, endorsed by, or approved by the Behavior Analyst Certification Board, Inc. (BACB®).
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Our Mission</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            To provide accessible, high-quality study resources to help candidates master applied behavior analysis terms, metrics, and conceptual guidelines.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">What We Offer</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Comprehensive original study guides, interactive flashcard decks, domain practice quizzes, and timed mock exam simulators.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Our Commitment</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Original content only. We strictly review every item to guarantee no copyrighted content or official exam items are used.
          </p>
        </div>
      </div>

      {/* Disclaimer section */}
      <div className="rounded-2xl border border-slate-250 bg-slate-50 p-6 dark:bg-slate-900 dark:border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Compliance & Trademark Disclaimers</h3>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {FOOTER_DISCLAIMER}
        </p>
      </div>
    </div>
  );
}
