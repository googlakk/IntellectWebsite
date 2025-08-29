import React from 'react'

import Image from 'next/image'

import { Link } from '@/i18n/routing'
import { BlogsTypes } from '@/types/blogs.interface'

const NewsCard = ({ news }: { news: BlogsTypes.Item}) => {

  return (
    <>
      <div className="group relative">
        <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
          <Link href={`/blog/${news.documentId}`} aria-label="news cover" className="block">
            <Image
              src={news.image?.url ? `https://intellect.soulist.life${news.image.url}` : '/images/logo/logoInt.jpeg'}
              alt="news image"
              className="w-full transition group-hover:scale-110 duration-500"
              width={408}
              height={272}
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              quality={100}
            />
          </Link>
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            Новость
          </div>
        </div>
        <div className="absolute top-0 py-2 mt-2 px-5 rounded">
          <span className="inline-block bg-white px-2 py-1 rounded-md shadow-sm text-sm font-semibold text-gray-700">
            {news.date}
          </span>
        </div>
        <div className="px-2">
          <h3>
            <Link
              href={`/blog/${news.documentId}`}
              className="mb-4 inline-block font-bold text-dark text-black hover:text-primary dark:text-white dark:hover:text-primary text-[20px] leading-[1.8rem] line-clamp-2"
            >
              {news.title}
            </Link>
          </h3>
          <div className="flex items-center justify-between mt-4">
            <Link
              href={`/blog/${news.documentId}`}
              className="text-primary font-medium hover:underline transition-all duration-300"
            >
              Читать далее →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsCard
