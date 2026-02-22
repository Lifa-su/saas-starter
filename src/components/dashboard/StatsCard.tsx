// ============================================================
// Stats Card Component
// Displays a metric with change indicator
// Used on the dashboard overview page
// ============================================================

import { clsx } from 'clsx'
import Card from '@/components/ui/Card'
import { StatCard } from '@/types'

// Icon mapping for stat cards
const iconMap: Record<string, JSX.Element> = {
  DollarSign: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  TrendingUp: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

interface StatsCardProps {
  stat: StatCard
}

export default function StatsCardComponent({ stat }: StatsCardProps) {
  return (
    <Card variant="bordered" hover className="group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400 mb-1">
            {stat.title}
          </p>
          <p className="text-2xl lg:text-3xl font-bold text-surface-900 dark:text-white">
            {stat.value}
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
          {iconMap[stat.icon] || iconMap.DollarSign}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span
          className={clsx(
            'inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full',
            {
              'text-green-700 bg-green-50 dark:text-green-400 dark:bg-green-500/10':
                stat.changeType === 'positive',
              'text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-500/10':
                stat.changeType === 'negative',
              'text-surface-600 bg-surface-100 dark:text-surface-400 dark:bg-surface-700':
                stat.changeType === 'neutral',
            }
          )}
        >
          {stat.changeType === 'positive' && '↑'}
          {stat.changeType === 'negative' && '↓'}
          {stat.change}
        </span>
        <span className="text-xs text-surface-500 dark:text-surface-400">
          vs last month
        </span>
      </div>
    </Card>
  )
}
