import MainButton from "@/components/common/MainButton";
import SectionHeading from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { companyLogos, regulationText } from "@/constant";
import Image from "next/image";

const Regulation = () => {
  return (
    <section className=" py-15">
      <div className="container mt-10">
        <SectionHeading
          badgeText="Cari peraturan"
          title="Database Peraturan"
          subTitle="Terlengkap"
        />
        <div className="mt-14 shadow-md rounded-md py-10 px-5 border border-primary/10">
          <div className="grid grid-cols-3 md:gird-cols-4 lg:grid-cols-6 gap-4 mx-auto max-w-5xl my-10">
            {companyLogos.map((logo) => (
              <div key={logo.id} className="flex justify-center items-center">
                <Image
                  src={logo.link}
                  alt="Company Logo"
                  width={300}
                  height={300}
                  className="w-[100px] lg:w-[130px] h-auto"
                />
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-center justify-center items-center overflow-hidden">
            {regulationText.map((text) => (
              <Badge
                key={`text-${text.id}`}
                className="bg-primary/10 text-primary text-xs sm:text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer truncate"
              >
                {text.title}
              </Badge>
            ))}
          </div>
          <MainButton
            text="Lihat 95.000++ peraturan"
            className="mt-10 mx-auto w-[260px] !h-[60px]"
            link="/database-peraturan"
          />
        </div>
      </div>
    </section>
  );
};

export default Regulation;
