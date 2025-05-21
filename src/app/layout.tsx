import AppSidebar from "@/components/Layout/AppSidebar";
import Navbar from "@/components/Layout/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legalitas",
  description:
    "Legalitas.org sejak tahun 2002 memberikan layanan legalitas dan menyediakan 55.000++ database peraturan di Indonesia yang bisa di download dalam format PDF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.className} antialiased`}>
        <SidebarProvider>
          <div className="block lg:hidden">
            <AppSidebar />
          </div>
          <main className="w-full">
            <Navbar />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
