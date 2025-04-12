export const TeamGET = async () => {
  try {
    const response = await fetch('/api/team', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch team', error)
  }
}
