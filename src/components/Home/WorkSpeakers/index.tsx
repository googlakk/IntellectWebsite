'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { TeamTypes } from '@/types/team.interface'

import NoImage from '../../../../public/images/work_speakers/no_image.jpg'

interface Props {
  team: TeamTypes.ItemResponse | null
}

const WorkSpeakers: React.FC<Props> = ({ team }) => {
  const pathname = usePathname()
  const [visibleItems, setVisibleItems] = useState(5)

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 5)
  }

  // Сортируем работников: сначала те, у кого есть order, затем остальные
  const sortedTeam = team?.data ? [...team.data].sort((a, b) => {
    
    if (a.order !== null && b.order !== null) {
      return a.order - b.order
    }
    
    if (a.order !== null) {
      return -1
    }
    
    if (b.order !== null) {
      return 1
    }
    
    return 0
  }) : []

  const displayedTeam = sortedTeam.slice(0, visibleItems)

  return (
    <>
      <section
        className={`dark:bg-darkmode mt-16 ${pathname === '/' ? '' : ''}`}
      >
        <h2 className="text-center pb-12">Наша команда</h2>
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-2 items-stretch gap-8 mx-8">
          {displayedTeam.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`}
              data-aos-duration="1000"
              className={`col-span-1 group overflow-hidden ${
                index % 2 === 1 ? 'lg:mt-28 mt-0' : ''
              }`}
            >
              <div className="relative w-full lg:h-72 h-56 overflow-hidden rounded-lg">
                <Image
                  src={`${
                    item.avatar
                      ? `https://intellect.soulist.life${item.avatar.url}`
                      : NoImage.src
                  }`}
                  alt={item.role}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="pt-6">
                <h6 className="text-[28px] leading-[2.25rem] font-bold text-secondary dark:text-white">
                  {item.last_name} {item.first_name}
                </h6>
                <span className="text-lg font-normal text-SlateBlueText dark:text-opacity-80">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
        {team?.data && visibleItems < team.data.length && (
          <div className="flex justify-center my-8">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80 transition-all duration-300"
            >
              Загрузить ещё
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default WorkSpeakers
