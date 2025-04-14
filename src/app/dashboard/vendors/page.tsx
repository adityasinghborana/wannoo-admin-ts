"use client";
// App.tsx
import { getAllVendors } from "@/services/api_helper";
import React, { useEffect, useState } from "react";
import { Vendor } from "@/lib/interface/vendorinterface";
import { columns } from "./columns";
import { DataTable } from "./datatable";
import Container from "@/components/layout/container";

const Vendors: React.FC = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        getAllVendors().then((response) => setVendors(response));
      } catch (err) {
        setError(`Failed to fetch events.${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="border-none"><DataTable columns={columns} data={vendors} /></Container>
      

  );
};

export default Vendors;
