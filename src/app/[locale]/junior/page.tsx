import React from 'react'

import Junior from '@/components/Junior'
import { buildMetadata } from '@/utils/seo'

export async function generateMetadata(
  props: { params: Promise<string | any> },
) {
  const { locale } = await props.params

  return buildMetadata(locale, 'junior')
}

const JuniorPage = () => {
  return (
    <>
      <Junior/>
    </>
  )
}

export default JuniorPage
