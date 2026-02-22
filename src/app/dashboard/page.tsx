// ============================================================
// Dashboard Overview Page
// Main dashboard with stats, charts placeholder, and activity
// ============================================================

'use client'

import { useAuth } from '@/hooks/useAuth'
import { dashboardStats } from '@/lib/store'
import StatsCard from '@/components/dashboard/StatsCard'
import Card from '@/components/ui/Card'

// Mock recent activity data
const recentActivity = [
  { id: 1, action: 'New user registered', user: 'sarah@example.com', time: '2 minutes ago', type: 'user' },
  { id: 2, action: 'Payment received', user: 'marcus@example.com', time: '15 minutes ago', type: 'payment' },
  { id: 3, action: 'Subscription upgraded', user: 'emily@example.com', time: '1 hour ago', type: 'upgrade' },
  { id: 4, action: 'Support ticket opened', user: 'alex@example.com', time: '2 hours ago', type: 'ticket' },
  { id: 5, action: 'New user registered', user: 'david@example.com', time: '3 hours ago', type: 'user' },
  { id: 6, action: 'Payment received', user: 'lisa@example.com', time: '5 hours ago', type: 'payment' },
]

const activityIcons: Record<string, JSX.Element> = {
  user: (
    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
  ),
  payment: (
    <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-500">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  ),
  upgrade: (
    <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-500">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>
  ),
  ticket: (
    <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-500">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    </div>
  ),
}

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-surface-900 dark:text-white">
          Welcome back, {user?.name?.split(' ')[0] || 'there'} 👋
        </h1>
        <p className="text-surface-500 dark:text-surface-400 mt-1">
          Here&apos;s what&apos;s happening with your business today.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.title} stat={stat} />
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart placeholder - takes 2 columns */}
        <Card variant="bordered" padding="lg" className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-surface-900 dark:text-white">Revenue Overview</h2>
              <p className="text-sm text-surface-500 dark:text-surface-400">Monthly revenue for the current year</p>
            </div>
            <select className="text-sm bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg px-3 py-1.5 text-surface-600 dark:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 30 days</option>
            </select>
          </div>

          {/* Chart placeholder - replace with your preferred chart library */}
          <div className="h-64 flex items-end gap-2 px-2">
            {[40, 55, 45, 65, 50, 70, 60, 80, 75, 90, 85, 95].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-primary-500 to-primary-400 dark:from-primary-600 dark:to-primary-500 transition-all duration-500 hover:from-primary-600 hover:to-primary-500 cursor-pointer"
                  style={{ height: `${height}%` }}
                  title={`$${(height * 500).toLocaleString()}`}
                />
                <span className="text-[10px] text-surface-400">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent activity */}
        <Card variant="bordered" padding="lg">
          <h2 className="text-lg font-semibold text-surface-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                {activityIcons[activity.type]}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-surface-900 dark:text-surface-200">
                    {activity.action}
                  </p>
                  <p className="text-xs text-surface-500 dark:text-surface-400 truncate">
                    {activity.user}
                  </p>
                </div>
                <span className="text-xs text-surface-400 dark:text-surface-500 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
