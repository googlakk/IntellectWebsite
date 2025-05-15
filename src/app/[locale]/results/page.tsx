
import StudentResultsBlock from '@/components/Results-page'
import { buildMetadata } from '@/utils/seo'

export async function generateMetadata(
  props: { params: Promise<string | any> },
) {
  const { locale } = await props.params

  return buildMetadata(locale, 'results')
}

const Results = () => {

  return (
    <>
      <StudentResultsBlock/>
    </>
  )
}

export default Results
