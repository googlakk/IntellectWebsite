'use client'

import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { format, isSameDay, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'

import { EventTypes } from '@/types/event.interface'

interface Props {
  event: EventTypes.Item[]
}

const CalendarWithEvents: React.FC<Props> = (props) => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  const eventDates: Date[] = props.event
    .map((item) => parseISO(item.date))
    .sort((a, b) => a.getTime() - b.getTime())

  const [selectedDate, setSelectedDate] = React.useState<Date>(
    eventDates.length > 0 ? eventDates[0] : new Date(),
  )

  React.useEffect(() => {
    if (props.event.length > 0) {
      const sortedDates = props.event
        .map((item) => parseISO(item.date))
        .sort((a, b) => a.getTime() - b.getTime())

      setSelectedDate(sortedDates[0])
    }
  }, [props.event])

  const formatDay = (date: Date) => {
    return {
      dayOfMonth: format(date, 'd'),
      month: format(date, 'MMM', { locale: ru }),
      fullDate: date,
    }
  }

  const currentGroup = props.event.find((item) =>
    isSameDay(parseISO(item.date), selectedDate),
  )
  const filteredEvents = currentGroup ? currentGroup.events : []

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
                  const formatted = formatDay(date)
                  const isSelected = isSameDay(date, selectedDate)

                  return (
                    <button
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 50}
                      onClick={() => setSelectedDate(date)}
                      className={`flex flex-col items-center justify-center w-20 p-4 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-50 hover:bg-blue-100 text-blue-800'
                      }`}
                    >
                      <h5 className="text-[34px] leading-[2.76rem] font-normal">
                        {formatted.dayOfMonth}
                      </h5>
                      <p className="text-xs font-medium">{formatted.month}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {filteredEvents.length > 0 ? (
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center flex-wrap w-full border border-solid dark:border-dark_border md:px-14 px-6 md:mt-14 mt-6 rounded-22"
            >
              {filteredEvents.map((eventItem, index) => {
                const formattedTime = `${eventItem.time_start ? eventItem.time_start.substring(0, 5) : ''} - ${
                  eventItem.time_end ? eventItem.time_end.substring(0, 5) : ''
                }`

                return (
                  <div
                    key={eventItem.id}
                    data-aos="fade-up"
                    data-aos-delay={500 + index * 100}
                    className="flex items-center lg:gap-0 gap-4 flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid dark:border-dark_border last:border-b-0"
                  >
                    <div>
                      <h6 className="text-[26px] leading-[2.1rem] font-bold text-secondary dark:text-white max-w-286">
                        {eventItem.title}
                      </h6>
                      <p className="text-lg font-normal text-SlateBlueText dark:text-white/60 mt-2">
                        {formattedTime} | {eventItem.cabinet}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div
              data-aos="fade-up"
              className="text-center py-10 text-gray-500"
            >
              {eventDates.length > 0
                ? 'На эту дату мероприятий не найдено'
                : 'Нет запланированных мероприятий'}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CalendarWithEvents
