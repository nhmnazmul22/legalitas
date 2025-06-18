"use client";
import parser from "html-react-parser";
import { BlogType } from "@/types";
import ServiceCardSkeleton from "@/components/skeleton/ServiceCard";

type BlogDetailsType = {
  blog: BlogType;
};

const BlogDetails: React.FC<BlogDetailsType> = ({ blog }) => {
  return (
    <div className="blog-details mt-5 px-2">
      {!blog && <ServiceCardSkeleton />}
      {parser(blog.content || "")}
    </div>
  );
};

export default BlogDetails;
