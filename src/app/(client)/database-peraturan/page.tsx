import SectionHeading from "@/components/common/SectionHeading";
import Blogs from "@/components/main/Blogs";
import FilterOptions from "@/components/main/FilterOptions";
import RegulationTable from "@/components/main/regulation/RegulationTable";
import RegulationTypes from "@/components/main/regulation/RegulationTypes";
import SearchType from "@/components/main/regulation/SearchType";
import Reviews from "@/components/main/Reviews";
import TablePagination from "@/components/main/TablePagination";
import { companyLogos } from "@/constant";
import Image from "next/image";

export default function RegulationPage() {
  return (
    <section className="hero-banner py-15">
      <div className="container mt-10">
        <SectionHeading
          badgeText="Cari peraturan"
          title="Database Peraturan"
          subTitle="Terlengkap"
        />
        <div className="grid grid-cols-3 md:gird-cols-4 lg:grid-cols-6 gap-4 mx-auto max-w-5xl my-15">
          {companyLogos.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center">
              <Image
                src={logo.link}
                alt="Company Logo"
                width={500}
                height={500}
                className="w-[100px] lg:w-[130px] h-auto"
              />
            </div>
          ))}
        </div>
        <div className="mt-20 bg-white shadow-md rounded-md py-10 px-5 border border-primary/10">
          <div className="flex flex-col lg:flex-row gap-5">
            <SearchType />
            <RegulationTypes />
          </div>
          <div className="">
            <FilterOptions option={["10", "20", "30", "50"]} />
            <RegulationTable />
            <TablePagination />
          </div>
        </div>
      </div>
      <Reviews />
      <Blogs />
    </section>
  );
}
