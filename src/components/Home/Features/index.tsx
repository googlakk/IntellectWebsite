import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
        <div className="text-center md:pb-20 pb-8">
            <h2 className="pb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Intellect Pro School — лидер в образовании будущего!</h2>
            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="text-SlateBlueText dark:text-white/50 text-lg font-normal max-w-920 m-auto">
            Мы предлагаем современные методики обучения, которые помогают детям раскрыть их потенциал и подготовиться к вызовам будущего.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, idx) => (
              <SingleFeature key={idx} feature={feature}  />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
