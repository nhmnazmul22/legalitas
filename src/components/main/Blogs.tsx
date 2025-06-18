"use client";

import MainButton from "../common/MainButton";
import SectionHeading from "../common/SectionHeading";
import BlogCard from "./BlogCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/store/BlogSlice";
import { AppDispatch, RootState } from "@/store";

const Blogs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: blogs } = useSelector((state: RootState) => state.blogs.items);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <section className="py-15 bg-primary/10">
      <div className="container">
        <SectionHeading badgeText="artikel" title="Tulisan Kami" />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog, index) => {
            if (index < 3) {
              return <BlogCard key={blog._id} blog={blog} />;
            }
          })}
        </div>

        <MainButton
          text="Lihat semua tulisan"
          className="mt-14 mx-auto w-[260px] !h-[60px] "
          link="/tulisan"
        />
      </div>
    </section>
  );
};

export default Blogs;
