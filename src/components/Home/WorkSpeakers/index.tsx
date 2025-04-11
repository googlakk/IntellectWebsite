'use client'
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import NoImage from "../../../../public/images/work_speakers/no_image.jpg"

import { TeamTypes } from '@/types/team.interface'

interface Props {
  team: TeamTypes.ItemResponse | null
}

const WorkSpeakers: React.FC<Props> = ({ team }) => {
  const pathname = usePathname()
  const [visibleItems, setVisibleItems] = useState(5)

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 5)
  }

  const displayedTeam = team?.data ? team.data.slice(0, visibleItems) : []

  return (
    <>
      <section className={`dark:bg-darkmode ${pathname === '/' ? '' : ''}`}>
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-8">
          {displayedTeam.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`}
              data-aos-duration="1000"
              className={`col-span-1 group overflow-hidden ${index % 2 === 1 ? 'lg:mt-28 mt-0' : ''}`}
            >
              <div className="relative w-full h-72 overflow-hidden rounded-lg">
                <Image
                  src={`${item.avatar ? `https://intellect.soulist.life${item.avatar.url}` : NoImage.src}`}
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
