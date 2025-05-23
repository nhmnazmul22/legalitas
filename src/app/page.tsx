import Hero from "@/components/main/Home/Hero";
import MainService from "@/components/main/Home/MainService";
import Regulation from "@/components/main/Home/Regulation";
import Services from "@/components/main/Home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <MainService />
      <Services />
      <Regulation />
    </>
  );
}
