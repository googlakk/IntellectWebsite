import createNextIntlPlugin from 'next-intl/plugin'
import withBundleAnalyzer from '@next/bundle-analyzer'

const withNextIntl = createNextIntlPlugin()
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.tildacdn.one',
      },
      {
        protocol: 'https',
        hostname: 'intellect.soulist.life',
      },
      {
        protocol: 'https',
        hostname: 'www.intellect.kg',
      },
      {
        protocol: 'https',
        hostname: 'intellect.kg',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@iconify/react', 'framer-motion'],
  },
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/((?!api|images).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}

export default bundleAnalyzer(withNextIntl(nextConfig))
