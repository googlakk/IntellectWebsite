import AboutUs from "@/components/About";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Intelect Pro School",
};

const AboutPage = () => {
  return (
    <>
      <AboutUs />
    </>
  );
};

export default AboutPage;