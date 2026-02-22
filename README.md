# SaaSKit — Next.js SaaS Starter Template

> Ship your SaaS in days, not months. A production-ready Next.js 14 starter template with everything you need to launch.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-Commercial-green?style=flat-square)

---

## ✨ Features

- **🔐 Authentication** — Login, Register, Forgot Password with form validation
- **💰 Pricing Page** — 3-tier pricing with monthly/yearly toggle
- **📊 Dashboard** — Stats cards, revenue chart, recent activity feed
- **⚙️ Settings** — Profile management, password change, billing info
- **🎨 Landing Page** — Hero, Features, Pricing, Testimonials, FAQ, Footer
- **🌗 Dark/Light Mode** — System-aware theme with smooth transitions
- **📱 Fully Responsive** — Mobile-first design that looks great everywhere
- **♿ Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- **⚡ Fast** — Next.js 14 App Router with optimized performance
- **🧩 Modular** — Clean component architecture, easy to customize

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

That's it! No environment variables, no database setup, no API keys needed.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (metadata, theme)
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles & Tailwind
│   ├── auth/               # Authentication pages
│   │   ├── login/          # Sign in
│   │   ├── register/       # Sign up
│   │   └── forgot-password/# Password reset
│   ├── dashboard/          # Dashboard (protected)
│   │   ├── layout.tsx      # Dashboard layout with sidebar
│   │   └── page.tsx        # Dashboard overview
│   ├── settings/           # Settings (protected)
│   │   ├── layout.tsx      # Settings layout
│   │   └── page.tsx        # Profile, password, billing
│   └── pricing/            # Public pricing page
├── components/
│   ├── ui/                 # Reusable UI primitives
│   │   ├── Button.tsx      # Button with variants & loading
│   │   ├── Input.tsx       # Form input with label & error
│   │   ├── Card.tsx        # Card container with hover
│   │   └── ThemeToggle.tsx # Dark/light mode toggle
│   ├── landing/            # Landing page sections
│   │   ├── Hero.tsx        # Hero with gradient & CTA
│   │   ├── Features.tsx    # Feature grid
│   │   ├── Pricing.tsx     # Pricing tiers
│   │   ├── Testimonials.tsx# Customer reviews
│   │   ├── FAQ.tsx         # Accordion FAQ
│   │   └── Footer.tsx      # Footer with CTA banner
│   ├── dashboard/          # Dashboard components
│   │   ├── Sidebar.tsx     # Collapsible sidebar nav
│   │   ├── Header.tsx      # Top bar with search & user menu
│   │   └── StatsCard.tsx   # Metric display card
│   └── Navbar.tsx          # Public page navigation
├── hooks/
│   ├── useAuth.ts          # Authentication state & methods
│   └── useTheme.ts         # Theme management
├── lib/
│   ├── auth.ts             # Mock auth (localStorage)
│   └── store.ts            # Demo data & content
└── types/
    └── index.ts            # TypeScript type definitions
```

## 🎨 Customization Guide

### Brand Colors

Edit `tailwind.config.js` to change the primary color palette:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        50:  '#f0f4ff',  // Lightest
        500: '#5c7cfa',  // Main brand color
        900: '#364fc7',  // Darkest
      },
    },
  },
}
```

### Logo & Brand Name

Search for `SaaSKit` across the project and replace with your brand name. The logo icon is an SVG lightning bolt — replace it in:
- `src/components/Navbar.tsx`
- `src/components/dashboard/Sidebar.tsx`
- Auth pages

### Content & Copy

All demo content is centralized in `src/lib/store.ts`:
- **Features** — Update titles, descriptions, and icons
- **Pricing plans** — Change tiers, prices, and features
- **Testimonials** — Replace with real customer quotes
- **FAQ items** — Update questions and answers

### Authentication

The template uses localStorage for demo purposes. To connect a real backend:

1. **Replace `src/lib/auth.ts`** with your auth provider (NextAuth.js, Clerk, Supabase Auth, Firebase, etc.)
2. **Update `src/hooks/useAuth.ts`** if your provider has a different API
3. The rest of the app will work automatically

Example with NextAuth.js:
```ts
// src/lib/auth.ts
import { signIn, signOut, getSession } from 'next-auth/react'

export async function login(email: string, password: string) {
  const result = await signIn('credentials', { email, password, redirect: false })
  return { success: !result?.error, error: result?.error }
}
```

### Adding New Pages

1. Create a new folder in `src/app/` (e.g., `src/app/blog/page.tsx`)
2. For protected pages, add them inside the dashboard layout
3. Update the sidebar navigation in `src/components/dashboard/Sidebar.tsx`

### Payments Integration

The pricing component is ready for Stripe integration:

1. Install Stripe: `npm install stripe @stripe/stripe-js`
2. Create API routes in `src/app/api/`
3. Update the CTA buttons in `src/components/landing/Pricing.tsx`

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS |
| [clsx](https://github.com/lukeed/clsx) | Conditional class names |

## 📦 What's Included

### Pages (7)
- Landing page with 6 sections
- Login / Register / Forgot Password
- Dashboard overview
- Settings (Profile, Password, Billing)
- Pricing page

### Components (14)
- 4 UI primitives (Button, Input, Card, ThemeToggle)
- 6 Landing sections (Hero, Features, Pricing, Testimonials, FAQ, Footer)
- 3 Dashboard components (Sidebar, Header, StatsCard)
- 1 Navigation bar

### Features
- Dark/light mode with system detection
- Responsive design (mobile, tablet, desktop)
- Form validation with error states
- Loading states and animations
- Mock authentication flow
- Collapsible sidebar
- User dropdown menu
- Search bar
- Notification indicator

## 📄 License

Commercial license included with purchase. Use for unlimited personal and commercial projects. No attribution required.

## 🤝 Support

- **Documentation**: This README + inline code comments
- **Email**: [your-email@example.com]
- **Twitter**: [@your-handle]

---

Built with ❤️ for indie hackers and startup founders.
