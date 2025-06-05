import SectionHeading from "@/components/common/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { riskTags } from "@/constant";
import FilterOptions from "./FilterOptions";
import RiskTable from "./RiskTable";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type RisksType = {
  children?: React.ReactNode;
};

const Risks: React.FC<RisksType> = ({ children }) => {
  return (
    <section className="py-15 hero-banner bg-cover">
      <div className="container">
        <SectionHeading
          badgeText="Cek Risiko"
          title="Cek Risiko KBLI"
          subTitle="Paling Mudah"
        />
        <div className="flex flex-wrap justify-center gap-4 lg:gap-10 my-10">
          {riskTags.map((item) => (
            <Badge
              key={`code-${item.id}`}
              className="bg-secondary/10 text-secondary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer max-w-5xl"
            >
              {item.code}
            </Badge>
          ))}
        </div>
        <div className="my-10 bg-white rounded-md shadow-md p-10">
          <div className="bg-primary/10 text-primary px-5 py-3 rounded-md text-sm lg:text-base font-medium text-center">
            <strong>⚠️ Klik tabel 2x ⚠️ untuk lihat detail risiko.</strong>
            Masih 😭 bingung cari kode? Baca Panduan Cek Risiko KBLI
          </div>
          {children && children}
          <div className="">
            <FilterOptions option={["10"]} />
            <RiskTable />
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="/kbli" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/kbli">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/kbli">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/kbli">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/kbli">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="/kbli" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Risks;
