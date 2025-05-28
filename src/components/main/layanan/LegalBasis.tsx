import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Heading from "./Heading";
const LegalBasis = () => {
  return (
    <div className="mt-5">
      <Heading text="Dasar Hukum" />

      <Table>
        <TableHeader>
          <TableRow className="bg-secondary-blue hover:bg-secondary-blue">
            <TableHead className="font-bold text-white text-left w-[800px] whitespace-normal">
              Peraturan
            </TableHead>
            <TableHead className="font-bold text-white  w-[100px] text-left whitespace-nowrap md:whitespace-normal">
              File
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left whitespace-normal text-muted-foreground">
              <strong className="text-black">
                UU No 40 tahun 2007 tentang Perseroan Terbatas (UUPT)
              </strong>
              <br />
              UUPT ini merupakan sumber hukum utama pengaturan Perseroan
              Terbatas di Indonesia.
            </TableCell>
            <TableCell className="text-left whitespace-nowrap md:whitespace-normal">
              <Link href="/" className="theme-gradient font-medium">
                Download
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal text-muted-foreground">
              <strong className="text-black">
                UU No 8 tahun 1995 tentang Pasar Modal
              </strong>
              <br /> Mengatur mengenai syarat dan ketentuan pihak-pihak (salah
              satunya adalah PT) dan instrumen pasar modal.
            </TableCell>
            <TableCell className="text-left whitespace-nowrap md:whitespace-normal">
              <Link href="/" className="theme-gradient font-medium">
                Download
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-left whitespace-normal text-muted-foreground">
              <strong className="text-black">
                UU No 25 tahun 2007 tentang Penanaman Modal
              </strong>
              <br />
              Mengatur mengenai bagaimana dan tata cara investasi penanaman
              modal baik oleh investor lokal atau investor asing.
            </TableCell>
            <TableCell className="text-left whitespace-nowrap md:whitespace-normal">
              <Link href="/" className="theme-gradient font-medium">
                Download
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default LegalBasis;
