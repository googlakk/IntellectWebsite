export const BlogGET = async () => {
  try {
    const response = await fetch('/api/blog', {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch events', error)
  }
}

export const BlogDetailGET = async (blog_id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/blog/${blog_id}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch events', error)
  }
}
