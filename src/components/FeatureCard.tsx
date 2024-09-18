import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className="flex-shrink-0 w-[160px] h-[160px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] rounded-[10px]  overflow-hidden border-2 border-[rgba(241,234,232,1)] mr-3 md:mr-7 lg:mr-10">
      {/* Upper Half */}
      <div className="bg-[#FEF8F7] w-full flex justify-center items-center h-[38%] lg:h-[45%]">
        <div className="w-[3rem] h-[3rem] md:h-[3.5rem] md:w-[3.5rem]  lg:w-[5rem] lg:h-[5rem]  flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>
      {/* Lower Half */}
      <div className="p-3 lg:p-4 flex  flex-col items-center justify-center bg-whites-light h-[62%] lg:h-[55%]">
        <h3 className="text-sm md:text-base lg:text-lg leading-4 md:leading-5 font-medium mb-1 md:mb-[6px] lg:mb-[10px] text-whites-darkest">
          {title}
        </h3>
        <p className="text-[13px] md:text-sm lg:text-base text-center font-light text-[#737373]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
