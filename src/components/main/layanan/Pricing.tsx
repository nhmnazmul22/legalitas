import MainButton from "@/components/common/MainButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleCheck, X } from "lucide-react";
import Image from "next/image";
import Heading from "./Heading";
const Pricing = () => {
  return (
    <div className="mt-5">
      <Heading text="Pricing" />
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary-blue hover:bg-secondary-blue">
            <TableHead className="font-bold text-white text-left whitespace-normal"></TableHead>
            <TableHead className="font-bold text-white text-center max-w-[130px] whitespace-normal">
              PT
            </TableHead>
            <TableHead className="font-bold text-white text-center max-w-[130px] whitespace-normal">
              PT + Izin
            </TableHead>
            <TableHead className="font-bold text-white text-center max-w-[130px] whitespace-normal">
              PT + Izin + VO
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left whitespace-normal">Harga</TableCell>
            <TableCell className="text-center whitespace-normal">
              Rp 3.000.000
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              Rp 5.500.000{" "}
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              Rp 7.900.000
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Pengecekan Nama PT
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Pemesanan Nama PT
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Persiapan Minuta
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Akta Pendirian PT
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              SK Menteri
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Dapat 20 KBLI 🏆
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">NPWP</TableCell>
            <TableCell className="text-center whitespace-normal">
              <X className="text-destructive mx-auto border-[2px] rounded-full p-[2px] border-destructive" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mt-5">
        <figure className="rounded-md overflow-hidden w-full">
          <Image
            src="/images/price-gallery-01.png"
            alt="Price Gallery"
            width={1024}
            height={1024}
            className="w-full h-auto"
          />
        </figure>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 items-start mt-5">
          <figure className="">
            <Image
              src="/images/hero-service-banner-01.png"
              alt="Service Banner"
              width={1024}
              height={1024}
              className="rounded-md w-full h-auto object-cover"
            />
          </figure>
          <div className="max-md:w-full">
            <div className="hero-banner p-5 rounded-md border border-primary/20 shadow mt-3">
              <h3 className="text-lg font-semibold theme-gradient">
                Banyak bonus:
              </h3>
              <ul className="mt-3 grid grid-cols-2 gap-5">
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/main-service-icon-02.png"
                    alt="Main Service"
                    width={300}
                    height={300}
                    className="w-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">5 Rekening</span>
                    <span className="text-sm">Bank</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/main-service-icon-01.png"
                    alt="Main Service"
                    width={300}
                    height={300}
                    className="w-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">5 Rekening</span>
                    <span className="text-sm">Bank</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/main-service-icon-03.png"
                    alt="Main Service"
                    width={300}
                    height={300}
                    className="w-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">5 Rekening</span>
                    <span className="text-sm">Bank</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/main-service-icon-04.png"
                    alt="Main Service"
                    width={300}
                    height={300}
                    className="w-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">5 Rekening</span>
                    <span className="text-sm">Bank</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/main-service-icon-01.png"
                    alt="Main Service"
                    width={300}
                    height={300}
                    className="w-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">5 Rekening</span>
                    <span className="text-sm">Bank</span>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/main-service-icon-02.png"
                    alt="Main Service"
                    width={300}
                    height={300}
                    className="w-10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">5 Rekening</span>
                    <span className="text-sm">Bank</span>
                  </div>
                </li>
              </ul>
            </div>
            <MainButton
              text="Lihat PT + virtual office"
              link="/"
              className="w-[260px] h-[60px] mt-5 max-md:mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white shadow-md p-5 rounded-md">
        <h3 className="text-xl font-semibold mb-3">Gallery Virtual Office</h3>
        <p className="bg-primary/10 font-medium text-sm md:text-base p-2 rounded-md">
          Sewa virtual office mulai dari Rp 2.3 juta/tahun. Bisa pakai 6 (enam)
          lokasi untuk meeting. Lihat lebih detail.
        </p>
        <figure className="rounded-md overflow-hidden mt-5">
          <Image
            src="/images/price-gallery-03.png"
            alt="Price Gallery"
            width={1024}
            height={1024}
          />
        </figure>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
          <figure className="rounded-md overflow-hidden">
            <Image
              src="/images/virtual-office.png"
              alt="Virtual Office"
              width={1024}
              height={1024}
            />
            <figcaption className="text-sm lg:text-base text-muted-foreground font-medium text-center p-2">
              Indonesia Stock Exchange Tower - SCBD
            </figcaption>
          </figure>
          <figure className="rounded-md overflow-hidden">
            <Image
              src="/images/virtual-office.png"
              alt="Virtual Office"
              width={1024}
              height={1024}
            />
            <figcaption className="text-sm lg:text-base text-muted-foreground font-medium text-center p-2">
              Menara Cakrawala Thamrin - Jakarta Pusat
            </figcaption>
          </figure>
          <figure className="rounded-md overflow-hidden">
            <Image
              src="/images/virtual-office.png"
              alt="Virtual Office"
              width={1024}
              height={1024}
            />
            <figcaption className="text-sm lg:text-base text-muted-foreground font-medium text-center p-2">
              Indonesia Stock Exchange Tower - SCBD
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
