import Link from 'next/link'
import ProjectMock from './ProjectMock'

export default function HeroSplit() {
  return (
    <section className="relative section-fade-b">
      <div className="w-full h-[3px] md:h-[4px] bg-molten" aria-hidden="true" />
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-10 md:gap-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-steel mb-6">
              Websites Forged for You
            </h1>
            <p className="text-lg md:text-xl text-steel/80 max-w-prose mb-8">
              Affordable, modern sites built for small businesses.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/request"
                className="inline-block rounded-md bg-molten text-white px-6 py-3 font-semibold transition duration-200 motion-reduce:transition-none hover:bg-steel hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Request a Quote"
              >
                Request a Quote
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center rounded-xl border border-steel/40 text-steel px-6 py-3 font-semibold transition duration-200 motion-reduce:transition-none hover:bg-steel/10 active:bg-steel/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                View Packages
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full">
            <ProjectMock />
          </div>
        </div>
      </div>
    </section>
  )
}
