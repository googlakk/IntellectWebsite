import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Location from "@/components/Contact/OfficeLocation";
import { Metadata } from "next";
import React from "react";
import TicketSection from "@/components/Home/TicketSection";

export const metadata: Metadata = {
    title: "Contact | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
      <TicketSection/>
    </>
  );
};

export default page;
