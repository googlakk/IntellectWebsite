import React from 'react'

import { Metadata } from 'next'

import Home from '@/components/Home'

export const metadata: Metadata = {
  title: 'Intellect pro school',
  icons: {
    icon: '/images/logoInt.jpeg',
  },
}

export default function App() {
  return (
    <main>
      <Home/>
    </main>
  )
}
