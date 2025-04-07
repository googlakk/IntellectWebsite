"use client";

import "aos/dist/aos.css";

import { format, isSameDay, parseISO } from "date-fns";
import { useEffect, useState } from "react";

import AOS from "aos";
import BoxSlider from "../../SharedComponent/BoxSlider";
import Image from "next/image";
import Link from "next/link";
import { ru } from "date-fns/locale";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  speakers?: string[];
  profiles?: string[];
  buttonText?: string;
  buttonLink?: string;
};

const CalendarWithEvents = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const mockEvents: Event[] = [
    {
      id: "1",
      title: "Открытый урок по математике",
      date: "2023-12-15T00:00:00.000Z",
      time: "10:00 - 11:30",
      description: "Приглашаем всех желающих на открытый урок по математике для 5-6 классов.",
      location: "Кабинет 305",
    },
    {
      id: "2",
      title: "Спортивные соревнования",
      date: "2023-12-15T00:00:00.000Z",
      time: "14:00 - 16:00",
      description: "Школьные соревнования по баскетболу между 7-8 классами.",
      location: "Спортивный зал", 
    },
    {
      id: "3",
      title: "Родительское собрание",
      date: "2023-12-20T00:00:00.000Z",
      time: "18:00 - 19:30",
      description: "Общешкольное родительское собрание.",
      location: "Актовый зал",
    }
  ];

  const getUniqueEventDates = () => {
    const dates = mockEvents.map((event) => parseISO(event.date));
    return Array.from(new Set(dates.map((date) => date.getTime())))
      .map((time) => new Date(time))
      .sort((a, b) => a.getTime() - b.getTime());
  };

  const [eventDates] = useState<Date[]>(getUniqueEventDates());
  const [selectedDate, setSelectedDate] = useState<Date>(eventDates[0] || new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const filteredEvents = mockEvents.filter((event) =>
          isSameDay(parseISO(event.date), selectedDate)
        );
        await new Promise((resolve) => setTimeout(resolve, 300));
        setEvents(filteredEvents);
      } catch (error) {
        console.error("Ошибка загрузки мероприятий:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, [selectedDate]);

  const formatDay = (date: Date) => {
    return {
      dayOfMonth: format(date, "d"),
      month: format(date, "MMM", { locale: ru }),
      fullDate: date,
    };
  };

  return (
    <section className="upcoming dark:bg-darkmode">
      <div className="max-w-1068 m-auto">
        <div className="container">
          <h2 
            data-aos="fade-up" 
            data-aos-delay="200" 
            data-aos-duration="1000" 
            className="text-center pb-10"
          >
            Календарь мероприятий
          </h2>

      

          {eventDates.length > 0 && (
            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="mb-8 overflow-x-auto"
            >
              <div className="flex space-x-4 pb-2">
                {eventDates.map((date, index) => {
                  const formatted = formatDay(date);
                  const isSelected = isSameDay(date, selectedDate);

                  return (
                    <button
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={400 + (index * 50)}
                      onClick={() => setSelectedDate(date)}
                      className={`flex flex-col items-center justify-center w-20 p-4 rounded-lg transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-blue-50 hover:bg-blue-100 text-blue-800"
                      }`}
                    >
                      <h5 className="text-[34px] leading-[2.76rem] font-normal">
                        {formatted.dayOfMonth}
                      </h5>
                      <p className="text-xs font-medium">{formatted.month}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {isLoading ? (
            <div
              data-aos="fade-up"
              className="flex justify-center items-center h-40"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : events.length > 0 ? (
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center flex-wrap w-full border border-solid dark:border-dark_border md:px-14 px-6 md:mt-14 mt-6 rounded-22"
            >
              {events.map((event, index) => (
                <div
                  key={event.id}
                  data-aos="fade-up"
                  data-aos-delay={500 + (index * 100)}
                  className="flex items-center lg:gap-0 gap-4 flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid dark:border-dark_border last:border-b-0"
                >
                  <div>
                    <h6 className="text-[26px] leading-[2.1rem] font-bold text-secondary dark:text-white max-w-286">
                      {event.title}
                    </h6>
                    <p className="text-lg font-normal text-SlateBlueText dark:text-white/60 mt-2">
                      {event.time} | {event.location}
                    </p>
                  </div>


                  <div>
                      <Link
                        href={''}
                        className="btn_outline btn-2 btn_outline hover-outline-slide-down"
                      >
                        <span>Подробнее</span>
                      </Link>
                    </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              data-aos="fade-up"
              className="text-center py-10 text-gray-500"
            >
              {eventDates.length > 0 
                ? "На эту дату мероприятий не найдено" 
                : "Нет запланированных мероприятий"}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalendarWithEvents;