import Link from 'next/link';
import { Topic } from '@/types';

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-3xl" role="img" aria-label={topic.title}>
            {topic.icon}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
            {topic.subtopics.length} Areas
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {topic.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {topic.description}
          </p>
        </div>

        {/* Subtopics preview */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Includes:</span>
          <ul className="mt-2 space-y-1">
            {topic.subtopics.slice(0, 3).map((sub) => (
              <li key={sub.slug} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                {sub.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={`/topic-quizzes/${topic.slug}`}
          className="block w-full text-center border-2 border-orange-600 dark:border-orange-500/50 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/30 rounded-xl py-3 px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          Practice {topic.title}
        </Link>
      </div>
    </div>
  );
}
