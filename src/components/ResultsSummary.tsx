'use client';

import { QuizResult } from '@/types';
import { getScoreLabel, formatTime } from '@/lib/quiz-utils';
import TopicBreakdown from './TopicBreakdown';

interface ResultsSummaryProps {
  result: QuizResult;
  onRetake: () => void;
  onReviewAnswers: () => void;
}

export default function ResultsSummary({
  result,
  onRetake,
  onReviewAnswers,
}: ResultsSummaryProps) {
  const readiness = getScoreLabel(result.percentage);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Score Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Practice Score
          </span>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
              {result.percentage}%
            </span>
            <span className="text-sm text-slate-500">
              ({result.score} / {result.totalQuestions})
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
            Total correct questions answered
          </p>
        </div>

        {/* Readiness Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Readiness Indicator
          </span>
          <div className="mt-4">
            <span className={`text-xl font-bold ${readiness.colorClass}`}>{readiness.label}</span>
            <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {readiness.description}
            </p>
          </div>
          <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
            Estimated readiness for the conceptual areas
          </p>
        </div>

        {/* Time Spent Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Time Elapsed
          </span>
          <div className="mt-4">
            <span className="text-4xl font-mono font-extrabold text-slate-900 dark:text-white">
              {formatTime(result.timeSpentSeconds)}
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
            Total session study time tracked
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 border-t border-b border-slate-200 dark:border-slate-800 py-6">
        <button
          onClick={onReviewAnswers}
          className="flex-1 sm:flex-initial bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          Review Questions & Answers
        </button>
        <button
          onClick={onRetake}
          className="flex-1 sm:flex-initial border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl py-3 px-6 text-sm font-semibold transition-colors focus-visible:outline-none"
        >
          Retake Practice Session
        </button>
      </div>

      {/* Topic Performance breakdown */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
        <TopicBreakdown breakdown={result.topicBreakdown} />
      </div>
    </div>
  );
}
