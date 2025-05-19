"use client";

import React from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const bookingId = params?.bookingId;

  return (
    <div className="bg-black h-[300px] w-full text-amber-50">
      {bookingId ?? "No bookingId found"}
    </div>
  );
};

export default Page;