'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

const FounderBlock = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Текстовая часть */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
                Основатель и директор
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Жакшылык Матанов</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 mt-2">Педагог-новатор, общественный деятель</p>
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-400">
                <p className="italic">
                  "Моя миссия — создать среду, где каждый ребенок сможет раскрыть свой потенциал, 
                  независимо от своего происхождения"
                </p>
              </div>

              <p>
                <span className="font-semibold">В 32 года</span> реализовал детскую мечту — открыл школу 
                <span className="font-semibold"> Intellect School</span>, пройдя путь от чистки обуви 
                на Ошском рынке до создания сети образовательных центров.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Основал 20+ образовательных центров по Кыргызстану</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Автор уникальных методик развития памяти и интеллекта</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <span>Воспитал чемпионов международных соревнований</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Педагог с 20-летним опытом
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Посол World Memory Championship
              </span>
            </div>
          </motion.div>

          {/* Фотография с цитатой */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
            <Image
              src="/images/aboutUs/founder.jpg" // Заменить на фото Жакшылыка
              alt="Жакшылык Матанов - основатель Intellect School"
              fill
              className="object-cover object-center"
              quality={100}
              priority
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
              <p className="text-lg italic mb-4">
                "Я знал, что все трудности временны. Меня вела моя мечта дать детям 
                то образование, которое сам не мог получить в детстве"
              </p>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg inline-block">
                <p className="font-semibold">Жакшылык Матанов</p>
                <p className="text-sm text-blue-200">Основатель Intellect School</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Блок с историей */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">История пути</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-lg">1995</h4>
              <p className="text-gray-600 dark:text-gray-400">
                6-летний Жакшылык теряет отца и начинает работать на Ошском рынке
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-lg">2011</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Возвращается из Турции с дипломом и мечтой изменить образование в Кыргызстане
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-lg">2021</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Открывает школу Intellect School для 300 учеников
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderBlock;