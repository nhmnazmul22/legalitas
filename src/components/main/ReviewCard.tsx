import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RatingGen from "../common/RatingGen";

const ReviewCard = () => {
  return (
    <Card className="max-w-[420px] py-10 px-5 border-0 shadow-md rounded-md ">
      <CardHeader className="flex items-center gap-5 relative">
        <Avatar className="w-[60px] h-[60px] ring-2 ring-primary/20 p-[2px]">
          <AvatarImage src="/images/avater.png" />
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-lg font-extrabold">
            Karina Nadia Paramitha
          </CardTitle>
          <CardDescription>
            <RatingGen rating={5} />
          </CardDescription>
        </div>
        <Quote
          size={44}
          className="absolute top-[-10px] right-0 stroke-primary/20"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-base text-muted-foreground font-semibold leading-[30px] italic">
          {`"Saya sudah 3 kali membuat PT disini, pelayanan sangat baik dan respons
          cepat. Terima Kasih terutama kepada PIC Endang, Natalia, dan Angga
          yang senantiasa membantu."`}
        </p>
        <Link
          href="/"
          className="text-primary italic font-semibold transition-all duration-300 hover:underline  underline-offset-2"
        >
          Lengkapnya
        </Link>
      </CardContent>
      <CardFooter className="mt-2">
        <Image
          src="/images/google-logo.png"
          alt="Google Logo"
          width={300}
          height={300}
          className="max-w-[150px] h-auto"
        />
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
