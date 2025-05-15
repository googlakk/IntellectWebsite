import React from 'react'

import AboutUs from '@/components/About'
import { buildMetadata } from '@/utils/seo'

export async function generateMetadata(
  props: { params: Promise<string | any> },
) {
  const { locale } = await props.params

  return buildMetadata(locale, 'about')
}

const AboutPage = () => {
  return (
    <>
      <AboutUs />
    </>
  )
}

export default AboutPage
