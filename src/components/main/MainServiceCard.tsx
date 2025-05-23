import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MainServiceItemsType } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MainServiceCard: React.FC<MainServiceItemsType> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card className="bg-secondary/15 border-0 shadow-md rounded-md gap-4">
      <CardHeader className="border-0">
        <Image
          src={icon}
          alt={title}
          width={300}
          height={300}
          className="w-12"
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-extrabold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href="/">
          <Button className="bg-secondary/20 text-secondary hover:bg-secondary hover:text-white duration-300 group">
            Lebih lanjut
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 duration-300 transition-transform"
            />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MainServiceCard;
