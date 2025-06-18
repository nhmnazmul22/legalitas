import { ProgressType } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";
import { Progress } from "../ui/progress";
import { formatDate } from "@/lib/utils";

type ProgressCardType = {
  progress: ProgressType;
};

const ProgressCard: React.FC<ProgressCardType> = ({ progress }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{progress.serviceType}</CardTitle>
            <CardDescription>
              Dimulai: {formatDate(progress.createdAt!)} • Estimasi selesai:{" "}
              {formatDate(progress.updatedAt!)}
            </CardDescription>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-blue-600">
              {progress.progressPercent}%
            </p>
            <p className="text-sm text-gray-500">Selesai</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span>Progress: {progress.currentStep.title}</span>
            <span>{progress.progressPercent}%</span>
          </div>
          <Progress value={Number(progress.progressPercent)} className="h-3" />
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
            Update terakhir: {formatDate(progress.updatedAt!)}
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-4">Timeline Pekerjaan</h4>
          <div className="space-y-4">
            {progress.progressSteps &&
              progress.progressSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    {step.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : step.status === "reviewing" ? (
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
                          : step.status === "reviewing"
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </h5>
                    {step.status && (
                      <p className="text-xs text-gray-500">
                        {`${step.status[0].toUpperCase()}${step.status.slice(
                          1,
                          -1
                        )}`}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
