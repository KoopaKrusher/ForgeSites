export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* 1) Hero Intro (bone) */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <h1 className="text-steel text-5xl md:text-6xl font-extrabold tracking-tight relative after:block after:h-[3px] after:w-20 after:bg-molten after:mt-4">
            Turning Ideas Into Websites That Work
          </h1>
          <p className="mt-5 max-w-prose text-steel/80 text-lg md:text-xl">
            I design and build fast, reliable websites for small businesses — with a
            focus on clarity, performance, and results.
          </p>
        </div>
      </section>

      {/* 2) Positioning / Story (white + divider) */}
      <section className="bg-white border-t border-steel/10 py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-steel text-3xl md:text-4xl font-extrabold uppercase tracking-wider relative after:block after:h-[2px] after:w-16 after:bg-molten after:mt-3">
            A Dedicated Studio, Built for Small Business
          </h2>
          <p className="mt-4 max-w-prose text-steel/80 text-base md:text-lg">
            Focused, hands‑on partnership without the agency overhead. I commit to a clear,
            efficient process and tailor every build to your goals and constraints—so you get
            the right solution, not a one‑size‑fits‑all site.
          </p>
        </div>
      </section>

      {/* 3) Our Approach (bone + divider) */}
      <section className="bg-bone border-t border-steel/10 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-steel text-3xl md:text-4xl font-extrabold uppercase tracking-wider relative after:block after:h-[2px] after:w-16 after:bg-molten after:mt-3">
            Our Approach
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <article
              tabIndex={0}
              className="group relative rounded-2xl border border-molten/30 bg-white p-6 shadow-md overflow-hidden transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="text-steel font-bold mb-2">Hands-On Collaboration</h3>
              <p className="text-steel/80">
                Stay involved with quick feedback loops, plain‑English updates, and pragmatic
                recommendations that keep momentum without sacrificing quality.
              </p>
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-molten/0 transition-colors duration-200 group-hover:bg-molten/30 group-focus-within:bg-molten/40" />
            </article>
            <article
              tabIndex={0}
              className="group relative rounded-2xl border border-molten/30 bg-white p-6 shadow-md overflow-hidden transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="text-steel font-bold mb-2">Custom, Flexible Builds</h3>
              <p className="text-steel/80">
                From simple brochure sites to custom Next.js builds, I tailor the
                stack and scope to fit your business.
              </p>
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-molten/0 transition-colors duration-200 group-hover:bg-molten/30 group-focus-within:bg-molten/40" />
            </article>
            <article
              tabIndex={0}
              className="group relative rounded-2xl border border-molten/30 bg-white p-6 shadow-md overflow-hidden transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="text-steel font-bold mb-2">No Headaches</h3>
              <p className="text-steel/80">
                Clear pricing, dependable timelines, and ongoing care options so you’re never stuck
                or surprised.
              </p>
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-molten/0 transition-colors duration-200 group-hover:bg-molten/30 group-focus-within:bg-molten/40" />
            </article>
          </div>
        </div>
      </section>

      {/* 4) Why ForgeSites (white + subtle divider) */}
      <section className="bg-white border-t border-steel/10 py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-steel text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-center relative after:block after:mx-auto after:h-[2px] after:w-16 after:bg-molten after:mt-3">
            Why ForgeSites
          </h2>
          <p className="mt-4 max-w-prose mx-auto text-steel/80 text-base md:text-lg text-center">
            ForgeSites was built on the idea that small businesses deserve websites that are simple, affordable,
            and effective. Every site is crafted to be clean, responsive, and easy to manage—so you can focus on
            running your business, not fighting with technology. Our goal is to deliver sites that look professional,
            perform reliably, and are forged to last.
          </p>
        </div>
      </section>
    </div>
  )
}
