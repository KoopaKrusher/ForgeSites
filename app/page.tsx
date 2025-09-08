import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/AnimatedHero'
import ServicesSection from '@/components/ServicesSection'
import Process from '@/components/Process'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'ForgeSites — Websites Forged for Small Businesses',
  description: 'Affordable, modern websites with flexible packages and ongoing care.',
  openGraph: {
    title: 'ForgeSites — Websites Forged for Small Businesses',
    description: 'Affordable, modern websites with flexible packages and ongoing care.'
  }
}

export default function HomePage() {
  return (
    <div>
      <AnimatedHero />

      <ServicesSection />

      <Process />
      <CTABand />
    </div>
  )
}
