'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logo from '@/public/logo.png'

type NavItem = {
  name: string
  href: string
}

const NAV: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Packages', href: '/packages' }
]

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={[
        'px-3 py-2 rounded-md text-sm font-semibold transition duration-200 motion-reduce:transition-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-molten/60',
        active ? 'text-molten bg-black/5' : 'text-steel hover:text-molten hover:bg-black/5'
      ].join(' ')}
    >
      {item.name}
    </Link>
  )
}

export default function Navbar() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-bone/80 backdrop-blur supports-[backdrop-filter]:bg-bone/60">
      <div className="max-w-[1100px] mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Home">
          <Image
            src={logo}
            alt="ForgeSites logo"
            priority
            className="h-16 w-auto sm:h-20"
            sizes="(max-width: 640px) 64px, 80px"
          />
        </Link>
        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-steel hover:bg-black/5 transition duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-molten/60"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden sm:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.href
            return <NavLink key={item.href} item={item} active={active} />
          })}
          <Link
            href="/request"
            className="ml-2 inline-block rounded-md bg-molten px-4 py-2 text-white font-semibold transition duration-200 motion-reduce:transition-none hover:bg-steel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
          >
            Request a Quote
          </Link>
        </nav>
      </div>
      {open && (
        <nav className="sm:hidden border-t border-black/10 bg-bone">
          <div className="px-4 py-2 flex flex-col">
            {NAV.map((item) => {
              const active = pathname === item.href
              return <NavLink key={item.href} item={item} active={active} />
            })}
            <Link
              href="/request"
              className="mt-1 inline-block rounded-md bg-molten px-3 py-2 text-white font-semibold text-sm text-center transition duration-200 motion-reduce:transition-none hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-molten/70"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
