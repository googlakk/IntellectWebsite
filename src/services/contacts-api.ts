export const ContactsGET = async () => {
    try {
      const response = await fetch('/api/contacts', {
        method: 'GET',
      })
  
      const data = await response.json()
  
      return data
    } catch (error) {
      console.log('Failed to fetch events', error)
    }
  }
  