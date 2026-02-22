// ============================================================
// Pricing Section
// Displays pricing tiers with monthly/yearly toggle
// Highlights the recommended plan
// ============================================================

'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import { pricingPlans } from '@/lib/store'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Link from 'next/link'

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-surface-50/50 dark:bg-surface-900/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white mb-4">
            Simple, transparent{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={clsx('text-sm font-medium', !yearly ? 'text-surface-900 dark:text-white' : 'text-surface-500')}>
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={clsx(
                'relative w-14 h-7 rounded-full transition-colors duration-200',
                yearly ? 'bg-primary-600' : 'bg-surface-300 dark:bg-surface-600'
              )}
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle yearly billing"
            >
              <span
                className={clsx(
                  'absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform duration-200',
                  yearly && 'translate-x-7'
                )}
              />
            </button>
            <span className={clsx('text-sm font-medium', yearly ? 'text-surface-900 dark:text-white' : 'text-surface-500')}>
              Yearly
            </span>
            {yearly && (
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={clsx(
                'relative rounded-2xl transition-all duration-300',
                plan.highlighted && 'md:-mt-4 md:mb-[-16px]'
              )}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <Card
                variant={plan.highlighted ? 'elevated' : 'bordered'}
                padding="lg"
                className={clsx(
                  'h-full flex flex-col',
                  plan.highlighted && 'border-2 border-primary-500/50 dark:border-primary-500/30 ring-1 ring-primary-500/20'
                )}
              >
                {/* Plan name */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-surface-500 dark:text-surface-400">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-surface-900 dark:text-white">
                      ${yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-surface-500 dark:text-surface-400">
                        /{yearly ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {plan.price.monthly === 0 && (
                    <p className="text-sm text-surface-500 mt-1">Free forever</p>
                  )}
                </div>

                {/* CTA */}
                <Link href="/auth/register" className="block mb-6">
                  <Button
                    fullWidth
                    variant={plan.highlighted ? 'primary' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>

                {/* Features list */}
                <div className="flex-1">
                  <p className="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-3">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-surface-600 dark:text-surface-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
