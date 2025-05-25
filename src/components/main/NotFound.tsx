import Image from "next/image";
import MainButton from "../common/MainButton";

const NotFound = () => {
  return (
    <div className="container pb-20">
      <figure className="max-w-xl mx-auto">
        <Image
          src="/images/not-found-svg.svg"
          alt="not-found"
          width={1024}
          height={1024}
        />
      </figure>
      <div className="text-center mt-[-70px]">
        <h3 className="text-lg font-semibold">
          {"Oops! The page you're looking for doesn't exist"}
        </h3>
        <p className="text-xs text-muted-foreground">
          It might have been moved, deleted, or never existed in the first
          place.
        </p>
      </div>
      <MainButton text="Go back" className="mx-auto mt-5" link="/" />
    </div>
  );
};

export default NotFound;
