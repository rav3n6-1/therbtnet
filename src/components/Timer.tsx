'use client';

import { useEffect, useState, useRef } from 'react';

interface TimerProps {
  durationMinutes: number;
  onTimeUp: () => void;
  isRunning: boolean;
}

export default function Timer({ durationMinutes, onTimeUp, isRunning }: TimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);
  const timeUpRef = useRef(onTimeUp);

  // Update ref when onTimeUp changes to avoid re-triggering effects
  useEffect(() => {
    timeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // execute callback on next tick
          setTimeout(() => timeUpRef.current(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = secondsLeft < 300; // < 5 minutes

  return (
    <div className={`flex items-center gap-1.5 font-mono text-sm sm:text-base font-bold px-3 py-1.5 rounded-lg border ${
      isLowTime
        ? 'bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/20 dark:border-rose-900/50 dark:text-rose-400 animate-pulse'
        : 'bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'
    }`}>
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{formatTime(secondsLeft)}</span>
    </div>
  );
}
