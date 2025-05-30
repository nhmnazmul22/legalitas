import { CircleCheck } from "lucide-react";
import Image from "next/image";
import BlogCard from "../BlogCard";
import Heading from "./Heading";

type ConditionProps = {
  isSingleBlog?: boolean;
  requireDocuments: string[];
  choosingBusinessField: string[];
};

const Condition: React.FC<ConditionProps> = ({
  isSingleBlog,
  requireDocuments,
  choosingBusinessField,
}) => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      <div className="h-fit">
        <Heading text="Dokumen Persyaratan" />
        <ul className="flex flex-col gap-2">
          {requireDocuments.map((value, index) => (
            <li
              key={`${value}-${index}`}
              className="text-sm md:text-base flex gap-2"
            >
              <CircleCheck className="text-green-500 " size={24} />
              <span className="flex-1">{value}</span>
            </li>
          ))}
        </ul>
      </div>
      {isSingleBlog && (
        <div className="h-fit">
          <Heading text="Blog PT Perorangan" />
          <BlogCard
            thumbnail="/images/blog-1.png"
            title="Panduan Lengkap PT Perorangan"
            link="/"
            shortDes="Dalam istilah hukum perkawinan terdapat istilah Perjanjian Pra Nikah"
          />
        </div>
      )}
      <div className="h-fit">
        <Heading text="Dokumen Persyaratan" />
        <figure className="rounded-md overflow-hidden mb-3">
          <Image
            src="/images/document-banner.png"
            alt="Document Banner"
            width={500}
            height={500}
          />
        </figure>
        <ul className="flex flex-col gap-2">
          {choosingBusinessField.map((value, index) => (
            <li
              key={`${value}-${index}`}
              className="text-sm md:text-base flex gap-2"
            >
              <CircleCheck className="text-green-500 " size={24} />
              <span className="flex-1">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Condition;
