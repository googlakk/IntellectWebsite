import AboutSectionOne from '@/components/Home/About';
import CalendarWithEvents from './EventsCalendar';
import ContactInfo from '../Contact/ContactInfo';
import EventTicket from '@/components/Home/EventTicket';
import Features from '@/components/Home/Features';
import Hero from '@/components/Home/Hero';
import Highlight from '@/components/Home/YearHighlight/page';
import { Metadata } from "next";
import Mission from '@/components/Home/Mission';
import Preview from '@/components/Home/Preview';
import React from 'react'
import Testimonials from '@/components/Home/Testimonials';
import ThumbnailCarousel from '@/components/Home/Conferences';
import TicketSection from '@/components/Home/TicketSection';
import Upcoming from '@/components/Home/Upcoming';
import WorkSpeakers from '@/components/Home/WorkSpeakers';

export const metadata: Metadata = {
  title: "Intellect pro school",
};

export default function Home() {
  return (
    <main>
      <Preview/>
      
      <Hero />
      <ThumbnailCarousel/>
      <Mission/>
      <Features/>
      <Highlight/>
      <WorkSpeakers/>
      <AboutSectionOne/>
      
      <EventTicket/>
      <CalendarWithEvents/>
      {/* <Testimonials/> */}
     
      <ContactInfo/>
      
      <TicketSection/>
      
    </main>
  )
}
