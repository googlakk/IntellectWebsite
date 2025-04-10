import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import React from "react";
import Testimonials from "@/components/Home/Testimonials";
import TicketSection from "@/components/Home/TicketSection";
import WorkSpeakers from "@/components/Home/WorkSpeakers";

export const metadata: Metadata = {
  title: "Teams | Intellect Pro School",
};

const page = () => {

  return (
    <>

      <WorkSpeakers showTitle={false} />
    
      <TicketSection />
    </>
  );
};

export default page;
