import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogListCard = () => {
  return (
    <div className="mt-20">
      <Badge
        className={
          "mx-auto bg-secondary/15 text-primary text-sm font-semibold px-4 py-1 uppercase rounded-full"
        }
      >
        Artikel Lainnya
      </Badge>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div className="bg-white pb-10 shadow-md rounded-md flex flex-col gap-2 items-center hover:scale-[1.02] transition-all duration-300">
          <figure className="rounded-t-md overflow-hidden max-md:w-full object-cover">
            <Image
              src="/images/blog-1.png"
              alt="blog"
              width={500}
              height={500}
              className="max-md:w-full"
            />
          </figure>
          <div className="px-5 mt-5 flex-1">
            <Link href="/tulisan/b-1">
              <h3 className="text-lg lg:text-2xl font-semibold hover:text-secondary-blue">
                Perbedaan Sekutu Aktif dan Sekutu Pasif Dalam CV
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) merupakan
              instrumen vital dalam perizinan usaha industri di Indonesia.
            </p>
            <Link
              href={"/"}
              className="text-secondary-blue font-medium text-base flex gap-2 items-center hover:translate-x-1 hover:underline transition-all duration-300 mt-3"
            >
              Baca Artikel <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="bg-white pb-10 shadow-md rounded-md flex flex-col gap-2 items-center hover:scale-[1.02] transition-all duration-300">
          <figure className="rounded-t-md overflow-hidden max-md:w-full object-cover">
            <Image
              src="/images/blog-1.png"
              alt="blog"
              width={500}
              height={500}
              className="max-md:w-full"
            />
          </figure>
          <div className="px-5 mt-5 flex-1">
            <Link href="/tulisan/b-1">
              <h3 className="text-lg lg:text-2xl font-semibold hover:text-secondary-blue">
                Perbedaan Sekutu Aktif dan Sekutu Pasif Dalam CV
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) merupakan
              instrumen vital dalam perizinan usaha industri di Indonesia.
            </p>
            <Link
              href={"/"}
              className="text-secondary-blue font-medium text-base flex gap-2 items-center hover:translate-x-1 hover:underline transition-all duration-300 mt-3"
            >
              Baca Artikel <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
