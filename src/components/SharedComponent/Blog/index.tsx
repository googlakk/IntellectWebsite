'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Api } from '@/services'
import { BlogsTypes } from '@/types/blogs.interface'
import markdownToHtml from '@/utils/markdownToHtml'

import telgram from '../../../../public/svgs/blog/telegram.svg'
import whatsapp from '../../../../public/svgs/blog/whatsapp.svg'
import TicketSection from '../../Home/TicketSection'
import Loader from '@/components/Common/Loader'

interface Props {
  params: string
}

export default function Blog({ params }: Props) {
  const [blogData, setBlogData] = React.useState<BlogsTypes.Item | null>(null)
  const [htmlContent, setHtmlContent] = React.useState<string>('')

  const loadData = async () => {
    try {
      const response = await Api.blog.BlogDetailGET(params)

      setBlogData(response.data.data)
    } catch (error) {
      console.log('error', error)
    } finally {
    }
  }

  React.useEffect(() => {
    loadData()
  }, [])

  React.useEffect(() => {
    if (blogData) {
      const convertMarkdown = async () => {
        const html = await markdownToHtml(blogData.text)

        setHtmlContent(html)
      }

      convertMarkdown()
    }
  }, [blogData])

  if (!blogData) {
    return <Loader/>
  }

  return (
    <>
      <section className="relative pt-44">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center">
            <div className="col-span-8">
              <div className="flex flex-col sm:flex-row">
                <span className="text-base text-midnight_text font-medium">
                  {blogData?.date}
                </span>
              </div>
              <h2 className="text-midnight_text dark:text-white pt-7">
                {blogData?.title}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="dark:bg-darkmode py-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="z-20 mb-16 overflow-hidden rounded">
                <Image
                  src={`https://intellect.soulist.life${blogData?.image.url}`}
                  alt="image"
                  width={1170}
                  height={766}
                  quality={100}
                  className="h-full w-full object-cover object-center rounded-3xl"
                />
              </div>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-8/12">
                  <div className="blog-details xl:pr-10">
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div>
                    <div className="mb-8 flex flex-col">
                      <div className="w-full py-12 px-11 bg-white dark:bg-darklight rounded-lg">
                        <h2
                          className="wow fadeInUp relative mb-5 text-2xl dark:text-white text-black  sm:text-[28px] leading-[1.2]"
                          data-wow-delay=".1s"
                        >
                          Поделиться
                        </h2>
                        <div className="flex gap-4 flex-col">
                          <div className="flex flex-col gap-4">
                            <div className="bg-[#0088cc] py-4 px-6 text-xl rounded-lg text-white">
                              <Link
                                href={`https://t.me/share/url?url=https://intellect-bay.vercel.app/${blogData?.documentId}`}
                                className="flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  width={20}
                                  height={20}
                                  src={telgram}
                                  alt="telegram icon"
                                />
                                <span style={{ marginLeft: 12 }}>Telegram</span>
                              </Link>
                            </div>

                            <div className="bg-[#25D366] py-4 px-6 text-xl rounded-lg text-white">
                              <Link
                                href={`https://api.whatsapp.com/send?text=https://intellect-bay.vercel.app/${blogData?.documentId}`}
                                className="flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  width={20}
                                  height={20}
                                  src={whatsapp}
                                  alt="whatsapp"
                                />
                                <span style={{ marginLeft: 12 }}>WhatsApp</span>
                              </Link>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TicketSection />
    </>
  )
}
