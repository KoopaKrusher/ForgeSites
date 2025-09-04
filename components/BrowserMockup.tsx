import React from 'react'

export default function BrowserMockup({ children }: { children?: React.ReactNode }) {
  return (
    <figure className="rounded-xl border border-black/10 bg-white shadow-sm overflow-hidden">
      <div className="relative flex items-center gap-2 h-8 px-3 border-b border-black/10 bg-bone">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-steel/30" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-steel/30" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-steel/30" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-xs font-medium text-steel/60">Lastest Project</span>
        </div>
      </div>
      <div className="p-3">
        <div
          className="w-full rounded-lg border border-black/10 bg-steel/5"
          style={{ aspectRatio: '16 / 10' }}
          aria-label="Sample small business site preview"
          role="img"
        >
          {children}
        </div>
      </div>
    </figure>
  )
}
