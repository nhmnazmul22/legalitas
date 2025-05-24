import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogType } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

const BlogCard: React.FC<BlogType> = (blog) => {
  return (
    <Card className="p-6 rounded-md shadow-md border-0 gap-3 hover:scale-[1.02] duration-300">
      <CardHeader className="p-0">
        <Link href={blog.link}>
          <figure className="rounded-md overflow-hidden">
            <Image src={blog.thumbnail} alt="Blogs" width={560} height={560} />
          </figure>
        </Link>
      </CardHeader>
      <CardContent className="p-0">
        <CardTitle>
          <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
        </CardTitle>
        <CardDescription>
          <p className="text-muted-foreground font-normal text-sm leading-[26px]">
            {blog.shortDes}
          </p>
        </CardDescription>
      </CardContent>
      <Separator />
      <CardFooter className="p-0">
        <Link
          href={blog.link}
          className="text-secondary-blue font-medium text-base flex gap-2 items-center hover:translate-x-1 hover:underline transition-all duration-300"
        >
          Selengkapnya <ArrowRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
