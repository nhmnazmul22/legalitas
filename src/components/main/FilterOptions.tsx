import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

const FilterOptions = () => {
  return (
    <div className="my-6 flex gap-3 items-center justify-between">
      <div className="flex max-md:flex-col gap-2 items-center ">
        <p>Show Entries</p>
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">10</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="max-w-[200px] md:max-w-[350px]">
        <Input placeholder="Search..." />
      </div>
    </div>
  );
};

export default FilterOptions;
