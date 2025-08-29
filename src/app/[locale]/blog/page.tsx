import React from 'react'

import { Metadata } from 'next'

import TicketSection from '@/components/Home/TicketSection'
import NewsList from '@/components/News/NewsList'
import HeroSub from '@/components/SharedComponent/HeroSub'

export const metadata: Metadata = {
  title: 'Новости | Intellect Pro School',
}

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Главная' },
    { href: '/blog', text: 'Новости' },
  ]

  return (
    <>
      <HeroSub
        title="Новости школы"
        description="Последние новости, события и достижения школы Intellect Pro. Следите за нашими успехами и важными анонсами!"
        breadcrumbLinks={breadcrumbLinks}
      />
      <NewsList />
      <TicketSection />
    </>
  )
}

export default BlogPage
