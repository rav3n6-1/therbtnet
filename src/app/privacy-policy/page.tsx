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
          Last updated: June 19, 2026
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 leading-relaxed text-sm text-slate-650 text-slate-605 dark:text-slate-350">
        <div className="space-y-2">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">1. Local Storage Only</h2>
          <p>
            Your study progress, practice quiz answers, flags, bookmarks, and readiness indicator percentages are saved <strong>exclusively in your browser&apos;s local storage</strong> (namespaced under `therbt_progress_v1`). We do not transmit, sync, or upload this data to any database or external server.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">2. No Account Creation</h2>
          <p>
            TheRBT.net does not currently require or offer user account creation. Since no logins are registered, no personal identifiers, passwords, or emails are collected during your practice sessions.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">3. Cookies and Analytics</h2>
          <p>
            We do not deploy marketing cookies or third-party behavioral analytics tracking. The site uses only default Next.js assets required for basic application loading and page routing.
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
          <h2 className="text-base font-bold text-slate-900 dark:text-white">4. Data Erasure</h2>
          <p>
            Because your progress resides entirely in your browser, you can completely erase all your records at any time. Simply clear your browser cookies and local site data, or click the reset actions in the study settings of your browser.
          </p>
        </div>
      </div>
    </div>
  );
}
