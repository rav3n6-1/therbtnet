'use client';

import { useState, useEffect } from 'react';
import { Question, ExamMode, ChoiceId, QuizState, QuizAnswer, QuizResult } from '@/types';
import {
  loadQuizState,
  saveQuizState,
  clearQuizState,
  saveQuizResult,
  markExamCompleted,
} from '@/lib/storage';
import { calculateResults } from '@/lib/quiz-utils';
import QuestionCard from './QuestionCard';
import QuizProgressBar from './QuizProgressBar';
import QuestionNavigator from './QuestionNavigator';
import Timer from './Timer';
import ResultsSummary from './ResultsSummary';
import ReviewAnswers from './ReviewAnswers';

interface QuizEngineProps {
  examSlug: string;
  questions: Question[];
  mode: ExamMode;
  title: string;
  durationMinutes?: number;
}

type QuizPhase = 'intro' | 'active' | 'review' | 'results';

export default function QuizEngine({
  examSlug,
  questions,
  mode,
  title,
  durationMinutes,
}: QuizEngineProps) {
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [startedAt, setStartedAt] = useState<string>('');
  const [result, setResult] = useState<QuizResult | null>(null);

  // Load initial state from localStorage if available
  useEffect(() => {
    const saved = loadQuizState(examSlug);
    const timer = setTimeout(() => {
      if (saved && saved.mode === mode && !saved.isSubmitted && saved.answers.length === questions.length) {
        setAnswers(saved.answers);
        setCurrentIndex(saved.currentIndex);
        setStartedAt(saved.startedAt);
        setPhase('active');
      } else {
        // Initialize fresh answers array
        const initialAnswers = questions.map((q) => ({
          questionId: q.id,
          selectedChoiceId: null,
          isCorrect: null,
          isBookmarked: false,
          isFlagged: false,
        }));
        setAnswers(initialAnswers);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [examSlug, questions, mode]);

  const startQuiz = () => {
    const startIso = new Date().toISOString();
    setStartedAt(startIso);
    setPhase('active');

    // Save initial state to localStorage
    const newState: QuizState = {
      examSlug,
      mode,
      currentIndex: 0,
      answers,
      startedAt: startIso,
      isSubmitted: false,
    };
    saveQuizState(newState);
  };

  const handleSelectChoice = (choiceId: ChoiceId) => {
    if (phase !== 'active') return;

    const currentQuestion = questions[currentIndex];
    const newAnswers = [...answers];

    const isCorrect = choiceId === currentQuestion.correctChoiceId;

    newAnswers[currentIndex] = {
      ...newAnswers[currentIndex],
      selectedChoiceId: choiceId,
      isCorrect: mode === 'practice' ? isCorrect : null,
    };

    setAnswers(newAnswers);

    // Save updated state
    const updatedState: QuizState = {
      examSlug,
      mode,
      currentIndex,
      answers: newAnswers,
      startedAt,
      isSubmitted: false,
    };
    saveQuizState(updatedState);
  };

  const handleToggleBookmark = () => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = {
      ...newAnswers[currentIndex],
      isBookmarked: !newAnswers[currentIndex].isBookmarked,
    };
    setAnswers(newAnswers);
    saveQuizState({ examSlug, mode, currentIndex, answers: newAnswers, startedAt, isSubmitted: false });
  };

  const handleToggleFlag = () => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = {
      ...newAnswers[currentIndex],
      isFlagged: !newAnswers[currentIndex].isFlagged,
    };
    setAnswers(newAnswers);
    saveQuizState({ examSlug, mode, currentIndex, answers: newAnswers, startedAt, isSubmitted: false });
  };

  const navigateTo = (index: number) => {
    setCurrentIndex(index);
    saveQuizState({ examSlug, mode, currentIndex: index, answers, startedAt, isSubmitted: false });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      navigateTo(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigateTo(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    // Process final score
    const finalResult = calculateResults(examSlug, questions, answers, startedAt);
    setResult(finalResult);
    setPhase('results');

    // Persist completion and results
    saveQuizResult(finalResult);
    markExamCompleted(examSlug);
    clearQuizState(examSlug);
  };

  const handleRetake = () => {
    const freshAnswers = questions.map((q) => ({
      questionId: q.id,
      selectedChoiceId: null,
      isCorrect: null,
      isBookmarked: false,
      isFlagged: false,
    }));
    setAnswers(freshAnswers);
    setCurrentIndex(0);
    setResult(null);
    clearQuizState(examSlug);
    setPhase('intro');
  };

  const answeredCount = answers.filter((a) => a.selectedChoiceId !== null).length;

  if (phase === 'intro') {
    return (
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          {title}
        </h2>
        <div className="flex justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            📊 {questions.length} Practice Items
          </span>
          {durationMinutes && (
            <span className="flex items-center gap-1">
              ⏱ {durationMinutes} Minutes Time Limit
            </span>
          )}
          <span className="flex items-center gap-1">
            🎯 {mode === 'practice' ? 'Practice Mode' : 'Exam Mode'}
          </span>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {mode === 'practice'
            ? 'In Practice Mode, you receive immediate feedback and conceptual explanations after making your selection. Take your time to review each rational explanation.'
            : 'In Exam Mode, you will not receive immediate feedback. A countdown timer will run (if set), and you will be able to review all explanations and topic breakdowns only after submitting the complete session.'}
        </p>

        <button
          onClick={startQuiz}
          className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-3 px-8 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          Begin Session
        </button>
      </div>
    );
  }

  if (phase === 'active') {
    const currentQuestion = questions[currentIndex];
    const currentAnswer = answers[currentIndex];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Quiz Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            {/* Header info */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="text-sm font-bold text-slate-400">
                Item {currentIndex + 1} of {questions.length}
              </span>
              {durationMinutes && (
                <Timer
                  durationMinutes={durationMinutes}
                  startedAt={startedAt}
                  onTimeUp={handleSubmit}
                  isRunning={true}
                />
              )}
            </div>

            {/* Progress */}
            <QuizProgressBar
              current={currentIndex}
              total={questions.length}
              answered={answeredCount}
            />

            {/* Question Card */}
            {currentQuestion && currentAnswer && (
              <QuestionCard
                question={currentQuestion}
                selectedChoiceId={currentAnswer.selectedChoiceId}
                showFeedback={mode === 'practice' && currentAnswer.selectedChoiceId !== null}
                onSelectChoice={handleSelectChoice}
                isBookmarked={currentAnswer.isBookmarked}
                isFlagged={currentAnswer.isFlagged}
                onToggleBookmark={handleToggleBookmark}
                onToggleFlag={handleToggleFlag}
              />
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6 mt-8">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                ← Prev
              </button>

              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
                >
                  Submit Session
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Side Panel Navigator */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
            <QuestionNavigator
              answers={answers}
              currentIndex={currentIndex}
              onNavigate={navigateTo}
            />
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'results' && result) {
    return (
      <ResultsSummary
        result={result}
        onRetake={handleRetake}
        onReviewAnswers={() => setPhase('review')}
      />
    );
  }

  if (phase === 'review' && result) {
    return (
      <ReviewAnswers
        questions={questions}
        answers={answers}
        onBack={() => setPhase('results')}
      />
    );
  }

  return null;
}
