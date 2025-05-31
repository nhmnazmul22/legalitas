import { Condition3Props } from "@/types";
import { CircleCheck } from "lucide-react";
import Heading from "./Heading";

const Condition3: React.FC<Condition3Props> = ({ title, content }) => {
  return (
    <div className="mt-5">
      <Heading text={title} />

      {content.map((document, index) => (
        <div key={index} className="h-fit mt-3">
          <p className="text-muted-foreground font-medium text-sm mb-3">
            {document.title}
          </p>
          <ol type="1" className="flex flex-col gap-2 list-decimal">
            {document.item.map((value, index) => (
              <li
                key={`${value}-${index}`}
                className="text-sm text-muted-foreground flex gap-2"
              >
                <CircleCheck className="text-green-500 " size={24} />
                <span className="flex-1">{value}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Condition3;
