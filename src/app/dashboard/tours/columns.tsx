/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from '@tanstack/react-table'


import Link from 'next/link'

import {
  IconTrash,
  IconEye,

  IconView360
} from '@tabler/icons-react'
import { Tour } from '@/lib/interface/tourinterface'

export const columns: ColumnDef<Tour, unknown>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'tourId',
    header: 'Tour Id' // Adjust this accessor to match your Event interface
  },
  {
    accessorKey: 'tourName',
    header: 'Tour Name' // Adjust this accessor to match your Event interface
  },

  
  {
    accessorKey: 'continent',
    header: 'Continent' // Adjust this accessor to match your Event interface
  },

  {
    accessorKey: 'countryName',
    header: 'Country' // Adjust this accessor to match your Event interface
  },

  {
    accessorKey: 'cityName',
    header: 'City' // Adjust this accessor to match your Event interface
  },
  

  {
    id: 'actions', // Not accessorKey because it's not a data key
    header:() => <div className="text-center w-full">Actions</div>,
    cell: ({ row }) => (
      <div className="flex  flex-row gap-2 justify-center items-center">
        <Link href={`/dashboard/edittour?tourId=${row.original.tourId}`}>
          <button className="p-2 rounded bg-green-500 text-white hover:bg-green-600">
            <IconView360 size={16} />
          </button>
        </Link>
  
        <Link href={`/dashboard/users/view${row.original.tourId}`}>
          <button className="p-2 rounded bg-yellow-400 text-white hover:bg-yellow-500">
            <IconEye size={16} />
          </button>
        </Link>
  
        <button className="p-2 rounded bg-red-500 text-white hover:bg-red-600">
          <IconTrash size={16} />
        </button>
      </div>
    ),
  }
]
