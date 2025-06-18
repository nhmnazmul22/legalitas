import SectionHeading from "@/components/common/SectionHeading";
import { mainServiceItems } from "@/constant";
import MainServiceCard from "./MainServiceCard";

const MainService = () => {
  return (
    <section className="py-15 mt-10" id="why-us">
      <div className="container">
        <SectionHeading
          badgeText="Why us?"
          title="Kenapa Memilih"
          subTitle="Legalitas.org?"
        />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {mainServiceItems.map((item) => (
            <MainServiceCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainService;
