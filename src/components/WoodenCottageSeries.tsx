"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

type Props = {};

const cottageImages = [
  "/woodencottage/cottage1.jpg",
  "/woodencottage/cottage5.jpg",
  "/woodencottage/cottage3.jpg",
  "/woodencottage/cottage4.jpg",
  "/woodencottage/cottage2.jpg",
  "/woodencottage/cottage5.jpg",
  "/woodencottage/cottage3.jpg",
];

const WoodenCottageSeries = (props: Props) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

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
  }, [embla]);

  React.useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);
  return (
    <div className="w-full px-0 md:px-4 lg:px-16 mb-6 lg:mb-10">
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col">
          <h3 className="uppercase font-extrabold text-secondary-darkest sm:text-lg md:text-xl lg:text-2xl leading-7 md:leading-8 lg:leading-9">
            Timber Cottage{" "}
            <span className="ml-1 h-full uppercase text-primary-base text-sm sm:text-base md:text-lg lg:text-xl leading-5 lg:leading-6 font-extrabold inline-flex items-center">
              Series
            </span>
          </h3>
          <p className="text-secondary-darkest font-medium text-sm md:text-base lg:text-lg md:leading-6 lg:leading-8">
            1 Bedroom, Hall and Kitchen (BHK)
          </p>
        </div>
        <Link
          href="/wooden-cottage"
          className="text-primary-base lg:text-lg hover:text-primary-dark"
        >
          See all
        </Link>
      </div>

      {/* Image carousel */}
      <div className="relative w-full mt-1.5 lg:mt-3">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 lg:gap-6">
            {cottageImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[13rem] lg:w-[17rem] h-40 lg:h-52 overflow-hidden rounded-[10px] shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Cottage ${index}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          className={`absolute top-1/2  -left-4 lg:-left-5 bg-white rounded-full transform -translate-y-1/2 ${
            prevBtnEnabled ? "" : "hidden"
          }`}
          onClick={scrollPrev}
        >
          <IoIosArrowDropleftCircle className="w-8 h-8 lg:w-10 lg:h-10 text-primary-base hover:text-primary-dark transition-colors duration-200" />
        </button>
        <button
          className={`absolute top-1/2 -right-4 lg:-right-5 bg-white rounded-full transform -translate-y-1/2 ${
            nextBtnEnabled ? "" : "hidden"
          }`}
          onClick={scrollNext}
        >
          <IoIosArrowDroprightCircle className="w-8 h-8 lg:w-10 lg:h-10 text-primary-base hover:text-primary-dark transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
};

export default WoodenCottageSeries;
