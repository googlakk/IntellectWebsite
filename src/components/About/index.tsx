import AchievementCounter from '../Counter'
import EventTicket from '../Home/EventTicket'
import Mission from '../Home/Mission'
import TicketSection from '../Home/TicketSection'

import FounderBlock from './Founder'
import HistoryAchievements from './HistoryAchivments'
import AboutSchool from './School'

const AboutUs = () => {
  return (
    <div>

      <HistoryAchievements />
      <AboutSchool />
      <FounderBlock />
      <section>

        <AchievementCounter />

        <Mission />
        <EventTicket />
      </section>

      <TicketSection />
    </div>
  )
}

export default AboutUs
