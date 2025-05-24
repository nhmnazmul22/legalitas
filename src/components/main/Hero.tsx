"use client";

import HeroCarousel from "@/components/main/HeroCarousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TypeWriterText from "../common/TypeWritedText";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="py-15 hero-banner h-auto">
      <div className="container flex flex-col lg:flex-row gap-10 lg:gap-5 items-center justify-between">
        <div className="flex flex-col items-start justify-start w-full gap-4 flex-1">
          <div className="bg-white w-[210px] text-center text-sm font-medium shadow-lg py-4 rounded-md">
            🏆 #1 Legalitas di Indonesia
          </div>
          <h1 className="text-4xl sm:text-6xl xl:text-7xl leading-[50px] sm:leading-[80px] xl:leading-[100px] font-extrabold">
            Memberikan Layanan Legalitas <TypeWriterText />
          </h1>
          <p className="text-sm md:text-base text-muted-foreground leading-[28px] md:leading-[37px]">
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
        <div className="hidden lg:block max-w-[400px] xl:max-w-[500px]">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
