import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use | TheRBT.net Independent Study Site',
  description:
    'Read our terms of use detailing educational limitations, non-affiliation rules, and user compliance policies.',
  path: '/terms',
});

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms of Use', href: '/terms' },
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Terms of Use
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last updated: June 19, 2026
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 leading-relaxed text-sm text-slate-600 dark:text-slate-300">
        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
          <p>
            By accessing TheRBT.net, you agree to comply with and be bound by these Terms of Use. The study resources are provided free of charge for individual conceptual review.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. Educational & Independent Study Limitation</h2>
          <p>
            The content on this website is for general educational study purposes only. It is not formal credentialing preparation, BCBA supervision, or clinical instruction. We do not guarantee official exam outcomes or competence standards based on study results here.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Non-Affiliation and Intellectual Property</h2>
          <p>
            TheRBT.net is an independent resource. RBT® and BACB® are registered trademarks. Our original quiz items and guides represent our own educational materials. You may not copy, scrape, modify, or resell content from this site without explicit authorization.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. User Responsibility</h2>
          <p>
            Users are solely responsible for verifying the most current and accurate certification policies, checklists, fees, and requirements directly on the Behavior Analyst Certification Board (BACB) website.
          </p>
        </div>
      </div>
    </div>
  );
}
