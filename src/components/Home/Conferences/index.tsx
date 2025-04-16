import React from 'react'

import Link from 'next/link'

import { HomeTypes } from '@/types/home.interface'

import ThumbnailCarousel from '../ThumbnailCarousel'

interface Props {
  gallery: HomeTypes.Gallery | null
}

const Conferences: React.FC<Props> = ({ gallery }) => {
  return (
    <>
      <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <ThumbnailCarousel images={gallery?.images}/>
            </div>
            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2 className=" font-bold">{gallery?.title}</h2>
              <p className="text-lg font-normal text-SlateBlueText dark:text-white/60 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6">
                {gallery?.description}
              </p>
              <Link
                href="/aboutUs"
                className="btn_outline btn-2 hover-outline-slide-down"
              >
                <span>Подробнее</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Conferences
