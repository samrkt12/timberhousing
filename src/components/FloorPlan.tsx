"use client";
import React from "react";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Lightbox } from "yet-another-react-lightbox"; // Assuming you're using this package or similar
import "yet-another-react-lightbox/styles.css"; // Import styles if required
import { Floor } from "@/utils/modelsData";
import NextJsImage from "./NextJsImage";
import { Download, Fullscreen } from "yet-another-react-lightbox/plugins";

type FloorPlanProps = {
  modelName: string;
  floors: {
    [key: string]: Floor;
  };
};

const FloorPlan = ({ modelName, floors }: FloorPlanProps) => {
  const [open, setOpen] = React.useState<string | null>(null);

  const handleOpenLightbox = (image: string) => {
    setOpen(image);
  };

  return (
    <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-2.5 md:px-4 lg:px-0 py-2  my-2 lg:my-3 mb-0">
      <div className="flex items-center justify-center mb-0.5 md:mb-1 lg:mb-1.5">
        <Image
          src="/vector1.png"
          width={350}
          height={5}
          alt="vector line"
          className="w-10 md:w-[200px] lg:w-[350px]"
        />
        <h2 className="mx-1  text-[22px] leading-[30px] lg:text-3xl lg:leading-10   font-semibold text-[#352E39] whitespace-nowrap">
          Floor plan
        </h2>
        <Image
          src="/vector2.png"
          width={350}
          height={5}
          alt="vector line"
          className="w-10 md:w-[200px] lg:w-[350px]"
        />
      </div>
      <p className="text-sm lg:text-base mb-5 lg:mb-16 max-w-[58ch] mx-auto font-light text-center text-[#636363] px-6 lg:px-0">
        {`Take a look at the floor plan of ${modelName}`}
      </p>

      {Object.entries(floors).map(([floorName, floorData], index) => (
        <div key={floorName} className="w-full mb-6 md:mb-10 lg:mb-16">
          {/* First Row: Image + Content */}
          <div
            className={`flex flex-col  ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } w-full gap-4 lg:gap-16`}
          >
            <div className="flex-shrink-0 w-full max-w-[550px] mx-auto lg-mx-0 lg:max-w-[710px] lg:w-[710px] h-auto rounded-[12px] overflow-hidden ">
              <Image
                src={floorData.images[0]}
                width={710}
                height={470}
                alt={`${floorName} image 1`}
                className="object-contain w-full h-full cursor-pointer"
                onClick={() => handleOpenLightbox(floorData.images[0])}
              />
            </div>
            <div className="flex-1 w-full max-w-[500px] bg-[#F5F5F5] h-fit rounded-2xl  mx-auto lg-mx-0 px-4 md:px-5 lg:px-8  lg:mx-0 pb-5 py-3 md:py-5 lg:py-10">
              <h3 className="text-[#1B1B1B]  text-xl md:text-2xl lg:text-[30px] leading-8 md:leading-9 lg:leading-10 font-semibold mb-3 lg:mb-6">
                {floorName}
              </h3>
              <p className="text-[#1B1B1B] text-lg lg:text-[22px] leading-5 mb-4 lg:mb-6 font-medium">
                Total area: <span>{floorData.totalArea} sqft</span>
              </p>
              <ul className="list-none space-y-3 lg:space-y-5">
                {floorData.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-[#313131] lg:text-lg leading-6"
                  >
                    <IoIosCheckmarkCircle className="text-[#4A3456]  w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second Row: Second Image centered */}
          <div className="flex justify-center mt-4 lg:mt-8">
            <div className="w-full max-w-[1100px] h-auto lg:h-[500px] rounded-[12px] overflow-hidden ">
              <Image
                src={floorData.images[1]}
                width={1000}
                height={470}
                alt={`${floorName} image 2`}
                className="object-contain  w-full h-full cursor-pointer"
                onClick={() => handleOpenLightbox(floorData.images[1])}
              />
            </div>
          </div>

          <div className="h-1 w-full mt-3 mx-auto">
            <Image
              src="/vector4.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-full mx-auto"
            />
          </div>
        </div>
      ))}

      {open && (
        <Lightbox
          open={!!open}
          close={() => setOpen(null)}
          slides={[{ src: open }]}
          render={{
            slide: NextJsImage,
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
          plugins={[Fullscreen, Download]}
        />
      )}
    </div>
  );
};

export default FloorPlan;
