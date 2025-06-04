"use client";
import MainButton from "@/components/common/MainButton";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VoucherDetailsType } from "@/types";
import {
  CircleCheck,
  Clock,
  Facebook,
  Instagram,
  RefreshCcw,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type VoucherProps = {
  voucherDetails: VoucherDetailsType;
};

const Voucher: React.FC<VoucherProps> = ({ voucherDetails }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedService, setSelectedService] = useState<{
    category: string;
    name: string;
    price: string;
    features: string[];
  } | null>(null);

  useEffect(() => {
    if (!selectedValue) {
      setSelectedValue(voucherDetails.services[0]);
    }
    const selectedItem = voucherDetails.features_Price.find(
      (item) => item.name === selectedValue
    );
    setSelectedService(selectedItem!);
  }, [selectedValue]);

  return (
    <div className="w-full lg:max-w-sm secondary-hero-banner shadow p-[3px] rounded-md sticky top-[15%]">
      <div className="p-5 w-full bg-white rounded-md">
        <figure className="rounded-md overflow-hidden">
          <Image
            src={voucherDetails.thumbnail}
            alt="Company img"
            width={1024}
            height={1024}
          />
        </figure>
        <div className="mt-5">
          <h3 className="text-lg font-semibold mb-2">Pilih Layanan:</h3>
          <Select value={selectedValue} onValueChange={setSelectedValue}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={voucherDetails.services[0]} />
            </SelectTrigger>
            <SelectContent>
              {voucherDetails.services.map((value, index) => (
                <SelectItem key={`${value}-${index}`} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-xl lg:text-2xl font-semibold theme-gradient">
            {selectedService ? selectedService.price : "Rp. 0"}
          </h3>
          {voucherDetails.isLimitedTime && (
            <Badge className="px-2 py-1 text-sm bg-red-200 text-red-500">
              <Clock /> Terbatas!
            </Badge>
          )}
        </div>
        <figure className="rounded-md overflow-hidden mt-5">
          <Image
            src={voucherDetails.voucherImg}
            alt="Company img"
            width={1024}
            height={1024}
          />
        </figure>
        <ul className="mt-5 flex flex-col gap-2">
          {selectedService &&
            selectedService.features.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex items-center gap-2 text-base"
              >
                <CircleCheck size={20} className="text-green-500" />
                <span className="flex-1">{item}</span>
              </li>
            ))}
        </ul>
        <MainButton
          text="Minta proposal"
          className="mt-5 mx-auto w-full"
          link={`/proposals?pname=${selectedService?.name}`}
        />
        {voucherDetails.isJobCompletion && (
          <p className="text-xs text-muted-foreground text-center flex items-center gap-2 justify-center mt-2">
            <RefreshCcw size={14} />{" "}
            <span className="">Jaminan pekerjaan selesai!</span>
          </p>
        )}
        <div className="mt-5 py-10 bg-primary/10 rounded-md flex justify-center gap-3 items-center">
          <div className="p-2 rounded-full bg-primary cursor-pointer hover:translate-y-1.5 transition-all duration-300">
            <Facebook className="text-white" />
          </div>
          <div className="p-2 rounded-full bg-primary cursor-pointer hover:translate-y-1.5 transition-all duration-300">
            <Twitter className="text-white" />
          </div>
          <div className="p-2 rounded-full bg-primary cursor-pointer hover:translate-y-1.5 transition-all duration-300">
            <Instagram className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
