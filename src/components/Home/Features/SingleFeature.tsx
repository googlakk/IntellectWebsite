import React, { memo } from 'react'

import Image from 'next/image'

import { Feature } from '@/types/feture'

interface SingleFeatureProps {
  feature: Feature
}

const SingleFeature = memo(({ feature }: SingleFeatureProps) => {
  const { id, icon, title, paragraph } = feature

  return (
    <div
      className="w-full flex flex-col"
      data-aos="fade-up"
      data-aos-delay={`${id * 300}`}
      data-aos-duration="1000"
    >
      <div className="flex flex-col h-full">
        <div className="mb-3 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={70}
            height={70}
            quality={85}
            sizes="70px"
            priority={id <= 3}
          />
        </div>

        <div className="mb-2 min-h-[80px] flex items-start">
          <h3 className="text-xl font-bold text-black dark:text-white sm:text-xl leading-snug">
            {title}
          </h3>
        </div>

        <div className="flex-grow">
          <p className="text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  )
})

SingleFeature.displayName = 'SingleFeature'

export default SingleFeature
