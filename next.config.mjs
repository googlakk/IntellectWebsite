/** @type {import('next').NextConfig} */
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
}

export default nextConfig
