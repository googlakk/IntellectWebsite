'use client'

import Link from 'next/link'

const Preview = () => {
  return (
    <>
      <section
        id="preview"
        className="relative z-10 h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video/openDay.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        <div className="container relative z-20">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Intellect — Образование, которое растёт вместе с ребёнком
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-white/80 sm:text-lg md:text-xl">
                  От первых шагов в Intellect Junior до уверенного старта
                  карьеры в Intellect College. Мы создаём среду, где каждый
                  ребёнок развивается, думает, исследует и побеждает.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/junior"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Intellect Junior
                  </Link>
                  <Link
                    href="/aboutUs"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Intellect Pro School
                  </Link>
                  <Link
                    href="https://intellect-business-college.edu.kg/"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Intellect College
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Preview
