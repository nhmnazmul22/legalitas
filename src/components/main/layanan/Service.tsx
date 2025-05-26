import MainButton from "@/components/common/MainButton";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <MainButton
        text="Tampilkan Lainnya"
        className="mt-14 mx-auto w-[260px] !h-[60px] "
      />
    </section>
  );
};

export default Service;
