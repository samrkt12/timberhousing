"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
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

type PropertyImageCarouselProps = {
  porpertyImages: string[];
};

const PropertyImageCarousel = ({
  porpertyImages,
}: PropertyImageCarouselProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideshowRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const zoomRef = useRef(null);

  const remainingImagesCount = porpertyImages.length - 4;

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="relative w-[700px] h-[520px] rounded-[10px]">
      {/* Main Image */}
      <div
        className="relative w-full h-[460px] cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => handleImageClick(0)}
      >
        <Image
          src={porpertyImages[0]}
          alt="Main"
          width={800}
          height={600}
          className="w-full h-full object-cover rounded-[10px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50 rounded-[10px]" />
      </div>

      {/* Thumbnails */}
      <div className="absolute flex w-full bottom-0 justify-evenly">
        {porpertyImages.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="relative w-[156px] h-[123px] border-[3px] border-whites-light rounded-[10px] bg-whites-light  cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() =>
              index === 3 && remainingImagesCount > 0
                ? handleImageClick(4)
                : handleImageClick(index + 1)
            }
          >
            <Image
              src={image}
              alt={`Small Image ${index + 1}`}
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-[10px]"
            />
            {index === 3 && remainingImagesCount > 0 && (
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center rounded-[10px]">
                <span className="text-white text-[20px] font-medium cursor-pointer text-center px-5 leading-[22px]">
                  View more ({remainingImagesCount})
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={porpertyImages.map((src) => ({ src }))}
        render={{ slide: NextJsImage }}
        plugins={[Fullscreen, Download, Counter, Slideshow, Thumbnails]}
        counter={{ container: { style: { top: "0", left: "2%" } } }}
        slideshow={{ ref: slideshowRef }}
        thumbnails={{ ref: thumbnailsRef }}
        zoom={{ ref: zoomRef }}
      />
    </div>
  );
};

export default PropertyImageCarousel;
