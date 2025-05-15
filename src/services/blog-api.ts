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

export const BlogDetailHeadGET = async (id: string, locale: string) => {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${id}?locale=${locale}`
  const res = await fetch(url, { cache: 'no-store' })

  if (!res.ok) throw new Error('Failed to fetch')

  const json = await res.json()

  return json.data?.data
}
