import Image from "next/image";
import React from "react";
import Homepage3d from "./Homepage3d";

type Props = {};

const prefabricatedData = [
  {
    image: "/unique10.png",
    title: "Superior Quality:",
    description:
      "We use high-quality, dried materials, crafted in a controlled environment with advanced CNC machinery, ensuring top-notch surface quality.",
    bgColor: "white",
  },
  {
    image: "/unique4.png",
    title: "Precision and Compatibility:",
    description:
      "We ensures each house is precisely manufactured and all parts fit perfectly together.",
    bgColor: "#F9F9F9",
  },
  {
    image: "/unique5.png",
    title: "Quick and Accurate Construction:",
    description:
      "Fully automated CNC machines make the production process fast and highly accurate.",
    bgColor: "#F9F9F9",
  },
  {
    image: "/unique6.png",
    title: "Ready-to-Install Walls:",
    description:
      "The walls come fully prepared, requiring no further processing, just surface finishing by the client.",
    bgColor: "white",
  },
  {
    image: "/unique8.png",
    title: "Easy Assembly:",
    description:
      "All parts are numbered and packed in order, making on-site setup fast and cost-effective.",
    bgColor: "white",
  },
  {
    image: "/unique7.png",
    title: "Stable Structure:",
    description:
      "Glued laminated timber maintains its shape and doesn’t require long settling times, speeding up the finishing process.",
    bgColor: "#F9F9F9",
  },
  {
    image: "/unique9.png",
    title: "Lightweight and Strong:",
    description:
      "Wood offers an excellent balance between weight and strength, making it an ideal building material.",
    bgColor: "white",
  },
];

const WhyPrefabricated = (props: Props) => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F6F3F7] to-[#FFFFFF] overflow-hidden pt-8 lg:pt-12 pb-4 lg:pb-16 mb-8 lg:mb-24">
      <Homepage3d />
      <div className="flex flex-col items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-center mb-6 lg:mb-12">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[300px]"
          ></Image>
          <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10   font-semibold text-[#352E39] text-center lg:whitespace-nowrap">
            Why Choose Prefabricated Timber Houses?
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[300px]"
          ></Image>
        </div>

        <div className="flex flex-wrap  gap-3 lg:gap-6  justify-center  ">
          {prefabricatedData.map((data, index) => (
            <div
              key={index}
              className={`py-3 lg:py-6 px-3 lg:px-5 w-full bg-[${data.bgColor}] flex gap-5 items-center lg:max-w-[58ch] border border-[#C9C9C9] rounded-xl shadow-lg`}
            >
              <div className="flex-shrink-0 w-10 h-10 lg:h-12 lg:w-12">
                <Image
                  src={data.image}
                  alt={data.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                ></Image>
              </div>
              <div className="flex flex-col gap-1 justify-center items-start">
                <h3 className="text-[#181818] font-medium text-lg lg:text-xl">
                  {data.title}
                </h3>
                <p className="text-[#3F3F3F] font-light text-sm lg:text-base">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPrefabricated;
