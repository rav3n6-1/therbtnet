/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Study Guide Layout Component
 *
 * Renders a full study guide with sections, callouts, and
 * a consistent visual layout.
 * ────────────────────────────────────────────────────────────── */

import { StudyGuide } from "@/types";

interface StudyGuideLayoutProps {
  guide: StudyGuide;
}

export default function StudyGuideLayout({ guide }: StudyGuideLayoutProps) {
  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 px-8 py-10 text-white shadow-lg">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-3 text-lg text-indigo-100">{guide.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-indigo-200">
          <span className="inline-flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {guide.estimatedReadTime} read
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-0.5 text-xs font-medium uppercase tracking-wider">
            {guide.status}
          </span>
          <span className="text-xs">Last verified: {guide.lastVerified}</span>
        </div>
      </header>

      {/* Sections */}
      {guide.sections.map((section, index) => (
        <section
          key={index}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="mb-4 text-xl font-semibold text-slate-800 sm:text-2xl">
            {section.heading}
          </h2>

          {section.callout && (
            <div className="mb-5 rounded-lg border-l-4 border-amber-400 bg-amber-50 px-5 py-4 text-sm text-amber-800">
              <p className="font-medium">⚠️ Note</p>
              <p className="mt-1">{section.callout}</p>
            </div>
          )}

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
            {section.body}
          </div>
        </section>
      ))}
    </article>
  );
}
