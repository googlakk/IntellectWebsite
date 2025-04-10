import AboutSchool from "./School";
import AchievementCounter from "../Counter";
import EventTicket from "../Home/EventTicket";
import FounderBlock from "./Founder";
import HistoryAchievements from "./HistoryAchivments";
import Mission from "../Home/Mission";
import TicketSection from "../Home/TicketSection";

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
  );
};
export default AboutUs;
