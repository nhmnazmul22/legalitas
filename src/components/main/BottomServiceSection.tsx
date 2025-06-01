import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import ServiceCard from "./ServiceCard";

type BottomServiceSectionProps = {
  classNames?: string;
  isBadge?: boolean;
};

const BottomServiceSection: React.FC<BottomServiceSectionProps> = ({
  classNames,
  isBadge = true,
}) => {
  return (
    <div className="mt-5">
      {isBadge && (
        <Badge
          className={
            "mx-auto bg-secondary/15 text-primary text-sm font-semibold px-4 py-1 uppercase rounded-full"
          }
        >
          Lainnya
        </Badge>
      )}
      <div
        className={cn(
          `grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-3`,
          classNames
        )}
      >
        <ServiceCard
          title="Perubahan Akta"
          price="Rp 5juta"
          description="Perubahan anggaran dasar / Akta Notaris"
          includes={[
            "Drafting dokumen",
            "Persiapan Minuta",
            "Akta Notaris Perubahan",
            "SK Persetujuan / SK Pemberitahuan",
            " Dapat 20 KBLI",
          ]}
        />
        <ServiceCard
          title="Perubahan Akta"
          price="Rp 5juta"
          description="Perubahan anggaran dasar / Akta Notaris"
          includes={[
            "Drafting dokumen",
            "Persiapan Minuta",
            "Akta Notaris Perubahan",
            "SK Persetujuan / SK Pemberitahuan",
            " Dapat 20 KBLI",
          ]}
        />
        <ServiceCard
          title="Perubahan Akta"
          price="Rp 5juta"
          description="Perubahan anggaran dasar / Akta Notaris"
          includes={[
            "Drafting dokumen",
            "Persiapan Minuta",
            "Akta Notaris Perubahan",
            "SK Persetujuan / SK Pemberitahuan",
            " Dapat 20 KBLI",
          ]}
        />
      </div>
    </div>
  );
};

export default BottomServiceSection;
