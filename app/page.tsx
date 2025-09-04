import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSplit from '@/components/HeroSplit'
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
      <HeroSplit />

      <section className="max-w-[1100px] mx-auto px-6 py-12 section-fade">
        <div className="grid grid-cols-2 gap-6">
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-molten/30 p-6 transition duration-200 motion-reduce:transition-none hover:shadow-xl focus-within:shadow-xl after:content-[''] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[4px] after:bg-molten after:opacity-0 group-hover:after:opacity-40 group-focus-within:after:opacity-50 after:transition-opacity after:duration-200 after:rounded-b-2xl">
            <h3 className="font-bold text-steel mb-2">Branded builds</h3>
            <p className="text-steel/80">On-brand design, clear copy, and performant implementation.</p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-molten/30 p-6 transition duration-200 motion-reduce:transition-none hover:shadow-xl focus-within:shadow-xl after:content-[''] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[4px] after:bg-molten after:opacity-0 group-hover:after:opacity-40 group-focus-within:after:opacity-50 after:transition-opacity after:duration-200 after:rounded-b-2xl">
            <h3 className="font-bold text-steel mb-2">Flexible packages</h3>
            <p className="text-steel/80">Choose one-and-done or ongoing care that fits your needs.</p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-molten/30 p-6 transition duration-200 motion-reduce:transition-none hover:shadow-xl focus-within:shadow-xl after:content-[''] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[4px] after:bg-molten after:opacity-0 group-hover:after:opacity-40 group-focus-within:after:opacity-50 after:transition-opacity after:duration-200 after:rounded-b-2xl">
            <h3 className="font-bold text-steel mb-2">Fast & accessible</h3>
            <p className="text-steel/80">Built with accessibility and performance best practices.</p>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-molten/30 p-6 transition duration-200 motion-reduce:transition-none hover:shadow-xl focus-within:shadow-xl after:content-[''] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[4px] after:bg-molten after:opacity-0 group-hover:after:opacity-40 group-focus-within:after:opacity-50 after:transition-opacity after:duration-200 after:rounded-b-2xl">
            <h3 className="font-bold text-steel mb-2">Transparent pricing</h3>
            <p className="text-steel/80">Clear upfront costs and flexible add-ons. No surprises.</p>
          </div>
        </div>
      </section>

      <Process />
      <CTABand />
    </div>
  )
}
