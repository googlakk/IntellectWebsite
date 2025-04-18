import { buildQuery } from '@/helpers/buildQueryLanguage'

export const BlogGET = async (locale: string) => {
  try {
    const response = await fetch(`/api/blog${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch blog', error)
  }
}

export const BlogDetailGET = async (blog_id: string, locale: string) => {
  try {
    const response = await fetch(`/api/blog/${blog_id}${buildQuery(locale)}`, {
      method: 'GET',
    })

    const data = await response.json()

    return data
  } catch (error) {
    console.log('Failed to fetch blog detail', error)
  }
}
