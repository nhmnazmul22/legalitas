"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import SkeletonCard from "../skeleton/SkeletonCard";
import { fetchInvoices } from "@/store/InvoiceSlice";
import InvoiceCard from "./InvoiceCard";

const Invoice = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const { data: invoices } = useSelector(
    (state: RootState) => state.invoices.items
  );

  useEffect(() => {
    if (session?.user) {
      dispatch(fetchInvoices(session.user.id));
      return;
    }
  }, [session]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Invoice</h2>
        <p className="text-gray-600">Daftar invoice dan status pembayaran</p>
      </div>

      {invoices.length > 0
        ? invoices.map((invo) => <InvoiceCard key={invo._id} invo={invo} />)
        : Array.from({ length: 2 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
    </div>
  );
};

export default Invoice;
