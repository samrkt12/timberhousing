"use client";

import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Image from "next/image";
import { RiFullscreenFill } from "react-icons/ri";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Counter,
  Download,
  Fullscreen,
  Slideshow,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/counter.css";

type Props = {
  images: string[];
};

const Carousel3d = ({ images }: Props) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const slideshowRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const zoomRef = useRef(null);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  const onSelect = React.useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    setSelectedIndex(embla.selectedScrollSnap());
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

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full">
      {lightboxOpen && (
        <>
          <div className="fixed inset-0 bg-gray-700 bg-opacity-92 flex items-center justify-center overflow-y-auto z-[100]" />
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={lightboxIndex}
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
        </>
      )}
      <div className="relative w-full mt-4 md:mt-7 lg:mt-10">
        <div
          className={`overflow-hidden w-full ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          ref={emblaRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex w-full px-2.5 md:px-4 lg:px-0">
            {images.map((img, index) => (
              <div
                key={index}
                className="z-12 w-full md:w-fit h-fit flex-shrink-0 bg-white rounded-[15px] shadow-lg relative mr-8"
              >
                <div className="w-full md:w-[460px] h-[220px] sm:h-[280px] md:h-[260px] relative overflow-hidden rounded-[20px]">
                  <Image
                    src={img}
                    alt={`Model ${index + 1}`}
                    width={600}
                    height={460}
                    className="object-cover w-full h-full"
                    onClick={() => handleImageClick(index)}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-b from-transparent to-black opacity-80 rounded-b-[10px]" />

                  <div className="absolute z-30 bottom-4 w-full flex items-center justify-end px-4">
                    <a
                      onClick={() => handleImageClick(index)}
                      className="cursor-pointer"
                    >
                      <RiFullscreenFill className="w-7 h-7 text-white hover:scale-125 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-3 md:mt-5 lg:mt-10 mx-auto max-w-[1200px] px-3  ">
          <button
            className={`rounded-full  ${
              prevBtnEnabled ? "" : "opacity-70 cursor-not-allowed"
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <IoIosArrowDropleftCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-[55px] lg:h-[55px] text-secondary-base rounded-full " />
          </button>

          <div className="flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`px-3 md:px-4 py-0.5 flex items-center rounded-full transition-transform duration-300 mr-2 ${
                  index === selectedIndex
                    ? "bg-primary-base scale-110 lg:scale-125 text-whites-light"
                    : "text-[#777777]"
                }`}
              >
                <p className="text-sm md:text-xl ">{index + 1}</p>
              </div>
            ))}
          </div>

          <button
            className={`rounded-full ${
              nextBtnEnabled ? "" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <IoIosArrowDroprightCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-[55px] lg:h-[55px] text-secondary-base rounded-full " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel3d;
