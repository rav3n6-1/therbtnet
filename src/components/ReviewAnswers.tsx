'use client';

import { useState } from 'react';
import { Question, QuizAnswer } from '@/types';

interface ReviewAnswersProps {
  questions: Question[];
  answers: QuizAnswer[];
  onBack: () => void;
}

export default function ReviewAnswers({ questions, answers, onBack }: ReviewAnswersProps) {
  const [filter, setFilter] = useState<'all' | 'incorrect'>('all');

  const filteredQuestions = questions.filter((q, index) => {
    if (filter === 'all') return true;
    const ans = answers[index];
    return ans?.selectedChoiceId !== q.correctChoiceId;
  });

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Review Questions
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Review all questions, correct answers, and conceptual rationales.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none"
          >
            Back to Results
          </button>

          {/* Toggle buttons */}
          <div className="inline-flex rounded-xl border border-slate-200 dark:border-slate-800 p-1 bg-slate-50 dark:bg-slate-950">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 shadow-sm text-orange-600 dark:text-orange-400'
                  : 'text-slate-500 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('incorrect')}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                filter === 'incorrect'
                  ? 'bg-white dark:bg-slate-800 shadow-sm text-orange-600 dark:text-orange-400'
                  : 'text-slate-500 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Incorrect Only
            </button>
          </div>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No questions match the active filter.
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const originalIndex = questions.findIndex((x) => x.id === q.id);
            const ans = answers[originalIndex];
            const isAnswerCorrect = ans?.selectedChoiceId === q.correctChoiceId;

            return (
              <div
                key={q.id}
                className={`rounded-2xl border p-6 bg-white dark:bg-slate-900 shadow-sm transition-all ${
                  isAnswerCorrect
                    ? 'border-slate-200 dark:border-slate-800'
                    : 'border-rose-200 dark:border-rose-900/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-bold text-slate-400">
                    Question {originalIndex + 1}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    {q.topicSlug}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      isAnswerCorrect
                        ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-400'
                        : 'bg-rose-50 text-rose-800 dark:bg-rose-950/20 dark:text-rose-400'
                    }`}
                  >
                    {isAnswerCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                </div>

                <p className="text-slate-900 dark:text-white font-medium text-base leading-relaxed mb-6">
                  {q.stem}
                </p>

                {/* Choices list with answers */}
                <div className="grid grid-cols-1 gap-2.5 mb-6">
                  {q.choices.map((choice) => {
                    const isSelected = ans?.selectedChoiceId === choice.id;
                    const isChoiceCorrect = choice.id === q.correctChoiceId;

                    let choiceBorder = 'border-slate-100 dark:border-slate-800';
                    let choiceBg = 'bg-slate-50/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300';
                    let badgeBg = 'bg-slate-200 dark:bg-slate-800 text-slate-600';

                    if (isChoiceCorrect) {
                      choiceBorder = 'border-emerald-500 dark:border-emerald-600';
                      choiceBg = 'bg-emerald-50/15 dark:bg-emerald-950/10 text-emerald-900 dark:text-emerald-300';
                      badgeBg = 'bg-emerald-500 text-white';
                    } else if (isSelected) {
                      choiceBorder = 'border-rose-500 dark:border-rose-600';
                      choiceBg = 'bg-rose-50/15 dark:bg-rose-950/10 text-rose-900 dark:text-rose-300';
                      badgeBg = 'bg-rose-500 text-white';
                    }

                    return (
                      <div
                        key={choice.id}
                        className={`flex items-start gap-4 p-3 border rounded-xl text-sm ${choiceBorder} ${choiceBg}`}
                      >
                        <span className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0 ${badgeBg}`}>
                          {choice.id}
                        </span>
                        <span className="leading-relaxed">{choice.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Explanatory notes */}
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/40 p-4 border border-slate-100 dark:border-slate-800">
                  <h5 className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                    Rationale
                  </h5>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
