// ============================================================
// Pricing Page (standalone)
// Full-page pricing with comparison table
// Accessible from the main navigation
// ============================================================

import Navbar from '@/components/Navbar'
import Pricing from '@/components/landing/Pricing'
import Footer from '@/components/landing/Footer'

export default function PricingPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-20">
        <Pricing />
      </div>
      <Footer />
    </main>
  )
}
