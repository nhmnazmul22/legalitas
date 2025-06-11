"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import SkeletonCard from "../skeleton/SkeletonCard";
import { fetchProposals } from "@/store/ProposalSlice";
import ProposalCard from "./ProposalCard";

const Proposal = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const { data: proposal } = useSelector(
    (state: RootState) => state.proposals.items
  );


  useEffect(() => {
    if (session?.user) {
      dispatch(fetchProposals(session?.user.id));
      return;
    }
  }, [session]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Proposal</h2>
        <p className="text-gray-600">Daftar proposal yang dikirim oleh admin</p>
      </div>

      {proposal.length > 0
        ? proposal.map((prop) => <ProposalCard key={prop._id} prop={prop} />)
        : Array.from({ length: 2 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
    </div>
  );
};

export default Proposal;
