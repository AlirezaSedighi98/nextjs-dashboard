import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page: string; query: string }>;
}) {
  const { query } = await searchParams;
  const customers = await fetchFilteredCustomers(query || "");

  return <CustomersTable customers={customers} />;
}
