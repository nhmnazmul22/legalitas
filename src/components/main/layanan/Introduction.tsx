import { IntroductionType } from "@/types";
import parser from "html-react-parser";
import Image from "next/image";
import React from "react";
import ShowMoreButton from "../ShowMoreButton";
import Heading from "./Heading";
const Introduction: React.FC<IntroductionType> = ({ content, isBoxStyle }) => {
  return (
    <ShowMoreButton>
      <div className="mt-5">
        <Heading text="Pengantar" />
        {content.map((item, index) => (
          <p key={index} className="service-paragraph">
            {parser(item)}
          </p>
        ))}
        {isBoxStyle && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <div className="bg-primary/10 p-5 rounded-md shadow">
              <Image
                src="/images/main-service-icon-01.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-14"
              />
              <p className="text-sm mt-4">22 Tahun Melayani</p>
            </div>
            <div className="bg-primary/10 p-5 rounded-md shadow">
              <Image
                src="/images/main-service-icon-02.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-14"
              />
              <p className="text-sm mt-4">Pendekatan Hukum</p>
            </div>
            <div className="bg-primary/10 p-5 rounded-md shadow">
              <Image
                src="/images/main-service-icon-03.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-14"
              />
              <p className="text-sm mt-4">Seluruh Indonesia</p>
            </div>
            <div className="bg-primary/10 p-5 rounded-md shadow">
              <Image
                src="/images/main-service-icon-04.png"
                alt="Main Service"
                width={300}
                height={300}
                className="w-14"
              />
              <p className="text-sm mt-4">Rekanan & Partnership</p>
            </div>
          </div>
        )}
      </div>
    </ShowMoreButton>
  );
};

export default Introduction;
