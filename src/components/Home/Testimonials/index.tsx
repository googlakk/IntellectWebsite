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

const TestimonialsGrid = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [containerHeight, setContainerHeight] = useState(0);

  const testimonials = [
    {
      id: 1,
      parent: {
        name: "Айгуль Сатыбалдиева",
        photo: "/images/upcoming/profile-1.png",
      },
      child: {
        name: "Амина, 5 класс",
        photo: "/images/ThumbnailSlider/1.png",
      },
      rating: 5,
      quote: "Прекрасная школа с индивидуальным подходом",
      text: "Моя дочь стала более уверенной в своих знаниях. Учителя находят подход к каждому ребенку, виден реальный прогресс в обучении.",
    },
    {
      id: 2,
      parent: {
        name: "Эркин Баялинов",
        photo: "/images/upcoming/profile-1.png",
      },
      child: {
        name: "Данияр, 7 класс",
        photo: "/images/ThumbnailSlider/2.png",
      },
      rating: 4,
      quote: "Отличная подготовка по IT",
      text: "Сын начал создавать собственные проекты. Преподаватели умеют заинтересовать даже сложными темами.",
    },
    {
      id: 3,
      parent: {
        name: "Асель Токтосунова",
        photo: "/images/upcoming/profile-1.png",
      },
      child: {
        name: "Алиса и Артем",
        photo: "/images/ThumbnailSlider/4.png",
      },
      rating: 5,
      quote: "Атмосфера вдохновляет",
      text: "Оба ребенка с радостью идут в школу. Вижу, как развивается их мышление и лидерские качества.",
    },
    {
      id: 4,
      parent: {
        name: "Асель Токтосунова",
        photo: "/images/upcoming/profile-1.png",
      },
      child: {
        name: "Алиса и Артем",
        photo: "/images/ThumbnailSlider/4.png",
      },
      rating: 5,
      quote: "Атмосфера вдохновляет",
      text: "Оба ребенка с радостью идут в школу. Вижу, как развивается их мышление и лидерские качества.",
    },
  ];

  // Автоматическое переключение
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection("right");
        setActiveCard((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setDirection("right");
    setActiveCard((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setDirection("left");
    setActiveCard(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeCard ? "right" : "left");
    setActiveCard(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Новые варианты анимации
  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      position: "absolute",
    }),
  };

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
          {/* Кнопки навигации */}
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

          {/* Основная карточка с фиксированной высотой */}
          <div
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            style={{ height: "560px" }}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={activeCard}
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
                {/* Блок с фото (фиксированная высота) */}
                <div className="relative h-48 md:h-56 w-full flex-shrink-0">
                  <Image
                    src={testimonials[activeCard].child.photo}
                    alt={testimonials[activeCard].child.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  <div className="absolute bottom-4 left-4 flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white mr-3">
                      <Image
                        src={testimonials[activeCard].parent.photo}
                        alt={testimonials[activeCard].parent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {testimonials[activeCard].parent.name}
                      </p>
                      <p className="text-white/80 text-sm">
                        {testimonials[activeCard].child.name},{" "}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Блок с текстом (гибкая высота с прокруткой) */}
                <div className="p-6 md:p-8 flex-grow overflow-y-auto">
                  <div className="absolute top-6 left-6 text-blue-500 dark:text-blue-400 text-3xl z-10">
                    <FaQuoteLeft />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    "{testimonials[activeCard].quote}"
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {testimonials[activeCard].text}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[activeCard].rating
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

          {/* Второстепенные карточки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials
              .filter((_, i) => i !== activeCard)
              .map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-lg cursor-pointer h-full"
                  onClick={() =>
                    goToSlide(
                      testimonials.findIndex((t) => t.id === testimonial.id)
                    )
                  }
                >
                  <div className="flex items-start mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <Image
                        src={testimonial.parent.photo}
                        alt={testimonial.parent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {testimonial.parent.name}
                      </h4>
                    </div>
                  </div>
                  <div className="mb-3">
                    <FaQuoteLeft className="text-blue-500 dark:text-blue-400 text-xl opacity-50 mb-2" />
                    <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
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

        {/* Индикаторы */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeCard
                  ? "bg-blue-500 dark:bg-blue-400 w-6"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;