export const RatingGET = async () => {
  try {
    const response = await fetch('/api/rating', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('failed to fetch student raiting', error)
  }
}
