"use client";

import MainButton from "@/components/common/MainButton";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "./ServiceCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchService } from "@/store/serviceSlice";
import type { RootState, AppDispatch } from "@/store";
import ServiceCardSkeleton from "../skeleton/ServiceCard";

const Services = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.service
  );

  useEffect(() => {
    dispatch(fetchService());
  }, [dispatch]);

  // Filter services that have /layanan/ in the link
  const filteredServices = (items?.data || []).filter(
    (service) =>
      service.link?.includes("/layanan/") && service.features?.length > 0
  );

  // Slice the filtered list to show only the required amount
  const visibleServices = filteredServices.slice(0, 8);

  return (
    <section className="py-15 mt-10 bg-primary/5">
      <div className="container">
        <SectionHeading
          badgeText="Layanan Legalitas"
          title="Layanan Legalitas"
          subTitle="Yang Ditawarkan."
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {visibleServices.length !== 0
            ? visibleServices.map((service) => (
                <ServiceCard
                  key={service._id}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                  link={service.link}
                />
              ))
            : Array.from({ length: 8 }).map((_item, index) => (
                <ServiceCardSkeleton key={index} />
              ))}
        </div>
        <MainButton
          text="Lihat semua layanan"
          className="mt-14 mx-auto w-[260px] !h-[60px] "
          link="/layanan"
        />
      </div>
    </section>
  );
};

export default Services;
