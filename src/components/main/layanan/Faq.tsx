import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/types";
import Heading from "./Heading";

type FaqProps = {
  faq: FAQ[];
};

const Faq: React.FC<FaqProps> = ({ faq }) => {
  return (
    <div className="mt-5">
      <Heading text="FAQ" />
      <Accordion type="single" collapsible>
        {faq.map((value, index) => (
          <AccordionItem
            key={`${value.question}-${index}`}
            value={value.question}
          >
            <AccordionTrigger className="text-base">
              {value.question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground text-sm leading-[24px]">
              {value.ans}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
