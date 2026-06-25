'use client';

import { Choice, ChoiceId } from '@/types';

interface AnswerChoiceProps {
  choice: Choice;
  isSelected: boolean;
  isCorrect: ChoiceId | null; // The correct ChoiceId
  showFeedback: boolean;
  onSelect: () => void;
  disabled: boolean;
}

export default function AnswerChoice({
  choice,
  isSelected,
  isCorrect,
  showFeedback,
  onSelect,
  disabled,
}: AnswerChoiceProps) {
  let btnClass = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-orange-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-800 dark:text-slate-200';
  let badgeClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400';

  if (isSelected) {
    btnClass = 'border-orange-600 dark:border-orange-500 bg-orange-50/30 dark:bg-orange-950/20 text-slate-900 dark:text-white ring-1 ring-orange-600';
    badgeClass = 'bg-orange-600 text-white';
  }

  if (showFeedback) {
    if (choice.id === isCorrect) {
      // This is the correct choice
      btnClass = 'border-emerald-500 dark:border-emerald-600 bg-emerald-50/20 dark:bg-emerald-950/20 text-slate-900 dark:text-white ring-1 ring-emerald-500';
      badgeClass = 'bg-emerald-500 text-white';
    } else if (isSelected) {
      // This choice was selected and is incorrect
      btnClass = 'border-rose-500 dark:border-rose-600 bg-rose-50/20 dark:bg-rose-950/20 text-slate-900 dark:text-white ring-1 ring-rose-500';
      badgeClass = 'bg-rose-500 text-white';
    }
  }

  return (
    <button
      onClick={onSelect}
      disabled={disabled}
      aria-pressed={isSelected}
      className={`w-full flex items-start gap-4 p-4 text-left border rounded-xl transition-all font-medium text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${btnClass} ${
        disabled ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${badgeClass}`}>
        {showFeedback && choice.id === isCorrect ? '✓' : showFeedback && isSelected && choice.id !== isCorrect ? '✗' : choice.id}
      </span>
      <span className="pt-0.5 leading-relaxed">{choice.text}</span>
    </button>
  );
}
