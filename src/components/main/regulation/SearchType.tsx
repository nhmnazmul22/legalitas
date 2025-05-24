import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { regulationTypes } from "@/constant";
import { years } from "@/lib/utils";
import { Search } from "lucide-react";

const SearchType = () => {
  return (
    <div className="max-w-[425px] w-full">
      <h3 className="text-2xl font-semibold mb-5">Cari Peraturan</h3>
      <div className="flex flex-col gap-3">
        <div className="w-full">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Semua type Peraturan" />
            </SelectTrigger>
            <SelectContent>
              {regulationTypes.map((regulation) => (
                <SelectItem key={regulation.id} value={regulation.name}>
                  {regulation.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Tahun" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year.id} value={year.label}>
                  {year.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Input placeholder="Tulis judul / keyword" className="w-full" />
        </div>
        <Button className="btn-gradient w-full h-[50px] text-base font-semibold flex items-center rounded-sm">
          Search <Search size={16} />
        </Button>
      </div>
    </div>
  );
};

export default SearchType;
