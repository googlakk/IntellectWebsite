import { Documentation } from '@/components/Documentation/Documentation'
import TicketSection from '@/components/Home/TicketSection'
import { buildMetadata } from '@/utils/seo'

export async function generateMetadata(
  props: { params: Promise<string | any> },
) {
  const { locale } = await props.params

  return buildMetadata(locale, 'documentation')
}

export default function Page() {
  return (
    <>
      <Documentation/>
      <TicketSection/>
    </>
  )
};
