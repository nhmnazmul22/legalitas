import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import ServiceCard from "./ServiceCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { fetchService } from "@/store/serviceSlice";
import ServiceCardSkeleton from "../skeleton/ServiceCard";

type BottomServiceSectionProps = {
  classNames?: string;
  isBadge?: boolean;
};

const BottomServiceSection: React.FC<BottomServiceSectionProps> = ({
  classNames,
  isBadge = true,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.service.items);

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  return (
    <div className="mt-5">
      {isBadge && (
        <Badge
          className={
            "mx-auto bg-secondary/15 text-primary text-sm font-semibold px-4 py-1 uppercase rounded-full"
          }
        >
          Lainnya
        </Badge>
      )}
      <div
        className={cn(
          `grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-3`,
          classNames
        )}
      >
        {data.length !== 0
          ? data.map((service, index) => {
              if (index < 3) {
                return (
                  <ServiceCard
                    key={service._id}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    price={service.price}
                    link={service.link}
                  />
                );
              }
            })
          : Array.from({ length: 3 }).map((_item, index) => (
              <ServiceCardSkeleton key={index} />
            ))}
      </div>
    </div>
  );
};

export default BottomServiceSection;
