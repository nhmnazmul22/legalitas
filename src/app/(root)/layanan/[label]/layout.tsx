import Blogs from "@/components/main/Blogs";
import MainService from "@/components/main/MainService";
import Reviews from "@/components/main/Reviews";
import { Separator } from "@/components/ui/separator";

type LayoutPage = {
  children: React.ReactNode;
};

const layout: React.FC<LayoutPage> = ({ children }) => {
  return (
    <section className="relative">
      {children}
      <Separator className="my-10" />
      <MainService />
      <Reviews />
      <Blogs />
    </section>
  );
};

export default layout;
