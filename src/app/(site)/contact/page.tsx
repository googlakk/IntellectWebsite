import ContactsSection from "@/components/Contact/ContactInfo";
import { Metadata } from "next";
import React from "react";
import TicketSection from "@/components/Home/TicketSection";

export const metadata: Metadata = {
  title: "Contact | Intellect Pro School",
};

const page = () => {
  return (
    <>
      <ContactsSection />
      <TicketSection />
    </>
  );
};

export default page;
