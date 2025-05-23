import Hero from "@/components/main/Hero";
import MainService from "@/components/main/MainService";
import Regulation from "@/components/main/Regulation";
import Risks from "@/components/main/Risks";
import Services from "@/components/main/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <MainService />
      <Services />
      <Regulation />
      <Risks />
    </>
  );
}
