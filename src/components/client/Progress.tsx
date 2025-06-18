"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import SkeletonCard from "../skeleton/SkeletonCard";

import { fetchWorkProgress } from "@/store/WorkProgressSlice";
import ProgressCard from "./ProgressCard";

const ProgressComponent = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const { data: workProgresses } = useSelector(
    (state: RootState) => state.workProgresses.items
  );

  useEffect(() => {
    if (session?.user) {
      dispatch(fetchWorkProgress(session.user.id));
      return;
    }
  }, [session]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Progress Pekerjaan</h2>
        <p className="text-gray-600">
          Pantau progress real-time pekerjaan Anda
        </p>
      </div>

      {workProgresses.length > 0
        ? [...workProgresses]
            .sort((a, b) => {
              if (a.status === "in progress" && b.status !== "in progress")
                return -1;
              if (a.status !== "in progress" && b.status === "in progress")
                return 1;
              return 0;
            })
            .map((progress) => (
              <ProgressCard key={progress._id} progress={progress} />
            ))
        : Array.from({ length: 2 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
    </div>
  );
};

export default ProgressComponent;
