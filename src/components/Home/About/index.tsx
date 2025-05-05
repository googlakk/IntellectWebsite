import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { HomeTypes } from '@/types/home.interface'

import ThumbnailCarousel from '../ThumbnailCarousel'

interface Props {
  gallery: HomeTypes.Gallery | null
}

const AboutSectionOne: React.FC<Props> = ({ gallery }) => {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
          <div
            className="md:pt-0 pt-6"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h2 className=" font-bold"> {t('AboutSection.title')}</h2>
            <p className="text-lg font-normal text-SlateBlueText dark:text-white/60 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6">
              {t('AboutSection.paragraph')}
            </p>
            <Link
              href={`${locale}/aboutUs`}
              className="btn_outline btn-2 hover-outline-slide-down"
            >
              <span>{t('btnMore')}</span>
            </Link>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <ThumbnailCarousel images={gallery?.images} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionOne
