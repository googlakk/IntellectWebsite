
import AdmissionProcess from '@/components/AdmissionProcess'
import { buildMetadata } from '@/utils/seo'

export async function generateMetadata(
  props: { params: Promise<string | any> },
) {
  const { locale } = await props.params

  return buildMetadata(locale, 'forParents')
}

const ForParents = () => {

  return (
    <>
      <AdmissionProcess />
    </>
  )
}

export default ForParents
