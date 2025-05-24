import Blogs from "@/components/main/Blogs";
import Reviews from "@/components/main/Reviews";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <Reviews />
      <Blogs />
    </section>
  );
}
