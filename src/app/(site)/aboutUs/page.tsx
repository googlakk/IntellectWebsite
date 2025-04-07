import AboutUs from "@/components/About";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Symposium",
};

const AboutPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/aboutUs", text: "О нас" },
    ];
    return (
        <>
            <HeroSub
                title="О нас"
                description=""
                breadcrumbLinks={breadcrumbLinks}
            />
            <AboutUs/>
            
        </>
    );
};

export default AboutPage;