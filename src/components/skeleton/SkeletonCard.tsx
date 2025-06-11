import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-4">
      <Skeleton className="h-[500px] w-full rounded-xl bg-white shadow" />
    </div>
  );
}
