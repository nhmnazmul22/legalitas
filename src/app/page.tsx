import RatingGen from "@/components/common/RatingGen";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { heroServiceItems } from "@/constant";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-15 hero-banner h-auto">
      <div className="container flex flex-col lg:flex-row gap-10 lg:gap-5 items-center justify-between">
        <div className="flex flex-col items-start justify-start w-full gap-4 flex-1">
          <div className="bg-white w-[210px] text-center text-sm font-medium shadow-lg py-4 rounded-md">
            🏆 #1 Legalitas di Indonesia
          </div>
          <h1 className="text-4xl sm:text-6xl xl:text-7xl leading-[50px] sm:leading-[80px] xl:leading-[100px] font-extrabold ">
            Memberikan Layanan Legalitas{" "}
            <span className="theme-gradient">Sejak 2002</span>
          </h1>
          <p className="text-base md:text-lg xl:text-xl text-muted-foreground leading-[30px] md:leading-[40px] font-medium">
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
          <Carousel>
            <CarouselContent>
              {heroServiceItems.map((item) => (
                <CarouselItem key={item.id} className="cursor-pointer">
                  <Link href={item.link}>
                    <Card className="!p-4 border-0 shadow-lg">
                      <CardHeader className="px-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          width={1024}
                          height={1024}
                          className="w-full h-auto rounded-lg shadow-lg"
                        />
                      </CardHeader>
                      <CardContent className="px-3">
                        <div className="mt-0 flex flex-col gap-2">
                          <h3 className="text-3xl font-bold hover:text-primary duration-200">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-lg">
                            {item.description}
                          </p>
                          <p className="flex gap-2 items-center m-0">
                            <RatingGen rating={Number(item.rating)} />
                            <span className="theme-gradient text-base font-medium">
                              {"(Lihat review lengkap)"}
                            </span>
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <p>
                          mulai dari{" "}
                          <span className="theme-gradient text-xl font-semibold ms-2">
                            Rp 3{item.startingPrice}juta
                          </span>
                        </p>
                      </CardFooter>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
