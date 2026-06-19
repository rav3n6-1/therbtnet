import { Metadata } from 'next';
import { topics } from '@/data/topics';
import TopicCard from '@/components/TopicCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'RBT Topic-Specific Quizzes | Focus Domain Review',
  description:
    'Practice behavior analysis concepts by specific domains, including Measurement, Assessment, Skill Acquisition, and Behavior Reduction.',
  path: '/topic-quizzes',
});

export default function TopicQuizzesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Topic Quizzes', href: '/topic-quizzes' },
  ];

  return (
    <div className="space-y-10">
      <Breadcrumbs items={breadcrumbs} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Domain-Specific Quizzes
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Focus your prep on specific topic domains. Select a content area below to practice questions with immediate feedback and explanation details.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </div>
  );
}
