import RatingGen from "@/components/common/RatingGen";
import TypeWriterText from "@/components/common/TypeWritedText";
import Image from "next/image";
import Link from "next/link";

type PageHeadingProps = {
  title: string;
  subTitle?: string;
  isTypeWriter: boolean;
  shortDes: string;
  reviews?: number;
};

const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  isTypeWriter,
  subTitle,
  shortDes,
}) => {
  return (
    <div className=" mt-10 ">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold theme-gradient">
        {title}
      </h2>
      <p className="text-base md:text-lg mt-2 leading-[30px] md:leading-[36px]">
        {subTitle}
        {isTypeWriter && (
          <span className="font-medium mx-1">
            <TypeWriterText />
          </span>
        )}
      </p>
      <p className="text-base md:text-lg mb-2 leading-[30px] md:leading-[36px]">
        {shortDes}
      </p>
      <div className="flex items-center gap-3 mt-4">
        <div className="bg-primary/20 rounded-full px-3 py-2 flex items-center gap-2 w-fit ring-1 ring-primary">
          <Image
            src="/images/main-service-icon-01.png"
            alt="Best selling"
            width={300}
            height={300}
            className="w-[30px]"
          />
          <span className="text-xs inline-block font-semibold">
            Best Seller
          </span>
        </div>
        <RatingGen rating={5} size={20} />
        <Link
          href="/"
          className="text-xs underline hover:text-secondary-blue duration-300 font-semibold"
        >
          Lihat 100 Review
        </Link>
      </div>
    </div>
  );
};

export default PageHeading;
