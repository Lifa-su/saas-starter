// ============================================================
// Hero Section
// The main above-the-fold section of the landing page
// Features gradient text, CTA buttons, and floating elements
// ============================================================

import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        {/* Top gradient orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary-400/20 via-purple-400/20 to-pink-400/20 dark:from-primary-600/10 dark:via-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl" />
        {/* Bottom gradient orb */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-600/5 dark:to-cyan-600/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
            Now in v1.0 — Production Ready
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
          <span className="text-surface-900 dark:text-white">Ship your SaaS</span>
          <br />
          <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            in days, not months
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-surface-600 dark:text-surface-400 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          The ultimate Next.js starter template with authentication, payments, dashboard,
          and everything you need to launch your SaaS product fast.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link href="/auth/register">
            <Button size="lg">
              Get Started Free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <Link href="/#features">
            <Button variant="outline" size="lg">
              See Features
            </Button>
          </Link>
        </div>

        {/* Social proof */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-center gap-2 mb-3">
            {/* Star rating */}
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-surface-500 dark:text-surface-400">
            Trusted by <span className="font-semibold text-surface-700 dark:text-surface-300">2,000+</span> developers worldwide
          </p>
        </div>

        {/* Dashboard preview mockup */}
        <div className="mt-16 relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect behind the mockup */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-60" />
            {/* Browser mockup */}
            <div className="relative rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 shadow-2xl overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="max-w-sm mx-auto h-7 rounded-lg bg-surface-100 dark:bg-surface-700 flex items-center px-3">
                    <svg className="w-3.5 h-3.5 text-surface-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs text-surface-400">yourapp.com/dashboard</span>
                  </div>
                </div>
              </div>
              {/* Dashboard content mockup */}
              <div className="p-6 sm:p-8 bg-surface-50 dark:bg-surface-900">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Revenue', value: '$45,231', color: 'from-primary-500 to-blue-500' },
                    { label: 'Users', value: '2,350', color: 'from-emerald-500 to-teal-500' },
                    { label: 'Conversion', value: '3.2%', color: 'from-amber-500 to-orange-500' },
                    { label: 'Growth', value: '+20.1%', color: 'from-purple-500 to-pink-500' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700">
                      <p className="text-xs text-surface-500 mb-1">{stat.label}</p>
                      <p className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Chart placeholder */}
                <div className="h-48 rounded-xl bg-white dark:bg-surface-800 border border-surface-100 dark:border-surface-700 flex items-end p-4 gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary-500 to-primary-400 opacity-80" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
