import React from 'react'

import ContactsSection from '@/components/Contact/ContactInfo'
import TicketSection from '@/components/Home/TicketSection'
import { buildMetadata } from '@/utils/seo'

export async function generateMetadata(
  props: { params: Promise<string | any> },
) {
  const { locale } = await props.params

  return buildMetadata(locale, 'contact')
}

const page = () => {
  return (
    <>
      <ContactsSection />
      <TicketSection />
    </>
  )
}

export default page
