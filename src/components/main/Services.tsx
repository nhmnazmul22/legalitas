import MainButton from "@/components/common/MainButton";
import SectionHeading from "@/components/common/SectionHeading";
import { services } from "@/constant";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="py-15 mt-10 bg-primary/5">
      <div className="container">
        <SectionHeading
          badgeText="Layanan Legalitas"
          title="Layanan Legalitas"
          subTitle="Yang Ditawarkan."
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              includes={service.includes}
              price={service.price}
            />
          ))}
        </div>
        <MainButton
          text="Lihat semua layanan"
          className="mt-14 mx-auto w-[260px] !h-[60px] "
        />
      </div>
    </section>
  );
};

export default Services;
