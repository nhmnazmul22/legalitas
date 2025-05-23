import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuItems } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  return (
    <nav className="py-3 min-h-[80px] shadow-md flex items-center w-full sticky top-0 bg-white z-10">
      <div className="container flex justify-between items-center gap-2">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Legalitas"
            width={130}
            height={130}
            className="min-w-40 md:w-56 h-auto"
          />
        </Link>
        <SidebarTrigger className="lg:hidden" />
        <div className="hidden lg:flex gap-3 items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              {menuItems.map((item) => {
                if (!item.children) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.link}>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "!text-base font-medium hover:text-primary duration-300 !px-2 xl:!px-4"
                          )}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="!text-base font-medium hover:text-primary duration-300 !px-2 xl:!px-4">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex gap-3 items-center justify-between">
                      <ul className="grid grid-cols-3 w-[800px] gap-5 p-2 text-muted-foreground font-medium">
                        {item.children.map((child) => {
                          return (
                            <div key={child.title}>
                              <Link
                                href={child.link}
                                className="uppercase text-muted-foreground text-sm font-medium"
                              >
                                {child.title}
                              </Link>
                              <Separator className="my-2" />
                              <div className="flex flex-col gap-2 items-start">
                                {child.children &&
                                  child.children.map((subChild) => {
                                    return (
                                      <Link
                                        href={subChild.link}
                                        key={subChild.title}
                                        className="w-full"
                                      >
                                        <Button
                                          variant="ghost"
                                          className="text-sm w-full justify-start font-medium hover:text-primary duration-300"
                                        >
                                          {subChild.title}
                                        </Button>
                                      </Link>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/" className="w-full">
            <Button className="w-[120px] btn-gradient h-[40px] text-sm font-semibold">
              Login Klien
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
