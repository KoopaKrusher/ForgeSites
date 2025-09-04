export default function Process() {
  const steps = [
    {
      title: 'Discover',
      body: 'Quick consult to understand goals, audience, and content.',
      icon: (
        <svg className="h-6 w-6 text-molten" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Build',
      body: 'Design + implementation with reviews to keep things on track.',
      icon: (
        <svg className="h-6 w-6 text-molten" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 7h18M3 12h18M3 17h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: 'Launch',
      body: 'Go live with SEO basics and an easy handoff.',
      icon: (
        <svg className="h-6 w-6 text-molten" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ]
  return (
    <section aria-labelledby="how-it-works" className="py-16 section-fade">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 id="how-it-works" className="text-2xl md:text-3xl font-extrabold text-steel mb-6">
          How it works
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.title} className="group relative overflow-hidden rounded-2xl bg-white border border-steel/10 p-5 shadow-md transition duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-lg focus-within:shadow-lg">
              <div className="mb-3">{s.icon}</div>
              <h3 className="font-bold text-steel mb-1">{s.title}</h3>
              <p className="text-steel/80">{s.body}</p>
              <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-2xl bg-molten/0 transition-colors duration-200 group-hover:bg-molten/30 group-focus-within:bg-molten/40" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
