'use client'

import React, { Suspense } from 'react'

import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'

import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import Mission from '@/components/Home/Mission'
import Preview from '@/components/Home/Preview'
import { useCombinedHomeData } from '@/hooks/queries/useHomeData'
import { HomeTypes } from '@/types/home.interface'

import PreLoader from '../Common/PreLoader'

const EventTicket = dynamic(() => import('@/components/Home/EventTicket'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded" />,
  ssr: false,
})

const TicketSection = dynamic(() => import('@/components/Home/TicketSection'), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded" />,
  ssr: false,
})

const WorkSpeakers = dynamic(() => import('@/components/Home/WorkSpeakers'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />,
  ssr: false,
})

const Highlight = dynamic(() => import('@/components/Home/YearHighlight/page'), {
  loading: () => <div className="h-48 bg-gray-100 animate-pulse rounded" />,
  ssr: false,
})

const ContactInfo = dynamic(() => import('../Contact/ContactInfo'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />,
  ssr: false,
})

const AboutSectionOne = dynamic(() => import('./About'), {
  loading: () => <div className="h-48 bg-gray-100 animate-pulse rounded" />,
  ssr: false,
})

const Conferences = dynamic(() => import('./Conferences'), {
  loading: () => <div className="h-48 bg-gray-100 animate-pulse rounded" />,
  ssr: false,
})

const CalendarWithEvents = dynamic(() => import('./EventsCalendar'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />,
  ssr: false,
})

const TestimonialsGrid = dynamic(() => import('./Testimonials'), {
  loading: () => <div className="h-48 bg-gray-100 animate-pulse rounded" />,
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Intellect pro school',
}

export default function Home() {
  const t = useTranslations()
  const {
    mainImages,
    invites,
    gallery,
    highlights,
    team,
    events,
    reviews,
    isLoading,
    isError,
    teamLoading,
  } = useCombinedHomeData()

  if (isLoading) {
    return (
      <main style={{ marginBottom: '100vh' }}>
        <PreLoader />
      </main>
    )
  }

  if (isError) {
    return (
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-red-500">Ошибка загрузки данных</p>
        </div>
      </main>
    )
  }

  return (
    <main>
      {mainImages?.map((item: HomeTypes.MainImage, index: number) => (
        <Preview mainImage={item} key={`preview-${index}`} />
      ))}
      {invites?.map((item: HomeTypes.Invite, index: number) => (
        <Hero invite={item} key={`hero-${index}`} />
      ))}
      {gallery?.map((item: HomeTypes.Gallery, index: number) => (
        <Suspense key={`conferences-${index}`} fallback={<div className="h-48 bg-gray-100 animate-pulse rounded" />}>
          <Conferences gallery={item} />
        </Suspense>
      ))}
      <Mission t={t} />
      <Features />
      {highlights?.map((item: HomeTypes.HighLights, index: number) => (
        <Suspense key={`highlight-${index}`} fallback={<div className="h-48 bg-gray-100 animate-pulse rounded" />}>
          <Highlight highLights={item} />
        </Suspense>
      ))}
      {!teamLoading && team && (
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded" />}>
          <WorkSpeakers team={team} />
        </Suspense>
      )}
      {gallery?.map((item: HomeTypes.Gallery, index: number) => (
        <Suspense key={`about-${index}`} fallback={<div className="h-48 bg-gray-100 animate-pulse rounded" />}>
          <AboutSectionOne gallery={item} />
        </Suspense>
      ))}

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded" />}>
        <EventTicket />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded" />}>
        <CalendarWithEvents event={events || []} />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-gray-100 animate-pulse rounded" />}>
        <TestimonialsGrid reviews={reviews || null} />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded" />}>
        <ContactInfo />
      </Suspense>

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded" />}>
        <TicketSection />
      </Suspense>
    </main>
  )
}
