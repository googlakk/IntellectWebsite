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
    const breadcrumbLinks = [
        { href: "/", text: "Главная" },
        { href: "/teams", text: "Наша команда" },
      ];
  return (
    <>
      <HeroSub
        title="Our Visionary Speakers"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
        breadcrumbLinks={breadcrumbLinks}
      />
      <WorkSpeakers showTitle={false} />
      <Testimonials/>
      <TicketSection/>
    </>
  );
};

export default page;
