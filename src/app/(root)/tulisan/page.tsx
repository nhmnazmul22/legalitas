import SectionHeading from "@/components/common/SectionHeading";
import BlogCard from "@/components/main/BlogCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BlogType } from "@/types";
export default function BlogPage() {
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
    {
      id: "b-4",
      thumbnail: "/images/blog-1.png",
      title: "Cara Verifikasi KBLI Industri OSS: Panduan Lengkap",
      shortDes:
        "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) merupakan instrumen vital dalam perizinan usaha industri di Indonesia.",
      link: "/",
    },
    {
      id: "b-5",
      thumbnail: "/images/blog-2.png",
      title: "Cara Verifikasi KBLI Industri OSS: Panduan Lengkap",
      shortDes:
        "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) merupakan instrumen vital dalam perizinan usaha industri di Indonesia.",
      link: "/",
    },
    {
      id: "b-6",
      thumbnail: "/images/blog-3.png",
      title: "Cara Verifikasi KBLI Industri OSS: Panduan Lengkap",
      shortDes:
        "KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) merupakan instrumen vital dalam perizinan usaha industri di Indonesia.",
      link: "/",
    },
  ];

  return (
    <section className="pt-20 pb-32">
      <div className="container">
        <SectionHeading badgeText="artikel" title="Tulisan Kami" />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.length > 0 &&
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                thumbnail={blog.thumbnail}
                link={`tulisan/${blog.id!.toString()}`}
                shortDes={blog.shortDes}
              />
            ))}
        </div>
        <Pagination className="mt-20">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">6</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">21</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">22</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
