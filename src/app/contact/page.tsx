import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact TheRBT.net with feedback about practice questions and study guides.',
  alternates: { canonical: 'https://www.therbt.net/contact' },
};

import Breadcrumbs from '@/components/Breadcrumbs';

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="space-y-10 max-w-2xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          Have feedback on our study questions, or noticed a typo in a study guide? Let us know. We appreciate your feedback to improve this free independent resource.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
        <p className="text-slate-600 dark:text-slate-300">
          Email your feedback or question to contact@therbt.net. Include the page URL and question number when reporting an issue.
        </p>
        <a
          href="mailto:contact@therbt.net"
          className="inline-block rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          Email contact@therbt.net
        </a>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          This link opens your email app. You can also copy the address into your preferred email service.
        </p>
      </div>
    </div>
  );
}
