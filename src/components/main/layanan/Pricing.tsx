import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PricingType } from "@/types";
import { CircleCheck, X } from "lucide-react";
import Image from "next/image";
import Heading from "./Heading";

type PricingProps = {
  pricing: PricingType;
};

const Pricing: React.FC<PricingProps> = ({ pricing }) => {
  return (
    <div className="mt-5">
      <Heading text="Pricing" />
      <Table>
        <TableHeader>
          <TableRow className="bg-secondary-blue hover:bg-secondary-blue">
            <TableHead className="font-bold text-white text-left whitespace-normal"></TableHead>
            {pricing.plans.map((value, index) => (
              <TableHead
                key={`${value}-${index}`}
                className="font-bold text-white text-center max-w-[130px] whitespace-normal"
              >
                {value}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left whitespace-normal">Harga</TableCell>
            <TableCell className="text-center whitespace-normal">
              {pricing.prices["plans-1"]}
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              {pricing.prices["plans-2"]}
            </TableCell>
            <TableCell className="text-center whitespace-normal">
              {pricing.prices["plans-3"]}
            </TableCell>
          </TableRow>
          {pricing.features.map((value, index) => (
            <TableRow key={`${value.name}-${index}`}>
              <TableCell className="text-left whitespace-normal">
                {value.name}
              </TableCell>
              <TableCell className="text-center whitespace-normal">
                {value.plans["plans-1"] === true ? (
                  <CircleCheck className="mx-auto text-green-500" />
                ) : (
                  <X className="text-destructive mx-auto border-[2px] rounded-full p-[2px] border-destructive" />
                )}
              </TableCell>
              <TableCell className="text-center whitespace-normal">
                {value.plans["plans-2"] === true ? (
                  <CircleCheck className="mx-auto text-green-500" />
                ) : (
                  <X className="text-destructive mx-auto border-[2px] rounded-full p-[2px] border-destructive" />
                )}
              </TableCell>
              <TableCell className="text-center whitespace-normal">
                {value.plans["plans-3"] === true ? (
                  <CircleCheck className="mx-auto text-green-500" />
                ) : (
                  <X className="text-destructive mx-auto border-[2px] rounded-full p-[2px] border-destructive" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-5">
        <figure className="rounded-md overflow-hidden w-full">
          <Image
            src={pricing.footerImg}
            alt="Price Gallery"
            width={1024}
            height={1024}
            className="w-full h-auto"
          />
        </figure>
      </div>
    </div>
  );
};

export default Pricing;
