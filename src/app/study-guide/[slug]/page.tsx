import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStudyGuideBySlug, getAllStudyGuideSlugs } from '@/data/studyGuides';
import StudyGuideLayout from '@/components/StudyGuideLayout';
import SourceNote from '@/components/SourceNote';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

interface StudyGuideDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllStudyGuideSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: StudyGuideDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getStudyGuideBySlug(slug);
  if (!guide) return {};

  return buildMetadata({
    title: `${guide.title} | Study Guide`,
    description: guide.description,
    path: `/study-guide/${slug}`,
  });
}

export default async function StudyGuideDetailPage({ params }: StudyGuideDetailPageProps) {
  const { slug } = await params;
  const guide = getStudyGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Study Guide', href: '/study-guide' },
    { label: guide.title, href: `/study-guide/${guide.slug}` },
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <Breadcrumbs items={breadcrumbs} />

      <StudyGuideLayout guide={guide} />

      {/* Rationale and quiz links */}
      <div className="border-t border-slate-205 dark:border-slate-805 pt-8 space-y-6">
        <div className="rounded-xl border border-orange-100 bg-orange-50/50 dark:border-orange-950/20 dark:bg-orange-950/10 p-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white">Ready to practice this topic?</h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Test your knowledge of these concepts with a domain-specific practice quiz.
            </p>
          </div>
          <Link
            href={`/topic-quizzes/${guide.slug}`}
            className="w-full sm:w-auto text-center bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-2.5 px-5 text-sm font-semibold transition-colors shrink-0"
          >
            Practice Quiz
          </Link>
        </div>

        {/* Source citation auditing note */}
        <SourceNote />
      </div>
    </div>
  );
}
