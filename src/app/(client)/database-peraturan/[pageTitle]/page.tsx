import MainButton from "@/components/common/MainButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { File } from "lucide-react";
import Image from "next/image";

export default function DownloadFilePage() {
  return (
    <section className="py-15">
      <div className="container">
        <div className="shadow-md bg-white w-full text-center rounded-md p-10 max-w-5xl mx-auto">
          <figure className="w-40 mx-auto">
            <Image
              src="/images/falcon-logo.png"
              alt="Falcon Logo"
              width={300}
              height={300}
            />
          </figure>
          <h3 className="text-lg md:text-2xl font-semibold mt-2">
            Peraturan Bupati (PERBUP) Kabupaten Jepara Nomor 1 Tahun 2024
          </h3>
          <p className="text-muted-foreground mt-2">tentang</p>
          <h3 className="text-lg md:text-2xl font-semibold mt-2">
            Penentuan Kemampuan Keuangan Daerah untuk Pemberian Tunjangan
            Komunikasi Intensif, Tunjangan Reses dan Dana Operasional Dewan
            Perwakilan Rakyat Daerah Tahun 2024
          </h3>
          <Separator className="my-5" />
          <div className="">
            <p className="text-base text-left">Download Peraturan</p>
            <Table className="text-left mt-3">
              <TableBody>
                <TableRow>
                  <TableCell className="w-[100px]">Peraturan</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>
                    Peraturan Bupati (PERBUP) Kabupaten Jepara Nomor 1 Tahun
                    2024
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tentang</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell className="whitespace-nowrap md:whitespace-normal">
                    Penentuan Kemampuan Keuangan Daerah untuk Pemberian
                    Tunjangan Komunikasi Intensif, Tunjangan Reses dan Dana
                    Operasional Dewan Perwakilan Rakyat Daerah Tahun 2024
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Download</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell className="whitespace-nowrap md:whitespace-normal">
                    <p className="text-xs text-secondary-blue font-semibold">
                      1 PERBUP_NO_1_TH_2024.pdf
                    </p>
                    <Button className="mt-2">
                      <File /> Download
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell className="whitespace-nowrap md:whitespace-normal">
                    PDF
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <MainButton
          text="Cari peraturan lainnya"
          className="w-[260px] mt-10 mx-auto"
          link="/database-peraturan"
        />
      </div>
    </section>
  );
}
