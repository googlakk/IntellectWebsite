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
        title="Наша команда"
        description="Команда Intellect Pro School — опытные педагоги и наставники, которые вдохновляют учеников на достижения. Узнайте, кто создает уникальную образовательную среду!"
        breadcrumbLinks={breadcrumbLinks}
      />
      <WorkSpeakers showTitle={false} />
    
      <TicketSection />
    </>
  );
};

export default page;
