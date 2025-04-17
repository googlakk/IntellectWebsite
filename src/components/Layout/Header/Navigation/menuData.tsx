import { HeaderItem } from '@/types/menu'

export const headerData: HeaderItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'О нас', href: '/aboutUs' },
  { label: 'Junior', href: '/junior' },
  { label: 'Наша команда', href: '/teams' },

  {
    label: 'Для родителей',
    href: '/forParents',
    submenu: [
      {
        label: 'Потеряшки',
        href: '/google-drive',
      },
      {
        label: 'Edupage',
        href: 'https://intellectschool.edupage.org/',
      },
    ],
  },
  { label: 'ЕЧТ', href: '/results' },
  { label: 'Наш блог', href: '/blog' },
  { label: 'Документации', href: '/documentation' },
  { label: 'Контакты', href: '/contact' },
]
