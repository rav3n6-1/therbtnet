import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | TheRBT.net Independent Study Site',
  description:
    'Read our privacy policy outlining how quiz progress, bookmarks, and scores are stored locally in your browser.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last updated: August 9, 2026
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 leading-relaxed text-sm text-slate-650 text-slate-605 dark:text-slate-350">
        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Local Storage</h2>
          <p>
            Your detailed question-by-question history, bookmarked items, session flags, and complete study records are saved locally in your browser&apos;s local storage (namespaced under <code>therbt_progress_v1</code>). No user accounts or backend database profiles are created to store your personal history.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. No Account Creation</h2>
          <p>
            TheRBT.net does not require or offer user account creation. Since no account registrations exist, no personal identifiers, passwords, or email addresses are requested or stored during your study sessions.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Google Analytics 4</h2>
          <p>
            TheRBT.net uses Google Analytics 4 (GA4) to understand aggregate site usage, traffic sources, and feature performance to help us improve the product experience.
          </p>
          <p>
            Google Analytics collects information such as pages viewed, referral source, approximate geographic location, device and browser information, session engagement, and interaction events. In addition, aggregate study interaction metrics (such as test completion percentages, overall RBT Readiness Scores, domain attempt summaries, and session duration) may be sent as anonymous event parameters to Google Analytics.
          </p>
          <p>
            We do not intentionally send names, email addresses, full quiz answer text, or other directly identifying personal information to Google Analytics.
          </p>
          <p>
            To learn more about how Google processes data when you visit websites that integrate its services, please see{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 dark:text-orange-400 font-medium underline hover:text-orange-700"
            >
              How Google uses information from sites or apps that use our services
            </a>.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. Data Erasure</h2>
          <p>
            Because your detailed progress data resides in your browser&apos;s local storage, you can erase your study records at any time by clearing your browser cookies and site data for TheRBT.net.
          </p>
        </div>
      </div>
    </div>
  );
}
