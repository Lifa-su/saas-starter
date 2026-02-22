// ============================================================
// Type Definitions for SaaS Starter Template
// Customize these types to match your backend data models
// ============================================================

/** User profile information */
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  plan: PlanTier
  createdAt: string
}

/** Available subscription tiers */
export type PlanTier = 'free' | 'pro' | 'enterprise'

/** Pricing plan configuration */
export interface PricingPlan {
  id: PlanTier
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: string[]
  highlighted?: boolean
  cta: string
}

/** Dashboard statistics card */
export interface StatCard {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  icon: string
}

/** Testimonial from a customer */
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

/** FAQ item */
export interface FAQItem {
  question: string
  answer: string
}

/** Feature item for landing page */
export interface Feature {
  icon: string
  title: string
  description: string
}

/** Navigation link */
export interface NavLink {
  label: string
  href: string
}

/** Auth form state */
export interface AuthFormState {
  email: string
  password: string
  name?: string
  loading: boolean
  error: string | null
}

/** Toast notification */
export interface Toast {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
}
