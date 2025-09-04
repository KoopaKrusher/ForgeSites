import Link from 'next/link'

export default function CTABand() {
  return (
    <section aria-labelledby="cta" className="border-t border-molten bg-bone section-fade-t">
      <div className="max-w-[1100px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 id="cta" className="text-xl md:text-2xl font-extrabold text-steel">
          Ready to get started?
        </h2>
        <Link
          href="/request"
          className="inline-block rounded-md bg-molten text-white px-6 py-3 font-semibold transition duration-200 motion-reduce:transition-none hover:bg-steel hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  )
}
