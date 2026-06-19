'use client';

import { Question, ChoiceId } from '@/types';
import AnswerChoice from './AnswerChoice';
import { getDifficultyConfig } from '@/lib/quiz-utils';

interface QuestionCardProps {
  question: Question;
  selectedChoiceId: ChoiceId | null;
  showFeedback: boolean;
  onSelectChoice: (id: ChoiceId) => void;
  questionNumber: number;
  totalQuestions: number;
  isBookmarked: boolean;
  isFlagged: boolean;
  onToggleBookmark: () => void;
  onToggleFlag: () => void;
}

export default function QuestionCard({
  question,
  selectedChoiceId,
  showFeedback,
  onSelectChoice,
  questionNumber,
  totalQuestions,
  isBookmarked,
  isFlagged,
  onToggleBookmark,
  onToggleFlag,
}: QuestionCardProps) {
  const diffBadge = getDifficultyConfig(question.difficulty);

  return (
    <div className="space-y-6">
      {/* Meta Headers */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400">
            {question.topicSlug}
          </span>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${diffBadge.bgClass} ${diffBadge.colorClass}`}>
            {diffBadge.label}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={onToggleBookmark}
            className={`p-2 rounded-lg border transition-colors ${
              isBookmarked
                ? 'bg-emerald-50 border-emerald-200 text-emerald-600 dark:bg-emerald-950/20 dark:border-emerald-950 dark:text-emerald-400'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-400 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800'
            }`}
            title="Bookmark this question"
            aria-label="Bookmark this question"
          >
            <svg className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>

          {/* Flag Button */}
          <button
            onClick={onToggleFlag}
            className={`p-2 rounded-lg border transition-colors ${
              isFlagged
                ? 'bg-amber-50 border-amber-200 text-amber-600 dark:bg-amber-950/20 dark:border-amber-950 dark:text-amber-400'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-400 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800'
            }`}
            title="Flag question for review"
            aria-label="Flag question for review"
          >
            <svg className="w-5 h-5" fill={isFlagged ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </button>
        </div>
      </div>

      {/* Question Stem */}
      <div className="text-slate-900 dark:text-white font-medium text-lg leading-relaxed">
        {question.stem}
      </div>

      {/* Answer Choices */}
      <div className="grid grid-cols-1 gap-3">
        {question.choices.map((choice) => (
          <AnswerChoice
            key={choice.id}
            choice={choice}
            isSelected={selectedChoiceId === choice.id}
            isCorrect={question.correctChoiceId}
            showFeedback={showFeedback}
            onSelect={() => onSelectChoice(choice.id)}
            disabled={showFeedback}
          />
        ))}
      </div>

      {/* Feedback Explanations */}
      {showFeedback && (
        <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4 animate-slide-up">
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/40 p-5 border border-slate-200 dark:border-slate-800/60">
            <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Explanation</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {question.explanation}
            </p>
          </div>

          {question.whyOthersAreWrong && Object.keys(question.whyOthersAreWrong).length > 0 && (
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/40 p-5 border border-slate-200 dark:border-slate-800/60">
              <h4 className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Analysis of other choices</h4>
              <div className="mt-3 space-y-2 text-xs sm:text-sm">
                {Object.entries(question.whyOthersAreWrong).map(([key, val]) => (
                  <div key={key} className="flex gap-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300">{key}:</span>
                    <span className="text-slate-500 dark:text-slate-400">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
