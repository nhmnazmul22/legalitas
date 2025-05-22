import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

type SectionHeadingProps = {
  badgeText: string;
  title: string;
  subTitle?: string;
  classes?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subTitle,
  classes,
}) => {
  return (
    <div className="text-center">
      <Badge
        className={cn(
          "mx-auto bg-secondary/15 text-secondary text-sm font-semibold px-4 py-1 uppercase rounded-full",
          classes
        )}
      >
        {badgeText}
      </Badge>
      <h2 className="mt-8 text-4xl lg:text-6xl lg:leading-[80px] theme-gradient font-extrabold">
        {title} <br /> {subTitle && subTitle}
      </h2>
    </div>
  );
};

export default SectionHeading;
