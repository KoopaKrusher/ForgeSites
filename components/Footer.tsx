import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-bone">
      <div className="max-w-[1100px] mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-steel/80">
          © 2025 ForgeSites. Forged with care.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:hello@forgesites.dev" className="text-steel hover:text-molten transition duration-200 motion-reduce:transition-none">hello@forgesites.dev</a>
          <Link href="#" className="text-steel hover:text-molten transition duration-200 motion-reduce:transition-none">GitHub</Link>
          <Link href="#" className="text-steel hover:text-molten transition duration-200 motion-reduce:transition-none">Instagram</Link>
          <Link href="#" className="text-steel hover:text-molten transition duration-200 motion-reduce:transition-none">LinkedIn</Link>
        </div>
      </div>
    </footer>
  )
}
