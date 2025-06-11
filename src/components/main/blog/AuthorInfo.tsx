import { Button } from "@/components/ui/button";
import { BlogType } from "@/types";
import {
  Facebook,
  Heart,
  Instagram,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BlogDetailsType = {
  blog: BlogType;
};

const AuthorInfo: React.FC<BlogDetailsType> = ({ blog }) => {
  return (
    <div className="my-5">
      <div className="flex gap-3">
        <figure className="w-16">
          <Image src="/images/avater.png" alt="logo" width={300} height={300} />
        </figure>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {blog.authorDetails?.authorName}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 leading-[22px]">
            {blog.authorDetails?.bio}
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Button
            variant="outline"
            className="hover:bg-primary group transition-all duration-300 rounded-md"
          >
            <Heart className="group-hover:text-white transition-all duration-300" />
          </Button>
          <p className="text-base font-semibold theme-gradient">
            {blog.authorDetails?.like} Love
          </p>
        </div>
        <div className="flex gap-3">
          <Link href={blog.authorDetails?.socialLinks?.facebookLink || ""}>
            {" "}
            <Facebook size={20} className="text-primary cursor-pointer" />
          </Link>
          <Link href={blog.authorDetails?.socialLinks?.twitterLink || ""}>
            <Twitter size={20} className="text-primary cursor-pointer" />
          </Link>
          <Link href={blog.authorDetails?.socialLinks?.instagramLink || ""}>
            <Instagram size={20} className="text-primary cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
