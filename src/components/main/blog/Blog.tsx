import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import BottomServiceSection from "../BottomServiceSection";
import AuthorInfo from "./AuthorInfo";
import BlogDetails from "./BlogDetails";
import BlogListCard from "./BlogListCard";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

const Blog = () => {
  return (
    <div className="flex-1">
      <figure className="rounded-md overflow-hidden shadow-md max-h-[540px]">
        <Image
          src="/images/blog-1.png"
          alt="Blog img"
          width={1024}
          height={1024}
          className="w-full object-cover"
        />
      </figure>
      <BlogDetails />
      <Separator />
      <div className="my-5">
        <h3 className="text-base font-semibold">
          Klik tag untuk liat artikel sejenis
        </h3>
        <div className="flex justify-start gap-3 mt-3  items-center">
          <Button className="text-sm px-3 py-2 rounded-md cursor-pointer">
            pt
          </Button>
          <Button className="text-sm px-3 py-2 rounded-md cursor-pointer">
            bisnis
          </Button>
          <Button className="text-sm px-3 py-2 rounded-md cursor-pointer">
            penutupan
          </Button>
          <Button className="text-sm px-3 py-2 rounded-md cursor-pointer">
            rups
          </Button>
        </div>
      </div>
      <Separator />
      <AuthorInfo />
      <BottomServiceSection classNames="lg:grid-cols-3 mt-10" isBadge={false} />
      <CommentsList />
      <CommentForm />
      <BlogListCard />
    </div>
  );
};

export default Blog;
