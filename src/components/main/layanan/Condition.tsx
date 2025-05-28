import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Heading from "./Heading";

const Condition = () => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <Heading text="Dokumen Persyaratan" />
        <ul className="flex flex-col gap-2">
          <li className="text-sm md:text-base flex gap-2">
            <CircleCheck className="text-green-500 " size={24} />
            <span className="flex-1">
              KTP & NPWP pemegang saham, Direksi dan Dewan Komisaris
            </span>
          </li>
          <li className="text-sm md:text-base flex gap-2">
            <CircleCheck className="text-green-500 " size={24} />
            <span className="flex-1">Nomor telepon dan email perusahaan</span>
          </li>
          <li className="text-sm md:text-base flex gap-2">
            <CircleCheck className="text-green-500 " size={24} />
            <span className="flex-1">Mengisi formulir pendirian PT</span>
          </li>
          <li className="text-sm md:text-base flex gap-2">
            <CircleCheck className="text-green-500 " size={24} />
            <span className="flex-1">Tanda tangan dokumen Notaris.</span>
          </li>
        </ul>
      </div>
      <div className="">
        <Heading text="Dokumen Persyaratan" />
        <figure className="rounded-md overflow-hidden mb-3">
          <Image
            src="/images/document-banner.png"
            alt="Document Banner"
            width={500}
            height={500}
          />
        </figure>
        <ul className="flex flex-col gap-2">
          <li className="text-sm md:text-base flex gap-2">
            <CircleCheck className="text-green-500 " size={24} />
            <span className="flex-1">
              KBLI adalah kode bidang usaha di Indonesia.
            </span>
          </li>
          <li className="text-sm md:text-base flex gap-2">
            <CircleCheck className="text-green-500 " size={24} />
            <span className="flex-1">
              Di Legalitas.org kamu bisa pilih hingga 20 kode KBLI / bidang
              usaha.
            </span>
          </li>
          <li className="text-sm md:text-base flex gap-2">
            <CircleCheck className="text-green-500 " size={24} />
            <span className="flex-1">
              Klik Tabel KBLI Terbaru untuk cari KBLI.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Condition;
