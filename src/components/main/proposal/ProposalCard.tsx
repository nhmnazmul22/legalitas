import MainButton from "@/components/common/MainButton";
import { Badge } from "@/components/ui/badge";
import { ProposalType } from "@/types";
import Image from "next/image";
import ProposalFormDialog from "./ProposalFormDialog";

const ProposalCard: React.FC<ProposalType> = ({
  id,
  name,
  category,
  price,
  features,
}) => {
  return (
    <div className="bg-white p-5 rounded-md shadow-md">
      <Badge className="rounded-sm px-3 py-1 text-xs md:text-sm">
        {category}
      </Badge>
      <div className="mt-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="theme-gradient text-lg font-semibold ">{price}</p>
        <p className="text-muted-foreground text-sm mt-2">
          {features.join(",")}
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
      <ProposalFormDialog
        proposal={{
          id: id,
          name: name,
          category: category,
          price: price,
          features: features,
        }}
      >
        <MainButton text="Minta Proposal" className="mt-5" />
      </ProposalFormDialog>
    </div>
  );
};

export default ProposalCard;
