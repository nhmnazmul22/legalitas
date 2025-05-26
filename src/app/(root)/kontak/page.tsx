import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SelectValue } from "@radix-ui/react-select";
import { ArrowRight, Headphones, Mail, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="py-20 hero-banner">
      <SectionHeading
        badgeText="Hubungi Kami"
        title="Bertanya Layanan"
        subTitle="Legalitas.org"
      />
      <div className="mt-10 container grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        <div className="secondary-hero-banner rounded-md flex gap-3 items-start p-5">
          <span className="">
            <Headphones size={64} className="text-white" />
          </span>
          <div>
            <p className="text-white font-semibold my-2 text-xl">Whatsapp</p>
            <p className="text-white">0811-1191-750</p>
          </div>
        </div>
        <div className="secondary-hero-banner rounded-md flex gap-3 items-start p-5">
          <span className="">
            <Mail size={64} className="text-white" />
          </span>
          <div>
            <p className="text-white font-semibold my-2 text-xl">Email</p>
            <p className="text-white">legal@legalitas.org</p>
          </div>
        </div>
        <div className="secondary-hero-banner rounded-md flex gap-3 items-start p-5">
          <span className="">
            <Map size={64} className="text-white" />
          </span>
          <div>
            <p className="text-white font-semibold my-2 text-xl">Lokasi</p>
            <p className="text-white">
              MTH Square GF A4/A <br /> Jl. MT Haryono Kav. <br /> 10 Jakarta
              Timur 13330
            </p>
            <Link
              href="/"
              className="mt-2 text-white underline font-semibold flex gap-2 items-center"
            >
              Google Maps <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <figure className="rounded-md overflow-hidden max-h-[600px]">
            <Image
              src="/images/contact-img.png"
              width={1024}
              height={1024}
              alt="Contact Img"
            />
          </figure>
          <div className="bg-white shadow-md rounded-md p-10">
            <h3 className="text-2xl md:text-5xl xl:text-6xl font-bold theme-gradient">
              Kontak Kami
            </h3>
            <form action="" className="mt-5">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="- Pilih Kategori -" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bertanya Layanan">
                    Bertanya Layanan
                  </SelectItem>
                  <SelectItem value="Bertanya Peraturan">
                    Bertanya Peraturan
                  </SelectItem>
                  <SelectItem value="Informasi Profil Perusahaan">
                    Informasi Profil Perusahaan
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className="my-3 flex flex-col gap-2">
                <Label htmlFor="name">Name:</Label>
                <Input id="name" placeholder="Name" className="text-sm" />
              </div>
              <div className="my-3 flex flex-col gap-2">
                <Label htmlFor="email">Email:</Label>
                <Input id="email" placeholder="Email" className="text-sm" />
              </div>
              <div className="my-3 flex flex-col gap-2">
                <Label htmlFor="whatsapp">Whatsapp:</Label>
                <Input
                  id="whatsapp"
                  placeholder="Whatsapp"
                  className="text-sm"
                />
              </div>
              <div className="my-3 flex flex-col gap-2">
                <Label htmlFor="message">Tulis Pesan:</Label>
                <Textarea
                  id="message"
                  placeholder="Tulis Pesan"
                  className="h-[100px]"
                />
              </div>
              <Button type="submit" className="btn-gradient">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
