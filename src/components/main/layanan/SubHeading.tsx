import { Separator } from "@radix-ui/react-separator";

type SubHeadingProps = {
  text: string;
};

const SubHeading: React.FC<SubHeadingProps> = ({ text }) => {
  return (
    <>
      <h3 className="text-base md:text-xl font-semibold ">{text}</h3>
      <Separator className="mt-2 mb-4 border-[1px]" />
    </>
  );
};

export default SubHeading;
