"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { menuItems } from "@/constant";
import { ArrowRight, Mail, Minus, Phone, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Button } from "../ui/button";

export default function AppSidebar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <Sidebar className="">
      <SidebarHeader className="px-5 pt-5 pb-2">
        <Link href="/">
          <Image
            src="/images/secondary-logo.png"
            alt="Legalitas"
            width={130}
            height={130}
            className="w-44 h-auto"
          />
        </Link>
        <p className="mt-2 text-sm text-muted-foreground leading-[25px]">
          Legalitas.org sejak tahun 2002 memberikan layanan legalitas dan
          menyediakan 55.000++ database peraturan di Indonesia yang bisa di
          download dalam format PDF.
        </p>
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground flex gap-2 items-center">
            <Phone size={14} /> 0811-1191-750
          </p>
          <p className="text-sm text-muted-foreground flex gap-2 items-center">
            <Mail size={14} /> legal [at] legalitas.org
          </p>
        </div>
        <Link
          href="https://maps.app.goo.gl/1Z2GViwFjMAaKZV16"
          className="text-sm mt-2 theme-gradient font-bold"
        >
          Google Maps
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent className="px-5 pb-10">
        <SidebarGroup className="p-0 pt-2">
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => {
              if (!item.children) {
                return (
                  <Fragment key={item.id}>
                    <Link
                      href={item.link ? item.link : "/"}
                      className="hover:text-primary duration-300 font-medium"
                    >
                      {item.title}
                    </Link>
                    {index !== menuItems.length - 1 && <Separator />}
                  </Fragment>
                );
              }
              return (
                <Collapsible
                  key={item.id}
                  open={openDropdown}
                  onOpenChange={setOpenDropdown}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full hover:text-primary duration-300 font-medium">
                    <span>{item.title}</span>
                    {openDropdown ? <Minus size={16} /> : <Plus size={16} />}
                  </CollapsibleTrigger>
                  <Separator className="mt-3" />
                  <CollapsibleContent className="flex flex-col gap-2 py-2 ps-2 CollapsibleContent">
                    {item.children.map((child) => {
                      return (
                        child.children && (
                          <div key={child.id}>
                            {child.children.map((subChild) => (
                              <div key={subChild.id} className="flex flex-col">
                                <Link
                                  href={subChild.link ? subChild.link : "/"}
                                  className="hover:text-primary duration-300 font-medium"
                                >
                                  {subChild.title}
                                </Link>
                                <Separator className="my-2" />
                              </div>
                            ))}
                          </div>
                        )
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </SidebarGroup>
        <SidebarGroup className="p-0 pt-2">
          <h3 className="text-2xl font-bold mb-7 mt-2">Dashboard Klien</h3>
          <Link href="/login" className="w-full">
            <Button className="w-full btn-gradient h-[60px] text-lg font-bold flex items-center group">
              Login
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Button>
          </Link>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
