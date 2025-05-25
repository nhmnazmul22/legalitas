import AppSidebar from "@/components/Layout/AppSidebar";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import NotFound from "@/components/main/NotFound";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function NotFoundPage() {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="block lg:hidden absolute z-[99]">
        <AppSidebar />
      </div>
      <main className="w-full">
        <Navbar />
        <NotFound />
        <Footer />
      </main>
    </SidebarProvider>
  );
}
