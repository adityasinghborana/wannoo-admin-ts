'use client'

import Container from '@/components/layout/container'
import React, { useEffect} from 'react'
import { DataTables } from './datatable'
import { columns } from './columns'
import { TourController } from './tourcontroller'

const ToursPage = () => {
  const { fetchTours, Tours } = TourController()

  useEffect(() => {
    fetchTours()
  }, [])
  return (
    <Container className='border-none'>
      <DataTables columns={columns} data={Tours} />
    </Container>
  )
}

export default ToursPage
