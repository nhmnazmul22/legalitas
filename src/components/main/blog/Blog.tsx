"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import BottomServiceSection from "../BottomServiceSection";
import AuthorInfo from "./AuthorInfo";
import BlogDetails from "./BlogDetails";
import BlogListCard from "./BlogListCard";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { fetchBlogById } from "@/store/BlogByIdSlice";
import { ParamValue } from "next/dist/server/request/params";

type BlogType = {
  blogId: ParamValue;
};

const Blog: React.FC<BlogType> = ({ blogId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: blog } = useSelector(
    (state: RootState) => state.singleBlog.items
  );

  useEffect(() => {
    dispatch(fetchBlogById(blogId));
  }, [blogId, dispatch]);

  return (
    blog && (
      <div className="flex-1">
        <figure className="rounded-md overflow-hidden shadow-md max-h-[540px]">
          <Image
            src={blog.thumbnail || "/tulusan"}
            alt={"blog Img"}
            width={1024}
            height={1024}
            className="w-full object-cover"
            unoptimized
          />
        </figure>
        <BlogDetails blog={blog} />
        <Separator />
        <div className="my-5">
          <h3 className="text-base font-semibold">
            Klik tag untuk liat artikel sejenis
          </h3>
          <div className="flex justify-start gap-3 mt-3  items-center">
            {blog.tags?.map((tag, index) => (
              <Button
                key={`${tag}-${index}`}
                className="text-sm px-3 py-2 rounded-md cursor-pointer"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
        <Separator />
        <AuthorInfo blog={blog} />
        <BottomServiceSection
          classNames="lg:grid-cols-3 mt-10"
          isBadge={false}
        />
        <CommentsList comments={blog.comments!} />
        <CommentForm
          blogId={blogId}
          onSuccuss={() => dispatch(fetchBlogById(blogId))}
        />
        <BlogListCard />
      </div>
    )
  );
};

export default Blog;
