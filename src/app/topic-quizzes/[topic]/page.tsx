import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { topics } from '@/data/topics';
import { questions } from '@/data/questions';
import QuizEngine from '@/components/QuizEngine';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

interface TopicQuizPageProps {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  return topics.map((t) => ({
    topic: t.slug,
  }));
}

export async function generateMetadata({ params }: TopicQuizPageProps): Promise<Metadata> {
  const { topic: topicSlug } = await params;
  const topic = topics.find((t) => t.slug === topicSlug);
  if (!topic) return {};

  return buildMetadata({
    title: `${topic.title} Practice Quiz | Domain Study`,
    description: topic.description,
    path: `/topic-quizzes/${topicSlug}`,
  });
}

export default async function TopicQuizPage({ params }: TopicQuizPageProps) {
  const { topic: topicSlug } = await params;
  const topic = topics.find((t) => t.slug === topicSlug);

  if (!topic) {
    notFound();
  }

  // Filter questions for this specific topic
  const topicQuestions = questions.filter((q) => q.topicSlug === topicSlug);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Topic Quizzes', href: '/topic-quizzes' },
    { label: topic.title, href: `/topic-quizzes/${topicSlug}` },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={breadcrumbs} />

      <QuizEngine
        examSlug={`topic-${topic.slug}`}
        questions={topicQuestions}
        mode="practice"
        title={`${topic.title} Domain Practice`}
        durationMinutes={15}
      />
    </div>
  );
}
