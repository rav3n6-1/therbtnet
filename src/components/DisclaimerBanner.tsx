'use client';

import { useState } from 'react';
import { SHORT_DISCLAIMER } from '@/data/navigation';

export default function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-amber-500 text-slate-950 px-4 py-2 text-center text-xs sm:text-sm font-medium z-50">
      <div className="max-w-7xl mx-auto pr-10">
        <span>{SHORT_DISCLAIMER}</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-amber-600 rounded transition-colors text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
        aria-label="Dismiss disclaimer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
