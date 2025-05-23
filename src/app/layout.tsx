import AppSidebar from "@/components/Layout/AppSidebar";
import Navbar from "@/components/Layout/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cookies } from "next/headers";
import "swiper/css";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en">
      <body className={`${jakartaSans.className} antialiased`}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <div className="block lg:hidden absolute z-[99]">
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
