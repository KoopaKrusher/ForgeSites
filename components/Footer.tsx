import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-steel/10 bg-bone text-steel relative z-40">
      <div className="max-w-[1100px] mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: logo + brand line + copyright */}
          <div className="flex items-start gap-3">
            <Image
              src={logo}
              alt="ForgeSites logo"
              width={32}
              height={32}
              className="h-8 w-8"
              priority={false}
            />
            <div>
              <p className="text-sm font-semibold">
                ForgeSites — Websites Forged for Small Businesses
              </p>
              <p className="text-xs text-steel/70 mt-1">© 2025 ForgeSites. All rights reserved.</p>
            </div>
          </div>

          {/* Right: email + social icons */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:braden@forgesites.com"
              className="text-sm font-semibold text-steel hover:text-molten rounded-md px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition duration-200 motion-reduce:transition-none"
            >
              braden@forgesites.com
            </a>
            <nav className="flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="rounded-md p-1 text-steel hover:text-molten focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition duration-200 motion-reduce:transition-none"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.162 19.49c.5.092.683-.216.683-.48 0-.237-.009-.866-.013-1.7-2.78.604-3.366-1.34-3.366-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.58 9.58 0 0 1 12 6.844a9.54 9.54 0 0 1 2.503.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.029 1.592 1.029 2.683 0 3.842-2.338 4.687-4.565 4.936.359.309.679.918.679 1.852 0 1.337-.012 2.416-.012 2.744 0 .266.181.576.688.478A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="rounded-md p-1 text-steel hover:text-molten focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition duration-200 motion-reduce:transition-none"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.67.512a5.4 5.4 0 0 1 1.95 1.27 5.4 5.4 0 0 1 1.27 1.95c.27.7.458 1.5.512 2.67.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.512 2.67a5.4 5.4 0 0 1-1.27 1.95 5.4 5.4 0 0 1-1.95 1.27c-.7.27-1.5.458-2.67.512-1.266.058-1.65.07-4.85.07s-3.532-.012-4.85-.07c-1.17-.054-1.97-.24-2.67-.512a5.4 5.4 0 0 1-1.95-1.27 5.4 5.4 0 0 1-1.27-1.95c-.27-.7-.458-1.5-.512-2.67C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.97.512-2.67a5.4 5.4 0 0 1 1.27-1.95 5.4 5.4 0 0 1 1.95-1.27c.7-.27 1.5-.458 2.67-.512C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.532.012-4.778.07-1.03.047-1.588.22-1.96.366-.494.191-.85.42-1.223.793-.372.372-.602.728-.793 1.222-.146.373-.319.931-.366 1.96-.058 1.246-.07 1.618-.07 4.778s.012 3.532.07 4.778c.047 1.03.22 1.588.366 1.96.191.494.42.85.793 1.223.372.372.728.602 1.222.793.373.146.931.319 1.96.366 1.246.058 1.618.07 4.778.07s3.532-.012 4.778-.07c1.03-.047 1.588-.22 1.96-.366.494-.191.85-.42 1.223-.793.372-.372.602-.728.793-1.222.146-.373.319-.931.366-1.96.058-1.246.07-1.618.07-4.778s-.012-3.532-.07-4.778c-.047-1.03-.22-1.588-.366-1.96a3.6 3.6 0 0 0-.793-1.223 3.6 3.6 0 0 0-1.222-.793c-.373-.146-.931-.319-1.96-.366C15.532 4.012 15.16 4 12 4zm0 2.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm5.85-2.1a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="rounded-md p-1 text-steel hover:text-molten focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition duration-200 motion-reduce:transition-none"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM9 8.98h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-6.75c0-1.61-.03-3.68-2.24-3.68-2.24 0-2.59 1.75-2.59 3.56V24H9V8.98z" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
