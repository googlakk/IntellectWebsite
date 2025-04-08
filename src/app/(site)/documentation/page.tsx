import { Documentation } from "@/components/Documentation/Documentation";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";

export const metadata: Metadata = {
    title: "Documents | Intellect Pro School",
};

export default function Page() {
    return (
        <>
        <Documentation/>
        <TicketSection/>
        </>
    );
};
