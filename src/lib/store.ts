// ============================================================
// Mock Data Store
// Contains all demo data for the template
// Replace with real API calls when connecting your backend
// ============================================================

import { PricingPlan, StatCard, Testimonial, FAQItem, Feature } from '@/types'

/** Landing page features */
export const features: Feature[] = [
  {
    icon: 'Zap',
    title: 'Lightning Fast',
    description:
      'Built on Next.js 14 with App Router for blazing fast page loads and optimal performance out of the box.',
  },
  {
    icon: 'Shield',
    title: 'Secure by Default',
    description:
      'Authentication, authorization, and security best practices baked in from day one.',
  },
  {
    icon: 'Palette',
    title: 'Beautiful UI',
    description:
      'Stunning, modern interface with dark/light mode, smooth animations, and responsive design.',
  },
  {
    icon: 'CreditCard',
    title: 'Payment Ready',
    description:
      'Pre-built pricing pages and subscription management. Just connect Stripe and go.',
  },
  {
    icon: 'BarChart3',
    title: 'Analytics Dashboard',
    description:
      'Comprehensive dashboard with charts, stats, and insights to track your business metrics.',
  },
  {
    icon: 'Blocks',
    title: 'Modular Architecture',
    description:
      'Clean, composable components that are easy to customize, extend, or replace as needed.',
  },
]

/** Pricing plans configuration */
export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Starter',
    description: 'Perfect for side projects and experiments',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Up to 100 users',
      '1 GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
    cta: 'Get Started Free',
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'For growing businesses that need more power',
    price: { monthly: 29, yearly: 290 },
    features: [
      'Up to 10,000 users',
      '50 GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom domain',
      'Team collaboration',
      'Webhooks',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large teams with advanced needs',
    price: { monthly: 99, yearly: 990 },
    features: [
      'Unlimited users',
      '500 GB storage',
      'Enterprise analytics',
      '24/7 dedicated support',
      'API access',
      'Custom domain',
      'Team collaboration',
      'Webhooks',
      'SSO / SAML',
      'SLA guarantee',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
  },
]

/** Dashboard statistics */
export const dashboardStats: StatCard[] = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    changeType: 'positive',
    icon: 'DollarSign',
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+15.3%',
    changeType: 'positive',
    icon: 'Users',
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: '-0.4%',
    changeType: 'negative',
    icon: 'TrendingUp',
  },
  {
    title: 'Avg. Session',
    value: '4m 32s',
    change: '+12.5%',
    changeType: 'positive',
    icon: 'Clock',
  },
]

/** Customer testimonials */
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow',
    content:
      'This starter template saved us weeks of development time. The code quality is exceptional and the UI is gorgeous. We launched our SaaS in just 2 weeks.',
    avatar: 'SC',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'Founder',
    company: 'DataPulse',
    content:
      'I\'ve tried many boilerplates and this is by far the best. Clean architecture, beautiful design, and everything just works. Worth every penny.',
    avatar: 'MJ',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Lead Developer',
    company: 'CloudNine',
    content:
      'The dark mode implementation alone is worth the price. Every component is thoughtfully designed and the codebase is a joy to work with.',
    avatar: 'ER',
    rating: 5,
  },
  {
    id: '4',
    name: 'Alex Kim',
    role: 'Solo Founder',
    company: 'ShipIt.io',
    content:
      'As a solo founder, this template was a game-changer. I went from idea to paying customers in under a month. The auth and billing setup is seamless.',
    avatar: 'AK',
    rating: 5,
  },
  {
    id: '5',
    name: 'David Park',
    role: 'Engineering Lead',
    company: 'ScaleUp',
    content:
      'We evaluated 5 different starter templates and this one won hands down. The component architecture is clean and extensible. Our team was productive from day one.',
    avatar: 'DP',
    rating: 5,
  },
  {
    id: '6',
    name: 'Lisa Wang',
    role: 'Product Manager',
    company: 'Nextera',
    content:
      'Beautiful landing page, solid dashboard, and great developer experience. This template has everything you need to launch a professional SaaS product.',
    avatar: 'LW',
    rating: 5,
  },
]

/** FAQ items */
export const faqItems: FAQItem[] = [
  {
    question: 'What tech stack does this template use?',
    answer:
      'This template is built with Next.js 14 (App Router), TypeScript, TailwindCSS, and Lucide Icons. It uses a modular architecture that makes it easy to integrate with any backend or database.',
  },
  {
    question: 'Can I use this for commercial projects?',
    answer:
      'Absolutely! You get a full commercial license with your purchase. Use it for unlimited personal and commercial projects. No attribution required.',
  },
  {
    question: 'How do I connect my own backend?',
    answer:
      'The template uses a clean abstraction layer for authentication and data. Simply replace the mock functions in the /lib directory with your actual API calls. We support any backend — Node.js, Python, Go, or BaaS like Supabase and Firebase.',
  },
  {
    question: 'Is the template responsive?',
    answer:
      'Yes! Every component is fully responsive and tested across all screen sizes — from mobile phones to ultra-wide monitors. Dark mode is also fully supported.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with the template for any reason, contact us for a full refund.',
  },
  {
    question: 'Will I get updates?',
    answer:
      'Yes! All purchases include free lifetime updates. We regularly add new components, pages, and features based on community feedback.',
  },
]

/** Recent activity for dashboard */
export const recentActivity = [
  { id: '1', action: 'New user registered', user: 'john@example.com', time: '2 minutes ago', type: 'user' },
  { id: '2', action: 'Subscription upgraded', user: 'sarah@example.com', time: '15 minutes ago', type: 'billing' },
  { id: '3', action: 'Payment received', user: 'mike@example.com', time: '1 hour ago', type: 'payment' },
  { id: '4', action: 'Support ticket opened', user: 'emma@example.com', time: '2 hours ago', type: 'support' },
  { id: '5', action: 'New user registered', user: 'alex@example.com', time: '3 hours ago', type: 'user' },
  { id: '6', action: 'Subscription cancelled', user: 'tom@example.com', time: '5 hours ago', type: 'billing' },
]

/** Revenue chart data (mock) */
export const revenueData = [
  { month: 'Jan', revenue: 4200 },
  { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 5200 },
  { month: 'Apr', revenue: 7800 },
  { month: 'May', revenue: 8500 },
  { month: 'Jun', revenue: 9200 },
  { month: 'Jul', revenue: 11000 },
  { month: 'Aug', revenue: 10500 },
  { month: 'Sep', revenue: 12800 },
  { month: 'Oct', revenue: 14200 },
  { month: 'Nov', revenue: 13500 },
  { month: 'Dec', revenue: 16000 },
]
