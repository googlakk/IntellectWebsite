import React from 'react'

import { Metadata } from 'next'

import AboutUs from '@/components/About'

export const metadata: Metadata = {
  title: 'About | Intelect Pro School',
}

const AboutPage = () => {
  return (
    <>
      <AboutUs />
    </>
  )
}

export default AboutPage
