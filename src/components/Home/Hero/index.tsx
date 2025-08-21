import { useState } from 'react'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import ConsultationModal from '@/components/ConsultationModal'
import { HomeTypes } from '@/types/home.interface'

interface Props {
  invite: HomeTypes.Invite
}

const Hero: React.FC<Props> = ({ invite }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const t = useTranslations()

  return (
    <section className="relative overflow-hidden dark:bg-darkmode bg-white">
      <span aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <span aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
          <div className="col-span-6 ">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="relative z-0 inline-flex items-center gap-3 text-primary text-base md:text-lg font-semibold px-4 py-2 rounded-full bg-primary/5 ring-1 ring-primary/10"
            >
              <i className="bg-[url('/images/hero/calander.svg')] bg-no-repeat bg-contain w-5 h-5 inline-block" />
              {invite.time}
            </p>
            <h1
              className="py-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              {invite.title}
            </h1>

            <div className="flex items-center md:justify-normal lg:justify-start justify-start flex-wrap gap-4 ">
              <button
                onClick={() => setIsModalOpen(true)}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                className="group bg-primary hover:bg-primary/90 active:bg-primary/80 transition-colors py-5 px-10 rounded-14 text-xl text-white shadow-lg shadow-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-label={t('buttonInvite')}
              >
                <span className="flex items-center gap-3">
                  <i className="bg-[url('/images/hero/tickets.svg')] bg-no-repeat bg-contain w-6 h-6 inline-block transition-transform group-hover:scale-110" />
                  {t('buttonInvite')}
                </span>
              </button>

              <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="col-span-6 flex items-center justify-center mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[520px]">
              <Image
                src={`https://intellect.soulist.life${invite.organizator1.avatar.url}`}
                alt={`${invite.organizator1.name} photo`}
                width={400}
                height={520}
                quality={100}
                sizes="(max-width: 1024px) 80vw, 520px"
                className="w-full h-auto rounded-tl-166 rounded-br-166 object-cover shadow-2xl"
                priority
              />

              <div className="backdrop-blur-md bg-white/80 dark:bg-darkmode/60 border border-white/40 text-center rounded-22 shadow-hero-box py-4 px-5 absolute bottom-6 left-6">
                <p className="text-base md:text-lg font-bold text-yellow-900 dark:text-white">
                  {invite.organizator1.name}
                </p>
                <p className="text-sm md:text-base font-medium text-yellow-900/90 dark:text-white/80 text-center">
                  {invite.organizator1.role}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
