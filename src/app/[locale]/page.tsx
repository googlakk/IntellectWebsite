import React from 'react'

import Home from '@/components/Home'
import { buildMetadata } from '@/utils/seo'

export async function generateMetadata(
  props: { params: Promise<string | any> },
) {
  const { locale } = await props.params

  return buildMetadata(locale, 'home')
}

export default function App() {
  return (
    <main>
      <Home/>
    </main>
  )
}
