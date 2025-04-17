'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { FaGem } from 'react-icons/fa'

import { Api } from '@/services'
import { RatingTypes } from '@/types/rating.interface'

import PreLoader from '../Common/PreLoader'

const getBadge = (type: 'diamond' | 'gold' | null | string) => {
  const color = {
    diamond: 'text-blue-500 dark:text-blue-400',
    gold: 'text-yellow-500 dark:text-yellow-400',
    null: 'text-gray-300 dark:text-gray-600',
  }[type ?? 'null']

  return <FaGem className={`text-base ${color}`} />
}

const GroupedTables = () => {
  const [ratings, setRatings] = React.useState<RatingTypes.Item[] | null>(null)
  const [ratingsLoading, setRatingsLoading] = React.useState(false)

  const loadRaits = async () => {
    setRatingsLoading(true)
    try {
      const response = await Api.rating.RatingGET()

      setRatings(response.data.data)
    } catch (error) {
      console.log('Failed to fethc rates', error)
    } finally {
      setRatingsLoading(false)
    }
  }

  React.useEffect(() => {
    loadRaits()
  }, [])

  if (ratingsLoading) {
    return (
      <main style={{ marginBottom: `${ratingsLoading ? '100vh' : ''}` }}>
        <PreLoader/>
      </main>
    )
  }

  return (
    <section className="p-4 md:p-6 mt-20 overflow-hidden   ">
      <div
        className="transform scale-90 "
        style={{ transformOrigin: 'top center' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ratings?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 p-3 w-full min-w-0 flex flex-col"
            >
              <h2 className="text-base font-semibold text-center text-gray-700 dark:text-gray-200 mb-2">
                {item.title}
              </h2>
              <div className="overflow-y-auto max-h-[400px]">
                <table className="w-full text-sm text-left table-fixed">
                  <thead>
                    <tr className="text-gray-500 dark:text-gray-400 border-b dark:border-gray-600 text-xs">
                      <th className="p-1 w-[35%]">ФИО</th>
                      <th className="p-1 w-[15%]">Класс</th>
                      <th className="p-1 w-[20%] text-center">Ср. балл</th>
                      <th className="p-1 w-[7%] text-center">1ч</th>
                      <th className="p-1 w-[7%] text-center">2ч</th>
                      <th className="p-1 w-[7%] text-center">3ч</th>
                      <th className="p-1 w-[7%] text-center">4ч</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.students.map((student) => (
                      <tr
                        key={student.id}
                        className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <td className="p-1">{student.name}</td>
                        <td className="p-1">{student.parallel}</td>
                        <td className="p-1 text-center">{student.average_mark}</td>
                        <td className="p-1 text-center">
                          {getBadge(student.quarters.q1)}
                        </td>
                        <td className="p-1 text-center">
                          {getBadge(student.quarters.q2)}
                        </td>
                        <td className="p-1 text-center">
                          {getBadge(student.quarters.q3)}
                        </td>
                        <td className="p-1 text-center">
                          {getBadge(student.quarters.q4)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GroupedTables
