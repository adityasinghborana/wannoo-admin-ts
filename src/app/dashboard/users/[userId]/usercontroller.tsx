import { useAsyncState } from '@/lib/hooks/states'
import { GetUserBookings, getUserDetails } from '@/services/api_helper'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { User } from '../interface'
import { Bookings } from './bookingsInterface'

const UserController = () => {
  const { data, error, loading, execute, setData } = useAsyncState<User>()
  const [bookingsData ,setBookingsData] =useState<Bookings[]>([])
  const params = useParams()
  const userId = params?.userId as string
const getBookings = async() =>{

   const data = await  GetUserBookings(userId);
    setBookingsData(data)
}
  useEffect(() => {
    if (userId) {
      execute(() => getUserDetails(userId))
   getBookings()
    }
  }, [userId])

  return {
    data,
    error,
    loading,
    setData,
    bookingsData,
  }
}

export default UserController
