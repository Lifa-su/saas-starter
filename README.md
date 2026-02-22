<div align="center">

# ⚡ SaaS Starter

**Launch your SaaS in days, not months.**

A production-ready Next.js 14 starter template with landing page, dashboard, auth, pricing, and more — all beautifully designed with TailwindCSS and TypeScript.

一套开箱即用的 SaaS 启动模板，助你快速上线产品。

[![Stars](https://img.shields.io/github/stars/Lifa-su/saas-starter?style=for-the-badge&logo=github&color=f59e0b)](https://github.com/Lifa-su/saas-starter/stargazers)
[![Forks](https://img.shields.io/github/forks/Lifa-su/saas-starter?style=for-the-badge&logo=github&color=3b82f6)](https://github.com/Lifa-su/saas-starter/network/members)
[![License](https://img.shields.io/github/license/Lifa-su/saas-starter?style=for-the-badge&color=10b981)](./LICENSE)
[![Issues](https://img.shields.io/github/issues/Lifa-su/saas-starter?style=for-the-badge&color=ef4444)](https://github.com/Lifa-su/saas-starter/issues)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[🎯 Live Demo](https://lifa-su.github.io/saas-starter) · [🐛 Report Bug](https://github.com/Lifa-su/saas-starter/issues) · [💡 Request Feature](https://github.com/Lifa-su/saas-starter/issues)

</div>

---

<!-- 
  📸 Screenshot placeholder — replace with your own screenshot
  推荐尺寸：1280x720 或 1920x1080
-->

<div align="center">
  <img src="https://via.placeholder.com/1200x630/1a1a2e/ffffff?text=SaaS+Starter+Preview" alt="SaaS Starter Preview" width="90%" />
  <br />
  <sub>👆 Replace this with an actual screenshot of your project</sub>
</div>

<br />

## ✨ Features | 功能亮点

|  | Feature | Description |
|---|---------|-------------|
| 🔐 | **Authentication** | Login, Register, Forgot Password with form validation |
| 💰 | **Pricing Page** | 3-tier pricing with monthly/yearly toggle |
| 📊 | **Dashboard** | Stats cards, revenue chart, recent activity feed |
| ⚙️ | **Settings** | Profile management, password change, billing info |
| 🎨 | **Landing Page** | Hero, Features, Pricing, Testimonials, FAQ, Footer — 6 polished sections |
| 🌗 | **Dark / Light Mode** | System-aware theme with smooth transitions |
| 📱 | **Fully Responsive** | Mobile-first design that looks great on every device |
| ♿ | **Accessible** | Semantic HTML, ARIA labels, keyboard navigation |
| ⚡ | **Blazing Fast** | Next.js 14 App Router with optimized performance |
| 🧩 | **Modular** | Clean component architecture, easy to extend and customize |

> 💡 **Zero config needed** — No environment variables, no database setup, no API keys. Clone and run.
>
> 开箱即用，无需配置数据库或 API 密钥。

---

## 🚀 Quick Start | 快速开始

```bash
# Clone the repository
git clone https://github.com/Lifa-su/saas-starter.git
cd saas-starter

# Install dependencies
npm install

# Start development server
npm run dev

# 🎉 Open http://localhost:3000
```

That's it! You're up and running in under 60 seconds.

---

## 🎯 Live Demo

👉 **[https://lifa-su.github.io/saas-starter](https://lifa-su.github.io/saas-starter)**

---

## 🛠 Tech Stack | 技术栈

| Technology | Purpose |
|:----------:|---------|
| <img src="https://img.shields.io/badge/-Next.js%2014-000?style=flat-square&logo=next.js" /> | React framework with App Router |
| <img src="https://img.shields.io/badge/-TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white" /> | Type-safe development |
| <img src="https://img.shields.io/badge/-TailwindCSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" /> | Utility-first CSS framework |
| <img src="https://img.shields.io/badge/-Lucide-f56565?style=flat-square" /> | Beautiful icon library |
| <img src="https://img.shields.io/badge/-clsx-gray?style=flat-square" /> | Conditional class names |

---

## 📦 Project Structure | 项目结构

```
src/
├── app/                     # Next.js App Router
│   ├── page.tsx             # 🏠 Landing page
│   ├── auth/                # 🔐 Login / Register / Forgot Password
│   ├── dashboard/           # 📊 Dashboard with sidebar layout
│   ├── settings/            # ⚙️ Profile, password, billing
│   └── pricing/             # 💰 Pricing page
├── components/
│   ├── ui/                  # 🧩 Reusable primitives (Button, Input, Card...)
│   ├── landing/             # 🎨 Landing sections (Hero, Features, Pricing...)
│   └── dashboard/           # 📊 Dashboard components (Sidebar, Header...)
├── hooks/                   # 🪝 useAuth, useTheme
├── lib/                     # 📚 Auth logic, demo data store
└── types/                   # 📝 TypeScript definitions
```

> **7 pages** · **14 components** · **Dark/Light mode** · **Full responsive**

---

## 🎨 Customization | 自定义

<details>
<summary><b>🎨 Change Brand Colors</b></summary>

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50:  '#f0f4ff',
        500: '#5c7cfa',  // Your brand color
        900: '#364fc7',
      },
    },
  },
}
```

</details>

<details>
<summary><b>🔐 Connect Real Authentication</b></summary>

Replace `src/lib/auth.ts` with your auth provider (NextAuth.js, Clerk, Supabase Auth, Firebase, etc.):

```ts
// Example with NextAuth.js
import { signIn, signOut } from 'next-auth/react'

export async function login(email: string, password: string) {
  const result = await signIn('credentials', { email, password, redirect: false })
  return { success: !result?.error, error: result?.error }
}
```

</details>

<details>
<summary><b>💳 Add Stripe Payments</b></summary>

```bash
npm install stripe @stripe/stripe-js
```

Create API routes in `src/app/api/` and update CTA buttons in `src/components/landing/Pricing.tsx`.

</details>

<details>
<summary><b>📝 Update Content & Copy</b></summary>

All demo content is centralized in `src/lib/store.ts` — features, pricing plans, testimonials, FAQ items. One file to rule them all.

</details>

---

## 🤝 Contributing | 贡献指南

Contributions are welcome! 欢迎贡献代码！

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Please make sure to:
- Follow the existing code style
- Write meaningful commit messages
- Test your changes before submitting

---

## ⭐ Show Your Support

If this project helped you, give it a ⭐ on GitHub — it means a lot!

如果这个项目对你有帮助，请给个 Star ⭐ 支持一下！

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE). Use it for anything — personal, commercial, whatever you want.

---

<div align="center">

Built with ❤️ for indie hackers and startup founders.

为独立开发者和创业者而生。

</div>
