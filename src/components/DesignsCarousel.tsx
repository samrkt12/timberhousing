"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ModelData } from "@/utils/modelsData";
import { RiFullscreenFill } from "react-icons/ri";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Counter,
  Download,
  Fullscreen,
  Slideshow,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import NextJsImage from "./NextJsImage";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Link from "next/link";

type Props = {
  model: ModelData;
  index: number;
};

const DesignsCarousel = ({ model, index }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    axis: "y",
    loop: false,
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const slideshowRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const zoomRef = useRef(null);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    const handleResize = () => {
      if (!embla) return;

      const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
      const axis = isLargeScreen ? "y" : "x"; // Use 'y' for large screens, 'x' for small screens
      embla.reInit({ axis });
    };

    // Initialize on load and on resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleFullscreenClick = () => {
    setLightboxOpen(true);
  };

  const images = [...model.modelImagesWithLand, ...model.model3DImages];

  return (
    <>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => {
            setLightboxOpen(false);
          }}
          index={0}
          slides={images.map((src) => ({ src }))}
          render={{ slide: NextJsImage }}
          plugins={[Fullscreen, Download, Counter, Slideshow, Thumbnails]}
          counter={{ container: { style: { top: "0", left: "2%" } } }}
          slideshow={{ ref: slideshowRef }}
          thumbnails={{
            ref: thumbnailsRef,
            border: 0,
            width: 120,
            height: 70,
            borderRadius: 18,
          }}
          zoom={{ ref: zoomRef }}
        />
      )}

      <div className="relative z-20 flex flex-col  w-full lg:max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5 lg:py-7 max-w-[715px] overflow-hidden">
        {/* Card Content */}
        <div className="flex justify-between items-center mb-3 lg:mb-6">
          <div>
            <h3 className="text-xl lg:text-2xl lg:mb-1 font-semibold text-[#352E39]">
              {model.name}
            </h3>
            <p className="  text-[#6D6D6D] font-light text-sm md:text-base leading-[22px] md:leading-6">
              {model.description}
            </p>
          </div>
          <div className="hidden lg:flex gap-4">
            <Link href={`/models/${model.id}`} className="group">
              <button className="py-[7px] px-[30px] rounded-[62px] text-whites-light bg-primary-dark font-medium text-[17px] leading-8 transition-colors duration-300 group-hover:bg-primary-base">
                Floor Plan
              </button>
            </Link>
            <button className="bg-[#4D4453] text-whites-light py-[7px] px-[30px] rounded-[62px] font-medium text-[17px] leading-8 flex gap-2 items-center justify-center group ">
              <div className="w-6 h-6">
                <Image
                  src="/wapp-icon.png"
                  alt="whastapp icon"
                  width={80}
                  height={80}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                ></Image>
              </div>
              <p className="group-hover:text-green-400 transition-colors duration-300">
                WhatsApp Us
              </p>
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div
          className={`w-full flex flex-col  justify-between lg:flex-row gap-3 lg:gap-6 mb-3 lg:mb-6 lg:h-[512px] ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="relative w-full lg:w-[74%] h-auto lg:h-full overflow-hidden rounded-[12px] lg:flex-shrink-0">
            <Image
              src={images[0]}
              alt="model main image"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent/0 to-black/75 pointer-events-none" />
            <div className="absolute z-30 bottom-1.5 lg:bottom-3 w-full  flex items-center justify-between px-4 md:px-6 lg:px-7 pb-2.5 md:pb-4 cursor-default">
              <div className="text-whites-light font-medium text-lg md:text-xl lg:text-[22px] md:leading-7 leading-8 border-l-[4px] border-white px-1.5 md:px-2.5">
                Exterior view
              </div>
              <a onClick={handleFullscreenClick} className="cursor-pointer">
                <RiFullscreenFill className="w-7 h-7 lg:w-8 lg:h-8 text-white hover:scale-125 transition-all duration-300" />
              </a>
            </div>
          </div>

          <div className="relative w-full">
            <div
              className={`overflow-hidden w-full ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              ref={viewportRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-row  lg:flex-col gap-4 h-auto lg:h-[512px]">
                {images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="z-12 w-[200px] sm:w-[280px] md:w-[310px] lg:w-full flex-shrink-0 h-auto bg-white rounded-[10px] shadow-lg relative"
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={img}
                        alt={`Model ${imgIndex + 1}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full rounded-[10px] "
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-b from-transparent to-black/75 rounded-b-[10px]" />
                      {/* Icons */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows for vertical scrolling */}
            <button
              className={`hidden lg:block absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full ${
                prevBtnEnabled ? "lg:block" : "lg:hidden"
              }`}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <IoIosArrowDropupCircle className="w-10 h-10 text-primary-base hover:text-primary-dark transition-colors duration-200" />
            </button>
            <button
              className={`hidden lg:block  absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full ${
                nextBtnEnabled ? "lg:block" : "lg:hidden"
              }`}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <IoIosArrowDropdownCircle className="w-10 h-10 text-primary-base hover:text-primary-dark transition-colors duration-200" />
            </button>

            {/* Arrows for horizontal scrolling */}
            <button
              className={`lg:hidden absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full ${
                prevBtnEnabled ? "block" : "hidden"
              }`}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <IoIosArrowDropleftCircle className="w-8 h-8 text-primary-base hover:text-primary-dark transition-colors duration-200" />
            </button>

            <button
              className={`lg:hidden absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full ${
                nextBtnEnabled ? "block" : "hidden"
              }`}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <IoIosArrowDroprightCircle className="w-8 h-8 text-primary-base hover:text-primary-dark transition-colors duration-200" />
            </button>
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between gap-3 sm:px-4 lg:px-0">
          <Link href={`/models/${model.id}`} className="group w-1/2">
            <button className="py-[5px] lg:py-[7px]  w-full px-5 lg:px-[30px] rounded-[62px] text-whites-light bg-primary-dark font-medium lg:text-[17px] leading-7 lg:leading-8 group-hover:bg-primary-base transition-colors duration-300 ">
              Floor Plan
            </button>
          </Link>
          <button className="bg-[#4D4453] w-1/2 text-whites-light py-[5.5px] lg:py-[7px] px-5 lg:px-[30px]  rounded-[62px] font-medium text-[15px] lg:text-[17px] leading-7 lg:leading-8 flex gap-2 items-center justify-center group ">
            <div className="w-5 h-5 lg:w-6 lg:h-6">
              <Image
                src="/wapp-icon.png"
                alt="whastapp icon"
                width={80}
                height={80}
                className="w-full h-full group-hover:scale-110 transition-transform duration-300"
              ></Image>
            </div>
            <p className="group-hover:text-green-400 transition-colors duration-300">
              WhatsApp Us
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default DesignsCarousel;
