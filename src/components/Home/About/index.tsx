import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import ThumbnailCarousel from "../ThumbnailCarousel";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
 

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
            <h2 className=" font-bold"> Intellect pro school </h2>
            <p className="text-lg font-normal text-SlateBlueText dark:text-white/60 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6">
              Мы объединяем основное обучение, авторские курсы (ментальная
              арифметика, скорочтение, суперпамять) и спортивные секции. Удобное
              расписание, здоровое питание и помощь с уроками — всё в одном
              месте. Ваш ребенок развивается, участвует в мировых чемпионатах и
              готовится к будущему с углубленным изучением IT и английского.
            </p>
            <Link
              href="/aboutUs"
              className="btn_outline btn-2 hover-outline-slide-down"
            >
              <span>Подробнее</span>
            </Link>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <ThumbnailCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
