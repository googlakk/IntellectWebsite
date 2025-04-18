'use client'

import { useTranslations } from 'next-intl'

import AchievementCounter from '../Counter'
import EventTicket from '../Home/EventTicket'
import Mission from '../Home/Mission'
import TicketSection from '../Home/TicketSection'

import FounderBlock from './Founder'
import HistoryAchievements from './HistoryAchivments'
import AboutSchool from './School'

const AboutUs = () => {
  const t = useTranslations()

  return (
    <div>

      <HistoryAchievements />
      <AboutSchool />
      <FounderBlock />
      <section>

        <AchievementCounter />

        <Mission t={t}/>
        <EventTicket />
      </section>

      <TicketSection />
    </div>
  )
}

export default AboutUs
