"use client";

import Blog from "@/components/main/blog/Blog";
import BlogContents from "@/components/main/blog/BlogContents";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { fetchBlogById } from "@/store/BlogByIdSlice";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  const { blogId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { data: blog } = useSelector(
    (state: RootState) => state.singleBlog.items
  );

  useEffect(() => {
    dispatch(fetchBlogById(blogId));
  }, []);
  return (
    <section className="">
      <div className="secondary-hero-banner text-white py-15">
        <div className="container text-center">
          <Breadcrumb>
            <BreadcrumbList className="font-semibold">
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-white hover:text-white"
                  href="/"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Tulisan</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="mt-10 md:mt-20">
            <h2 className="text-3xl md:text-4xl xl:text-5xl max-w-5xl font-semibold mx-auto  leading-[44px] md:leading-[56px] xl:leading-[70px]">
              {blog.title}
            </h2>
            <p className="mt-10 text-base">
              Dibuat : {formatDate(blog.createdAt!)}
            </p>
            <p>Diperbarui : {formatDate(blog.updatedAt!)}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex gap-5 my-10">
          <BlogContents />
          <Blog blogId={blogId!} />
        </div>
      </div>
    </section>
  );
}
