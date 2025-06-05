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
            <p className="text-white">+628213250555 | +6282143525559</p>
          </div>
        </div>
        <div className="secondary-hero-banner rounded-md flex gap-3 items-start p-5">
          <span className="">
            <Mail size={64} className="text-white" />
          </span>
          <div>
            <p className="text-white font-semibold my-2 text-xl">Email</p>
            <p className="text-white">mitrajasalegalitas@email.com</p>
          </div>
        </div>
        <div className="secondary-hero-banner rounded-md flex gap-3 items-start p-5">
          <span className="">
            <Map size={64} className="text-white" />
          </span>
          <div>
            <p className="text-white font-semibold my-2 text-xl">Lokasi</p>
            <p className="text-white">
              Jl. Pumpungan V No.46 A. <br />
              Menur Pumpungan, Kec. <br />
              Sukolilo, Surabaya, Jawa Timur 60118
            </p>
            <Link
              href="https://maps.app.goo.gl/n5jra8zmNGqPiewVA"
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
        <div className="mt-10 w-full rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7914.997968524046!2d112.764016!3d-7.297698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbb08e27b4a5%3A0x3db559c5cee500f4!2sMitra%20Jasa%20Legalitas%20Surabaya!5e0!3m2!1sen!2sid!4v1749112189829!5m2!1sen!2sid"
            height={480}
            style={{ border: 0, width: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
