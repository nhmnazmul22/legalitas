import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MainButton from "../common/MainButton";
import TypeWriterText from "../common/TypeWritedText";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="py-15">
      <div className="container">
        <div className="grid grid-cols-12 gap-10 justify-between">
          <div className="flex col-span-12 md:col-span-6 xl:col-span-3 flex-col items-start justify-start">
            <figure className="w-[200px] lg:w-[260px] h-auto">
              <Image
                src="/images/secondary-logo.png"
                alt="Logo"
                width={300}
                height={300}
              />
            </figure>
            <p className="text-sm font-semibold mt-2">
              Memberikan Layanan Legalitas <TypeWriterText />
            </p>

            <MainButton
              link="/"
              text="Kirimkan pertanyaan"
              className="w-[270px] mt-5"
            />
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <p className="text-lg font-semibold">Layanan</p>
            <ul className="text-base text-muted-foreground flex flex-col gap-2 mt-3 ps-2">
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  Perseroan Terbatas
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  PT PMA
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  PT Perorangan
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  Firma
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  Perkumpulan
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <p className="text-lg font-semibold">Tentang</p>
            <ul className="text-base text-muted-foreground flex flex-col gap-2 mt-3 ps-2">
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  Database Peraturan
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  Tabel KBLI
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  Tulisan
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" flex gap-2 items-center group transition-all duration-300  -translate-x-5 hover:text-primary hover:underline hover:translate-x-1"
                >
                  <ArrowRight
                    size={14}
                    className="transition-all duration-300 opacity-0 -translate-x-1.5 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <p className="text-lg font-semibold">Hubungi</p>
            <div className="text-base text-muted-foreground flex flex-col gap-2 mt-3 ps-2">
              <p>
                <span className="text-black font-semibold">Kantor:</span> MTH
                Square GF A4/A <br /> Jl. MT Haryono Kav. <br /> 10 Jakarta
                Timur 13330.
              </p>
              <p>
                <span className="text-black font-semibold">Whatsapp: </span>
                0811-1191-750
              </p>
              <p>
                <span className="text-black font-semibold">Email: </span>
                legal [at] legalitas.org
              </p>
            </div>
          </div>
        </div>
        <Separator className="mt-15 mb-5" />
        <div className="flex flex-col gap-3 md:flex-row items-center justify-between">
          <p className="text-sm max-md:text-center md:text-base">
            Copyright © 2024-2025. 🧡 Images{" "}
            <span className="theme-gradient font-semibold">
              Mitra Jasa legalistas
            </span>
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Link
              href="/"
              className="theme-gradient font-semibold hover:underline duration-300 text-primary"
            >
              Ketentuan
            </Link>
            <Separator orientation="vertical" className="w-[2px] h-[5px]" />
            <Link
              href="/"
              className="theme-gradient font-semibold hover:underline duration-300 text-primary"
            >
              Privasi
            </Link>
            <Separator orientation="vertical" className="w-[2px] h-full" />
            <Link
              href="/"
              className="theme-gradient font-semibold hover:underline duration-300 text-primary"
            >
              Login Klien
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
