import React, { memo, useMemo } from 'react'

import { useTranslations } from 'next-intl'

import getFeaturesData from './featuresData'
import SingleFeature from './SingleFeature'

const Features = memo(() => {
  const t = useTranslations('features')

  const features = useMemo(() => getFeaturesData(t), [t])
  const title = useMemo(() => t('title'), [t])
  const description = useMemo(() => t('description'), [t])

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center md:pb-20 pb-8">
          <h2
            className="pb-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {title}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="text-SlateBlueText dark:text-white/50 text-lg font-normal max-w-920 m-auto"
          >
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <SingleFeature key={`feature-${idx}`} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
})

Features.displayName = 'Features'

export default Features
