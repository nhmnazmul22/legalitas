import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";
import { Progress } from "../ui/progress";

const ProgressComponent = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Progress Pekerjaan</h2>
        <p className="text-gray-600">
          Pantau progress real-time pekerjaan Anda
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Pendirian PT</CardTitle>
              <CardDescription>
                Dimulai: 15 Jan 2024 • Estimasi selesai: 5 Feb 2024
              </CardDescription>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-blue-600">60%</p>
              <p className="text-sm text-gray-500">Selesai</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span>Progress: Dokumen Review</span>
              <span>60%</span>
            </div>
            <Progress value={60} className="h-3" />
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-800">
                Status Saat Ini: Dokumen Review
              </span>
            </div>
            <p className="text-sm text-blue-700">
              Dokumen Anda sedang dalam tahap review oleh tim legal kami. Proses
              ini membutuhkan waktu 2-3 hari kerja.
            </p>
            <p className="text-xs text-blue-600 mt-2">
              Update terakhir: 17 Jan 2024
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Timeline Pekerjaan</h4>
            <div className="space-y-4">
              {[
                {
                  name: "Konsultasi Awal",
                  status: "completed",
                  date: "15 Jan 2024",
                },
                {
                  name: "Persiapan Dokumen",
                  status: "completed",
                  date: "16 Jan 2024",
                },
                {
                  name: "Dokumen Review",
                  status: "current",
                  date: "17 Jan 2024",
                },
                { name: "Proses Notaris", status: "pending" },
                { name: "Pendaftaran Kemenkumham", status: "pending" },
                { name: "Selesai", status: "pending" },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    {step.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : step.status === "current" ? (
                      <Clock className="w-5 h-5 text-blue-500" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                    )}
                    {index < 5 && (
                      <div
                        className={`w-0.5 h-8 mt-2 ${
                          step.status === "completed"
                            ? "bg-green-300"
                            : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h5
                      className={`font-medium ${
                        step.status === "completed"
                          ? "text-green-600"
                          : step.status === "current"
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      {step.name}
                    </h5>
                    {step.date && (
                      <p className="text-xs text-gray-500">{step.date}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressComponent;
