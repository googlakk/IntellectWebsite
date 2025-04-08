'use client'

import { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Какой учебный план используется в школе?",
      answer: "Мы сочетаем государственный образовательный стандарт с международными программами (IB и Cambridge), уделяя особое внимание STEM-дисциплинам и языковой подготовке."
    },
    {
      question: "Есть ли подготовка к поступлению в вузы?",
      answer: "Да, наши студенты получают специализированную подготовку к ОГЭ/ЕГЭ, а также к международным экзаменам (SAT, IELTS, TOEFL). В 10-11 классах работает программа университетского консультирования."
    },
    {
      question: "Какое соотношение местных и иностранных преподавателей?",
      answer: "Около 70% наших педагогов - русскоязычные специалисты с международной сертификацией, 30% - носители языка из Великобритании, США и Канады."
    },
    {
      question: "Предусмотрены ли стипендии для талантливых студентов?",
      answer: "Да, мы предлагаем академические и творческие стипендии, покрывающие от 10% до 100% стоимости обучения. Подробности можно узнать на индивидуальной консультации."
    },
    {
      question: "Как организована внеклассная деятельность?",
      answer: "У нас работает более 20 клубов по интересам - от робототехники и театральной студии до дебатов на английском и шахматного клуба. Также регулярно проводятся образовательные поездки."
    }
  ];
  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden ">
      <div className="container mx-auto px-4 max-w-4xl z-3">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Часто задаваемые вопросы
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <svg 
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-6 pb-6 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">Не нашли ответ на свой вопрос?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Задать вопрос
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;