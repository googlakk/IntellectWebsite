'use client'

import React from 'react'

import { Metadata } from 'next'

import EventTicket from '@/components/Home/EventTicket'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import Mission from '@/components/Home/Mission'
import Preview from '@/components/Home/Preview'
import TicketSection from '@/components/Home/TicketSection'
import WorkSpeakers from '@/components/Home/WorkSpeakers'
import Highlight from '@/components/Home/YearHighlight/page'
import { Api } from '@/services'
import { HomeTypes } from '@/types/home.interface'
import { TeamTypes } from '@/types/team.interface'

import PreLoader from '../Common/PreLoader'
import ContactInfo from '../Contact/ContactInfo'

import AboutSectionOne from './About'
import Conferences from './Conferences'
import CalendarWithEvents from './EventsCalendar'
import TestimonialsGrid from './Testimonials'

export const metadata: Metadata = {
  title: 'Intellect pro school',
}

export default function Home() {
  const [mainImage, setMainImage] = React.useState<HomeTypes.MainImage[] | null>(null)
  const [mainImageLoading, setMainImageLoading] = React.useState(false)
  const [invite, setInvite] = React.useState<HomeTypes.Invite[] | null>(null)
  const [gallery , setGallery] = React.useState<HomeTypes.Gallery[] | null>(null)
  const [highLights , setHighLights] = React.useState<HomeTypes.HighLights[] | null>(null)
  const [event, setEvent] = React.useState<HomeTypes.EventItem[]>([])
  const [team, setTeam] = React.useState<TeamTypes.ItemResponse | null>(null)
  const [reviews, setReviews] = React.useState<HomeTypes.ReviewItemResponse | null>(null)
  const [teamLoading, setTeamLoading] = React.useState(false)

  const loadMainImages = async () => {
    setMainImageLoading(true)
    try {
      const response = await Api.home.MainImageGET()

      setMainImage(response.data.data)
    } catch (error) {
      console.log('Failed to fetch events', error)
    } finally {
      setMainImageLoading(false)
    }
  }

  const loadInvites = async () => {
    try {
      const response = await Api.home.InviteHomeGET()

      setInvite(response.data.data)
    } catch (error) {
      console.log('Failed to fetch events', error)
    }
  }

  const loadGallery = async () => {
    try {
      const response = await Api.home.GalleryHomeGET()

      setGallery(response.data.data)
    } catch (error) {
      console.log('Failed to fetch events', error)
    }
  }

  const loadHighLights = async () => {
    try {
      const response = await Api.home.HighlightsHomeGET()

      setHighLights(response.data.data)
    } catch (error) {
      console.log('Failed to fetch events', error)
    }
  }

  const loadTeam = async () => {
    setTeamLoading(true)
    try {
      const response = await Api.team.TeamGET()

      setTeam(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setTeamLoading(false)
    }
  }

  const loadEvent = async () => {
    try {
      const response = await Api.home.EventGET()

      setEvent(response.data.data)
    } catch (error) {
      console.log('Failed to fetch events', error)
    }
  }

  const loadReviews = async () => {
    try {
      const response = await Api.home.ReviewsGET()

      setReviews(response.data)
    } catch (error) {
      console.log('Failed to fetch events', error)
    }
  }

  React.useEffect(() => {
    loadTeam()
    loadEvent()
    loadReviews()
    loadMainImages()
    loadInvites()
    loadGallery()
    loadHighLights()
  }, [])

  if (mainImageLoading) {
    return (
      <main style={{ marginBottom: `${mainImageLoading ? '100vh' : ''}` }}>
        <PreLoader/>
      </main>
    )
  }

  return (
    <main>
      {mainImage?.map((item, index) => (
        <Preview mainImage={item} key={index}/>
      ))}

      {invite?.map((item, index) => (
        <Hero invite={item} key={index}/>
      ))}
      {gallery?.map((item, index) => (
        <Conferences gallery={item} key={index}/>
      ))}
      <Mission/>
      <Features/>
      {highLights?.map((item, index) => (
        <Highlight highLights={item} key={index}/>
      ))}
      {teamLoading ? null : (
        <WorkSpeakers team={team}/>
      )}
      {gallery?.map((item, index) => (
        <AboutSectionOne gallery={item} key={index}/>
      ))}

      <EventTicket />
      <CalendarWithEvents event={event} />
      <TestimonialsGrid reviews={reviews} />

      <ContactInfo />

      <TicketSection />
    </main>
  )
}
