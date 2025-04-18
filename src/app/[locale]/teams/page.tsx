import { Metadata } from 'next'

import TicketSection from '@/components/Home/TicketSection'
import HeroSub from '@/components/SharedComponent/HeroSub'
import Team from '@/components/Team'

export const metadata: Metadata = {
  title: 'Teams | Intellect Pro School',
}

export default function Page() {
  const breadcrumbLinks = [
    { href: '/', text: 'Главная' },
    { href: '/teams', text: 'Наша команда' },
  ]

  return (
    <>
      <HeroSub
        title="Наша Команда"
        description="Вдохновляющие педагоги и увлечённые специалисты, которые каждый день делают обучение ярким, современным и доступным для каждого ученика."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Team/>
      <TicketSection/>
    </>
  )
}
