'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { QuizResult } from '@/types';
import { formatTime } from '@/lib/quiz-utils';
import TopicBreakdown from './TopicBreakdown';
import {
  calculateOverallReadiness,
  calculateDomainScores,
  getWeakestDomains,
  MIN_QUESTIONS_FOR_CONFIDENCE,
} from '@/lib/readiness';
import { loadProgress } from '@/lib/storage';
import { trackReadinessScoreView, trackWeakDomainRecommendationClick } from '@/lib/analytics';

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
  const analyticsTrackedRef = useRef(false);
  const [accumulatedReady, setAccumulatedReady] = useState(false);
  
  // Convert current quiz result to domain format
  const domainsRecord: Record<string, { attempted: number; correct: number; percentage: number }> = {};
  result.topicBreakdown.forEach((tb) => {
    domainsRecord[tb.topicSlug] = {
      attempted: tb.total,
      correct: tb.correct,
      percentage: tb.percentage,
    };
  });
  const domainScores = calculateDomainScores(domainsRecord);
  const weakDomains = getWeakestDomains(domainScores, 2);

  const [readinessData, setReadinessData] = useState(() => {
    return calculateOverallReadiness({
      totalQuestionsAnswered: result.totalQuestions,
      totalCorrect: result.score,
    });
  });

  useEffect(() => {
    // Load accumulated progress on mount
    const progress = loadProgress();

    if (progress && progress.totalQuestionsAnswered > 0) {
      const accumulated = calculateOverallReadiness({
        totalQuestionsAnswered: progress.totalQuestionsAnswered,
        totalCorrect: progress.totalCorrect,
      });
      setReadinessData(accumulated);

      if (!analyticsTrackedRef.current) {
        trackReadinessScoreView({
          readiness_score: accumulated.score,
          questions_used: accumulated.totalAnswered,
          weakest_domain: weakDomains[0]?.domainSlug || 'none',
        });
        analyticsTrackedRef.current = true;
      }
    } else if (!analyticsTrackedRef.current) {
      trackReadinessScoreView({
        readiness_score: readinessData.score,
        questions_used: readinessData.totalAnswered,
        weakest_domain: weakDomains[0]?.domainSlug || 'none',
      });
      analyticsTrackedRef.current = true;
    }

    setAccumulatedReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Readiness Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm text-center">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
          Your RBT Readiness
        </h2>
        
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
          <span className="text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {readinessData.score}%
          </span>
          <span className={`text-xl font-bold ${readinessData.band.colorClass}`}>
            {readinessData.band.label}
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
          Based on {readinessData.totalAnswered} questions.
          {readinessData.isEarlyEstimate && (
             <span className="block mt-1 font-medium text-amber-600 dark:text-amber-500">
               Early estimate: Complete at least {MIN_QUESTIONS_FOR_CONFIDENCE} questions for higher confidence.
             </span>
          )}
        </p>

        <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xl mx-auto italic mb-6">
          Disclaimer: An estimate based on your performance across TheRBT practice questions. It is not an official BACB score or guarantee of exam performance.
        </p>

        <div className="inline-block px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm text-slate-500">
          Time elapsed: <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{formatTime(result.timeSpentSeconds)}</span>
        </div>
      </div>

      {/* Weakest Domain Recommendations */}
      {weakDomains.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weakDomains.map((domain) => (
            <div key={domain.domainSlug} className="rounded-2xl border border-orange-200 dark:border-orange-900/50 bg-orange-50/50 dark:bg-orange-950/20 p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-orange-600 dark:text-orange-500 uppercase tracking-wider mb-3">
                Recommended next step
              </h3>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">
                Your weakest area is {domain.domainTitle}.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Strengthen it with a focused practice session.
              </p>
              <Link
                href={domain.quizPath}
                onClick={() => trackWeakDomainRecommendationClick({
                  source_domain: domain.domainSlug,
                  destination_path: domain.quizPath,
                  readiness_score: readinessData.score
                })}
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-2.5 px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                Practice {domain.domainTitle}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 p-6 shadow-sm text-center">
          <h3 className="text-sm font-semibold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider mb-2">
            You're doing great!
          </h3>
          <p className="text-slate-700 dark:text-slate-300">
            No specific weak areas detected right now. Keep up the good work!
          </p>
        </div>
      )}

      {/* Domain Performance breakdown */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
        <TopicBreakdown breakdown={result.topicBreakdown} />
      </div>

      {/* Action Buttons */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm text-center">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
          Keep improving your readiness
        </h3>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <button
            onClick={onReviewAnswers}
            className="flex-1 sm:flex-initial bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl py-3 px-6 text-sm font-semibold transition-colors focus-visible:outline-none"
          >
            Review Answers
          </button>
          <button
            onClick={onRetake}
            className="flex-1 sm:flex-initial bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl py-3 px-6 text-sm font-semibold transition-colors focus-visible:outline-none"
          >
            Take Another Practice Test
          </button>
          <Link
            href="/mock-exam"
            className="flex-1 sm:flex-initial bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 inline-flex items-center justify-center"
          >
            Try the Full Mock Exam
          </Link>
        </div>
      </div>
    </div>
  );
}
