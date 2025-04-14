"use client";
import { Button } from "@/components/ui/button";
import { Vendor } from "@/lib/interface/vendorinterface";
import { ColumnDef } from "@tanstack/react-table";

import Link from "next/link";

import { IconTrash,   IconEye, IconArrowsUpDown, IconView360 } from '@tabler/icons-react';

export const columns: ColumnDef<Vendor, unknown>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "uid",
    header: "Uid", // Adjust this accessor to match your Event interface
  },

  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Vendor Name
          <IconArrowsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Vendor Email",
    cell: ({ row }) => (row.original.email ),
  },
  {
    accessorKey: "isVendor",
    cell: ({ row }) => (row.original.isVendor ? "Yes" : "No"),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Vendor
          <IconArrowsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "isAdmin",
    header: "Admin",
    cell: ({ row }) => (row.original.isAdmin ? "Yes" : "No"),
  },

  {
    accessorKey: "isApproved",
    cell: ({ row }) => (row.original.isVendor ? "Yes" : "No"),
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Approved
          <IconArrowsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "Actions",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cell: (row: any) => {
      return (
        <div className="flex max-w-full gap-2 h-full items-center justify-center">
          <Link href={`/dashboard/vendors/${row.row.original.uid}`}>
            <button className="flex items-center justify-center px-2 py-1 rounded bg-green-300 text-white hover:bg-green-600 focus:outline-none focus:bg-green-600">
              <IconView360 />
            </button>
          </Link>

          <Link href={`/dashboard/vendors/view${row.row.original.uid}`}>
            <button className="flex items-center justify-center px-2 py-1 rounded bg-yellow-400 text-white hover:bg-blue-600 focus:outline-none focus:bg-red-600">
              <IconEye />
            </button>
          </Link>

          <button className="flex items-center justify-center px-2 py-1 rounded bg-red-300 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600">
            <IconTrash />
          </button>
        </div>
      );
    },
  },
];
