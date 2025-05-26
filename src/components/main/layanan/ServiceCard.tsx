import MainButton from "@/components/common/MainButton";
import RatingGen from "@/components/common/RatingGen";
import Image from "next/image";
import Link from "next/link";
const ServiceCard = () => {
  return (
    <div className="bg-white rounded-md shadow-md hover:scale-[1.02] transition-all duration-300">
      <Link href="/">
        <figure className="rounded-t-md overflow-hidden">
          <Image
            src="/images/hero-service-banner-01.png"
            alt="Service "
            width={1024}
            height={1024}
          />
        </figure>
      </Link>
      <div className="p-5">
        <h2 className="text-xl lg:text-2xl font-semibold">
          PT / Perseroan Terbatas
        </h2>
        <div className="flex gap-2 items-center mt-2">
          <RatingGen rating={5} size={30} />
          <Link
            href="/"
            className="text-xs underline hover:text-secondary-blue font-semibold"
          >
            100 Review
          </Link>
        </div>
        <div className="text-muted-foreground mt-4">
          mulai dari
          <span className="theme-gradient text-2xl font-bold ms-2">
            Rp 3.000.000
          </span>
        </div>
        <MainButton text="Detail" className="mt-5 w-full" />
      </div>
    </div>
  );
};

export default ServiceCard;
