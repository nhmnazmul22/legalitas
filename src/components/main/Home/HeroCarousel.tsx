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

import RatingGen from "@/components/common/RatingGen";
import { heroServiceItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";
const HeroCarousel = () => {
  return (
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
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
