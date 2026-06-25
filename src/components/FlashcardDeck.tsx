'use client';

import { useState, useEffect } from 'react';
import { Flashcard as FlashcardType } from '@/types';
import { markFlashcardKnown, markFlashcardUnknown, getFlashcardProgress } from '@/lib/storage';
import Flashcard from './Flashcard';

interface FlashcardDeckProps {
  cards: FlashcardType[];
}

export default function FlashcardDeck({ cards }: FlashcardDeckProps) {
  const [activeTopic, setActiveTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownIds, setKnownIds] = useState<string[]>([]);
  const [unknownIds, setUnknownIds] = useState<string[]>([]);

  // Load progress on mount
  useEffect(() => {
    const progress = getFlashcardProgress();
    const timer = setTimeout(() => {
      setKnownIds(progress.known);
      setUnknownIds(progress.unknown);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Filter cards based on search query and active topic
  const filteredCards = cards.filter((card) => {
    const matchesTopic = activeTopic === 'all' || card.topicSlug === activeTopic;
    const matchesSearch =
      card.front.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.back.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const currentCard = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  const handleMarkKnown = () => {
    if (!currentCard) return;
    markFlashcardKnown(currentCard.id);
    setKnownIds((prev) => [...new Set([...prev, currentCard.id])]);
    setUnknownIds((prev) => prev.filter((id) => id !== currentCard.id));
    handleNext();
  };

  const handleMarkUnknown = () => {
    if (!currentCard) return;
    markFlashcardUnknown(currentCard.id);
    setUnknownIds((prev) => [...new Set([...prev, currentCard.id])]);
    setKnownIds((prev) => prev.filter((id) => id !== currentCard.id));
    handleNext();
  };

  // Get list of unique topics for dropdown
  const uniqueTopics = ['all', ...new Set(cards.map((c) => c.topicSlug))];

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Filtering and Search Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-sm">
        <div className="w-full sm:w-auto flex items-center gap-2">
          <label htmlFor="topic-select" className="text-sm font-semibold text-slate-500 shrink-0">
            Topic:
          </label>
          <select
            id="topic-select"
            value={activeTopic}
            onChange={(e) => {
              setActiveTopic(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="w-full sm:w-auto bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {uniqueTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-auto relative">
          <input
            type="text"
            placeholder="Search flashcards..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="w-full sm:w-64 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <svg className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Main Flashcard Container */}
      {filteredCards.length > 0 && currentCard ? (
        <div className="space-y-6">
          <div className="text-center text-sm font-semibold text-slate-400 dark:text-slate-500">
            Card {currentIndex + 1} of {filteredCards.length}
          </div>

          <Flashcard
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped(!isFlipped)}
          />

          {/* Navigation and Score buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
                aria-label="Previous card"
              >
                ← Prev
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-xl transition-all dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
                aria-label="Next card"
              >
                Next →
              </button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleMarkUnknown}
                className="flex-1 sm:flex-initial bg-rose-50 hover:bg-rose-100/80 text-rose-600 border border-rose-200 font-semibold px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-none dark:bg-rose-950/20 dark:border-rose-900/40 dark:text-rose-400"
              >
                Still Learning
              </button>
              <button
                onClick={handleMarkKnown}
                className="flex-1 sm:flex-initial bg-emerald-50 hover:bg-emerald-100/80 text-emerald-600 border border-emerald-200 font-semibold px-4 py-2.5 rounded-xl text-sm transition-all focus:outline-none dark:bg-emerald-950/20 dark:border-emerald-900/40 dark:text-emerald-400"
              >
                I Know It
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
          <p className="text-slate-500 dark:text-slate-400">
            No cards found matching the criteria.
          </p>
        </div>
      )}

      {/* Progress metrics */}
      <div className="grid grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-850 rounded-2xl text-center">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Known Cards</span>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{knownIds.length}</p>
        </div>
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Still Learning</span>
          <p className="text-2xl font-bold text-rose-600 dark:text-rose-400">{unknownIds.length}</p>
        </div>
      </div>
    </div>
  );
}
