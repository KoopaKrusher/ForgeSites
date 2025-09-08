'use client'

import InteractiveContactForm from '@/components/InteractiveContactForm'

export default function RequestQuotePage() {
  return (
    <div className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-steel mb-4">
            Let&apos;s Build Something Amazing Together
          </h1>
          <p className="text-xl text-steel/80 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide you with a detailed quote and timeline within 24 hours.
          </p>
        </div>

        <InteractiveContactForm />

        {/* Additional info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-molten/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-steel mb-2">Fast Response</h3>
            <p className="text-steel/70 text-sm">We respond to all project inquiries within 24 hours</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-molten/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="font-semibold text-steel mb-2">Transparent Pricing</h3>
            <p className="text-steel/70 text-sm">No hidden fees or surprise costs - everything upfront</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-molten/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-semibold text-steel mb-2">Modern Technology</h3>
            <p className="text-steel/70 text-sm">Built with the latest web technologies for performance</p>
          </div>
        </div>
      </div>
    </div>
  )
}
