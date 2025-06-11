"use client";
import SectionHeading from "@/components/common/SectionHeading";
import BlogCard from "@/components/main/BlogCard";
import DynamicPagination from "@/components/main/DynamicPagination";
import SkeletonCard from "@/components/skeleton/SkeletonCard";
import { AppDispatch, RootState } from "@/store";
import { fetchBlogs } from "@/store/BlogSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BlogPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: blogs } = useSelector((state: RootState) => state.blogs.items);
  const { currentItems } = useSelector((state: RootState) => state.pagination);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <section className="pt-20 pb-32">
      <div className="container">
        <SectionHeading badgeText="artikel" title="Tulisan Kami" />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentItems.length > 0
            ? currentItems.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))
            : Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
        </div>
        <DynamicPagination data={blogs} />
      </div>
    </section>
  );
}
