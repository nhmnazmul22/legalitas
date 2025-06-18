"use client";

import MainButton from "@/components/common/MainButton";
import ServiceCard from "./ServiceCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "@/store/serviceSlice";
import type { RootState, AppDispatch } from "@/store";
import ServiceCardSkeleton from "@/components/skeleton/ServiceCard";
import { Button } from "@/components/ui/button";

const Service = () => {
  const [visiableService, setVisiableService] = useState(6);
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.service
  );

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  // Filter services that have /layanan/ in the link
  const filteredServices = (items?.data || []).filter((service) =>
    service.link?.includes("/layanan/")
  );

  // Slice the filtered list to show only the required amount
  const visibleServices = filteredServices.slice(0, visiableService);

  return (
    <section className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {visibleServices.length !== 0
          ? visibleServices.map((service) => (
              <ServiceCard
                key={service._id}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
                link={service.link}
                thumbnail={service.thumbnail}
                reviws={service.reviws}
                rating={service.rating}
              />
            ))
          : Array.from({ length: 9 }).map((_item, index) => (
              <ServiceCardSkeleton key={index} />
            ))}
      </div>
      <div className="text-center">
        <Button
          className="mt-14 !mx-auto w-[260px] !h-[60px] btn-gradient"
          onClick={() => setVisiableService((prev) => prev + 6)}
        >
          Tampilkan Lainnya
        </Button>
      </div>
    </section>
  );
};

export default Service;
