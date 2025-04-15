import { Metadata } from 'next'

import SignUp from '@/components/Auth/SignUp'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title:
    'Sign Up | Symposium',
}

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign Up Page" />

      <SignUp />
    </>
  )
}

export default SignupPage
