import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuItems, menuWithBanner } from "@/constant";
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
            className="min-w-54 md:w-60 h-auto"
          />
        </Link>
        <SidebarTrigger className="lg:hidden" />
        <div className="hidden lg:flex gap-3 items-center">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="gap-1">
              {menuItems.map((item) => {
                if (!item.children) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "!text-base max-xl:!text-sm font-medium hover:text-primary duration-300 !px-2 xl:!px-4"
                        )}
                      >
                        <Link href={item.link ? item.link : "/"}>
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="!text-base max-xl:!text-sm font-medium hover:text-primary duration-300 !px-2 xl:!px-4">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      className="flex gap-4.
                     items-center justify-between"
                    >
                      <ul className="grid grid-cols-4 w-4xl gap-5 p-2 text-muted-foreground font-medium">
                        {item.children.map((child) => {
                          return (
                            <div key={child.title}>
                              <Link
                                href="/"
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
                                        href={
                                          subChild.link ? subChild.link : "/"
                                        }
                                        key={subChild.title}
                                        className="w-full"
                                      >
                                        <Button
                                          variant="ghost"
                                          className="text-sm w-full justify-start font-medium hover:text-primary duration-300 whitespace-normal text-left"
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
                        <div className="grid grid-cols-1 gap-0">
                          {menuWithBanner.map((menu) => (
                            <div key={menu.id} className="relative">
                              <figure className="h-full">
                                <Image
                                  src={menu.bannerImg}
                                  alt={menu.menuName}
                                  width={500}
                                  height={500}
                                  className="h-full object-cover"
                                />
                              </figure>
                              <Link
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full text-sm px-5 text-black font-semibold hover:text-secondary-blue duration-300"
                                href={menu.link}
                              >
                                {menu.menuName}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/login" className="w-full">
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
