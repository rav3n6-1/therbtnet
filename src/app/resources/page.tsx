import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'RBT Exam Study Resources & Planning Hub',
  description:
    'Free planning templates, study schedules, glossary guides, and checklists for Registered Behavior Technician preparation.',
  path: '/resources',
});

interface ResourceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

function ResourceCard({ icon, title, description, href, external }: ResourceCardProps) {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-1 space-y-4">
        <div className="text-3xl" role="img" aria-label={title}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline"
        >
          {external ? 'Visit Official Site ↗' : 'View Resource →'}
        </a>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <div className="space-y-10">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Study & Planning Resources
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Access free worksheets, planning resources, and official documentation links to keep your study schedule structured and organized.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ResourceCard
          icon="🌐"
          title="Official BACB Website"
          description="Access the official Behavior Analyst Certification Board website for current handbooks, requirements, and policy changes."
          href="https://www.bacb.com"
          external={true}
        />
        <ResourceCard
          icon="📅"
          title="Study Schedule Template"
          description="Download or copy our recommended weekly study schedule template designed to keep you consistent."
          href="/study-guide"
        />
        <ResourceCard
          icon="📓"
          title="Conceptual Glossary"
          description="A complete, curated alphabetical index of operational definitions and behavioral descriptors."
          href="/flashcards"
        />
        <ResourceCard
          icon="⚖️"
          title="Ethics Overview"
          description="Detailed guidance on ethical conduct guidelines, professional boundaries, and dual relationships."
          href="/exam-format"
        />
        <ResourceCard
          icon="📝"
          title="Competency Checklists"
          description="Verify session competencies and practical application skills prior to requesting supervisor assessments."
          href="/competency-assessment-guide"
        />
        <ResourceCard
          icon="📋"
          title="40-Hour Course Check"
          description="Verify structural criteria for the required 40-hour didactic training programs."
          href="/40-hour-training-guide"
        />
      </div>
    </div>
  );
}
