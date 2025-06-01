import RatingGen from "@/components/common/RatingGen";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import ShowMoreButton from "../ShowMoreButton";
import Heading from "./Heading";

const Review = () => {
  return (
    <div className="mt-5">
      <Heading text="Review Dari Klien" />
      <p className="bg-primary/10 font-medium text-sm p-4 rounded-md">
        Setiap Klien harus memberikan review atas pekerjaan Legalitas.org agar
        dapat membuka akses Brankas Legalitas di{" "}
        <Link href="/login" className="theme-gradient">
          Dashboard Klien
        </Link>
      </p>
      <div className="mt-5 flex max-md:flex-col items-center gap-5">
        <div className="bg-primary/5 p-5 rounded-md shadow text-center flex flex-col gap-2 w-full md:w-fit">
          <h3 className="text-5xl font-bold">5.0</h3>
          <div className="inline-block mx-auto">
            <RatingGen rating={5} size={32} />
          </div>
          <p className="text-base font-semibold">100 Reviews</p>
        </div>
        <div className="flex-1 w-full flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <RatingGen rating={5} size={20} />
            <Progress value={97} />
            <Badge className="bg-slate-200 text-black">97%</Badge>
          </div>
          <div className="flex gap-2 items-center">
            <RatingGen rating={4} size={20} />
            <Progress value={3} />
            <Badge className="bg-slate-200 text-black">3%</Badge>
          </div>
          <div className="flex gap-2 items-center">
            <RatingGen rating={3} size={20} />
            <Progress value={0} />
            <Badge className="bg-slate-200 text-black">0%</Badge>
          </div>
          <div className="flex gap-2 items-center">
            <RatingGen rating={2} size={20} />
            <Progress value={0} />
            <Badge className="bg-slate-200 text-black">0%</Badge>
          </div>
          <div className="flex gap-2 items-center">
            <RatingGen rating={1} size={20} />
            <Progress value={0} />
            <Badge className="bg-slate-200 text-black">0%</Badge>
          </div>
        </div>
      </div>
      <ShowMoreButton>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-primary/5 p-5 rounded-md">
            <Badge className="bg-primary/10 p-2">
              <Image
                src="/images/google-logo.png"
                alt="Google"
                width={300}
                height={300}
                className="w-16"
              />
            </Badge>
            <h3 className="text-lg font-semibold my-2">Hikmawatul Wardani</h3>
            <RatingGen rating={5} size={20} />
            <p className="text-muted-foreground text-sm mt-3 italic">
              Legalitas.org adalah solusi saat kita mendirikan perusahaan.
              Terima kasih saya banyak terbantu oleh team Legalitas, terutama mb
              Natali, mb Endang dan mas Angga yang bekerja profesional, gerak
              cepat, dan sangat reaponsif atas semua chat maupun
              pertanyaan-pertanyaan saya. Itu menunjukkan bahwa mereka memiliki
              pengetahuan dan pengalaman yang cukup luas dan menjadi solusi bagi
              para pelaku usaha yang membutuhkan pengurusan dokumen, perizinan
              dan pendirian badan usaha. Sukses terus untuk Legalitas.org
            </p>
          </div>
          <div className="bg-primary/5 p-5 rounded-md">
            <Badge className="bg-primary/10 p-2">
              <Image
                src="/images/google-logo.png"
                alt="Google"
                width={300}
                height={300}
                className="w-16"
              />
            </Badge>
            <h3 className="text-lg font-semibold my-2">Hikmawatul Wardani</h3>
            <RatingGen rating={5} size={20} />
            <p className="text-muted-foreground text-sm mt-3 italic">
              Legalitas.org adalah solusi saat kita mendirikan perusahaan.
              Terima kasih saya banyak terbantu oleh team Legalitas, terutama mb
              Natali, mb Endang dan mas Angga yang bekerja profesional, gerak
              cepat, dan sangat reaponsif atas semua chat maupun
              pertanyaan-pertanyaan saya. Itu menunjukkan bahwa mereka memiliki
              pengetahuan dan pengalaman yang cukup luas dan menjadi solusi bagi
              para pelaku usaha yang membutuhkan pengurusan dokumen, perizinan
              dan pendirian badan usaha. Sukses terus untuk Legalitas.org
            </p>
          </div>
        </div>
      </ShowMoreButton>
    </div>
  );
};

export default Review;
