export default function LogosStrip() {
  const logos = Array.from({ length: 5 })
  return (
    <section aria-label="Trusted by" className="py-6">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 opacity-70">
          {logos.map((_, i) => (
            <div key={i} className="shrink-0">
              <svg
                className="text-steel/50 hover:text-steel/70 transition"
                width="110"
                height="28"
                viewBox="0 0 110 28"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="0" y="8" width="110" height="12" rx="3" />
              </svg>
              <span className="sr-only">Logo placeholder {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

