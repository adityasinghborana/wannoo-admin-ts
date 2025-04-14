'use client'

import React from 'react'
import UserController from './usercontroller'
import Loader from '@/components/layout/loader'
import Container from '@/components/layout/container'
import Image from 'next/image'
import Row from '@/components/layout/row'
import Column from '@/components/layout/column'
import { ScrollArea } from '@/components/ui/scroll-area'

const Page = () => {
  const { data, loading, error, bookingsData } = UserController()

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p className='text-red-500'>Error: {error}</p>
      ) : data ? (
        <Column className='justify-start items-center h-screen  '>
          <Container className='w-[90%] mx-20 mt-6'>
            <Row className='items-center '>
              <div className='w-[150px] h-[150px] relative'>
                <Image
                  src={`http://localhost:3000/${data.profileImage}`}
                  fill
                  alt='Profile'
                  className='rounded-full object-cover'
                />
              </div>

              <Column className='ml-6 w-[80%]'>
                <h1 className='text-2xl font-bold'>{data.username}</h1>
                <h2 className='text-l font-semibold'>{data.email}</h2>
                <Row className='w-full  justify-between'>
                  <div>Address:{data.address}</div>
                  <div>Date of Birth:{data.dob}</div>
                  <div>Age:{data.age}</div>
                  <div>Unique ID:{data.uid}</div>
                </Row>
              </Column>
            </Row>
          </Container>

          <Container className='w-[90%] my-10'>
            <Column>
              <h1 className='text-2xl font-bold'>Bookings</h1>
            </Column>

            <div>
              <ScrollArea className='h-[400px]'>
                {bookingsData.map(item => (
                  <Container
                    key={item.id}
                    className='flex flex-col bg-primary-foreground my-4'
                  >
                    <Row className='justify-between'>
                      <Column>
                        <h1 className='text-2xl font-bold'>{item.id}</h1>
                        <h1 className='text-2xl font-bold'>
                          {item.tour.tourName}
                        </h1>
                        <h1 className='text-2xl font-bold'>
                          {item.passengers}
                        </h1>

                        <h1 className='text-2xl font-bold'>{item.email}</h1>
                      </Column>
                      <Column>
                        <h1 className='text-2xl font-bold'>{item.status}</h1>
                        <h1 className='text-2xl font-bold'>
                          {item.tourDate.substring(0, 10)}
                        </h1>

                        <h1 className='text-2xl font-bold'>
                          {item.serviceTotal}
                        </h1>
                        <h1 className='text-2xl font-bold'>
                          {item.createdAt.substring(0, 10)}
                        </h1>
                      </Column>
                    </Row>
                  </Container>
                ))}
              </ScrollArea>
            </div>
          </Container>
        </Column>
      ) : (
        <p>No data</p>
      )}
    </>
  )
}

export default Page
