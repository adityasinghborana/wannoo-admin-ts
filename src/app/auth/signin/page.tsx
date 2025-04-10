'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SigninForm from '@/components/signup-form-demo'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "@/firebase/config"
import Cookies from 'js-cookie'
import { useApiStatus } from '../../../../stores/apistatusstore'
import { toast } from "react-toastify"

const Signin = () => {
  const router = useRouter()
  const { setLoading, setSuccess, setError, reset } = useApiStatus()

  const [signInWithEmailAndPassword, user, loading, firebaseError] =
    useSignInWithEmailAndPassword(auth)

  // Watch firebase hook state
  useEffect(() => {
    if (user) {
      user.user.getIdToken(true).then((token) => {
        // Store token in cookie for 1 day
        Cookies.set('access_token', token, {
          expires: 1,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
        })

        setSuccess(true)
        toast.success("Login successful 🎉", {
          autoClose: 2000,
          onClose: () => router.push('/dashboard'),
        })
      })
    }

    if (firebaseError) {
      setError(firebaseError.message)
      toast.error(firebaseError.message || 'Login failed')
    }

    setLoading(loading)
  }, [user, loading, firebaseError])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    reset()

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')?.toString()
    const password = formData.get('password')?.toString()

    if (!email || !password) {
      toast.error("Email or password is missing")
      return
    }

    await signInWithEmailAndPassword(email, password)
  }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <SigninForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Signin
