import React from 'react'

import { Metadata } from 'next'

import Junior from '@/components/Junior'

export const metadata: Metadata = {
  title: 'Intellect Junior | Intelect Pro School',
}

const JuniorPage = () => {
  return (
    <>
      <Junior/>
    </>
  )
}

export default JuniorPage
