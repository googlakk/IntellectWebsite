export const ReviewsGET = async () => {
    try {
      const response = await fetch('/api/reviews', {
        method: 'GET',
      })
  
      const data = await response.json()
  
      return data
    } catch (error) {
      console.log('Failed to fetch events', error)
    }
  }
  