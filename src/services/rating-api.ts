import { buildQuery } from '@/helpers/buildQueryLanguage'

export const RatingGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/rating${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch student rating', error)
  }
}
