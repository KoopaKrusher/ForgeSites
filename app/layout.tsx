import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://forgesites.example'),
  title: {
    default: 'ForgeSites',
    template: '%s · ForgeSites'
  },
  description: 'Forging websites for small businesses.',
  openGraph: {
    title: 'ForgeSites',
    description: 'Forging websites for small businesses.',
    url: 'https://forgesites.example',
    siteName: 'ForgeSites',
    locale: 'en_US',
    type: 'website'
  },
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-soft-grid bg-fixed flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-10 with-spotlight flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
