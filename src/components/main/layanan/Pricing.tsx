import MainButton from "@/components/common/MainButton";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PricingType, PricingType2 } from "@/types";
import { CircleCheck, RefreshCcw, X } from "lucide-react";
import Image from "next/image";
import Heading from "./Heading";
import Portfolio from "./Portfolio";

type PricingProps = {
  pricing?: PricingType;
  pricing2?: PricingType2[];
  isPortfolio?: boolean;
};

const Pricing: React.FC<PricingProps> = ({
  pricing,
  pricing2,
  isPortfolio,
}) => {
  return (
    <div className="mt-5">
      <Heading text="Pricing" />
      {pricing && (
        <>
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
                <TableCell className="text-left whitespace-normal">
                  Harga
                </TableCell>
                <TableCell className="text-center whitespace-normal">
                  {pricing.prices["plans-1"]}
                </TableCell>
                <TableCell className="text-center whitespace-normal">
                  {pricing.prices["plans-2"]}
                </TableCell>
                {pricing.plans.length === 3 && (
                  <TableCell className="text-center whitespace-normal">
                    {pricing.prices["plans-3"]}
                  </TableCell>
                )}
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
                  {value.plans["plans-3"] && (
                    <TableCell className="text-center whitespace-normal">
                      {value.plans["plans-3"] === true ? (
                        <CircleCheck className="mx-auto text-green-500" />
                      ) : (
                        <X className="text-destructive mx-auto border-[2px] rounded-full p-[2px] border-destructive" />
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {pricing.footerImg && (
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
          )}
        </>
      )}
      {pricing2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pricing2.map((item, index) => (
            <div
              key={`${item.priceTitle}-${index}`}
              className="bg-primary/10 p-10 rounded-md shadow text-center"
            >
              <p className="font-semibold text-primary text-lg">
                {item.priceTitle}
              </p>
              <Separator className="border-[1px] border-primary/50 mt-5 mb-3" />
              <h3 className="text-4xl font-bold theme-gradient leading-[80px]">
                {item.price}
              </h3>
              <p className="text-xs text-muted-foreground">{item.subTitle}</p>
              <MainButton
                text="Pesan"
                className="mx-auto mt-5 w-full h-[40px] text-base"
                link="/proposal"
              />
              {item.isJobCompletion && (
                <p className="text-xs text-muted-foreground text-center flex items-center gap-2 justify-center mt-2">
                  <RefreshCcw size={14} />{" "}
                  <span className="">Jaminan pekerjaan selesai!</span>
                </p>
              )}
            </div>
          ))}
          {isPortfolio && <Portfolio />}
        </div>
      )}
    </div>
  );
};

export default Pricing;
