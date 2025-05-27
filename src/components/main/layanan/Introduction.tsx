import { Separator } from "@/components/ui/separator";
import Image from "next/image";


const Introduction = () => {
  return (
    <div className="mt-5">
      
      <Separator className="mt-2 mb-4 border-[1.2px] border-primary" />
      <p className="service-paragraph">
        {`Perseroan Terbatas atau disingkat "PT" (bahasa Belanda: Naamloze
        Vennootschap) adalah salah satu badan hukum yang diakui oleh Negara
        Republik Indonesia yang bisa digunakan untuk kegiatan komersial di
        Indonesia`}
      </p>
      <p className="service-paragraph">
        Legalitas.org menyediakan layanan jasa pendirian PT dengan{" "}
        <span className="ser-para-highlight">PROMO DISKON 10%</span>
        untuk pemesanan berikutnya. Berikut ini adalah alasan kenapa harus
        menggunakan layanan jasa pembuatan PT di Legalitas.org.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        <div className="bg-primary/10 p-5 rounded-md shadow">
          <Image
            src="/images/main-service-icon-01.png"
            alt="Main Service"
            width={300}
            height={300}
            className="w-14"
          />
          <p className="text-sm mt-4">22 Tahun Melayani</p>
        </div>
        <div className="bg-primary/10 p-5 rounded-md shadow">
          <Image
            src="/images/main-service-icon-02.png"
            alt="Main Service"
            width={300}
            height={300}
            className="w-14"
          />
          <p className="text-sm mt-4">Pendekatan Hukum</p>
        </div>
        <div className="bg-primary/10 p-5 rounded-md shadow">
          <Image
            src="/images/main-service-icon-03.png"
            alt="Main Service"
            width={300}
            height={300}
            className="w-14"
          />
          <p className="text-sm mt-4">Seluruh Indonesia</p>
        </div>
        <div className="bg-primary/10 p-5 rounded-md shadow">
          <Image
            src="/images/main-service-icon-04.png"
            alt="Main Service"
            width={300}
            height={300}
            className="w-14"
          />
          <p className="text-sm mt-4">Rekanan & Partnership</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
//

//
