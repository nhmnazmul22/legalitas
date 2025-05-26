import FilterOptions from "@/components/main/proposal/FilterOptions";
import ProposalCard from "@/components/main/proposal/ProposalCard";
import Link from "next/link";

export default function ProposalPage() {
  return (
    <section className="py-10 bg-primary/5">
      <div className="container">
        <div className="flex max-md:flex-col gap-5 relative">
          <div className="secondary-hero-banner text-white px-5 py-10 rounded-md shadow-md flex flex-col gap-3 max-h-[230px] md:sticky md:top-[10%] md:z-[10]">
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold">
              Proposal
            </h2>
            <p className="text-base">
              Bertanya kepada kami di{" "}
              <Link href="/kontak" className="font-semibold underline">
                Kontak Kami!
              </Link>
            </p>
            <FilterOptions />
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <ProposalCard />
            <ProposalCard />
            <ProposalCard />
            <ProposalCard />
          </div>
        </div>
      </div>
    </section>
  );
}
