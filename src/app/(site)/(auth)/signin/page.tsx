import { Metadata } from 'next'

import Signin from '@/components/Auth/SignIn'
import Breadcrumb from '@/components/Common/Breadcrumb'

export const metadata: Metadata = {
  title:
    'Sign In | Symposium',
}

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  )
}

export default SigninPage
