'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type AuthFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function SigninForm ({ onSubmit }: AuthFormProps) {
  return (
    <div className=' items-center justify-center  shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black'>
      <div className='flex flex-row justify-center'>
        <h2 className='text-xl mb-8 font-bold text-neutral-800 dark:text-neutral-200'>
          Login
        </h2>
      </div>

      <div className='flex flex-row justify-center'>
        <Image src='/Group.png' width={180} height={0} alt='logo' />
      </div>

      <form className='my-8' onSubmit={onSubmit}>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>Email Address</Label>
          <Input id='email'name='email' placeholder='projectmayhem@fc.com' type='email' />
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password'name='password' placeholder='••••••••' type='password' />
        </LabelInputContainer>

        <button
          type='submit'
          className='group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]'
        >
          Sign in &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className='absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100' />
      <span className='absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100' />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  )
}
