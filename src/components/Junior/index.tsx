'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

import heroJunior from '../../../public/images/aboutUS/img1.png'
import img1 from '../../../public/images/aboutUS/img1.png'
import img2 from '../../../public/images/aboutUS/img2.png'
import img3 from '../../../public/images/aboutUS/img3.png'
import img4 from '../../../public/images/aboutUS/img4.jpeg'
import HistoryAchievements from '../About/HistoryAchivments'

export default function Junior() {
  const t = useTranslations('JuniorPage')
  const programs = t.raw('about.programs')
  const benefits = t.raw('benefits.items')

  return (
    <>
      <section
        id="preview"
        className="relative z-10 h-screen flex items-center justify-center overflow-hidden"
      >
        <Image
          src={heroJunior}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="junior"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10" />

        <div className="container relative z-20">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {t('hero.titlePart1')} <br />{' '}
                  <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-purple-400 mb-4">
                    {' '}
                    {t('hero.titleHighlight')}{' '}
                  </span>{' '}
                  <br />
                </h1>
                <h2 className="mb-5 text-xl font-bold leading-tight text-white sm:text-xl sm:leading-tight md:text-3xl md:leading-tight">
                  {t('hero.titlePart2')}
                </h2>
                <p className="mb-12 text-base !leading-relaxed text-white/80 sm:text-lg md:text-xl">
                  {t('hero.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 mt-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('about.sectionTitle')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('about.description')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('about.programsTitle')}
                </h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  {programs.map((item: any, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {t('about.resultsTitle')}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('about.resultsText')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={img1}
                  alt="Урок в INTELLECT SCHOOL"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={img2}
                  alt="Урок программирования"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={img3}
                  alt="Тренировка памяти"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={img4}
                  alt="Спорт-стекинг"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {t('benefits.title')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item: any, index: number) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <HistoryAchievements />

      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            {t('contacts.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            {t('contacts.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-yellow-500 text-2xl" />
              <span className="text-lg font-medium text-gray-700">
                {t('contacts.phone')}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
              <span className="text-lg font-medium text-gray-700">
                {t('contacts.address')}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaInstagram className="text-yellow-500 text-2xl" />
              <a
                href="https://www.instagram.com/intellect.junior"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-gray-700 hover:underline"
              >
                {t('contacts.instagram')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
