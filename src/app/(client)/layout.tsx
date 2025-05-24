import AppSidebar from "@/components/Layout/AppSidebar";
import Navbar from "@/components/Layout/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

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
        {children}
      </main>
    </SidebarProvider>
  );
}
