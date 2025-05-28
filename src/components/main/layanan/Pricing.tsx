import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleCheck, X } from "lucide-react";
import Heading from "./Heading";
const Pricing = () => {
  return (
    <div className="mt-5">
      <Heading text="Pricing" />
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary-blue hover:bg-secondary-blue">
            <TableHead className="font-bold text-white text-left whitespace-normal"></TableHead>
            <TableHead className="font-bold text-white text-center max-w-[130px] whitespace-normal">
              PT
            </TableHead>
            <TableHead className="font-bold text-white text-center max-w-[130px] whitespace-normal">
              PT + Izin
            </TableHead>
            <TableHead className="font-bold text-white text-center max-w-[130px] whitespace-normal">
              PT + Izin + VO
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left whitespace-normal">Harga</TableCell>
            <TableCell className="text-center whitespace-normal">
              Rp 3.000.000
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              Rp 5.500.000{" "}
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              Rp 7.900.000
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Pengecekan Nama PT
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Pemesanan Nama PT
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Persiapan Minuta
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Akta Pendirian PT
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              SK Menteri
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">
              Dapat 20 KBLI 🏆
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal">NPWP</TableCell>
            <TableCell className="text-center whitespace-normal">
              <X className="text-destructive mx-auto border-[2px] rounded-full p-[2px] border-destructive" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              <CircleCheck className="mx-auto text-green-500" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Pricing;
