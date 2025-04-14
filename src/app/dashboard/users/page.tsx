"use client"

import React from 'react'
import { useUsersController } from './userscontroller'

import { columns } from './columns'
import { DataTable } from './datatable'
import Container from '@/components/layout/container'



const Page = () => {

    const {users} = useUsersController()
  return (
   
    <Container className="border-none"><DataTable columns={columns} data={users} /></Container>           
  )
}

export default Page