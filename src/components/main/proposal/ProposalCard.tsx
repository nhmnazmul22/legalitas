import MainButton from "@/components/common/MainButton";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ProposalFormDialog from "./ProposalFormDialog";

const ProposalCard = () => {
  return (
    <div className="bg-white p-5 rounded-md shadow-md">
      <Badge className="rounded-sm px-3 py-1 text-xs md:text-sm">
        Penanaman Modal Asing
      </Badge>
      <div className="mt-3">
        <h3 className="text-xl font-semibold">Pendirian PMA</h3>
        <p className="theme-gradient text-lg font-semibold ">Rp. 5.250.000</p>
        <p className="text-muted-foreground text-sm mt-2">
          Pengecekan Nama PT, Pemesanan Nama PT, Persiapan Minuta, Akta
          Pendirian PT, SK Menteri, Dapat 20 KBLI
        </p>
      </div>
      <figure className="mt-5 max-w-75">
        <Image
          src="/images/voucher-img.png"
          alt="Discount Voucher"
          width={500}
          height={500}
        />
        <figcaption className="text-xs text-muted-foreground mt-1">
          Kode voucher akan dikirimkan melalui Whatsapp
        </figcaption>
      </figure>
      <ProposalFormDialog>
        <MainButton text="Minta Proposal" className="mt-5" />
      </ProposalFormDialog>
    </div>
  );
};

export default ProposalCard;

//
//
//
