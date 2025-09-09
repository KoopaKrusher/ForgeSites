import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LightweightGeometricBackground from '@/components/LightweightGeometricBackground'
import StructuredData from '@/components/StructuredData'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'

export const metadata: Metadata = {
  metadataBase: new URL('https://forge-sites.com'),
  title: {
    default: 'ForgeSites — Modern Web Development That Converts',
    template: '%s · ForgeSites'
  },
  description: 'Professional web development services specializing in modern, performance-optimized websites for small businesses. Built with cutting-edge technology and creative vision.',
  keywords: ['web development', 'website design', 'small business websites', 'e-commerce development', 'React development', 'Next.js', 'modern web design', 'performance optimization'],
  authors: [{ name: 'Braden Baney', url: 'https://forge-sites.com' }],
  creator: 'Braden Baney',
  publisher: 'ForgeSites',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'ForgeSites — Modern Web Development That Converts',
    description: 'Professional web development services specializing in modern, performance-optimized websites for small businesses.',
    url: 'https://forge-sites.com',
    siteName: 'ForgeSites',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ForgeSites - Modern Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForgeSites — Modern Web Development That Converts',
    description: 'Professional web development services for small businesses',
    creator: '@bradenbaney',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { 
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <PerformanceOptimizer />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="person" />
        
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/logo.webp" />
        <link rel="preload" as="image" href="/e-com-example.webp" />
        
        {/* DNS prefetch for external images */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
      </head>
      <body className="min-h-screen antialiased bg-soft-grid bg-fixed flex flex-col">
        <LightweightGeometricBackground />
        <Navbar />
        <main className="container mx-auto px-4 py-10 with-spotlight flex-1 w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
