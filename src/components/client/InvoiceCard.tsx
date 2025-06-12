"use client";

import { InvoiceType } from "@/types";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CreditCard, Download } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/utils";
import axios from "axios";
import { toast } from "sonner";

type InvoiceCardType = {
  invo: InvoiceType;
};

const InvoiceCard: React.FC<InvoiceCardType> = ({ invo }) => {
  const [loading, setLoading] = useState(false);

  const downloadPdf = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`/api/pdf/invoice-pdf/${invo.invNo}`, invo, {
        responseType: "blob",
      });
      if (res.status === 200) {
        const blob = new Blob([res.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `invoice-${invo.invNo}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        toast.success("Pdf downloaded");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              {invo.service}
              <Badge variant="destructive">{invo.status}</Badge>
            </CardTitle>
            <CardDescription>
              {invo.invNo} • {invo.amount} • Jatuh tempo:{" "}
              {formatDate(invo.dueDate!)}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={downloadPdf}
              disabled={loading}
            >
              <Download className="w-4 h-4 mr-2" />
              {loading ? "Downloading PDF..." : "Download PDF"}
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <CreditCard className="w-4 h-4 mr-2" />
              Bayar Sekarang
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">{invo.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Detail Invoice</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Nomor Invoice:</span>
                <span className="font-medium">{invo.invNo}</span>
              </div>
              <div className="flex justify-between">
                <span>Tanggal Terbit:</span>
                <span className="font-medium">
                  {formatDate(invo.createdAt!)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Jatuh Tempo:</span>
                <span className="font-medium">
                  {" "}
                  {formatDate(invo.dueDate!)}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Informasi Pembayaran</h4>
            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Bank:</span>
                  <span className="font-medium">
                    {invo.bankDetails?.bankName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>No. Rekening:</span>
                  <span className="font-medium">
                    {invo.bankDetails?.accountNo}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Atas Nama:</span>
                  <span className="font-medium">
                    {invo.bankDetails?.accountHolder}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {invo.status === "paid" ? (
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-800">
                Menunggu Pembayaran
              </span>
            </div>
            <p className="text-sm text-red-700 mt-1">
              Thanks for payment clearing before jatuh tempo:
              {formatDate(invo.dueDate!)}
            </p>
          </div>
        ) : (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="font-medium text-red-800">
                Menunggu Pembayaran
              </span>
            </div>
            <p className="text-sm text-red-700 mt-1">
              Silahkan lakukan pembayaran sebelum tanggal jatuh tempo:{" "}
              {formatDate(invo.dueDate!)}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InvoiceCard;
