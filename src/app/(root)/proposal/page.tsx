"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProposalType } from "@/types";
import ProposalCard from "@/components/main/proposal/ProposalCard";
import Link from "next/link";
import SkeletonCard from "@/components/skeleton/SkeletonCard";
import FilterOptions from "@/components/main/proposal/FilterOptions";
import { normalize } from "@/lib/utils";

export default function ProposalPage() {
  const [proposals, setProposals] = useState<ProposalType[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const pname = searchParams.get("pname")?.toLowerCase() || "";

  const category: string = useSelector(
    (state: RootState) => state.filter.category
  );

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/proposals`
        );
        const data = await res.json();
        const filtered = data.data.filter((proposal: ProposalType) => {
          const matchName = pname
            ? normalize(proposal.name) === normalize(pname)
            : false;
          const matchCategory = category
            ? proposal.category.toLowerCase() === category.toLowerCase()
            : false;
         
          return matchName || matchCategory;
        });
  

        setProposals(filtered);
      } catch (err) {
        console.error("Failed to fetch proposals:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, [pname, category]);

  return (
    <section className="py-10 bg-primary/5">
      <div className="container">
        <div className="flex max-md:flex-col gap-5 relative">
          <div className="secondary-hero-banner text-white px-5 py-10 rounded-md shadow-md flex flex-col gap-3 max-h-[230px] md:sticky md:top-[13%] ">
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
            {loading ? (
              <SkeletonCard />
            ) : proposals.length > 0 ? (
              proposals.map((proposal) => (
                <ProposalCard
                  key={proposal._id}
                  id={proposal._id}
                  name={proposal.name}
                  category={proposal.category}
                  price={proposal.price}
                  features={proposal.features}
                />
              ))
            ) : (
              <p>Tidak ada hasil ditemukan.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
