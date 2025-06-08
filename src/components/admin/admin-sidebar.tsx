"use client";

import {
  ClipboardList,
  FileText,
  LayoutDashboard,
  LogOut,
  Receipt,
  Settings,
  UserPlus,
  Users,
  PencilRuler,
  Scale,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { signOut } from "next-auth/react";

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Permintaan Proposal",
    url: "/admin/proposals",
    icon: FileText,
  },
  {
    title: "Manajemen User",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Buat Akun User",
    url: "/admin/create-user",
    icon: UserPlus,
  },
  {
    title: "Invoice",
    url: "/admin/invoices",
    icon: Receipt,
  },
  {
    title: "Progress Pekerjaan",
    url: "/admin/progress",
    icon: ClipboardList,
  },
  {
    title: "Artikel",
    url: "/admin/artikel",
    icon: PencilRuler,
  },
  {
    title: "KBLI",
    url: "/admin/kbli",
    icon: Scale,
  },
  {
    title: "Pengaturan",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
          <span className="font-bold text-lg">Legalitas Admin</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
