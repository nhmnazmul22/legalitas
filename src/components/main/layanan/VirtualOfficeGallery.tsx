import Image from "next/image";
import ShowMoreButton from "../ShowMoreButton";

type VirtualOfficeGalleryProps = {
  isBigBanner?: boolean;
};

const VirtualOfficeGallery: React.FC<VirtualOfficeGalleryProps> = ({
  isBigBanner = true,
}) => {
  return (
    <ShowMoreButton>
      <div className="mt-5 bg-white shadow-md p-5 rounded-md">
        <h3 className="text-xl font-semibold mb-3">Gallery Virtual Office</h3>
        <p className="bg-primary/10 font-medium text-sm md:text-base p-2 rounded-md">
          Sewa virtual office mulai dari Rp 2.3 juta/tahun. Bisa pakai 6 (enam)
          lokasi untuk meeting. Lihat lebih detail.
        </p>
        {isBigBanner === true && (
          <figure className="rounded-md overflow-hidden mt-5">
            <Image
              src="/images/price-gallery-03.png"
              alt="Price Gallery"
              width={1024}
              height={1024}
            />
          </figure>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
          <figure className="rounded-md overflow-hidden">
            <Image
              src="/images/virtual-office.png"
              alt="Virtual Office"
              width={1024}
              height={1024}
            />
            <figcaption className="text-sm text-muted-foreground font-medium text-center p-2">
              Indonesia Stock Exchange Tower - SCBD
            </figcaption>
          </figure>
          <figure className="rounded-md overflow-hidden">
            <Image
              src="/images/virtual-office.png"
              alt="Virtual Office"
              width={1024}
              height={1024}
            />
            <figcaption className="text-sm text-muted-foreground font-medium text-center p-2">
              Menara Cakrawala Thamrin - Jakarta Pusat
            </figcaption>
          </figure>
          <figure className="rounded-md overflow-hidden">
            <Image
              src="/images/virtual-office.png"
              alt="Virtual Office"
              width={1024}
              height={1024}
            />
            <figcaption className="text-sm text-muted-foreground font-medium text-center p-2">
              Indonesia Stock Exchange Tower - SCBD
            </figcaption>
          </figure>
          <figure className="rounded-md overflow-hidden">
            <Image
              src="/images/virtual-office.png"
              alt="Virtual Office"
              width={1024}
              height={1024}
            />
            <figcaption className="text-sm  text-muted-foreground font-medium text-center p-2">
              Indonesia Stock Exchange Tower - SCBD
            </figcaption>
          </figure>
          <figure className="rounded-md overflow-hidden">
            <Image
              src="/images/virtual-office.png"
              alt="Virtual Office"
              width={1024}
              height={1024}
            />
            <figcaption className="text-sm text-muted-foreground font-medium text-center p-2">
              Menara Cakrawala Thamrin - Jakarta Pusat
            </figcaption>
          </figure>
          <figure className="rounded-md overflow-hidden">
            <Image
              src="/images/virtual-office.png"
              alt="Virtual Office"
              width={1024}
              height={1024}
            />
            <figcaption className="text-sm text-muted-foreground font-medium text-center p-2">
              Indonesia Stock Exchange Tower - SCBD
            </figcaption>
          </figure>
        </div>
      </div>
    </ShowMoreButton>
  );
};

export default VirtualOfficeGallery;
