"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ReviewTypes } from "@/types/review.interface";

interface Testimonial {
  id: number;
  parent: { name: string; photo: string };
  child: { name: string; photo: string };
  rating: number;
  quote: string;
  text: string;
}

interface Props {
  reviews: ReviewTypes.ItemResponse | null;
}

const TestimonialsGrid: React.FC<Props> = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const testimonials: Testimonial[] =
    reviews?.data.map((item) => ({
      id: item.id,
      parent: { name: item.parent_name, photo: item.avatar.url },
      child: { name: item.parent_info, photo: item.main_image.url },
      rating: item.stars,
      quote: item.title,
      text: item.description,
    })) || [];

  const pages: Testimonial[][] = [];
  for (let i = 0; i < testimonials.length; i += 5) {
    pages.push(testimonials.slice(i, i + 5));
  }
  const currentPageTestimonials: Testimonial[] = pages[currentPage] || [];

  const goToNext = () => {
    setDirection("right");
    if (activeReview < currentPageTestimonials.length - 1) {
      setActiveReview((prev) => prev + 1);
    } else {
      if (currentPage < pages.length - 1) {
        setCurrentPage((prev) => prev + 1);
      } else {
        setCurrentPage(0);
      }
      setActiveReview(0);
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setDirection("left");
    if (activeReview > 0) {
      setActiveReview((prev) => prev - 1);
    } else {
      if (currentPage > 0) {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        setActiveReview(pages[prevPage].length - 1);
      } else {
        const lastPage = pages.length - 1;
        setCurrentPage(lastPage);
        setActiveReview(pages[lastPage].length - 1);
      }
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToReview = (index: number) => {
    setDirection(index > activeReview ? "right" : "left");
    setActiveReview(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPage = (pageIndex: number) => {
    setDirection(pageIndex > currentPage ? "right" : "left");
    setCurrentPage(pageIndex);
    setActiveReview(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentPage, activeReview, currentPageTestimonials.length, pages.length]);

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Отзывы родителей
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Узнайте, что говорят родители о наших занятиях и успехах их детей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          <motion.button
            onClick={goToPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors hidden lg:flex items-center justify-center"
            aria-label="Предыдущий отзыв"
          >
            <FaChevronLeft className="text-blue-500 dark:text-blue-400 text-lg" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors hidden lg:flex items-center justify-center"
            aria-label="Следующий отзыв"
          >
            <FaChevronRight className="text-blue-500 dark:text-blue-400 text-lg" />
          </motion.button>

          <div
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            style={{ height: "560px" }}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={`${currentPage}-${activeReview}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.4,
                }}
                className="w-full h-full flex flex-col"
              >
                <div className="relative h-48 md:h-56 w-full flex-shrink-0">
                  <Image
                    src={`https://intellect.soulist.life${currentPageTestimonials[activeReview].child.photo}`}
                    alt={currentPageTestimonials[activeReview].child.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  <div className="absolute bottom-4 left-4 flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white mr-3">
                      <Image
                        src={`https://intellect.soulist.life${currentPageTestimonials[activeReview].parent.photo}`}
                        alt={currentPageTestimonials[activeReview].parent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {currentPageTestimonials[activeReview].parent.name}
                      </p>
                      <p className="text-white/80 text-sm">
                        {currentPageTestimonials[activeReview].child.name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow overflow-y-auto">
                  <div className="absolute top-6 left-6 text-blue-500 dark:text-blue-400 text-3xl z-10">
                    <FaQuoteLeft />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    "{currentPageTestimonials[activeReview].quote}"
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {currentPageTestimonials[activeReview].text}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentPageTestimonials[activeReview].rating
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPageTestimonials
              .filter((_, i) => i !== activeReview)
              .map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-lg cursor-pointer h-full"
                  onClick={() =>
                    goToReview(
                      currentPageTestimonials.findIndex((r) => r.id === review.id)
                    )
                  }
                >
                  <div className="flex items-start mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <Image
                        src={`https://intellect.soulist.life${review.parent.photo}`}
                        alt={review.parent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {review.parent.name}
                      </h4>
                    </div>
                  </div>
                  <div className="mb-3">
                    <FaQuoteLeft className="text-blue-500 dark:text-blue-400 text-xl opacity-50 mb-2" />
                    <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                      {review.text}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPage
                  ? "bg-blue-500 dark:bg-blue-400 w-6"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
