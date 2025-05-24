"use client";

import RatingGen from "@/components/common/RatingGen";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { heroServiceItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSwiper = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper2"
    >
      {heroServiceItems.map((item) => (
        <SwiperSlide key={item.id} className="cursor-pointer">
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
                  <div className="flex gap-2 items-center m-0">
                    <RatingGen rating={Number(item.rating)} />
                    <span className="theme-gradient text-base font-medium">
                      {"(Lihat review lengkap)"}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pb-3">
                <p className="text-muted-foreground">
                  mulai dari{" "}
                  <span className="theme-gradient text-2xl font-bold ms-2">
                    Rp 3{item.startingPrice}juta
                  </span>
                </p>
              </CardFooter>
            </Card>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
