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

const Invoice = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Invoice</h2>
        <p className="text-gray-600">Daftar invoice dan status pembayaran</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Invoice Pendirian PT
                <Badge variant="destructive">Belum Dibayar</Badge>
              </CardTitle>
              <CardDescription>
                INV-001 • Rp 3,000,000 • Jatuh tempo: 25 Jan 2024
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <CreditCard className="w-4 h-4 mr-2" />
                Bayar Sekarang
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Pembayaran untuk jasa pendirian PT termasuk akta notaris dan SK
            Kemenkumham
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Detail Invoice</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Nomor Invoice:</span>
                  <span className="font-medium">INV-001</span>
                </div>
                <div className="flex justify-between">
                  <span>Tanggal Terbit:</span>
                  <span className="font-medium">15 Jan 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Jatuh Tempo:</span>
                  <span className="font-medium">25 Jan 2024</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Informasi Pembayaran</h4>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Bank:</span>
                    <span className="font-medium">Bank BCA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>No. Rekening:</span>
                    <span className="font-medium">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Atas Nama:</span>
                    <span className="font-medium">PT Legalitas Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="font-medium text-red-800">
                Menunggu Pembayaran
              </span>
            </div>
            <p className="text-sm text-red-700 mt-1">
              Silahkan lakukan pembayaran sebelum tanggal jatuh tempo: 25 Jan
              2024
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoice;
