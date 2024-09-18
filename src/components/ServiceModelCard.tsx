import React from "react";
import Image from "next/image";
import { ModelData } from "@/utils/modelsData";
import Link from "next/link";

const ServiceModelCard = ({ model }: { model: ModelData }) => {
  return (
    <div className="model-card border rounded-[10px] shadow-lg flex flex-col overflow-hidden  p-1 lg:p-2">
      <div className="w-full h-full relative overflow-hidden">
        <Image
          src={model.modelImagesWithLand[0]}
          alt={model.name}
          width={700}
          height={500}
          className="object-cover w-full h-full overflow-hidden rounded-lg"
        />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent to-black opacity-30 rounded-lg overflow-hidden" />
      </div>

      <div className="px-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#606060] text-xs md:text-sm mt-3 md:mt-4  md:mb-1">
              {model.description}
            </p>
            <h4 className="text-[#1D1D1D] text-sm sm:text-base md:text-lg leading-6 font-medium mb-3">
              {model.name}
            </h4>
          </div>
          <div>
            <Link href={`models/${model.id}`} className="group">
              <button className="border border-[#B0B0B0] px-2.5 md:px-3 py-[3px]  text-[13px] md:text-base text-[#4D4453] md:leading-7 lg:leading-8 font-medium rounded-[62px] group-hover:text-primary-base transition-colors duration-300 group-hover:border-primary-base">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        <div className="text-[#292929] border border-[#DFDFDF] rounded-[10px] py-1 pb-0 mb-2 md:mb-3">
          <div className="flex justify-between text-sm mb-1.5 md:mb-2 px-2">
            <span className="font-light text-[13px] md:text-base leading-5">
              No. of floors:
            </span>
            <span className="text-[#1B1B1B] font-medium leading-5">
              {model.floorCount}
            </span>
          </div>
          <div className="flex justify-between text-sm mb-1.5 md:mb-2 bg-[#F9F9F9] py-1 px-2">
            <span className="font-light text-[13px] md:text-base leading-5 ">
              No. of bedrooms:
            </span>
            <span className="text-[#1B1B1B] font-medium leading-5">
              {model.bedroomCount}
            </span>
          </div>
          <div className="flex justify-between text-sm mb-1.5  md:mb-2 px-2">
            <span className="font-light text-[13px] md:text-base leading-5">
              Gross living area:
            </span>
            <span className="text-[#1B1B1B] font-medium leading-5">
              {model.grossLivingArea} sqft
            </span>
          </div>
          <div className="flex justify-between text-sm bg-[#F9F9F9] py-1 px-2 mb-1">
            <span className="font-light text-[13px]  md:text-base leading-5">
              Total area:
            </span>
            <span className="text-[#1B1B1B] font-medium leading-5">
              {model.totalArea} sqft
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModelCard;
