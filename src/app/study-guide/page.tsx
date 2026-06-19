import { Metadata } from 'next';
import { studyGuides } from '@/data/studyGuides';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'RBT Study Guide | Independent Registered Behavior Technician Exam Prep',
  description:
    'Review conceptual breakdowns, explanations, and applied examples for all key behavior analysis domains.',
  path: '/study-guide',
});

export default function StudyGuidePage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Study Guide', href: '/study-guide' },
  ];

  return (
    <div className="space-y-10">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Study Guide & Conceptual Reviews
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Our free study guides provide conceptual definitions, operational terms, and applied scenario examples based on publicly available RBT exam content outlines.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studyGuides.map((guide) => (
          <div
            key={guide.slug}
            className="flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-850 dark:text-slate-205">
                  {guide.estimatedReadTime} Read
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400">
                  {guide.status}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {guide.description}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href={`/study-guide/${guide.slug}`}
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Read Study Guide
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
