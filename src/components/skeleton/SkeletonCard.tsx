import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-4">
      <Skeleton className="h-[200px] w-full rounded-xl bg-white shadow" />
      <Skeleton className="h-[200px] w-full rounded-xl bg-white shadow" />
      <Skeleton className="h-[200px] w-full rounded-xl bg-white shadow" />
    </div>
  );
}
