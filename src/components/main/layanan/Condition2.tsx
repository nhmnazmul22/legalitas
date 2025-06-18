import { CircleCheck } from "lucide-react";
import Heading from "./Heading";

type Condition2Props = {
  requiredDocuments: string[][];
};

const Condition2: React.FC<Condition2Props> = ({ requiredDocuments }) => {
  return (
    <div className="mt-5">
      <Heading text="Dokumen Persyaratan" />
      <div
        className={`grid grid-cols-1 ${
          requiredDocuments.length === 2 && "md:grid-cols-2"
        } gap-4 items-start`}
      >
        {requiredDocuments.map((document, index) => (
          <div key={index} className="h-fit">
            <p className="text-muted-foreground font-medium text-sm mb-3">
              Apabila pelaku usaha perseorangan:
            </p>
            <ol type="1" className="flex flex-col gap-2 list-decimal">
              {document.map((value, index) => (
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
    </div>
  );
};

export default Condition2;
