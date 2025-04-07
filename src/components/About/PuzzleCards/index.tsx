'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

const PuzzleCards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Конфигурация карточек
  const cards = [
    {
      id: 1,
      title: "Уровень мирового класса",
      content: "Наши методики разработаны признанными экспертами мирового уровня",
      color: "bg-blue-100 dark:bg-blue-900/30",
      position: "top-left",
      img: '/images/aboutUs/world.svg' 
    },
    {
      id: 2,
      title: "Геймификация учебных материалов",
      content: "Увлекательные сюжеты и игровые механики делают обучение интересным",
      color: "bg-green-100 dark:bg-green-900/30",
      position: "top-right",
      img: '/images/aboutUs/gameEdu.svg' 
    },
    {
      id: 3,
      title: "Онлайн платформа",
      content: "Мощная платформа с тренажерами и системой бонусов",
      color: "bg-purple-100 dark:bg-purple-900/30",
      position: "bottom-left",
      img: '/images/aboutUs/world.svg' 
    },
    {
      id: 4,
      title: "Результаты наших учеников",
      content: "Команда 'Вундеркинды из Бишкека' - победители Central Asia's Got Talent",
      color: "bg-amber-100 dark:bg-amber-900/30",
      position: "bottom-right",
      img: '/images/aboutUs/results.svg' 
    }
  ];



 
  // Стили для выступов и впадин пазлов
  const puzzleTabStyles = {
    common: "absolute z-10 w-6 h-6",
    tab: "bg-inherit border-2 border-white dark:border-gray-800",
    gap: "bg-white dark:bg-gray-800"
  };

  return (
    <div className="relative w-full mx-auto h-[500px]">
      {/* Контейнер карточек */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`relative ${card.color} p-6 overflow-hidden`}
            initial={false}
            animate={{
              x: activeCard === card.id ? (card.position.includes('left') ? -8 : 8) : 0,
              y: activeCard === card.id ? (card.position.includes('top') ? -8 : 8) : 0,
              zIndex: activeCard === card.id ? 10 : 1,
              boxShadow: activeCard === card.id ? 
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onHoverStart={() => setActiveCard(card.id)}
            onHoverEnd={() => setActiveCard(null)}
          >
            

            {/* Содержимое карточки */}
            <div className="relative z-20 h-full flex flex-col">
              <h3 className="text-lg font-bold mb-3">{card.title}</h3>
              <p className="text-sm">{card.content}</p>
           
          
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleCards;