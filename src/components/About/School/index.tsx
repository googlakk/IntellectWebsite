import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import AboutUsImage1 from '../../../../public/images/aboutUS/img1.png'
import AboutUsImage2 from '../../../../public/images/aboutUS/img2.png'
import AboutUsImage3 from '../../../../public/images/aboutUS/img3.png'
import AboutUsImage4 from '../../../../public/images/aboutUS/img4.jpeg'

const AboutSchool = () => {
  const t = useTranslations('AboutPage.aboutSchool')
  const features = t.raw('features.items')
  const benefits = t.raw('benefits.items')

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('hero.subtitle')}
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
                {t('about.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('features.title')}
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                {features.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {t('results.title')}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t('results.description')}
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
                src={AboutUsImage1.src}
                alt="Урок в INTELLECT SCHOOL"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src={AboutUsImage2.src}
                alt="Урок программирования"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src={AboutUsImage3.src}
                alt="Тренировка памяти"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src={AboutUsImage4.src}
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
            {benefits.map((item: any, idx: number) => (
              <div key={idx} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSchool
