"use client";

import ConsultationModal from "@/components/ConsultationModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <section className="dark:bg-darkmode">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
          <div className="col-span-6 ">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="relative z-0  inline-block text-primary text-lg font-bold before:absolute before:content-[''] before:bg-primary/20  before:w-full before:h-1 before:-z-1 dark:before:-z-1 before:bottom-0"
            >
              c 10:00 до 17:00
            </p>
            <h1
              className="py-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Приглашаем на ежедневные экскурсии
            </h1>

            <div className="flex items-center md:justify-normal lg:justify-start justify-start flex-wrap gap-4 ">
              <button
                onClick={() => setIsModalOpen(true)}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                className=" bg-primary py-5 px-10 rounded-14 text-xl text-white"
              >
                <span className="!flex !items-center gap-14">
                  <i className="bg-[url('/images/hero/tickets.svg')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
                  Записаться
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
            className="col-span-6  lg:flex hidden items-center gap-3"
          >
            <div className="bg-ElectricAqua relative rounded-tl-166 rounded-br-166 w-full">
              <Image
                src="/images/hero/lal.png"
                alt="hero"
                width={0}
                height={0}
                quality={100}
                layout="responsive"
                sizes="100vh"
                className="w-full h-full"
              />
              <div className="bg-yellow-300 text-center rounded-22 shadow-hero-box py-4 px-5 absolute top-5 -left-40">
                <p className="text-lg font-bold text-yellow-900">
                  Жакшылык Матанов
                </p>
                <p className="text-base font-medium text-yellow-900 text-center">
                  Директор
                </p>
              </div>
            </div>
            <div className="bg-primary relative rounded-tr-166 rounded-bl-166 w-full mt-32">
              <Image
                src="/images/hero/maria.png"
                alt="hero"
                width={0}
                height={0}
                quality={100}
                layout="responsive"
                sizes="100vh"
                className="w-full h-full"
              />
              <div className="bg-Aquamarine rounded-22 shadow-hero-box py-4 px-5 absolute top-24 -right-20 xl:inline-block hidden">
                <p className="text-lg font-bold text-green-800">Mariya John</p>
                <p className="text-base font-medium text-green-800 text-center">
                  4.9 rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
