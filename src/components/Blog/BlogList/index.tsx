'use client'

/* eslint-disable react/no-array-index-key */
import React from 'react'

import BlogCard from '@/components/SharedComponent/Blog/blogCard'
import { Api } from '@/services'
import { BlogsTypes } from '@/types/blogs.interface'
import PreLoader from '@/components/Common/PreLoader'


const BlogList: React.FC = () => {
  const [blog, setBlog] = React.useState<BlogsTypes.DataBlock | null>(null)
  const [blogLoading, setBlogLoading] = React.useState(false)

  const loadBlogs = async () => {
    setBlogLoading(true)
    try {
      const response = await Api.blog.BlogGET()

      setBlog(response.data)
    } catch (error) {
      console.log('Failed to fetch blogs', error)
    } finally {
      setBlogLoading(false)
    }
  }

  React.useEffect(() => {
    loadBlogs()
  }, [])

  if (blogLoading) {
    return (
      <div className="h-screen">
        <PreLoader/>
      </div>
    )
  }

  return (
    <section className="flex flex-wrap justify-center pt-8 dark:bg-darkmode pb-0" id="blog">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-7">
          {blog?.data.map((item, index) => (
            <div key={index} className="w-full lg:col-span-4 md:col-span-6 col-span-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <BlogCard blog={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
