import { Badge } from "../ui/badge";

type SectionHeadingProps = {
  badgeText: string;
  title: string;
  subTitle?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subTitle,
}) => {
  return (
    <div className="text-center">
      <Badge className="mx-auto bg-secondary/15 text-secondary text-sm font-semibold px-4 py-1 uppercase rounded-full">
        {badgeText}
      </Badge>
      <h2 className="mt-3 text-4xl lg:text-6xl lg:leading-[80px] theme-gradient font-bold">
        {title} <br /> {subTitle && subTitle}
      </h2>
    </div>
  );
};

export default SectionHeading;
