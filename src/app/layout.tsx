import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "swiper/css";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MITRA JASA LEGALITAS REV",
  description:
    "Legalitas sejak tahun 2002 memberikan layanan legalitas dan menyediakan 55.000++ database peraturan di Indonesia yang bisa di download dalam format PDF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-md:overflow-x-auto">
      <body
        className={`${poppinsSans.className} antialiased overflow-x-hidden bg-slate-50 w-full`}
      >
        {children}
      </body>
    </html>
  );
}
