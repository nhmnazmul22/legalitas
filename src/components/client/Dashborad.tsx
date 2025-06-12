import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Clock, FileText, Receipt } from "lucide-react";
import { Progress } from "../ui/progress";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/store/userSlice";
import type { RootState, AppDispatch } from "@/store";
import { useSession } from "next-auth/react";
import { fetchInvoices } from "@/store/InvoiceSlice";
import { fetchWorkProgress } from "@/store/WorkProgressSlice";
import { fetchProposals } from "@/store/ProposalSlice";
import { formatDate } from "@/lib/utils";

const Dashboard = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const { data: invoices } = useSelector(
    (state: RootState) => state.invoices.items
  );
  const { data: workProgresses } = useSelector(
    (state: RootState) => state.workProgresses.items
  );
  const { data: proposals } = useSelector(
    (state: RootState) => state.proposals.items
  );

  const { data, status, message } = items;

  const activeProposal = proposals.map((prop) => prop.status === "accepted");
  const latestProposal = proposals.find((prop) => prop.status === "accepted");
  const pendingInvoice = invoices.map((inv) => inv.status === "pending");
  const latestInvoice = invoices.find((inv) => inv.status === "pending");
  const uncompletedProgress = workProgresses.find(
    (prog) => prog.status === "in progress"
  );

  useEffect(() => {
    if (session?.user.id) {
      dispatch(fetchUsers(session.user.id!));
      dispatch(fetchProposals(session.user.id!));
      dispatch(fetchInvoices(session.user.id!));
      dispatch(fetchWorkProgress(session.user.id!));
    }
  }, [dispatch, session]);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Hi, {data && data.fullName}</h1>
        <p className="text-blue-100">
          Selamat datang di dashboard klien Legalitas.org
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Proposal Aktif</p>
                <p className="text-2xl font-bold">{activeProposal.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Invoice Pending</p>
                <p className="text-2xl font-bold">{pendingInvoice.length}</p>
              </div>
              <Receipt className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Progress</p>
                <p className="text-2xl font-bold">
                  {uncompletedProgress
                    ? `${uncompletedProgress.progressPercent}%`
                    : "100%"}
                </p>
              </div>
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="text-2xl font-bold">{data && data.status}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          {uncompletedProgress ? (
            <>
              <CardHeader>
                <CardTitle>{uncompletedProgress.serviceType}</CardTitle>
                <CardDescription>
                  {uncompletedProgress.initialNotes}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>{uncompletedProgress.currentStep.title}</span>
                    <span className="font-bold">
                      {uncompletedProgress.progressPercent}%
                    </span>
                  </div>
                  <Progress
                    value={Number(uncompletedProgress.progressPercent)}
                    className="h-2"
                  />
                </div>
                <div className="space-y-2">
                  {uncompletedProgress.progressSteps?.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          step.status === "completed"
                            ? "bg-green-500"
                            : step.status === "reviewing"
                            ? "bg-blue-500"
                            : "bg-gray-400"
                        }`}
                      ></div>
                      <span className="text-sm">
                        {step.title} {step.status === "completed" && "✓"}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </>
          ) : (
            <p className="text-center italic">All Project is completed</p>
          )}
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
            <CardDescription>Update terbaru dari layanan Anda</CardDescription>
          </CardHeader>
          {latestInvoice || latestProposal || uncompletedProgress ? (
            <CardContent className="space-y-3">
              {latestProposal && (
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      {latestProposal.proposalTitle}
                    </p>
                    <p className="text-xs text-gray-600">
                      {formatDate(latestProposal.updatedAt!)}
                    </p>
                  </div>
                </div>
              )}
              {uncompletedProgress && (
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      Progress update: {uncompletedProgress.currentStep.title}
                    </p>
                    <p className="text-xs text-gray-600">
                      {" "}
                      {formatDate(uncompletedProgress.updatedAt!)}
                    </p>
                  </div>
                </div>
              )}
              {latestInvoice && (
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <Receipt className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">
                      Invoice {latestInvoice.invNo} dibuat
                    </p>
                    <p className="text-xs text-gray-600">
                      {" "}
                      {formatDate(latestInvoice.dueDate!)}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          ) : (
            <p className="text-center italic">Loading...</p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
