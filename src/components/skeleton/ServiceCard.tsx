import { Skeleton } from "@/components/ui/skeleton";

const ServiceCardSkeleton = () => {
  return (
    <div className="p-4 rounded-2xl shadow bg-white space-y-3 w-full">
      <Skeleton className="h-6 w-3/4 rounded" />
      <Skeleton className="h-4 w-full rounded" />
      <Skeleton className="h-4 w-5/6 rounded" />
      <Skeleton className="h-4 w-4/6 rounded" />
      <Skeleton className="h-8 w-1/2 rounded mt-4" />
    </div>
  );
};

export default ServiceCardSkeleton;
