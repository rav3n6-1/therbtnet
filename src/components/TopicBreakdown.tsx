import { TopicScore } from '@/types';
import { getDomainPerformanceLabel, getDomainPerformanceLabelColor } from '@/lib/readiness';

interface TopicBreakdownProps {
  breakdown: TopicScore[];
}

export default function TopicBreakdown({ breakdown }: TopicBreakdownProps) {
  const sortedBreakdown = [...breakdown].sort((a, b) => a.percentage - b.percentage);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Topic Performance Breakdown</h3>
      <div className="space-y-4">
        {sortedBreakdown.map((topic) => {
          const label = getDomainPerformanceLabel(topic.percentage);
          const labelColor = getDomainPerformanceLabelColor(label);
          
          return (
            <div key={topic.topicSlug} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300">{topic.topicTitle}</span>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {topic.correct} / {topic.total} ({topic.percentage}%)
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${labelColor}`}>
                    {label}
                  </span>
                </div>
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
          );
        })}
      </div>
    </div>
  );
}
