import SkeletonCard from "@/components/skeleton/SkeletonCard";
import { Badge } from "@/components/ui/badge";
import { AppDispatch, RootState } from "@/store";
import { fetchBlogById } from "@/store/BlogByIdSlice";
import { fetchBlogs } from "@/store/BlogSlice";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BlogListCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: blogs } = useSelector((state: RootState) => state.blogs.items);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className="mt-20">
      <Badge
        className={
          "mx-auto bg-secondary/15 text-primary text-sm font-semibold px-4 py-1 uppercase rounded-full"
        }
      >
        Artikel Lainnya
      </Badge>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {blogs.length > 0
          ? blogs.map((blog, index) => {
              if (index < 2) {
                return (
                  <div
                    key={blog._id}
                    className="bg-white pb-10 shadow-md rounded-md flex flex-col gap-2  hover:scale-[1.02] transition-all duration-300"
                  >
                    <figure className="rounded-t-md overflow-hidden max-md:w-full object-cover">
                      <Image
                        src={blog.thumbnail || "/"}
                        alt="blog"
                        width={500}
                        height={500}
                        className="max-md:w-full"
                        unoptimized
                      />
                    </figure>
                    <div className="px-5 mt-5 flex-1">
                      <Link href={`/tulisan/${blog._id}`}>
                        <h3 className="text-lg lg:text-2xl font-semibold hover:text-secondary-blue">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm mt-2">
                        {blog.shortDes}
                      </p>
                      <Link
                        href={`/tulisan/${blog._id}`}
                        className="text-secondary-blue font-medium text-base flex gap-2 items-center hover:translate-x-1 hover:underline transition-all duration-300 mt-3"
                      >
                        Baca Artikel <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              }
            })
          : Array.from({ length: 2 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
      </div>
    </div>
  );
};

export default BlogListCard;
