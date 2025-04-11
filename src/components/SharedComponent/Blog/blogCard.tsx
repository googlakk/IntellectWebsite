import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { BlogsTypes } from '@/types/blogs.interface'

const BlogCard = ({ blog }: { blog: BlogsTypes.Item }) => {

  return (
    <>
      <div className="group relative">
        <div className="mb-8 overflow-hidden rounded">
          <Link href={`/blog/${blog.documentId}`} aria-label="blog cover" className="block">
            <Image
              src={`https://intellect.soulist.life${blog.image.url}` || 'no image'}
              alt="image"
              className="w-full transition group-hover:scale-125"
              width={408}
              height={272}
              style={{ width: '100%', height: 'auto' }}
              quality={100}
            />
          </Link>
        </div>
        <div className="absolute top-0 py-2 mt-2 px-5 rounded">
          <span style={{ WebkitTextStroke: '0.6px black' }} className="text-sm font-semibold leading-loose text-SereneGray">
            {blog.date}
          </span>
        </div>
        <div>
          <h3>
            <Link
              href={`/blog/${blog.documentId}`}
              className="mb-4 inline-block font-semibold text-dark text-black hover:text-primary dark:text-white dark:hover:text-primary text-[22px] leading-[2rem]"
            >
              {blog.title}
            </Link>
          </h3>
        </div>
      </div>
    </>
  )
}

export default BlogCard
