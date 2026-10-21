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
  MIN_DOMAIN_ATTEMPTS,
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
  const answeredQuestions = result.answeredQuestions ?? result.totalQuestions;
  const unansweredQuestions = result.totalQuestions - answeredQuestions;
  
  // Convert current quiz result to domain format
  const domainsRecord: Record<string, { attempted: number; correct: number; percentage: number }> = {};
  result.topicBreakdown.forEach((tb) => {
    domainsRecord[tb.topicSlug] = {
      attempted: tb.answered ?? tb.total,
      correct: tb.correct,
      percentage: tb.percentage,
    };
  });
  const domainScores = calculateDomainScores(domainsRecord);
  const weakDomains = getWeakestDomains(domainScores, 2);

  const [readinessData] = useState(() => {
    // QuizEngine saves progress before mounting the results view.
    const progress = loadProgress();
    if (progress && progress.totalQuestionsAnswered > 0) {
      return calculateOverallReadiness(progress);
    }
    return calculateOverallReadiness({
      totalQuestionsAnswered: answeredQuestions,
      totalCorrect: result.score,
    });
  });

  useEffect(() => {
    if (!analyticsTrackedRef.current) {
      trackReadinessScoreView({
        readiness_score: readinessData.score,
        questions_used: readinessData.totalAnswered,
        weakest_domain: weakDomains[0]?.domainSlug || 'none',
      });
      analyticsTrackedRef.current = true;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm text-center">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          This session&apos;s score
        </h2>
        <p className="text-6xl font-extrabold text-slate-900 dark:text-white">{result.percentage}%</p>
        <p className="mt-3 text-slate-700 dark:text-slate-300">{result.score} correct out of {result.totalQuestions} questions.</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{answeredQuestions} answered · {unansweredQuestions} unanswered</p>
        {unansweredQuestions > 0 && (
          <p className="mt-3 text-sm font-medium text-amber-700 dark:text-amber-400">
            Incomplete session: unanswered questions earn no credit in this score. Review them before trying another session.
          </p>
        )}
      </div>
      {/* Hero Readiness Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm text-center">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
          Practice accuracy across saved sessions
        </h2>
        
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
          <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {readinessData.score}%
          </span>
          {!readinessData.isEarlyEstimate && (
            <span className={`text-xl font-bold ${readinessData.band.colorClass}`}>
              {readinessData.band.label}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
          Based on {readinessData.totalAnswered} answered questions across your saved practice. This is separate from the session score above.
          {readinessData.isEarlyEstimate && (
             <span className="block mt-1 font-medium text-amber-600 dark:text-amber-500">
               More answers needed: answer at least {MIN_QUESTIONS_FOR_CONFIDENCE} questions before a readiness band is shown.
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
            Keep building your practice history
          </h3>
          <p className="text-slate-700 dark:text-slate-300">
            {domainScores.some((domain) => domain.attempted >= MIN_DOMAIN_ATTEMPTS)
              ? 'No weak areas identified among topics with enough answers in this session. Keep practising across all topics.'
              : `Answer at least ${MIN_DOMAIN_ATTEMPTS} questions in a topic before we recommend areas to review.`}
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
