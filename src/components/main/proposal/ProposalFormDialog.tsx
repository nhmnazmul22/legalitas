"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ProposalType } from "@/types";
import axiosInstance from "@/lib/config/axios"; // ✅ instance use
import { toast } from "sonner";

type ProposalFormDialogType = {
  children: React.ReactNode;
  proposal: ProposalType;
};

const ProposalFormDialog: React.FC<ProposalFormDialogType> = ({
  children,
  proposal,
}) => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientWhatsAppNumber, setClientWhatsAppNumber] = useState("");
  const [voucherCode, setVoucherCode] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const resetValues = () => {
    setDialogOpen(false);
    setClientName("");
    setClientEmail("");
    setClientWhatsAppNumber("");
    setVoucherCode("");
  };

  const handleSubmit = async () => {
    if (!clientName || !clientEmail || !clientWhatsAppNumber) {
      toast.error("Harap isi semua bidang yang wajib diisi.");
      resetValues();
      return;
    }

    try {
      const requestBody: any = {
        clientName,
        clientEmail,
        clientWhatsAppNumber,
        proposalId: proposal.id,
      };
      if (voucherCode.trim() !== "") {
        requestBody.voucherCode = voucherCode.trim();
      }

      const response = await axiosInstance.post(
        "/api/proposals/request-proposal",
        requestBody
      );

      toast.success("Permintaan proposal berhasil dikirim!");
      resetValues();
    } catch (error: any) {
      toast.error("Terjadi kesalahan saat mengirim permintaan.");
      resetValues();
      console.error(error);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left">
          <h3 className="text-xl font-semibold leading-[22px]">
            {proposal.name}
          </h3>
          <p className="theme-gradient text-base font-semibold">
            {proposal.price}
          </p>
          <p className="text-muted-foreground text-sm mt-2 leading-[22px]">
            {proposal.features.join(", ")}
          </p>
        </DialogHeader>

        {/* Voucher Code Section */}
        <div className="flex flex-col gap-2 mt-5">
          <Label htmlFor="kode-voucher" className="text-sm text-primary">
            Makin hemat pakai voucher
          </Label>
          <Input
            id="kode-voucher"
            placeholder="Masukkan kode voucher"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
          />
          <p className="text-muted-foreground text-xs">
            Kode Voucher dikirimkan lewat pesan Whatsapp di proposal sebelumnya
          </p>
        </div>

        <Separator />

        {/* Client Input Section */}
        <div className="">
          <h3 className="text-lg font-semibold">Minta Proposal</h3>
          <p className="text-muted-foreground text-sm">
            Pengguna baru akan dibuatkan akses ke Dashboard Klien
          </p>
          <div className="flex flex-col gap-4 mt-3">
            <Input
              placeholder="Tulis nama lengkap *"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <Input
              placeholder="Tulis alamat email *"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
            <Input
              placeholder="Tulis nomor Whatsapp *"
              value={clientWhatsAppNumber}
              onChange={(e) => setClientWhatsAppNumber(e.target.value)}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Login ke Dashboard Klien akan menggunakan OTP melalui Whatsapp.
            Pastikan kamu memiliki nomor Whatsapp yang aktif.
          </p>
        </div>

        <DialogFooter className="flex flex-row gap-3 mt-5">
          <Button className="btn-gradient" onClick={handleSubmit}>
            Kirim Proposal
          </Button>
          <DialogClose asChild>
            <Button variant="ghost">Batal</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProposalFormDialog;
