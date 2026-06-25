interface QuizProgressBarProps {
  current: number; // 0-indexed index of current question
  total: number;
  answered: number;
}

export default function QuizProgressBar({ current, total, answered }: QuizProgressBarProps) {
  const progressPercent = total > 0 ? Math.round(((current + 1) / total) * 100) : 0;
  const answeredPercent = total > 0 ? Math.round((answered / total) * 100) : 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
        <span>
          Question <strong className="text-slate-950 dark:text-white">{current + 1}</strong> of{' '}
          <strong className="text-slate-950 dark:text-white">{total}</strong>
        </span>
        <span>{answered} of {total} answered ({answeredPercent}%)</span>
      </div>

      <div className="relative h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        {/* Answered Progress bar */}
        <div
          className="absolute inset-y-0 left-0 bg-orange-600 dark:bg-orange-500 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
