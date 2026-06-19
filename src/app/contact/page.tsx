'use client';

import Breadcrumbs from '@/components/Breadcrumbs';

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-350">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full bg-slate-50 dark:bg-slate-800 border border-slate-205 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-350">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full bg-slate-50 dark:bg-slate-800 border border-slate-205 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-350">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="mt-1 block w-full bg-slate-50 dark:bg-slate-800 border border-slate-205 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-3 px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Send Message
          </button>
        </form>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-6 text-center text-xs text-slate-500">
          📨 <strong>Backend notice:</strong> Form submission is currently inactive. In the meantime, you can reach out directly via email to:{' '}
          <a href="mailto:contact@therbt.net" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
            contact@therbt.net
          </a>
        </div>
      </div>
    </div>
  );
}
