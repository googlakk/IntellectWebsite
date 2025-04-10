import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import React from "react";
import TicketSection from "@/components/Home/TicketSection";

export const metadata: Metadata = {
  title: "Blog | Intellect Pro School",
};

const BlogPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/blog", text: "Блог" },
  ];
  return (
    <>
      <HeroSub
        title="Наша жизнь"
        description="Актуальные события школы, советы по обучению и развитию. Будьте в курсе нашего образовательного процесса!"
        breadcrumbLinks={breadcrumbLinks}
      />
      <BlogList />
      <TicketSection />
    </>
  );
};

export default BlogPage;