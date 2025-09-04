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
            Placeholder mission text: We design and build modern, fast, and reliable sites for
            small businesses — with a focus on clarity, performance, and results.
          </p>
        </div>
      </section>

      {/* 2) Positioning / Story (white + divider) */}
      <section className="bg-white border-t border-steel/10 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-steel text-3xl md:text-4xl font-extrabold uppercase tracking-wider relative after:block after:h-[2px] after:w-16 after:bg-molten after:mt-3">
            A Boutique Studio, Built for Small Business
          </h2>
          <p className="mt-4 max-w-prose text-steel/80 text-base md:text-lg">
            Placeholder text: Thoughtful, hands-on work without the agency overhead. We bring a
            flexible process, clear communication, and a focus on practical outcomes that support
            your goals and budget.
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
              className="group relative rounded-2xl border border-steel/10 bg-white p-6 shadow-md overflow-hidden transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="text-steel font-bold mb-2">Hands-On Collaboration</h3>
              <p className="text-steel/80">
                Placeholder text: We keep you involved with clear, quick feedback loops and practical
                recommendations to move fast without sacrificing quality.
              </p>
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-molten/0 transition-colors duration-200 group-hover:bg-molten/30 group-focus-within:bg-molten/40" />
            </article>
            <article
              tabIndex={0}
              className="group relative rounded-2xl border border-steel/10 bg-white p-6 shadow-md overflow-hidden transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="text-steel font-bold mb-2">Custom, Flexible Builds</h3>
              <p className="text-steel/80">
                Placeholder text: From simple brochure sites to custom Next.js builds, we tailor the
                stack and scope to your needs.
              </p>
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-molten/0 transition-colors duration-200 group-hover:bg-molten/30 group-focus-within:bg-molten/40" />
            </article>
            <article
              tabIndex={0}
              className="group relative rounded-2xl border border-steel/10 bg-white p-6 shadow-md overflow-hidden transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-lg focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <h3 className="text-steel font-bold mb-2">No Headaches</h3>
              <p className="text-steel/80">
                Placeholder text: Clear pricing, dependable timelines, and ongoing care options so
                you’re never stuck or surprised.
              </p>
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-molten/0 transition-colors duration-200 group-hover:bg-molten/30 group-focus-within:bg-molten/40" />
            </article>
          </div>
        </div>
      </section>

      {/* 4) Founder’s Note (white + thin gold top border) */}
      <section className="bg-white border-t border-gold py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-steel text-3xl md:text-4xl font-extrabold uppercase tracking-wider relative after:block after:h-[2px] after:w-16 after:bg-molten after:mt-3">
            Founder’s Note
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-[auto,1fr] items-start">
            <div className="flex items-start gap-4">
              <div
                aria-hidden="true"
                className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-steel/10 border border-black/10"
              />
            </div>
            <div>
              <div className="bg-bone rounded-md p-5 md:p-6 max-w-prose">
                <blockquote className="border-l-4 border-molten pl-4 md:pl-5 text-steel/80 italic">
                  <p>
                    Placeholder quote: We believe the best websites are forged with clarity and care —
                    practical builds that move your business forward and are easy to live with.
                  </p>
                </blockquote>
              </div>
              <p className="mt-4 text-steel font-semibold">
                — Braden Baney, Founder of ForgeSites
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
