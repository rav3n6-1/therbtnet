'use client';

import { QuizAnswer } from '@/types';

interface QuestionNavigatorProps {
  answers: QuizAnswer[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function QuestionNavigator({
  answers,
  currentIndex,
  onNavigate,
}: QuestionNavigatorProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        Question Navigator
      </h4>
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
        {answers.map((answer, index) => {
          const isCurrent = index === currentIndex;
          const isAnswered = answer.selectedChoiceId !== null;
          const isFlagged = answer.isFlagged;
          const isBookmarked = answer.isBookmarked;

          let btnClass = 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';

          if (isAnswered) {
            btnClass = 'bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800/80';
          }
          if (isFlagged) {
            btnClass = 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/60';
          }

          return (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`h-10 w-full flex items-center justify-center text-sm font-semibold rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${btnClass} ${
                isCurrent
                  ? 'ring-2 ring-orange-500 scale-105 border-orange-500'
                  : ''
              } ${
                isBookmarked ? 'border-dashed border-emerald-500 dark:border-emerald-400' : ''
              }`}
              aria-label={`Go to question ${index + 1}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 rounded" />
          Answered
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded" />
          Flagged
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 border-2 border-dashed border-emerald-500 dark:border-emerald-400 rounded" />
          Bookmarked
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 border-2 border-orange-500 rounded ring-1 ring-orange-500" />
          Current
        </span>
      </div>
    </div>
  );
}
