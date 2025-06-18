import { Separator } from "@/components/ui/separator";

type HeadingProps = {
  text: string;
};

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <>
      <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold ">{text}</h3>
      <Separator className="mt-2 mb-4 border-[1.2px] border-primary" />
    </>
  );
};

export default Heading;
