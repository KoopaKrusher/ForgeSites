'use client'

import Link from 'next/link'

type ProjectMockProps = {
  imageSrc?: string
  liveHref?: string
}

export default function ProjectMock({
  imageSrc = '/mock-latest-tall.png',
  liveHref = 'https://forgetalentagency.com/'
}: ProjectMockProps) {
  return (
    <figure className="rounded-xl border border-black/10 bg-white overflow-hidden shadow-sm md:shadow-lg focus-within:ring-2 focus-within:ring-molten/30">
      {/* Top bar (browser chrome) */}
      <div className="relative flex items-center gap-2 h-9 px-3 border-b border-black/10 bg-steel/5">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-molten" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-steel/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-xs font-medium text-steel/60">Latest Project</span>
        </div>
      </div>

      {/* Scrollable preview area */}
      <div
        className="relative h-[420px] md:h-[600px] overflow-y-auto overscroll-contain motion-safe:scroll-smooth"
        role="region"
        aria-label="Scrollable project preview"
        tabIndex={0}
      >
        {/* Tall static image representing the page */}
        {/* Using standard img for flexibility; swap to next/image if desired */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="Latest project full-page preview (scroll to view)"
          className="block w-full h-auto"
        />

        {/* Top/Bottom fade masks for polish */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Below-frame link */}
      <figcaption className="border-t border-black/10 bg-white px-4 py-3 text-center">
        <Link
          href={liveHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-molten font-semibold hover:text-gold transition duration-200 motion-reduce:transition-none"
        >
          Open live site
        </Link>
      </figcaption>
    </figure>
  )
}
