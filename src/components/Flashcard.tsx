'use client';

import { Flashcard as FlashcardType } from '@/types';

interface FlashcardProps {
  card: FlashcardType;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function Flashcard({ card, isFlipped, onFlip }: FlashcardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onFlip();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onFlip}
      onKeyDown={handleKeyDown}
      className="group perspective w-full h-80 cursor-pointer focus-visible:outline-none"
      aria-label={`Flashcard: ${card.front}. Press space or enter to flip.`}
    >
      <div
        className={`relative w-full h-full duration-500 preserve-3d transition-transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm flex flex-col justify-between items-center text-center">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            {card.topicSlug} • {card.difficulty}
          </span>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
            {card.front}
          </div>
          <span className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold group-hover:underline">
            Click or press Space to reveal answer
          </span>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl border border-slate-200 dark:border-slate-800 bg-indigo-50/50 dark:bg-indigo-950/20 p-8 shadow-sm flex flex-col justify-between items-center text-center">
          <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
            Explanation / Definition
          </span>
          <div className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed max-h-48 overflow-y-auto pr-2">
            {card.back}
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Click or press Space to see question
          </span>
        </div>
      </div>
    </div>
  );
}
