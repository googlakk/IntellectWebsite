import AboutSchool from "./School";
import AboutSectionOne from "../Home/About";
import AchievementCounter from "../Counter";
import Conferences from "../Home/Conferences";
import EventTicket from "../Home/EventTicket";
import FounderBlock from "./Founder";
import FounderSection from "./Founder";
import HistoryAchievements from "./HistoryAchivments";
import Image from "next/image";
import Link from "next/link";
import Mission from "../Home/Mission";
import PuzzleCards from "./PuzzleCards";
import Stats from "../Counter";
import Testimonials from "../Home/Testimonials";
import ThumbnailCarousel from "../Home/ThumbnailCarousel";
import TicketSection from "../Home/TicketSection";
import { format } from "date-fns";
import markdownToHtml from "@/utils/markdownToHtml";

const AboutUs = () => {
  return (
    <>
      <HistoryAchievements />
      <AboutSchool />
      <FounderBlock />
      <section>
        <Testimonials />
        <AchievementCounter />

        <Mission />
        <EventTicket />
      </section>

      <TicketSection />
    </>
  );
};
export default AboutUs;
