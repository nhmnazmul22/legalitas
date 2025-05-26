import RatingGen from "@/components/common/RatingGen";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LayananFilter = () => {
  return (
    <div className="lg:max-w-[340px] w-full bg-white rounded-md shadow-md p-5 h-fit">
      <div className="flex items-center gap-1 ps-2 py-1 border rounded-md shadow-sm">
        <Search size={22} />
        <Input
          placeholder="Cari layanan.."
          className="text-sm border-0 flex-1 focus-visible:ring-0 shadow-none"
        />
      </div>
      <div className="my-5">
        <h3 className="text-xl font-semibold">Rating</h3>
        <Separator className="my-3 border-[1.5px]" />
        <div className="">
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="star-5" id="star-5" />
              <div className="flex items-center justify-between flex-1">
                <RatingGen rating={5} />
                <Badge variant="outline" className="text-muted-foreground">
                  5
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="star-4" id="star-4" />
              <div className="flex items-center justify-between flex-1">
                <RatingGen rating={4} />
                <Badge variant="outline" className="text-muted-foreground">
                  4
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="star-3" id="star-3" />
              <div className="flex items-center justify-between flex-1">
                <RatingGen rating={3} />
                <Badge variant="outline" className="text-muted-foreground">
                  3
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="star-2" id="star-2" />
              <div className="flex items-center justify-between flex-1">
                <RatingGen rating={2} />
                <Badge variant="outline" className="text-muted-foreground">
                  2
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="star-1" id="star-1" />
              <div className="flex items-center justify-between flex-1">
                <RatingGen rating={1} />
                <Badge variant="outline" className="text-muted-foreground">
                  1
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="semua" id="semua" />
              <Badge variant="outline" className="text-muted-foreground">
                Semua
              </Badge>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-xl font-semibold">Promo</h3>
        <Separator className="my-3 border-[1.5px]" />
        <p className="text-sm">Voucher Diskon 10%</p>
        <Link href="/proposal">
          <figure className="max-w-[300px] mt-3">
            <Image
              src="/images/voucher-img.png"
              alt="Voucher img"
              width={500}
              height={500}
            />
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default LayananFilter;
