'use client';

import { FaGem } from 'react-icons/fa';
import React from 'react';
import { motion } from 'framer-motion';

interface Student {
  id: number;
  name: string;
  class: string;
  parallel: string; // пример: "3", "4", ..., "12"
  quarters: {
    q1: 'diamond' | 'gold' | null;
    q2: 'diamond' | 'gold' | null;
    q3: 'diamond' | 'gold' | null;
    q4: 'diamond' | 'gold' | null;
  };
}

// Примерные данные
const students: Student[] = Array.from({ length: 10 * 10 }, (_, i) => {
    const parallels = Array.from({ length: 10 }, (_, j) => (j + 3).toString()); // ['3', ..., '12']
    const parallel = parallels[Math.floor(i / 10)];
    const classSuffix = ['A', 'B', 'V'][Math.floor(Math.random() * 3)];
    const getRandomBadge = () =>
      Math.random() < 0.33 ? 'gold' : Math.random() < 0.5 ? 'diamond' : null;
  
    return {
      id: i + 1,
      name: `Баланяаев Баланча ${i + 1}`,
      class: `${parallel}${classSuffix}`,
      parallel,
      quarters: {
        q1: getRandomBadge(),
        q2: getRandomBadge(),
        q3: getRandomBadge(),
        q4: getRandomBadge(),
      },
    };
  });


const getBadge = (type: 'diamond' | 'gold' | null) => {
  const color = {
    diamond: 'text-blue-500',
    gold: 'text-yellow-500',
    null: 'text-gray-300',
  }[type ?? 'null'];

  return <FaGem className={`text-lg ${color}`} />;
};

const GroupedTables = () => {
  const grouped = students.reduce((acc, student) => {
    acc[student.parallel] = acc[student.parallel] || [];
    acc[student.parallel].push(student);
    return acc;
  }, {} as Record<string, Student[]>);

  return (
    <section className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-5 gap-4 mt-16">
      {Object.entries(grouped)
        .sort(([a], [b]) => +a - +b) // Сортировка по параллелям
        .map(([parallel, group]) => (
          <motion.div
            key={parallel}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg rounded-xl border border-gray-200 p-3"
          >
            <h2 className="text-lg font-semibold text-center text-gray-700 mb-2">
              {parallel} класс
            </h2>
            <div className="overflow-auto max-h-[300px]">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-gray-500 border-b text-xs">
                    <th className="p-1">Имя</th>
                    <th className="p-1">Класс</th>
                    <th className="p-1 text-center">1</th>
                    <th className="p-1 text-center">2</th>
                    <th className="p-1 text-center">3</th>
                    <th className="p-1 text-center">4</th>
                  </tr>
                </thead>
                <tbody>
                  {group.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="p-1 truncate">{student.name}</td>
                      <td className="p-1">{student.class}</td>
                      <td className="p-1 text-center">{getBadge(student.quarters.q1)}</td>
                      <td className="p-1 text-center">{getBadge(student.quarters.q2)}</td>
                      <td className="p-1 text-center">{getBadge(student.quarters.q3)}</td>
                      <td className="p-1 text-center">{getBadge(student.quarters.q4)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
    </section>
  );
};

export default GroupedTables;
