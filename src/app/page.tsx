import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-10 hero-banner lg:h-dvh">
      <div className="container">
        <div className="flex flex-col items-start justify-start w-full gap-5">
          <div className="bg-white w-[210px] text-center text-sm font-medium shadow-lg py-4 rounded-md">
            🏆 #1 Legalitas di Indonesia
          </div>
          <h1 className="text-4xl leading-[50px] font-extrabold ">
            Memberikan Layanan Legalitas{" "}
            <span className="theme-gradient">Sejak 2002</span>
          </h1>
          <p className="text-base text-muted-foreground leading-[30px] font-medium">
            Legalitas.org sejak tahun 2002 memberikan layanan legalitas dan
            menyediakan 95.000++ database peraturan di Indonesia yang bisa di
            download dalam format PDF.
          </p>
          <Link href="/">
            <Button className="btn-gradient w-[210px] h-[50px] text-base font-bold flex items-center group">
              Lihat alasannya
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
