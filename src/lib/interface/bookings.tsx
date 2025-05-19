import { Vendor } from "./vendorinterface"



export interface AllBookings {
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
  role: Vendor
}


