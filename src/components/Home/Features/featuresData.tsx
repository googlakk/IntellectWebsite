import { Feature } from '@/types/feture'

const getFeaturesData = (t: any): Feature[] => [
  {
    id: 1,
    icon: '/images/icons/teach.gif',
    title: t('featuresData.allInOne.title'),
    paragraph: t('featuresData.allInOne.paragraph'),
  },
  {
    id: 2,
    icon: '/images/icons/journal.gif',
    title: t('featuresData.homework.title'),
    paragraph: t('featuresData.homework.paragraph'),
  },
  {
    id: 3,
    icon: '/images/icons/sal.gif',
    title: t('featuresData.nutrition.title'),
    paragraph: t('featuresData.nutrition.paragraph'),
  },
  {
    id: 4,
    icon: '/images/icons/web.gif',
    title: t('featuresData.englishIt.title'),
    paragraph: t('featuresData.englishIt.paragraph'),
  },
  {
    id: 5,
    icon: '/images/icons/wi.gif',
    title: t('featuresData.competitions.title'),
    paragraph: t('featuresData.competitions.paragraph'),
  },
  {
    id: 6,
    icon: '/images/icons/mat.gif',
    title: t('featuresData.clubs.title'),
    paragraph: t('featuresData.clubs.paragraph'),
  },
]

export default getFeaturesData
