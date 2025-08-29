'use client'

import React from 'react'

import { useLocale } from 'next-intl'

import PreLoader from '@/components/Common/PreLoader'
import NewsCard from '@/components/SharedComponent/News/newsCard'
import { Api } from '@/services'
import { BlogsTypes } from '@/types/blogs.interface'

const NewsList: React.FC = () => {
  const locale = useLocale()
  const [news, setNews] = React.useState<BlogsTypes.DataBlock | null>(null)
  const [newsLoading, setNewsLoading] = React.useState(false)

  const loadNews = async () => {
    setNewsLoading(true)
    try {
      const response = await Api.blog.BlogGET(locale)

      setNews(response.data)
    } catch (error) {
      console.log('Failed to fetch news', error)
    } finally {
      setNewsLoading(false)
    }
  }

  React.useEffect(() => {
    loadNews()
  }, [])

  if (newsLoading) {
    return (
      <div className="h-screen">
        <PreLoader/>
      </div>
    )
  }

  return (
    <section className="flex flex-wrap justify-center pt-8 dark:bg-darkmode pb-0" id="news">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-7">
          {news?.data.map((item, index) => (
            <div key={index} className="w-full lg:col-span-4 md:col-span-6 col-span-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <NewsCard news={item}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsList
