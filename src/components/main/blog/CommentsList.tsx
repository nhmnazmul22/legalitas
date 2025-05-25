import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const CommentsList = () => {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-semibold">0 Komentar</h3>
      <div className=" w-full p-2 rounded-sm flex gap-3 mt-2">
        <figure className="w-14">
          <Image src="/images/avater.png" alt="logo" width={300} height={300} />
        </figure>
        <p className="flex-1 text-sm text-muted-foreground mt-1 leading-[22px]">
          Sejak tahun 2002 memberikan layanan legalitas yang terbaik dan
          profesional. Kirimkan pertanyaan kepada konsultan Legalitas.org di
          Kontak Kami
        </p>
      </div>
      <div className=" w-full p-2 rounded-sm flex gap-3 mt-2">
        <figure className="w-14">
          <Image src="/images/avater.png" alt="logo" width={300} height={300} />
        </figure>
        <p className="flex-1 text-sm text-muted-foreground mt-1 leading-[22px]">
          Sejak tahun 2002 memberikan layanan legalitas yang terbaik dan
          profesional. Kirimkan pertanyaan kepada konsultan Legalitas.org di
          Kontak Kami
        </p>
      </div>
      <Separator />
    </div>
  );
};

export default CommentsList;
