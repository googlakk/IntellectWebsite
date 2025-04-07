'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSchool = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            INTELLECT SCHOOL
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Современное образование для будущих лидеров цифровой эпохи
          </p>
        </motion.div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">О нашей школе</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                «INTELLECT SCHOOL» — это общеобразовательная частная школа, основанная на базе одноименного 
                образовательного центра. Наша программа сочетает классическое образование с инновационными 
                методиками развития интеллекта.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Уникальные особенности</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Углубленное изучение программирования (IT) и английского языка</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Авторские курсы: ментальная арифметика, скорочтение, развитие «суперпамяти»</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Спорт-стекинг для развития координации и когнитивных способностей</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Результаты обучения</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Наши ученики получают не только общеобразовательную базу, но и актуальные IT-навыки, 
                свободный английский язык, а также уникальные интеллектуальные способности, 
                развитые через авторские методики.
              </p>
            </div>
          </motion.div>

          {/* Галерея изображений */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/aboutUs/img1.png"
                alt="Урок в INTELLECT SCHOOL"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/aboutUs/img2.png"
                alt="Урок программирования"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/aboutUs/img3.png"
                alt="Тренировка памяти"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/aboutUs/img4.jpeg"
                alt="Спорт-стекинг"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </motion.div>
        </div>

        {/* Блок преимуществ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Что приобретает ваш ребенок
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Полноценную общеобразовательную базу",
              "Продвинутые IT-навыки и программирование",
              "Свободное владение английским языком",
              "Развитую память и скорость мышления"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
            {[
              "Уверенность в своих силах",
              "Здоровую тягу к знаниям",
              "Крепкую дружбу с единомышленниками",
              "Навыки для успешного будущего"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSchool;