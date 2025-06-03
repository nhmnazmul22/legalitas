import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, FileText, FolderOpen, Upload } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Document = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Brankas Legalitas</h2>
        <p className="text-gray-600">
          Dokumen legal Anda tersimpan aman dan dapat diakses kapan saja
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload Dokumen
          </CardTitle>
          <CardDescription>
            Upload dokumen pendukung untuk layanan Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Upload Dokumen</h3>
            <p className="text-gray-500 mb-4">
              Drag & drop file atau klik untuk browse
            </p>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Pilih File
            </Button>
            <p className="text-xs text-gray-400 mt-2">
              Maksimal 10MB • PDF, DOC, JPG, PNG
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            Dokumen Anda
          </CardTitle>
          <CardDescription>Daftar semua dokumen yang tersimpan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                name: "Akta Pendirian PT",
                type: "PDF",
                size: "2.5 MB",
                date: "15 Jan 2024",
                status: "Final",
              },
              {
                name: "SK Kemenkumham",
                type: "PDF",
                size: "1.8 MB",
                date: "18 Jan 2024",
                status: "Final",
              },
              {
                name: "NPWP Perusahaan",
                type: "PDF",
                size: "0.9 MB",
                date: "20 Jan 2024",
                status: "Draft",
              },
            ].map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium">{doc.name}</h4>
                    <p className="text-sm text-gray-500">
                      {doc.size} • {doc.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={doc.status === "Final" ? "secondary" : "outline"}
                  >
                    {doc.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Document;
