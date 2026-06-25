'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Exam } from '@/types';
import { isExamCompleted } from '@/lib/storage';
import { getDifficultyConfig } from '@/lib/quiz-utils';

interface PracticeTestCardProps {
  exam: Exam;
}

export default function PracticeTestCard({ exam }: PracticeTestCardProps) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const isCompleted = isExamCompleted(exam.slug);
    const timer = setTimeout(() => {
      setCompleted(isCompleted);
    }, 0);
    return () => clearTimeout(timer);
  }, [exam.slug]);

  const diffBadge = getDifficultyConfig(exam.difficulty);

  return (
    <div className="flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow relative">
      {completed && (
        <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
          ✓ Completed
        </span>
      )}

      <div className="flex-1 space-y-4">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${diffBadge.bgClass} ${diffBadge.colorClass}`}>
            {diffBadge.label}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {exam.questionCount} Questions
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {exam.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {exam.description}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={`/practice-tests/${exam.slug}`}
          className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          {completed ? 'Retake Practice Test' : 'Start Practice Test'}
        </Link>
      </div>
    </div>
  );
}
