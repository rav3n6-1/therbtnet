import { Metadata } from 'next';
import { faqs } from '@/data/faqs';
import FAQAccordion from '@/components/FAQAccordion';
import SEOJsonLd from '@/components/SEOJsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata, buildFAQPageJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Frequently Asked Questions (FAQ) | TheRBT.net',
  description:
    'Answers to common questions about our independent Registered Behavior Technician prep platform, study tools, and exams.',
  path: '/faq',
});

export default function FAQPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
  ];

  // Build FAQ structured data
  const jsonLdData = buildFAQPageJsonLd(
    faqs.map((f) => ({
      question: f.question,
      answer: f.answer,
    }))
  );

  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <SEOJsonLd data={jsonLdData} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
          Have questions about TheRBT.net study resources? Read through our honest responses regarding our independent tools, databases, and compliance guidelines.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            Platform and Compliance Questions
          </h2>
          <FAQAccordion faqs={faqs.filter((f) => f.category === 'platform')} />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
            Study Material and Certification Questions
          </h2>
          <FAQAccordion faqs={faqs.filter((f) => f.category !== 'platform')} />
        </div>
      </div>
    </div>
  );
}
