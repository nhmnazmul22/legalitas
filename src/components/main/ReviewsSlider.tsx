"use client";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

type ReviewsSliderType = {
  dir?: string;
};

const ReviewsSlider: React.FC<ReviewsSliderType> = ({ dir }) => {
  return (
    <Swiper
      dir={dir && dir}
      slidesPerView="auto"
      spaceBetween={10}
      speed={6500}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, FreeMode]}
      className="mySwiper"
    >
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewsSlider;
