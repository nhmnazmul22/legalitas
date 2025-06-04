import FilterOptions from "@/components/main/proposal/FilterOptions";
import ProposalCard from "@/components/main/proposal/ProposalCard";
import { ProposalType } from "@/types";
import Link from "next/link";

export default async function ProposalPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/proposals`
  );
  const proposals: ProposalType[] = (await res.json()).data;

  


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
            {proposals.map((proposal) => (
              <ProposalCard
                key={proposal._id}
                id={proposal._id}
                name={proposal.name}
                category={proposal.category}
                price={proposal.price}
                features={proposal.features}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
