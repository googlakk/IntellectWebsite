export const EventGET = async () => {
  try {
    const response = await fetch('/api/home/event', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch events', error)
  }
}

export const MainImageGET = async () => {
  try {
    const response = await fetch('/api/home/main-image', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch main image', error)
  }
}

export const InviteHomeGET = async () => {
  try {
    const response = await fetch('/api/home/invite', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch main image', error)
  }
}

export const GalleryHomeGET = async () => {
  try {
    const response = await fetch('/api/home/gallery', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch main image', error)
  }
}

export const HighlightsHomeGET = async () => {
  try {
    const response = await fetch('/api/home/highlights', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch main image', error)
  }
}

export const ReviewsGET = async () => {
  try {
    const response = await fetch('/api/home/reviews', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch events', error)
  }
}
