import { TopicScore } from '@/types';

interface TopicBreakdownProps {
  breakdown: TopicScore[];
}

export default function TopicBreakdown({ breakdown }: TopicBreakdownProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Topic Performance Breakdown</h3>
      <div className="space-y-4">
        {breakdown.map((topic) => (
          <div key={topic.topicSlug} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-300">{topic.topicTitle}</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {topic.correct} / {topic.total} ({topic.percentage}%)
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  topic.percentage >= 85
                    ? 'bg-emerald-500'
                    : topic.percentage >= 70
                    ? 'bg-amber-500'
                    : 'bg-rose-500'
                }`}
                style={{ width: `${topic.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
