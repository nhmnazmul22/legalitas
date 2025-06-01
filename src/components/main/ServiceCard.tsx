import MainButton from "@/components/common/MainButton";
import RatingGen from "@/components/common/RatingGen";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ServiceType } from "@/types";
import { CircleCheckBig } from "lucide-react";
import ShowMoreButton from "./ShowMoreButton";

const ServiceCard: React.FC<ServiceType> = ({
  title,
  description,
  price,
  includes,
}) => {
  return (
    <ShowMoreButton>
      <Card className="bg-primary/5 border-0 shadow-md rounded-md gap-2 justify-between hover:scale-[1.02] transition-scale duration-300">
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl font-bold">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-2 font-bold text-muted-foreground">
            Termasuk:
          </p>
          {includes.length > 0 && (
            <ul className="flex flex-col gap-2">
              {includes.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="flex items-center justify-start gap-2 text-sm "
                >
                  <CircleCheckBig
                    size={16}
                    className="stroke-primary/50 w-5 h-5 shirk-0"
                  />{" "}
                  <span className="flex-1"> {item}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2 items-start mt-2">
          <div className="flex gap-2 items-center m-0">
            <RatingGen rating={Number(5)} />
            <span className="theme-gradient text-base font-medium">
              {"(Lihat review lengkap)"}
            </span>
          </div>
          <div className="text-muted-foreground">
            mulai dari
            <span className="theme-gradient text-2xl font-bold ms-2">
              {price}
            </span>
          </div>
          <MainButton text="Detail" className="mt-5" />
        </CardFooter>
      </Card>
    </ShowMoreButton>
  );
};

export default ServiceCard;
