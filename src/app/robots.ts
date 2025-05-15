import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://intellect.kg'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/service', '/aboutUs', '/blog', '/contact', '/documentation', '/forParents', '/junior', '/results', '/teams'],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
