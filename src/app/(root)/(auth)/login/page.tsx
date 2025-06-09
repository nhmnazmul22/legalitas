"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CircleAlert } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/client-dashboard",
    });
    if (res?.error) {
      setError("CredentialsSignin");
      setLoading(false);
    } else {
      setLoading(false);
      router.push("/client-dashboard");
    }
  };

  return (
    <>
      {error === "CredentialsSignin" && (
        <Alert variant="destructive" className="mb-4">
          <CircleAlert className="h-4 w-4" />
          <AlertTitle>Login gagal</AlertTitle>
          <AlertDescription>
            Username atau password salah. Silakan coba lagi.
          </AlertDescription>
        </Alert>
      )}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="bg-white rounded-md max-w-5xl mx-auto flex max-md:flex-col ">
            <div className="p-10 w-full md:w-[420px]">
              <h3 className="text-xl md:text-3xl font-bold mb-5 theme-gradient">
                Login Klien
              </h3>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="username">User Name</Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    className="text-base"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-gradient"
                  disabled={loading}
                >
                  Log in{" "}
                </Button>
              </form>
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
                  <li>Admin akan mengirimkan detail login ke WhatsApp Anda</li>
                  <li>
                    Salin atau tulis sendiri kredensial login dan gunakan untuk
                    masuk
                  </li>
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
    </>
  );
}
