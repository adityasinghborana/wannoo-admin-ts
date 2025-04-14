import { Tour } from "@/lib/interface/tourinterface"

export interface Bookings {
    id: number
    status: string
    fullName: string
    email: string
    passengers: number
    tourDate: string
    serviceTotal: number
    userId: string
    roleId: string
    tourId: number
    createdAt: string
    tour: Tour
  }