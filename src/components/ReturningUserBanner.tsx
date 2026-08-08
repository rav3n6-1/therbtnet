'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { loadProgress, RbtProgress } from '@/lib/storage';
import { calculateDomainScores, getWeakestDomains, getReadinessBand } from '@/lib/readiness';
import { trackContinueStudyingClick } from '@/lib/analytics';

export default function ReturningUserBanner() {
  const [progress, setProgress] = useState<RbtProgress | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const data = loadProgress();
    if (data && data.totalQuestionsAnswered > 0) {
      setProgress(data);
    }
  }, []);

  if (!isClient || !progress) {
    return null;
  }

  const domainScores = calculateDomainScores(progress.domains);
  const weakestDomains = getWeakestDomains(domainScores, 1);
  const weakestDomain = weakestDomains.length > 0 ? weakestDomains[0] : null;

  const band = getReadinessBand(progress.readinessScore);
  const continuePath = weakestDomain ? weakestDomain.quizPath : '/practice-tests';

  const handleContinueClick = () => {
    trackContinueStudyingClick({
      readiness_score: progress.readinessScore,
      destination_path: continuePath,
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-5 text-left space-y-4 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-white font-semibold text-base">Welcome back</h3>
          <p className="text-sm text-slate-300">
            Readiness Score:{' '}
            <span className="font-bold text-white">{progress.readinessScore}%</span>
            <span className={`ml-2 text-xs font-medium ${band.colorClass}`}>
              ({band.label})
            </span>
          </p>
          {weakestDomain && (
            <p className="text-sm text-slate-400">
              Weakest area: <span className="text-slate-200">{weakestDomain.domainTitle}</span>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 min-w-[140px]">
          <Link
            href={continuePath}
            onClick={handleContinueClick}
            className="text-center bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium py-2 px-4 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Continue studying
          </Link>
          <Link
            href="/practice-tests"
            className="text-center bg-white/10 hover:bg-white/15 text-white text-sm font-medium py-2 px-4 rounded-xl transition-colors border border-slate-600 hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
          >
            Take another test
          </Link>
        </div>
      </div>
    </div>
  );
}
