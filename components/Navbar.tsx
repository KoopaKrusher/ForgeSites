'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type NavItem = {
  name: string
  href: string
}

const NAV: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
]

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={[
        'px-3 py-2 rounded-md text-sm font-medium transition-colors',
        active ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100'
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
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Braden
        </Link>
        <button
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden sm:flex gap-1">
          {NAV.map((item) => {
            const active = pathname === item.href
            return <NavLink key={item.href} item={item} active={active} />
          })}
        </nav>
      </div>
      {open && (
        <nav className="sm:hidden border-t border-gray-200">
          <div className="px-4 py-2 flex flex-col">
            {NAV.map((item) => {
              const active = pathname === item.href
              return (
                <NavLink
                  key={item.href}
                  item={item}
                  active={active}
                />
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
