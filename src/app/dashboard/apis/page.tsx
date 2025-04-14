'use client'

import Column from '@/components/layout/column'
import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GetStripeApi, UpdateStripeApi } from '@/services/api_helper'
import { useEffect, useState } from 'react'

interface StripeKey {
  id: string
  secretapikey: string
  publishableapikey: string
}

const Apipage = () => {
  const [paymentapi, setPaymentApi] = useState<StripeKey>({
    id: '',
    secretapikey: '',
    publishableapikey: ''
  })

  const UpdatePaymentApi = async () => {
    const res = await UpdateStripeApi(paymentapi)
    setPaymentApi(res)
  }

  useEffect(() => {
    const getApi = async () => {
      setPaymentApi(await GetStripeApi())
    }
    getApi()
  }, [])

  return (
    <Column className='h-screen flex flex-col space-y-6 items-center h-96 justify-center w-full'>
      <Container className='space-x-4 w-1/2 bg-primary-foreground'>
        <div className='w-full content-center inline'>Stripe Api Key :</div>
        <Column className=' gap-4 mt-4'>
          <div>
            <label htmlFor='secretapikey'>Secret Key</label>
            <Input
              id='secretapikey'
              type='text'
              defaultValue={paymentapi?.secretapikey}
              onChange={e =>
                setPaymentApi({ ...paymentapi, secretapikey: e?.target.value })
              }
              className='border border-gray-300 text-black rounded px-2 py-1 w-full'
            />
          </div>
          <div>
            <label htmlFor='secretapikey'>Publishable key</label>
            <Input
              id='publishableapikey'
              type='text'
              defaultValue={paymentapi?.publishableapikey}
              onChange={e =>
                setPaymentApi({
                  ...paymentapi,
                  publishableapikey: e?.target.value
                })
              }
              className='border border-gray-300 text-black rounded px-2 py-1 w-full'
            />
          </div>
        </Column>
        <div className='py-4'>
          <Button onClick={UpdatePaymentApi}>Update</Button>
        </div>
      </Container>
    </Column>
  )
}

export default Apipage
