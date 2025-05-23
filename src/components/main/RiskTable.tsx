import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { riskTableContents } from "@/constant";

const RiskTable = () => {
  return (
    <Table className="text-base ">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold w-[40px] whitespace-nowrap md:whitespace-normal">
            No
          </TableHead>
          <TableHead className="font-bold whitespace-nowrap md:whitespace-normal">
            Kode KBLI
          </TableHead>
          <TableHead className="font-bold whitespace-nowrap md:whitespace-normal">
            KBLI
          </TableHead>
          <TableHead className="font-bold text-left w-[800px] whitespace-nowrap md:whitespace-normal">
            Deskripsi
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {riskTableContents.map((item) => (
          <TableRow key={item.id} className="">
            <TableCell className="font-medium whitespace-nowrap md:whitespace-normal">
              {item.id}
            </TableCell>
            <TableCell className="whitespace-nowrap md:whitespace-normal">
              {item.risk_Code}
            </TableCell>
            <TableCell className="whitespace-nowrap md:whitespace-normal">
              {item.risk_Title}
            </TableCell>
            <TableCell className="text-left whitespace-nowrap md:whitespace-normal">
              {item.Description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RiskTable;
