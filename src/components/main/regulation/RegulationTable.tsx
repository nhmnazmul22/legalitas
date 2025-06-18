import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { regulationTableList } from "@/constant";
import { generateUrl } from "@/lib/utils";
import Link from "next/link";
const RegulationTable = () => {
  return (
    <Table className="text-base ">
      <TableHeader>
        <TableRow className="">
          <TableHead className="font-bold text-center w-[150px] whitespace-nowrap md:whitespace-normal">
            Jenis Peraturan
          </TableHead>
          <TableHead className="font-bold  text-center w-[40px] whitespace-nowrap md:whitespace-normal">
            Nomor
          </TableHead>
          <TableHead className="font-bold  text-center w-[40px]  whitespace-nowrap md:whitespace-normal">
            Tahun
          </TableHead>
          <TableHead className="font-bold text-center whitespace-nowrap md:whitespace-normal">
            Tentang
          </TableHead>
          <TableHead className="font-bold text-center w-[60px] whitespace-nowrap md:whitespace-normal">
            File
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {regulationTableList.map((item) => (
          <TableRow key={item.id} className="">
            <TableCell className="font-medium whitespace-nowrap md:whitespace-normal">
              {item.type}
            </TableCell>
            <TableCell className="font-medium whitespace-nowrap md:whitespace-normal">
              {item.number}
            </TableCell>
            <TableCell className="whitespace-nowrap md:whitespace-normal">
              {item.year}
            </TableCell>
            <TableCell className="whitespace-nowrap md:whitespace-normal">
              {item.about}
            </TableCell>
            <TableCell className="text-left whitespace-nowrap md:whitespace-normal">
              <Link href={`/database-peraturan/${generateUrl(item.type)}`}>
                <Button>Download</Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RegulationTable;

// Jenis Peraturan	Nomor	Tahun	Tentang	File
