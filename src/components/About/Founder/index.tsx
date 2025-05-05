import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import founderImg from '../../../../public/images/aboutUS/founder.jpg'

const FounderBlock = () => {
  const t = useTranslations('AboutPage.founderBlock')
  const achievments = t.raw('achievements.items')
  const histories = t.raw('history.items')
  const badges = t.raw('badges')

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
                {t('titles.founderDirector')}
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('titles.name')}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 mt-2">
                {t('titles.position')}
              </p>
            </div>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="relative pl-6 border-l-4 border-blue-500 dark:border-blue-400">
                <p className="italic">{t('quotes.mission')}</p>
              </div>

              <p>
                <span className="font-semibold">{t('bio.age')}</span>
                {t('bio.pitch')}
                <span className="font-semibold">{'bio.school'}</span>,
                {t('bio.journey')}
              </p>

              <ul className="space-y-4">
                {achievments.map((item: any, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge: any, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
            <Image
              src={founderImg.src} // Заменить на фото Жакшылыка
              alt="Жакшылык Матанов - основатель Intellect School"
              fill
              className="object-cover object-center"
              quality={100}
              priority
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
              <p className="text-lg italic mb-4">{t('quotes.dream')}</p>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg inline-block">
                <p className="font-semibold">{t('signature.name')}</p>
                <p className="text-sm text-blue-200">
                  {t('signature.position')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t('history.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {histories.map((item: any, index: number) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-lg">{item.year}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderBlock
