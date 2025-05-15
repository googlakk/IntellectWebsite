
export const fetchAllBlogs = async (locale: string) => {
  try {
    const query = `${locale ? `locale=${locale}&` : ''}`
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs?${query}populate=image`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Ошибка при загрузке сервисов:', error)

    return []
  }
}
