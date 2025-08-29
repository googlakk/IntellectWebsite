'use client'

import React from 'react'

import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'

import SectionTitle from '@/components/Common/SectionTitle'
import { Link } from '@/i18n/routing'
import { Api } from '@/services'
import { BlogsTypes } from '@/types/blogs.interface'

const NewsPreview: React.FC = () => {
  const locale = useLocale()
  const t = useTranslations('newsPreview')
  const [news, setNews] = React.useState<BlogsTypes.Item[]>([])
  const [loading, setLoading] = React.useState(false)

  const loadLatestNews = async () => {
    setLoading(true)
    try {
      const response = await Api.blog.BlogGET(locale)
      // Берем только первые 3 новости

      setNews(response.data.data.slice(0, 3))
    } catch (error) {
      console.log('Failed to fetch news', error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    loadLatestNews()
  }, [locale])

  if (loading) {
    return (
      <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-darkmode">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-dark rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300" />
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-3" />
                  <div className="h-4 bg-gray-300 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!news.length) {
    return null
  }

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-darkmode">
      <div className="container">
        <SectionTitle
          title={t('title')}
          paragraph={t('description')}
          center
          mb="80px"
        />

        <div className={`grid gap-8 mb-12 ${
          news.length === 1
            ? 'grid-cols-1 place-items-center max-w-lg mx-auto'
            : news.length === 2
              ? 'grid-cols-1 md:grid-cols-2 place-items-center max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}
        >
          {news.map((item, index) => (
            <article
              key={item.documentId}
              className="group bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden max-w-lg w-full"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="relative overflow-hidden">
                <Link href={`/blog/${item.documentId}`} className="block">
                  <Image
                    src={item.image?.url ? `https://intellect.soulist.life${item.image.url}` : '/images/logo/logoInt.jpeg'}
                    alt={item.title}
                    width={500}
                    height={280}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 font-semibold text-sm tracking-wide uppercase letter-spacing-wide shadow-lg">
                  {t('importantNews')}
                </div>
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 font-semibold text-sm shadow-lg border border-gray-200">
                  {item.date}
                </div>
              </div>

              <div className="p-8">
                <header className="mb-6">
                  <h3>
                    <Link
                      href={`/blog/${item.documentId}`}
                      className="block font-bold text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400 text-xl leading-tight mb-3 line-clamp-3 transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  </h3>
                </header>

                <footer className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={`/blog/${item.documentId}`}
                    className="inline-flex items-center text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm tracking-wide uppercase transition-all duration-300 group"
                  >
                    {t('readMore')}
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="h-2 w-2 bg-gray-400 rounded-full" />
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsPreview
