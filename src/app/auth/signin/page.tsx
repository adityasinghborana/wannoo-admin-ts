'use client'
import SigninForm from '@/components/signup-form-demo'
import { useSigninController } from './signincontroller'
const Signin = () => {
  const { handleSubmit } = useSigninController()
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <SigninForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Signin
