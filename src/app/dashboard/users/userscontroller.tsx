
// app/users/controller.ts

import { getAllUsers } from '@/services/api_helper'
import { useEffect, useState } from 'react'
import {  User } from './interface'

export const useUsersController = () => {
    const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers()
        console.log(res)
        setUsers(res)
      } catch (error) {
        console.error("Error fetching users:", error)
      }
    }

    fetchUsers()
  }, [])

  return { users }
}
