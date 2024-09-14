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
    <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-2 md:px-4 lg:px-0 py-4 my-4">
      <div className="flex items-center justify-center mb-1.5">
        <Image
          src="/vector1.png"
          width={350}
          height={5}
          alt="vector line"
          className="w-10 md:w-[200px] lg:w-[350px]"
        />
        <h2 className="mx-1 text-3xl leading-10 font-semibold text-[#352E39] whitespace-nowrap">
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
      <p className="text-lg mb-12 max-w-[58ch] mx-auto font-light text-center text-[#636363]">
        {`Take a look at the floor plan of ${modelName}`}
      </p>

      {Object.entries(floors).map(([floorName, floorData], index) => (
        <div key={floorName} className="w-full mb-16">
          {/* First Row: Image + Content */}
          <div
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } w-full gap-16`}
          >
            <div className="flex-shrink-0 w-[710px] h-[500px] rounded-[12px] overflow-hidden ">
              <Image
                src={floorData.images[0]}
                width={710}
                height={470}
                alt={`${floorName} image 1`}
                className="object-contain w-full h-full cursor-pointer"
                onClick={() => handleOpenLightbox(floorData.images[0])}
              />
            </div>
            <div className="flex-1 bg-[#F5F5F5] h-fit rounded-2xl px-8 py-10">
              <h3 className="text-[#1B1B1B] text-[30px] leading-10 font-medium mb-6">
                {floorName}
              </h3>
              <p className="text-[#1B1B1B] text-[22px] leading-5 mb-6 font-medium">
                Total area: <span>{floorData.totalArea} sqft</span>
              </p>
              <ul className="list-none space-y-5">
                {floorData.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-[#313131] text-lg leading-6"
                  >
                    <IoIosCheckmarkCircle className="text-[#4A3456] w-6 h-6 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second Row: Second Image centered */}
          <div className="flex justify-center mt-8">
            <div className="w-full max-w-[1100px] h-[500px]  rounded-[12px] overflow-hidden ">
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
