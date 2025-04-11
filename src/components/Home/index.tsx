'use client'

import React from 'react'

import { Metadata } from 'next'

import AboutSectionOne from '@/components/Home/About'
import ThumbnailCarousel from '@/components/Home/Conferences'
import EventTicket from '@/components/Home/EventTicket'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import Mission from '@/components/Home/Mission'
import Preview from '@/components/Home/Preview'
import TicketSection from '@/components/Home/TicketSection'
import WorkSpeakers from '@/components/Home/WorkSpeakers'
import Highlight from '@/components/Home/YearHighlight/page'
import { Api } from '@/services'
import { EventTypes } from '@/types/event.interface'
import { TeamTypes } from '@/types/team.interface'

import ContactInfo from '../Contact/ContactInfo'

import CalendarWithEvents from './EventsCalendar'
import TestimonialsGrid from './Testimonials'
import { ReviewTypes } from '@/types/review.interface'

export const metadata: Metadata = {
  title: 'Intellect pro school',
}

export default function Home() {
  const [event, setEvent] = React.useState<EventTypes.Item[]>([])
  const [team, setTeam] = React.useState<TeamTypes.ItemResponse | null>(null)
  const [reviews, setReviews] = React.useState<ReviewTypes.ItemResponse | null>(null)
  const [teamLoading, setTeamLoading] = React.useState(false)

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
      const response = await Api.event.EventGET()

      setEvent(response.data.data)
    } catch (error) {
      console.log('Failed to fetch events', error)
    }
  }

  const loadReviews = async () => {
    try {
      const response = await Api.reviews.ReviewsGET()

      setReviews(response.data);
    } catch (error) {
      console.log('Failed to fetch events', error)
    }
  }

  React.useEffect(() => {
    loadTeam()
    loadEvent()
    loadReviews()
  }, [])

  console.log(reviews);
  

  return (
    <main>
      <Preview/>

      <Hero />
      <ThumbnailCarousel/>
      <Mission/>
      <Features/>
      <Highlight/>
      {teamLoading ? null : (
        <WorkSpeakers team={team}/>
      )}
      <AboutSectionOne/>

      <EventTicket/>
      <CalendarWithEvents event={event}/>
      <TestimonialsGrid reviews={reviews}/>

      <ContactInfo/>

      <TicketSection/>

    </main>
  )
}
