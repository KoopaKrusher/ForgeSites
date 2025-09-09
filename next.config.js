/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  
  images: {
    // Avoid remote domain errors on Vercel without explicit domain config
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Compress responses
  compress: true,
  
  // Optimize JavaScript output
  swcMinify: true,
  
  env: {
    // Expose DB presence to client for Request form behavior
    NEXT_PUBLIC_HAS_DATABASE: process.env.DATABASE_URL ? 'true' : 'false'
  },
  
  // Optimize bundle
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        'framer-motion': {
          name: 'framer-motion',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          priority: 10,
        },
        'three': {
          name: 'three',
          chunks: 'async',
          test: /[\\/]node_modules[\\/]three[\\/]/,
          priority: 10,
        },
      }
    }
    
    return config
  },
  
  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ]
      },
      {
        source: '/(.*)\\.(png|jpg|jpeg|gif|webp|avif|ico|svg)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
