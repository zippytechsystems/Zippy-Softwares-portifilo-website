import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '../../types';

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our engineering standards, timelines, and commercial delivery models.",
  className = ""
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {title && (
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold badge-cyan mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Got Questions?</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-[#0E1B38]/90 border-cyan-500/40 shadow-lg shadow-cyan-950/20' 
                  : 'bg-[#0A1329]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#0E1B38]/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-base sm:text-lg text-white">
                  {faq.question}
                </span>
                <span className={`p-1.5 rounded-full bg-slate-800/80 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-300' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/40 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
