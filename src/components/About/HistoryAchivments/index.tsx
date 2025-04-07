"use client";

import { FaGlobe, FaGraduationCap, FaTrophy, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const HistoryAchievements = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const achievements = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      number: "10 000+",
      title: "учеников",
      description: "обучено с 2016 года",
    },
    {
      icon: <FaGlobe className="text-3xl text-green-600" />,
      number: "20+",
      title: "филиалов",
      description: "в 4 странах мира",
    },
    {
      icon: <FaTrophy className="text-3xl text-amber-600" />,
      number: "5",
      title: "чемпионатов мира",
      description: "официальные представители",
    },
    {
      icon: <FaUsers className="text-3xl text-purple-600" />,
      number: "Вундеркинды",
      title: "из Бишкека",
      description: "звезды Central Asia's Got Talent",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и описание */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4"
          >
            Наша история
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Основанный в 2016 году Жакшылыком Матановым, центр INTELLECT стал
            флагманом современного образования в регионе
          </motion.p>
        </motion.div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="space-y-8"
          >
            <motion.div variants={fadeIn}>
              <div className="bg-primary bg-opacity-10 py-5 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-primary mb-3">
                  Наша миссия
                </h4>
                <p>
                  Подготовка лидеров нового поколения, владеющих IT-технологиями
                  и английским языком на уровне, достаточном для международной
                  карьеры.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ключевые достижения
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>
                    Разработали уникальные методики обучения с лучшими
                    педагогами страны
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>
                    Стали официальными представителями мировых чемпионатов по
                    ментальной арифметике и памяти
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>
                    Наши ученики покорили миллионы зрителей на Central Asia's
                    Got Talent
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Блоки с цифрами */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">{item.icon}</div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.number}
                </h4>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Блок с учениками-чемпионами */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden"
        >
          {/* SVG звёзды на фоне */}
          <StarsBackground />

          <style jsx global>{`
            @keyframes twinkle {
              0% {
                opacity: 0.2;
              }
              100% {
                opacity: 0.8;
              }
            }
          `}</style>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-2xl font-bold mb-4">Наши звёзды</h3>
            <p className="mb-6 text-blue-100 relative z-10">
              Команда "Вундеркинды из Бишкека" в составе Арсена Рахымбекова,
              Байэла Рахымбекова, Альбины Орозакуновой, Нурболота Исматтиллаева
              и Чынгыза Торобаева показала выдающиеся результаты на
              международных соревнованиях и телешоу.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {[
                "Memoriad",
                "Mental Calculation World Cup",
                "World Memory Championship",
                "Central Asia's Got Talent",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryAchievements;

const StarsBackground = () => {
  const [stars, setStars] = useState<
    Array<{
      id: number;
      left: string;
      top: string;
      size: string;
      rotation: string;
      delay: string;
    }>
  >([]);

  useEffect(() => {
    // Генерируем звёзды только на клиенте
    const generatedStars = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 24 + 8}px`,
      rotation: `${Math.random() * 360}deg`,
      delay: `${Math.random() * 3 + 2}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <svg
          key={star.id}
          className="absolute text-white/20"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            transform: `rotate(${star.rotation})`,
            animation: `twinkle ${star.delay} infinite alternate`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
};
