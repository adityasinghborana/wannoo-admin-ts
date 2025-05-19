"use client";

import { useEffect, useState } from "react";
import { GetAllBookings } from "@/services/api_helper";
import Container from "@/components/layout/container";
import { DataTables } from "./datatable";
import { getBookingColumns } from "./columns";
import { AllBookings } from "@/lib/interface/bookings";
import { useRouter } from "next/navigation";


const Bookings = () => {
  const router = useRouter();
  const [rows, setRows] = useState<AllBookings[]>([]); // add type

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllBookings();
      setRows(data);
    };
    fetchData();
  }, []);

  const handleOpenView = (bookingId: string) => {
    // handle routing logic
    router.push ( `/dashboard/bookings/${bookingId}`);
  };

  const handleDeleteRow = (id: string) => {
    const updated = rows.filter((row) => row.id.toString() !== id);
    setRows(updated);
  };

  return (
    <Container>
      <DataTables<AllBookings, unknown>
        columns={getBookingColumns(handleDeleteRow, handleOpenView)}
        data={rows}
      />
    </Container>
  );
};

export default Bookings;
