import { routing } from '@/i18n/routing'

import type { Metadata } from 'next'

type Locale = typeof routing['locales'][number]

async function getMessages(locale: Locale) {
  return (await import(`@/messages/${locale}.json`)).default as Record<string, any>
}

function ogImage(slug: string) {
  return `https://intellect.kg/og/${slug}.jpg`
}

/**
 * @param locale  'en' | 'ru' | 'kg'
 * @param pageKey
 * @param extra
 */
export async function buildMetadata(
  locale: Locale,
  pageKey: string,
  extra: Partial<Metadata> = {},
): Promise<Metadata> {
  const m = await getMessages(locale)

  const title = m[`seo.${pageKey}.title`]
  const description = m[`seo.${pageKey}.desc`]
  const keywords = m[`seo.${pageKey}.keywords`]?.split(',') ?? []

  const base: Metadata = {
    title,
    description,
    keywords,
    icons: { icon: '/images/logoInt.jpeg' },
    alternates: {
      canonical: `/${locale}/${pageKey === 'home' ? '' : pageKey}`,
      languages: {
        en: `/en/${pageKey === 'home' ? '' : pageKey}`,
        ru: `/ru/${pageKey === 'home' ? '' : pageKey}`,
        kg: `/kg/${pageKey === 'home' ? '' : pageKey}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://intellect.kg/${locale}/${pageKey === 'home' ? '' : pageKey}`,
      siteName: 'Intellect Pro School',
      images: [{ url: ogImage(pageKey) }],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage(pageKey)],
    },
    other: {
      'jsonLd:organization': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Intellect Pro School',
        url: 'https://intellect.kg',
        logo: 'https://intellect.kg/favicon.ico',
        sameAs: [
          'https://www.instagram.com/intellect_pro_school',
          'https://www.youtube.com/@intellectschool905',
        ],
      }),
    },
  }

  return { ...base, ...extra }
}
