import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="bg-primary/5 py-20">
      <div className="container">
        <div className="bg-white rounded-md max-w-5xl mx-auto flex max-md:flex-col ">
          <div className="p-10 w-full md:w-[420px]">
            <h3 className="text-xl md:text-3xl font-bold mb-5 theme-gradient">
              Login Klien
            </h3>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">No. Handphone</Label>
              <Input id="phone" placeholder="Login Klien" className="text-sm" />
            </div>
            <Button variant="link" className="p-0 mb-3">
              Minta OTP <ArrowRight size={16} />
            </Button>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">OTP code 6 digit</Label>
              <Input
                id="phone"
                placeholder="6 digit opt code"
                className="text-sm"
              />
            </div>
          </div>
          <div className="p-10 flex-1 bg-primary/10 rounded-t-lg md:rounded-t-0 md:rounded-s-lg">
            <p className="text-sm">
              <strong> Belum punya akun?</strong> Silahkan minta{" "}
              <strong className="theme-gradient">Proposal</strong> terlebih
              dahulu!
            </p>
            <Separator className="my-4 bg-secondary-blue/20" />
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Cara Login</h3>
              <ul className="mt-3 ms-5 list-disc text-sm flex flex-col gap-2">
                <li>Tulis nomor Whatsapp kamu yang aktif</li>
                <li>Klik Minta OTP</li>
                <li>Kode OTP 6 Digit dikirimkan ke Whatsapp kamu</li>
                <li>Masukkan kode OTP</li>
                <li>Login berhasil!</li>
              </ul>
            </div>
            <Separator className="my-4 bg-secondary-blue/20" />
            <p className="text-sm">
              Apabila ada pertanyaan atau ganti nomor Whatsapp bisa hubungi{" "}
              <Link
                href="/kontak"
                className="theme-gradient hover:underline text-primary font-semibold"
              >
                Kontak Legalitas.org
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
