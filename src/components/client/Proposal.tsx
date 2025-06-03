import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Download } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Proposal = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Proposal</h2>
        <p className="text-gray-600">Daftar proposal yang dikirim oleh admin</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Proposal Pendirian PT
                <Badge>Diterima</Badge>
              </CardTitle>
              <CardDescription>
                Rp 3,000,000 • Dikirim: 15 Jan 2024
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Proposal lengkap untuk pendirian PT termasuk akta notaris, SK
            Kemenkumham, dan dokumen pendukung lainnya.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Detail Layanan:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Pengecekan Nama PT
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Akta Pendirian PT
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  SK Menteri
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Dapat 20 KBLI
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Yang Termasuk:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Konsultasi gratis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Revisi unlimited
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Support 24/7
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-800">
                Proposal Diterima
              </span>
            </div>
            <p className="text-sm text-green-700 mt-1">
              Proposal ini telah Anda terima. Tim kami akan segera memulai
              proses pengerjaan.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Proposal;
