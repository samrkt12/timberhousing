"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { Oregano } from "next/font/google";
import { CgQuote } from "react-icons/cg";
import useEmblaCarousel from "embla-carousel-react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const oregano = Oregano({ subsets: ["latin"], display: "swap", weight: "400" });
type Props = {};

const servicesData = [
  {
    image: "/service1.jpg",
    title: "Timber Cottage",
    description:
      "Cozy, handcrafted timber cottages designed for comfort and natural charm.",
    link: "/wooden-cottage",
  },
  {
    image: "/service2.jpg",
    title: "Timber House",
    description:
      "Luxurious timber villas offering elegance and sustainability in every detail.",
    link: "/wooden-house",
  },
  {
    image: "/service3.jpg",
    title: "Pergola/Gazebo",
    description:
      "Elegant timber pergolas, perfect for enhancing your outdoor living spaces.",
    link: "/wooden-pergola-gazebo",
  },
  {
    image: "/service1.jpg",
    title: "Timber Cafe",
    description: "Elegant cafes perfect for gardens and outdoor spaces.",
    link: "/wooden-cafe",
  },
];

const HighlightedServices = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 3,
  });
  const [emblaIsActive, setEmblaIsActive] = useState(false);
  const initEmblaBelow1024px = useCallback(() => {
    const isActive = window.innerWidth > 1024;
    setEmblaIsActive(isActive);
  }, [setEmblaIsActive]);

  useEffect(() => {
    initEmblaBelow1024px();
    window.addEventListener("resize", initEmblaBelow1024px);
    return () => window.removeEventListener("resize", initEmblaBelow1024px);
  }, [initEmblaBelow1024px]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (embla) {
        embla.scrollTo(index * 3);
        setSelectedIndex(index);
      }
    },
    [embla]
  );

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());

    const index = Math.floor(embla.selectedScrollSnap() / 3);
    setSelectedIndex(index);
  }, [embla]);

  React.useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  React.useEffect(() => {
    if (!embla) return;
    embla.on("select", () => {
      setSelectedIndex(embla.selectedScrollSnap() / 3);
    });
  }, [embla]);

  return (
    <section className="w-full  bg-[#F6F3F6] overflow-hidden pt-8 lg:pt-12 pb-8 lg:pb-16 ">
      <div className="flex flex-col items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex items-center justify-center mb-1 lg:mb-1.5">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
          <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
            Services
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
        </div>

        <div className="flex w-fit relative">
          <CgQuote className=" text-primary-base relative -top-1 lg:-top-3 -right-1 w-4 h-4  md:w-6 md:h-6 lg:w-8 lg:h-8" />
          <p
            className={`${oregano.className} mx-auto text-center text-xl md:text-xl lg:text-2xl leading-7 mb-1.5 lg:mb-2 text-[#454545]`}
          >
            What we build today makes all the difference{" "}
            <span className="text-primary-base">tomorrow.</span>
          </p>
          <CgQuote className=" text-primary-base relative -top-1 lg:-top-3 right-1 w-4 h-4  md:w-6 md:h-6  lg:w-8 lg:h-8" />
        </div>

        <p className="text-sm lg:text-base mb-6 lg:mb-10 max-w-[55ch] lg:max-w-[70ch] mx-auto font-light text-center text-[#636363]">
          Our wide selection of{" "}
          <span className="font-medium">timber based</span> home, resorts, Cafe,
          Gazibo, and Villas have both traditional and modern architectural
          solutions with high-quality materials. Our services include timely
          project completion and comprehensive post-construction support.
        </p>

        {/* Carousel */}
        <div className="relative w-full">
          <div
            className="overflow-hidden"
            ref={emblaIsActive ? emblaRef : null}
          >
            <div className="flex justify-center lg:justify-start gap-x-3 md:gap-x-6 lg:gap-x-0 lg:mx-0  flex-wrap lg:flex-nowrap">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="flex-none w-[48%] lg:w-1/3 lg:px-4 mb-4 lg:mb-0 max-w-[400px] lg:max-w-full"
                >
                  <div className="bg-white  rounded-xl overflow-hidden flex flex-col ">
                    <div className="lg:flex-shrink-0 h-1/2 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <div className="lg:flex-grow flex flex-col  items-center justify-start lg:justify-between px-1 py-2.5 lg:py-4 lg:px-6 text-center">
                      <div>
                        <h3 className="text-lg lg:text-xl lg:leading-8 font-medium my-0.5 lg:my-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#707070] font-light pb-4">
                          {service.description}
                        </p>
                      </div>
                      <a
                        href={service.link}
                        className="inline-flex items-center justify-center pl-4 pr-1 py-0.5  mb-3 rounded-full bg-whites-light text-[#222222] border border-[#C8C8C8] font-medium text-base transition-colors duration-200 group hover:bg-primary-base hover:text-white"
                      >
                        View
                        <span className="ml-2 flex items-center justify-center bg-white text-primary-base rounded-full  duration-200 transform  group-hover:bg-transparent group-hover:text-white">
                          <IoIosArrowDroprightCircle className="w-8 h-8" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            className={`absolute top-1/2 -left-2 bg-white rounded-full transform -translate-y-1/2 hidden lg:block ${
              prevBtnEnabled ? "" : "lg:hidden"
            }`}
            onClick={scrollPrev}
          >
            <IoIosArrowDropleftCircle className="w-12 h-12 text-primary-base hover:text-primary-dark  transition-colors duration-200" />
          </button>
          <button
            className={`absolute top-1/2 -right-2 bg-white rounded-full transform -translate-y-1/2 hidden lg:block ${
              nextBtnEnabled ? "" : "lg:hidden"
            }`}
            onClick={scrollNext}
          >
            <IoIosArrowDroprightCircle className="w-12 h-12 text-primary-base hover:text-primary-dark transition-colors duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighlightedServices;
