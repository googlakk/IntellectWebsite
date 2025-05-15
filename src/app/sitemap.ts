import { MetadataRoute } from 'next'

import { fetchAllBlogs } from '@/helpers/functions'
import { BlogsTypes } from '@/types/blogs.interface'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://intellect.kg'
const locales = ['kg', 'ru', 'en'] as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogsRu = await fetchAllBlogs('ru')
  const blogsKg = await fetchAllBlogs('kg')
  const blogsEn = await fetchAllBlogs('en')

  const blogsRuPages = blogsRu?.data.map((item: BlogsTypes.Item) => ({
    url: `${baseUrl}/ru/blog/${item.documentId}`,
    lastModified: new Date(item.updatedAt ?? Date.now()),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  const blogsKgPages = blogsKg?.data.map((item: BlogsTypes.Item) => ({
    url: `${baseUrl}/kg/blog/${item.documentId}`,
    lastModified: new Date(item.updatedAt ?? Date.now()),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  const blogsEnPages = blogsEn?.data.map((item: BlogsTypes.Item) => ({
    url: `${baseUrl}/en/blog/${item.documentId}`,
    lastModified: new Date(item.updatedAt ?? Date.now()),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const localeHomes = locales.map(locale => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const staticRoutes = [
    'aboutUs',
    'blog',
    'contact',
    'documentation',
    'forParents',
    'junior',
    'results',
    'teams',
  ]

  const staticPages = staticRoutes.flatMap(route =>
    locales.map(locale => ({
      url: `${baseUrl}/${locale}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  )

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...localeHomes,
    ...staticPages,
    ...blogsRuPages,
    ...blogsKgPages,
    ...blogsEnPages,
  ]
}
