import { BlogType } from "@/types";
import MainButton from "../common/MainButton";
import SectionHeading from "../common/SectionHeading";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs: BlogType[] = [
    {
      id: "b-1",
      thumbnail: "/images/blog-1.png",
      title: "Cara Verifikasi KBLI Industri OSS: Panduan Lengkap",
      shortDes:
        "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) merupakan instrumen vital dalam perizinan usaha industri di Indonesia.",
      link: "/",
    },
    {
      id: "b-2",
      thumbnail: "/images/blog-2.png",
      title: "Cara Verifikasi KBLI Industri OSS: Panduan Lengkap",
      shortDes:
        "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) merupakan instrumen vital dalam perizinan usaha industri di Indonesia.",
      link: "/",
    },
    {
      id: "b-3",
      thumbnail: "/images/blog-3.png",
      title: "Cara Verifikasi KBLI Industri OSS: Panduan Lengkap",
      shortDes:
        "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) merupakan instrumen vital dalam perizinan usaha industri di Indonesia.",
      link: "/",
    },
  ];

  return (
    <section className="py-15 bg-primary/10">
      <div className="container">
        <SectionHeading badgeText="artikel" title="Tulisan Kami" />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              thumbnail={blog.thumbnail}
              link={blog.link}
              shortDes={blog.shortDes}
            />
          ))}
        </div>
        <MainButton
          text="Lihat semua tulisan"
          className="mt-14 mx-auto w-[260px] !h-[60px] "
        />
      </div>
    </section>
  );
};

export default Blogs;
