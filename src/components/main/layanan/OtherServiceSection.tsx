import MainButton from "@/components/common/MainButton";
import Image from "next/image";

const OtherServiceSection = () => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 items-start mt-5">
      <figure className="">
        <Image
          src="/images/hero-service-banner-01.png"
          alt="Service Banner"
          width={1024}
          height={1024}
          className="rounded-md w-full h-auto object-cover"
        />
      </figure>
      <div className="max-md:w-full">
        <div className="hero-banner p-5 rounded-md border border-primary/20 shadow mt-3">
          <h3 className="text-lg font-semibold theme-gradient">
            Banyak bonus:
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-5">
            <li className="flex items-center gap-2">
              <Image
                src="/images/main-service-icon-02.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-10"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">5 Rekening</span>
                <span className="text-sm">Bank</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/images/main-service-icon-01.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-10"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">5 Rekening</span>
                <span className="text-sm">Bank</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/images/main-service-icon-03.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-10"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">5 Rekening</span>
                <span className="text-sm">Bank</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/images/main-service-icon-04.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-10"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">5 Rekening</span>
                <span className="text-sm">Bank</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/images/main-service-icon-01.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-10"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">5 Rekening</span>
                <span className="text-sm">Bank</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/images/main-service-icon-02.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-10"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">5 Rekening</span>
                <span className="text-sm">Bank</span>
              </div>
            </li>
          </ul>
        </div>
        <MainButton
          text="Lihat PT + virtual office"
          link="/"
          className="w-[260px] h-[60px] mt-5 max-md:mx-auto"
        />
      </div>
    </div>
  );
};

export default OtherServiceSection;
