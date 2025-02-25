import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const approachData = [
  {
    image: "/approach1.jpg",
    title: "Kiln Dried Wood",
    description:
      "Kiln-drying removes up to 90% of moisture, preventing decay and killing pests, thus extending timber life.",
  },
  {
    image: "/approach2.jpg",
    title: "Tongue & Groove",
    description:
      "The tongue and groove joint is a strong, edge-to-edge wood connection used in flooring and paneling. It creates a stable, flat surface and allows natural wood movement without gaps, commonly used in playhouses for added durability.",
  },
  {
    image: "/approach3.jpg",
    title: "Post and Beam Construction",
    description:
      "Post and Beam homes are pricier because they require skilled labor and high-quality timber and tongue-and-groove materials.",
  },
  {
    image: "/approach4.jpg",
    title: "Wood Cladding",
    description:
      "Wood cladding is a material applied to the outside of a building to protect the exterior from damage. It acts as a shield, keeping your building safe from the elements and extending its lifespan.",
  },
];

type Props = {};

const Approach = (props: Props) => {
  return (
    <section className="relative w-full pt-8 lg:pt-12 pb-8 lg:pb-16 overflow-hidden text-whites-light">
      <div className="absolute inset-0 z-0">
        <Image
          src="/approach-bg.jpg"
          alt="Background"
          fill
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[rgba(38,33,41,0.8)] z-5"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center h-full  w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-primary-light text-xl lg:text-2xl font-normal text-center mb-1">
          Technologies We Use
        </p>
        <div className="flex items-center justify-center mb-1 lg:mb-1.5">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
          <h2 className="mx-1  text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-medium whitespace-nowrap">
            What’s our approach?
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px] "
          ></Image>
        </div>
        <p className="text-sm lg:text-base lg:leading-[26px] mb-8 lg:mb-10 max-w-[35ch] mx-auto font-light text-center text-whites-light/70">
          We use high quality wood & follow the best possible process to build a
          strong home
        </p>

        <div className="relative z-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 gap-y-8 ">
          {approachData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start rounded-xl overflow-hidden max-w-[250px] md:max-w-[300px]"
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  width={500}
                  height={300}
                  className="w-full max-h-[100px] md:max-h-[170px] lg:max-h-[190px] mb-1.5 lg:mb-3 rounded-lg object-cover"
                />
                <h3 className="text-base lg:text-lg font-semibold mb-0.5 lg:mb-1.5">
                  {data.title}
                </h3>
                <p className="text-[14px] leading-[18px] lg:text-[15px] lg:leading-[21px] font-light text-left mb-1 lg:mb-5 text-whites-light/75">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;
