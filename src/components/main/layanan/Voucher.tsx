import MainButton from "@/components/common/MainButton";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CircleCheck,
  Clock,
  Facebook,
  Instagram,
  RefreshCcw,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const Voucher = () => {
  return (
    <div className="p-5 w-full bg-white rounded-md">
      <figure className="rounded-md overflow-hidden">
        <Image
          src="/images/company-google-img.png"
          alt="Company img"
          width={1024}
          height={1024}
        />
      </figure>
      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-2">Pilih Layanan:</h3>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pendirian PT" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Pendirian-PT">Pendirian PT</SelectItem>
            <SelectItem value="PT-Izin">PT + Izin</SelectItem>
            <SelectItem value="PT-Izin-Virtual-Office">
              PT + Izin + Virtual Office
            </SelectItem>
            <SelectItem value="PT-Izin-Virtual-Office-PKP">
              PT + Izin + Virtual Office + PKP
            </SelectItem>
            <SelectItem value="PT-Izin-Virtual-Office-SCBD">
              PT + Izin + Virtual Office SCBD
            </SelectItem>
            <SelectItem value="PT-Izin-Virtual-Office-SCBD-PKP">
              PT + Izin + Virtual Office SCBD + PKP
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <h3 className="text-xl lg:text-2xl font-semibold theme-gradient">
          Rp. 3.000.000
        </h3>
        <Badge className="px-2 py-1 text-sm bg-red-200 text-red-500">
          <Clock /> Terbatas!
        </Badge>
      </div>
      <figure className="rounded-md overflow-hidden mt-5">
        <Image
          src="/images/voucher-img.png"
          alt="Company img"
          width={1024}
          height={1024}
        />
      </figure>
      <ul className="mt-5 flex flex-col gap-2">
        <li className="flex items-center gap-2 text-base">
          <CircleCheck size={20} className="text-green-500" />
          <span className="flex-1">Pengecekan Nama PT</span>
        </li>
        <li className="flex items-center gap-2 text-base">
          <CircleCheck size={20} className="text-green-500" />
          <span className="flex-1">Pemesanan Nama PT</span>
        </li>
        <li className="flex items-center gap-2 text-base">
          <CircleCheck size={20} className="text-green-500" />
          <span className="flex-1">Persiapan Minuta</span>
        </li>
        <li className="flex items-center gap-2 text-base">
          <CircleCheck size={20} className="text-green-500" />
          <span className="flex-1">Akta Pendirian PT</span>
        </li>
        <li className="flex items-center gap-2 text-base">
          <CircleCheck size={20} className="text-green-500" />
          <span className="flex-1">SK Menteri</span>
        </li>
        <li className="flex items-center gap-2 text-base">
          <CircleCheck size={20} className="text-green-500" />
          <span>Dapat 20 KBLI</span>
        </li>
      </ul>
      <MainButton text="Minta proposal" className="mt-5 mx-auto w-full" />
      <p className="text-xs text-muted-foreground text-center flex items-center gap-2 justify-center mt-2">
        <RefreshCcw size={14} />{" "}
        <span className="">Jaminan pekerjaan selesai!</span>
      </p>
      <div className="mt-5 py-10 bg-primary/10 rounded-md flex justify-center gap-3 items-center">
        <div className="p-2 rounded-full bg-primary cursor-pointer hover:translate-y-1.5 transition-all duration-300">
          <Facebook className="text-white" />
        </div>
        <div className="p-2 rounded-full bg-primary cursor-pointer hover:translate-y-1.5 transition-all duration-300">
          <Twitter className="text-white" />
        </div>
        <div className="p-2 rounded-full bg-primary cursor-pointer hover:translate-y-1.5 transition-all duration-300">
          <Instagram className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Voucher;
