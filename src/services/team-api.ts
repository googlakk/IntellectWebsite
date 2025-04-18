import { buildQuery } from '@/helpers/buildQueryLanguage'

export const TeamGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/team${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch team', error)
  }
}
