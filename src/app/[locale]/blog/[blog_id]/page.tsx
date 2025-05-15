import Blog from '@/components/SharedComponent/Blog'
import type { Locale } from '@/i18n/routing'
import { BlogDetailHeadGET } from '@/services/blog-api'
import { buildMetadata } from '@/utils/seo'

type RouteParams = { locale: Locale; blog_id: string }

export async function generateMetadata(
  props: { params: Promise<RouteParams> },
) {
  const { locale, blog_id } = await props.params
  const post = await BlogDetailHeadGET(blog_id, locale)

  if (!post) return buildMetadata(locale, 'blog')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: [post.image],
    datePublished: post.date,
    dateModified: post.date,
    author: [{ '@type': 'Person', name: 'Intellect school' }],
    publisher: {
      '@type': 'Organization',
      name: 'Intellect Pro School',
      logo: { '@type': 'ImageObject', url: 'https://intellect.kg/favicon.ico' },
    },
    description: post.text,
  }

  return buildMetadata(locale, 'blogPost', {
    title: post.title,
    description: post.text,
    openGraph: {
      title: post.title,
      description: post.text,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      images: [post.image],
    },
    twitter: {
      title: post.title,
      description: post.text,
      images: [post.image],
    },
    other: { 'jsonLd:blog': JSON.stringify(jsonLd) },
  })
}

export default async function Post(
  props: { params: Promise<RouteParams> },
) {
  const { blog_id } = await props.params

  return <Blog params={blog_id} />
}
