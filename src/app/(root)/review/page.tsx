import Reviews from "@/components/main/Reviews";
import ReviewsSlider from "@/components/main/ReviewsSlider";

export default function ReviewPage() {
  return (
    <section className="pt-20 pb-32">
      <Reviews />
      <div className="flex flex-col gap-10 sliderAfter relative">
        <ReviewsSlider />
        <ReviewsSlider dir="rtl" />
      </div>
    </section>
  );
}
