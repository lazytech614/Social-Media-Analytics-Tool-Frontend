import { HeroSection } from '@/components/sections/landing-page/hero-section'
import { FeaturesSection } from '@/components/sections/landing-page/features-section'
import { AnalyticsDemoSection } from '@/components/sections/landing-page/analytics-demo-section'
import { TestimonialsSection } from '@/components/sections/landing-page/testimonials-section'
import { CTASection } from '@/components/sections/landing-page/cta-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AnalyticsDemoSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
