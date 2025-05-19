import { Tour } from '@/lib/interface/tourinterface'
import { getAllTours } from '@/services/api_helper'
import  { useState } from 'react'

export const TourController = () => {
  const [Tours, setTours] = useState<Tour[]>([])
  const fetchTours = async () => {
    const data = await getAllTours()
    setTours(data)
  }

  return {
    fetchTours,
    Tours
  }
}
