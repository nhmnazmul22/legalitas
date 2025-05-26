import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { servicesList } from "@/constant";

const FilterOptions = () => {
  return (
    <div>
      <Select>
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
