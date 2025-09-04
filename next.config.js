/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Avoid remote domain errors on Vercel without explicit domain config
    unoptimized: true
  },
  env: {
    // Expose DB presence to client for Request form behavior
    NEXT_PUBLIC_HAS_DATABASE: process.env.DATABASE_URL ? 'true' : 'false'
  }
}

module.exports = nextConfig
