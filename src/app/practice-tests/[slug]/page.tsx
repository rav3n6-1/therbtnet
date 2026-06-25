import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { exams } from '@/data/exams';
import { questions } from '@/data/questions';
import QuizEngine from '@/components/QuizEngine';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

interface PracticeTestPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return exams.filter((e) => e.mode === 'practice').map((e) => ({
    slug: e.slug,
  }));
}

export async function generateMetadata({ params }: PracticeTestPageProps): Promise<Metadata> {
  const { slug } = await params;
  const exam = exams.find((e) => e.slug === slug);
  if (!exam) return {};

  return buildMetadata({
    title: `${exam.title} | Practice Test`,
    description: exam.description,
    path: `/practice-tests/${slug}`,
  });
}

export default async function PracticeTestPage({ params }: PracticeTestPageProps) {
  const { slug } = await params;
  const exam = exams.find((e) => e.slug === slug);

  if (!exam) {
    notFound();
  }

  // Load questions for this test based on examSlug mapping.
  const testQuestions = questions.filter((q) => q.examSlug === exam.slug);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Practice Tests', href: '/practice-tests' },
    { label: exam.title, href: `/practice-tests/${exam.slug}` },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />

      <QuizEngine
        examSlug={exam.slug}
        questions={testQuestions}
        mode="practice"
        title={exam.title}
        durationMinutes={exam.durationMinutes}
      />
    </div>
  );
}
