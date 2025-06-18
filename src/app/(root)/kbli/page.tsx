import Blogs from "@/components/main/Blogs";
import Reviews from "@/components/main/Reviews";
import { Separator } from "@/components/ui/separator";
import Rule from "@/components/main/rules/Rule";
export default function RegulationPage() {
  return (
    <>
      <Rule>
        <div className="my-5 flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Tabel KBLI</h3>
          <Separator className="bg-primary " />
          <p className="text-muted-foreground text-sm lg:text-base">
            KBLI adalah klasifikasi rujukan yang digunakan untuk
            mengklasifikasikan aktivitas/kegiatan ekonomi Indonesia ke dalam
            beberapa lapangan usaha/bidang usaha yang dibedakan berdasarkan
            jenis kegiatan ekonomi yang menghasilkan produk/output baik berupa
            barang maupun jasa.
          </p>
          <p className="text-muted-foreground text-sm lg:text-base">
            Mohon diperhatikan bahwa dengan berlakunya OSS RBA maka pelaku usaha
            jasa pembuatan PT wajib menggunakan KBLI tahun 2020.
          </p>
        </div>
      </Rule>
      <Reviews />
      <Blogs />
    </>
  );
}
