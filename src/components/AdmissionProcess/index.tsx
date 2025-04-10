'use client'

import HeroSub from '@/components/SharedComponent/HeroSub';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AdmissionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Оставьте заявку",
      description: "Консультация / Экскурсия по школе",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Запишитесь на экзамен",
      description: "Мы оценим навыки английского языка и математики, чтобы определить академические сильные стороны студентов и области, требующие улучшения",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15L12 19M12 19L9 16M12 19L15 16M9 10V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10M7 21H17C18.1046 21 19 20.1046 19 19V11C19 9.89543 18.1046 9 17 9H7C5.89543 9 5 9.89543 5 11V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Собеседование",
      description: "Мы проводим интервью со студентами и их семьями, чтобы понять их образовательные потребности",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 16V18C17 19.1046 16.1046 20 15 20H5C3.89543 20 3 19.1046 3 18V16M21 12V6C21 4.89543 20.1046 4 19 4H8C6.89543 4 6 4.89543 6 6V12M21 12L12 17L3 12M12 17V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Сбор документов",
      description: "Успешные кандидаты должны предоставить документы и подписать соглашение",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 13H15M9 17H12M9 9H12M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14.1716C14.702 3 15.2107 3.21071 15.5858 3.58579L20.4142 8.41421C20.7893 8.78929 21 9.29799 21 9.82843V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const documents = [
    "Копия свидетельства о рождении ученика и ИНН",
    "Копия паспорта отца",
    "Копия паспорта матери",
    "Медицинская карта ребенка №026",
    "Медицинская форма №063",
    "Фотография (3*4) 3 шт",
    "Заявление на имя директора",
    "Анкета поступающего ученика",
    "Личное дело ученика с предыдущей школы"
  ];
  const breadcrumbLinks = [
    { href: "/", text: "Главная" },
    { href: "/For parents", text: "Для родителей" },
  ];
  return (
    <>
      <section className="py-12 mt-28 ">
        <div className="container mx-auto px-4 mt-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Поступление в{" "}
            <span className=" text-blue-600"> Intellect Pro School </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  activeStep === index
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    activeStep === index
                      ? "bg-blue-500"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p
                  className={`text-sm ${
                    activeStep === index ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {step.description}
                </p>
                <div
                  className={`mt-4 h-1 w-10 rounded-full ${
                    activeStep === index ? "bg-white" : "bg-blue-600"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                Документы для поступления
              </h3>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 italic">
                P.S. Заявление на имя директора и анкета ученика выдается в
                приемной школы.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl text-white"
            >
              <h3 className="text-xl font-bold mb-4">Готовы к поступлению?</h3>
              <p className="mb-6 text-blue-100">
                Оставьте заявку, и наш администратор свяжется с вами для
                уточнения деталей
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg bg-blue-500 bg-opacity-20 border border-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-lg bg-blue-500 bg-opacity-20 border border-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default AdmissionProcess;