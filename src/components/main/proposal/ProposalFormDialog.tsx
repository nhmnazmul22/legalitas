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

type ProposalFormDialogType = {
  children: React.ReactNode;
};

const ProposalFormDialog: React.FC<ProposalFormDialogType> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left">
          <h3 className="text-xl font-semibold leading-[22px]">PMA + Izin</h3>
          <p className="theme-gradient text-base font-semibold">
            Rp. 10,500,000
          </p>
          <p className="text-muted-foreground text-sm mt-2 leading-[22px]">
            Pengecekan Nama PT, Pemesanan Nama PT, Akta Pendirian PT PMA, SK
            Menteri, NPWP, SKT Pajak, NIB / Izin Usaha, [BONUS] Dapat 20 KBLI,
            [BONUS] Buka 5 (lima) rekening Bank, [BONUS] Stempel perusahaan,
            [BONUS] Kartu nama 1 (satu) Direktur, [BONUS] EFIN Badan, [BONUS]
            Akun OSS & Izin Impor
          </p>
        </DialogHeader>
        <div className="flex flex-col gap-2 mt-5">
          <Label htmlFor="kode-voucher" className="text-sm text-primary">
            Makin hemat pakai voucher
          </Label>
          <Input id="kode-voucher" placeholder="Masukkan kode voucher" />
          <p className="text-muted-foreground text-xs">
            Kode Voucher dikirimkan lewat pesan Whatsapp di proposal sebelumnya
          </p>
        </div>
        <Separator />
        <div className="">
          <h3 className="text-lg font-semibold">Minta Proposal</h3>
          <p className="text-muted-foreground text-sm">
            Pengguna baru akan dibuatkan akses ke Dashboard Klien
          </p>
          <div className="flex flex-col gap-4 mt-3">
            <Input placeholder="Tulis nama lengkap *" />
            <Input placeholder="Tulis alamat email *" />
            <Input placeholder="Tulis nomor Whatsapp *" />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Login ke Dashboard Klien akan menggunakan OTP melalui Whatsapp.
            Pastikan kamu memiliki nomor Whatsapp yang aktif.
          </p>
        </div>
        <DialogFooter className="flex flex-row gap-3 mt-5">
          <Button className="btn-gradient">Kirim Proposal</Button>
          <DialogClose asChild>
            <Button variant="ghost">Batal</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProposalFormDialog;
