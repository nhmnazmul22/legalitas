import MainButton from "@/components/common/MainButton";
import RatingGen from "@/components/common/RatingGen";
import { ServiceType } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ServiceCard: React.FC<ServiceType> = ({
  thumbnail,
  title,
  link,
  price,
  rating,
  reviws,
}) => {
  return (
    <div className="bg-white rounded-md shadow-md hover:scale-[1.02] transition-all duration-300">
      <Link href="/layanan/pt-perseroan-terbatas">
        <figure className="rounded-t-md overflow-hidden">
          {thumbnail && (
            <Image src={thumbnail} alt={title} width={1024} height={1024} />
          )}
        </figure>
      </Link>
      <div className="p-5">
        <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
        <div className="flex gap-2 items-center mt-2">
          <RatingGen rating={rating ? rating : 5} size={30} />
          <Link
            href="/layanan/pt-perseroan-terbatas"
            className="text-xs underline hover:text-secondary-blue font-semibold"
          >
            {reviws}
          </Link>
        </div>
        <div className="text-muted-foreground mt-4">
          mulai dari
          <span className="theme-gradient text-2xl font-bold ms-2">
            {price}
          </span>
        </div>
        <MainButton text="Detail" className="mt-5 w-full" link={link} />
      </div>
    </div>
  );
};

export default ServiceCard;
