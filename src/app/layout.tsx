import { AuthProvider } from "@/context/AuthProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "swiper/css";
import "./globals.css";
import StoreProvider from "@/context/StoreProvider";

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mitra Jasa Legalitas Rev",
  description:
    "Konsultan Jasa Pengurusan Legalitas Terbaik dan Anti Ribet – Layanan Legalitas Usaha Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.className} antialiased overflow-x-hidden bg-slate-50 w-full`}
      >
        <StoreProvider>
          <AuthProvider>{children}</AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
