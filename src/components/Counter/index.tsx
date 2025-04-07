'use client'

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const AchievementCounter = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [citiesCount, setCitiesCount] = useState(0);
  const [centersCount, setCentersCount] = useState(0);

  useEffect(() => {
    const animateCounters = () => {
      // Анимация для учеников (до 10000)
      const studentsInterval = setInterval(() => {
        setStudentsCount(prev => {
          const step = Math.ceil(10000 / 50); // 50 кадров анимации
          return prev + step > 10000 ? 10000 : prev + step;
        });
      }, 20);

      // Анимация для городов (до 15)
      const citiesInterval = setInterval(() => {
        setCitiesCount(prev => {
          const step = Math.ceil(15 / 30);
          return prev + step > 15 ? 15 : prev + step;
        });
      }, 50);

      // Анимация для центров (до 20)
      const centersInterval = setInterval(() => {
        setCentersCount(prev => {
          const step = Math.ceil(20 / 30);
          return prev + step > 20 ? 20 : prev + step;
        });
      }, 50);

      return () => {
        clearInterval(studentsInterval);
        clearInterval(citiesInterval);
        clearInterval(centersInterval);
      };
    };

    // Запуск анимации при появлении компонента
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('achievement-counters');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div 
      id="achievement-counters"
      className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Ученики */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20"
          >
            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {studentsCount.toLocaleString()}+
            </div>
            <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
              учеников обучили<br />в наших центрах
            </div>
          </motion.div>

          {/* Города */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20"
          >
            <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
              {citiesCount}+
            </div>
            <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
              городов с нашими<br />центрами развития
            </div>
          </motion.div>

          {/* Центры */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-xl bg-amber-50 dark:bg-amber-900/20"
          >
            <div className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              {centersCount}+
            </div>
            <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
              центров открыто<br />в Кыргызстане и за рубежом
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCounter;