import { buildQuery } from '@/helpers/buildQueryLanguage'

export const EventGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/home/event${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch events', error)
  }
}

export const MainImageGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/home/main-image${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch main image', error)
  }
}

export const InviteHomeGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/home/invite${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch invite data', error)
  }
}

export const GalleryHomeGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/home/gallery${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch gallery data', error)
  }
}

export const HighlightsHomeGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/home/highlights${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch highlights data', error)
  }
}

export const ReviewsGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/home/reviews${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch reviews data', error)
  }
}
