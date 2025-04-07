import Link from "next/link";
import React from "react";
import ThumbnailCarousel from "../ThumbnailCarousel";

const Conferences = ({ showTitle = true }) => {
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
              <ThumbnailCarousel />
            </div>
            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2 className=" font-bold"> Лучшая школа нового поколения  </h2>
              <p className="text-lg font-normal text-SlateBlueText dark:text-white/60 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6">
              Intellect Pro School -  это частное образовательное учреждение, которое предлагает программы как общего школьного образования, так и дополнительные курсы, направленные на развитие интеллектуальных и профессиональных навыков
              </p>
              {showTitle && (
                    <Link
                    href="/"
                    className="btn_outline btn-2 hover-outline-slide-down"
                  >
                    <span>Подробнее</span>
                  </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conferences;
