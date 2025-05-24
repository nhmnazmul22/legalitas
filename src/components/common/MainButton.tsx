import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

type MainButtonProps = {
  className?: string;
  link?: string;
  text: string;
};

const MainButton: React.FC<MainButtonProps> = ({ className, link, text }) => {
  return (
    <Link href={link ? link : ""}>
      <Button
        className={cn(
          "btn-gradient w-[210px] h-[50px] text-base font-bold flex items-center group rounded-sm",
          className && className
        )}
      >
        {text}
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </Button>
    </Link>
  );
};

export default MainButton;
