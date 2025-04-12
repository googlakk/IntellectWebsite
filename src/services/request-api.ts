export const RequestPOST = async (formData: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/records/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: formData
      })
    })

    const data = await response.json()
    
    return data
  } catch (error) {
    console.log('error post request', error)
  }
}