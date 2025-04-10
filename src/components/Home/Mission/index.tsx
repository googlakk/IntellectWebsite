const Mission = () => {
  return (
    <section className="dark:bg-darkmode relative overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="text-center md:pb-20 pb-12 pt-8">
          <h2
            className="pb-6 text-2xl md:text-3xl font-bold"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Миссия и видение
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="text-SlateBlueText dark:text-white/60 text-base md:text-lg font-normal max-w-920 mx-auto"
          >
            В ОФ "Интеллект про Скул" на педагогическом совете была утверждена
            миссия и видение:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* Миссия - карточка */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="bg-ElectricAqua rounded-2xl lg:rounded-tl-[182px] lg:rounded-br-[182px] p-6 md:p-10 lg:p-14"
          >
            <div className="text-white dark:text-opacity-80 text-base md:text-lg">
              <span className="block text-xl md:text-2xl font-bold mb-3">
                Миссия:
              </span>
              <p>
                Мы готовим специалистов в сфере IT, обладающих не только
                глубокими профессиональными знаниями, но и развитым критическим
                мышлением, креативностью и свободным владением английским
                языком. Наши выпускники уверенно строят карьеру в международной
                среде и становятся востребованными профессионалами.
              </p>
            </div>
          </div>

          {/* Видение - карточка */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="bg-primary rounded-2xl lg:rounded-tr-[182px] lg:rounded-bl-[182px] p-6 md:p-10 lg:p-14 lg:mt-16"
          >
            <div className="text-white dark:text-opacity-80 text-base md:text-lg">
              <span className="block text-xl md:text-2xl font-bold mb-3">
                Видение:
              </span>
              <p>
                Наша школа — это центр формирования лидеров нового поколения,
                готовых реализовывать свой потенциал в любой сфере, свободно
                общаться и вести бизнес на международном уровне. Мы воспитываем
                личности, способные создавать будущее, внедряя инновации и внося
                позитивные изменения в общество.
              </p>
            </div>
          </div>
        </div>

        {/* Декоративные элементы (адаптированные для мобильных) */}
        <div className="absolute right-0 top-0 z-[2] opacity-30 lg:opacity-100 w-[200px] md:w-[300px] lg:w-[450px]">
          <svg
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin slice"
          >
            {/* Упрощенные декоративные элементы */}
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            {/* ... остальные элементы градиента ... */}
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100 w-[200px] md:w-[300px]">
          <svg
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin slice"
          >
            {/* Упрощенные декоративные элементы */}
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            {/* ... остальные элементы градиента ... */}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Mission;
