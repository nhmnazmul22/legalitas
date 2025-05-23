import { reviweCompanyLogos } from "@/constant";
import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import ReviewsSlider from "./ReviewsSlider";

const Reviews = () => {
  return (
    <section className="py-15 bg-primary/5">
      <div className="container">
        <SectionHeading
          badgeText="review klien"
          title={`"Review Sangat Bagus"`}
          subTitle="Ini Buktinya!"
        />
        <div className="grid grid-cols-3 md:gird-cols-4 lg:grid-cols-6 gap-6 lg:gap-10 mx-auto my-10">
          {reviweCompanyLogos.map((item) => (
            <Image
              key={item.id}
              src={item.link}
              alt="Our Reviews"
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 sliderAfter relative">
        <ReviewsSlider />
        <ReviewsSlider />
      </div>
    </section>
  );
};

export default Reviews;
