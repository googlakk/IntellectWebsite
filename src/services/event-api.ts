export const EventGET = async () => {
  try {
    const response = await fetch('/api/event', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch events', error)
  }
}
