import AppSidebar from "@/components/Layout/AppSidebar";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { cookies } from "next/headers";
import { Provider } from 'react-redux';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="block lg:hidden absolute z-[99]">
        <AppSidebar />
      </div>
      <main className="w-full">
        <Navbar />
        
        <Footer />
        <Toaster />
      </main>
    </SidebarProvider>
  );
}
