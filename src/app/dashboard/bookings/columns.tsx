"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { AllBookings } from "@/lib/interface/bookings";
import { IconTrash, IconEye } from "@tabler/icons-react";

export const getBookingColumns = (
  handleDeleteRow: (id: string) => void,
  handleOpenView: (bookingId: string) => void
): ColumnDef<AllBookings, unknown>[] => [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "id",
    header: "Booking ID",
  },
  {
    accessorKey: "serviceTotal",
    header: "Amount",
    cell: ({ row }) => {
      const value = (row.original.serviceTotal || 0).toFixed(2);
      return <span>${value}</span>;
    },
  },
  {
    accessorKey: "passengers",
    header: "Passengers",
  },
  {
    accessorKey: "tourDate",
    header: "Tour Date",
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Vendor Name",
    cell: ({ row }) => (
      <span>{row.original.role?.username || "N/A"}</span>
    ),
  },
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          variant="destructive"
          size="icon"
          onClick={() => handleDeleteRow(row.original.id.toString())}
        >
          <IconTrash className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon" 
          onClick={() => handleOpenView(row.original.id.toString())}
        >
          <IconEye className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];