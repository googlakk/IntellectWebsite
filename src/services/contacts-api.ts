import { buildQuery } from '@/helpers/buildQueryLanguage'

export const ContactsGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/contacts${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch contacts', error)
  }
}
