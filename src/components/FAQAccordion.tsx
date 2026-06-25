/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – FAQ Accordion Component
 *
 * Renders a list of FAQs using native <details>/<summary>
 * elements for zero-JS interactivity.
 * ────────────────────────────────────────────────────────────── */

"use client";

import { FAQ } from "@/types";
import { useState } from "react";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? "border-orange-200 bg-orange-50/50 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="pr-4 text-base font-semibold text-slate-800">
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 text-xl text-orange-500 transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
