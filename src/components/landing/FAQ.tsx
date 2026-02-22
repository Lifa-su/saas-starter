// ============================================================
// FAQ Section
// Accordion-style frequently asked questions
// Click to expand/collapse answers
// ============================================================

'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import { faqItems } from '@/lib/store'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-surface-50/50 dark:bg-surface-900/50" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white mb-4">
            Frequently asked{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400">
            Everything you need to know about SaaSKit.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={clsx(
                'rounded-2xl border-2 transition-all duration-200 overflow-hidden',
                openIndex === index
                  ? 'border-primary-200 dark:border-primary-500/30 bg-white dark:bg-surface-800/50'
                  : 'border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-800/30 hover:border-surface-200 dark:hover:border-surface-700'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-surface-900 dark:text-white pr-4">
                  {item.question}
                </span>
                <svg
                  className={clsx(
                    'w-5 h-5 text-surface-500 transition-transform duration-200 flex-shrink-0',
                    openIndex === index && 'rotate-180'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={clsx(
                  'transition-all duration-200 overflow-hidden',
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <p className="px-6 pb-4 text-surface-600 dark:text-surface-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
