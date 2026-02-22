// ============================================================
// Root Layout
// Wraps the entire application with global providers
// Includes metadata, fonts, and theme setup
// ============================================================

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SaaSKit - Ship Your SaaS in Days, Not Months',
  description:
    'The ultimate Next.js starter template with authentication, payments, dashboard, and everything you need to launch your SaaS product fast.',
  keywords: ['SaaS', 'Next.js', 'starter template', 'boilerplate', 'dashboard'],
  openGraph: {
    title: 'SaaSKit - Ship Your SaaS in Days, Not Months',
    description: 'The ultimate Next.js starter template for building SaaS products.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 
        Theme initialization script - runs before React hydration
        to prevent flash of wrong theme (FOUC)
      */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('saas_starter_theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
