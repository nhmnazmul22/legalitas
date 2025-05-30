import { ProcessStep } from "@/types";
import parser from "html-react-parser";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

type ProcessProps = {
  process: ProcessStep[];
};

const Process: React.FC<ProcessProps> = ({ process }) => {
  return (
    <div className="mt-5">
      <Heading text="Proses" />
      {process.map((item, index) => (
        <div key={index} className="mt-2">
          <SubHeading text={item.subsection} />
          {item.content.map((value, index) => (
            <p key={`p-${index}`} className="service-paragraph">
              {parser(value)}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Process;
