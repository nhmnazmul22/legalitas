type HeadingProps = {
  text: string;
};

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold ">{text}</h3>
  );
};

export default Heading;
