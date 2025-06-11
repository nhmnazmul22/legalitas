import { formatDate } from "@/lib/utils";
import { ProposalType, SendProposalType } from "@/types";
import React, { useState } from "react";
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
import api from "@/lib/config/axios";
import { toast } from "sonner";
type ProposalCardType = {
  prop: SendProposalType;
};

const ProposalCard: React.FC<ProposalCardType> = ({ prop }) => {
  const [loading, setLoading] = useState(false);

  const downloadPdf = async () => {
    try {
      setLoading(true);
      const res = await api.post(
        `/api/proposals/generate-pdf/${prop._id}`,
        {
          title: prop.proposalTitle,
          price: prop.proposalPrice,
          date: formatDate(prop.createdAt!),
          status: prop.status,
          details: prop.proposalDetails.features,
          includes: prop.includes,
          note: prop.proposalContent,
        },
        { responseType: "blob" }
      );
      if (res.status === 200) {
        const blob = new Blob([res.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `invoice-${prop._id}.pdf`;
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
              {prop.proposalTitle}
              <Badge>Diterima</Badge>
            </CardTitle>
            <CardDescription>
              {prop.proposalPrice} • Dikirim: {formatDate(prop.createdAt!)}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={loading}
              onClick={downloadPdf}
            >
              <Download className="w-4 h-4 mr-2" />
              {loading ? "Downloading PDF..." : "Download PDF"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">{prop.proposalContent}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Detail Layanan:</h4>
            <ul className="space-y-1 text-sm">
              {prop.proposalDetails.features.map((value, index) => (
                <li
                  key={`${value}-${index}`}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Yang Termasuk:</h4>
            <ul className="space-y-1 text-sm">
              {prop.includes.map((value, index) => (
                <li
                  key={`${value}-${index}`}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {prop.status === "accepted" ? (
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
        ) : (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-red-600" />
              <span className="font-medium text-red-800">
                Proposal Diterima
              </span>
            </div>
            <p className="text-sm text-red-700 mt-1">
              Proposal ini telah Anda terima. Tim kami akan segera memulai
              proses pengerjaan.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProposalCard;
