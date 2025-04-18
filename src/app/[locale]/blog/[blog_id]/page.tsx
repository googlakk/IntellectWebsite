import Blog from '@/components/SharedComponent/Blog'

interface Props {
  params: Promise<{ blog_id: string }>
}

export async function generateMetadata() {
  const siteName = process.env.SITE_NAME || 'Your Site Name'
  const authorName = process.env.AUTHOR_NAME || 'Your Author Name'

  if (siteName) {
    const metadata = {
      title: `${'Blog Post Page'} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    }

    return metadata
  } else {
    return {
      title: 'Not Found',
      description: 'No blog article has been found',
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    }
  }
}

export default async function Post({ params }: Props) {
  const args = (await params).blog_id

  return (
    <Blog params={args}/>
  )
}
