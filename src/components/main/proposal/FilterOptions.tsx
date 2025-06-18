"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { servicesList } from "@/constant";
import { AppDispatch } from "@/store";
import { setCategory } from "@/store/filterSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const FilterOptions = () => {
  const [selectCate, setSelectCate] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setCategory(selectCate));
  }, [selectCate]);

  return (
    <div>
      <Select value={selectCate} onValueChange={setSelectCate}>
        <SelectTrigger className="w-full text-white data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white focus-visible:border-ring-0 focus-visible:ring-0">
          <SelectValue placeholder="Pilih Kategori" className="" />
        </SelectTrigger>
        <SelectContent>
          {servicesList.map((service) => (
            <SelectItem key={service.id} value={service.name}>
              {service.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterOptions;
