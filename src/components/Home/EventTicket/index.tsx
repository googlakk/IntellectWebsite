import React from 'react'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import lic from '../../../../public/images/aboutUS/lic3.png'

const EventTicket = () => {
  const t = useTranslations()

  return (
    <>
      <section className="dark:bg-darkmode pt-0 mt-16">
        <div className="container">
          <h2 className="text-center pb-12">{t('OurLicense')}</h2>
          <div
            className="flex flex-wrap items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="bg-primary flex items-center justify-center lg:px-16 px-8 lg:py-8 py-8 lg:rounded-l-22 rounded-t-22 md:rounded-tr-none md:rounded-bl-22 rounded-bl-none md:w-2/4 w-full">
              <Image
                src={lic.src}
                alt="ticket"
                width={0}
                height={0}
                quality={100}
                layout="responsive"
                sizes="100vh"
                className=" rounded-14"
              />
            </div>
            <div className="bg-ElectricAqua lg:py-14 py-6 lg:px-16 px-8 lg:rounded-r-22 rounded-b-22 md:rounded-bl-none md:rounded-tr-22 rounded-tr-none md:md:w-2/4 w-full">
              <Image
                src={lic.src}
                alt="ticket"
                width={0}
                height={0}
                quality={100}
                layout="responsive"
                sizes="100vh"
                className=" rounded-14"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventTicket
