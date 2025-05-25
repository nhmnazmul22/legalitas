import { Button } from "@/components/ui/button";
import {
  Facebook,
  Heart,
  Instagram,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AuthorInfo = () => {
  return (
    <div className="my-5">
      <div className="flex gap-3">
        <figure className="w-16">
          <Image src="/images/avater.png" alt="logo" width={300} height={300} />
        </figure>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Legalitas.org</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-[22px]">
            Sejak tahun 2002 memberikan layanan legalitas yang terbaik dan
            profesional. Kirimkan pertanyaan kepada konsultan Legalitas.org di
            Kontak Kami
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Button
            variant="outline"
            className="hover:bg-primary group transition-all duration-300 rounded-md"
          >
            <Heart className="group-hover:text-white transition-all duration-300" />
          </Button>
          <p className="text-base font-semibold theme-gradient">2.2k Love</p>
        </div>
        <div className="flex gap-3">
          <Link href="/">
            {" "}
            <Facebook size={20} className="text-primary cursor-pointer" />
          </Link>
          <Link href="/">
            <Twitter size={20} className="text-primary cursor-pointer" />
          </Link>
          <Link href="/">
            <Instagram size={20} className="text-primary cursor-pointer" />
          </Link>
          <Link href="/">
            <LinkedinIcon size={20} className="text-primary cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
