import Image from "next/image";
import React, { Fragment } from "react";

type ServiceBasicInfoProps = {
  thumbnail: string;
  description: string;
  lotsOfBonus: {
    bonusTitle: string;
    bonusSubTitle: string;
    icon: string;
  }[];
};

const ServiceBasicInfo: React.FC<ServiceBasicInfoProps> = ({
  thumbnail,
  description,
  lotsOfBonus,
}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-5 items-start">
      <figure>
        <Image
          src={thumbnail}
          alt="Service Banner"
          width={1024}
          height={1024}
          className="rounded-md w-full h-auto object-cover"
        />
      </figure>
      <div className="">
        <p className="text-base md:text-lg leading-[26px] md:leading-[36px]">
          {description}
        </p>
        {lotsOfBonus.length > 0 && (
          <div className="hero-banner p-5 rounded-md border border-primary/20 shadow mt-5">
            <h3 className="text-lg font-semibold theme-gradient">
              Banyak bonus:
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-5">
              {lotsOfBonus.map((item, index) => (
                <Fragment key={`${item.bonusTitle}-${index}`}>
                  <li className="flex items-center gap-2">
                    <Image
                      src={item.icon}
                      alt={item.bonusTitle}
                      width={300}
                      height={300}
                      className="w-10"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {item.bonusTitle}
                      </span>
                      <span className="text-sm"> {item.bonusSubTitle}</span>
                    </div>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceBasicInfo;
