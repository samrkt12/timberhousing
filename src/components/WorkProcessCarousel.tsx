"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Line } from "rc-progress"; // Progress bar
import Image from "next/image";

type Step = {
  image: string;
  title: string;
  description: string;
};

type WorkProcessCarouselProps = {
  steps: Step[];
};

const WorkProcessCarousel = ({ steps }: WorkProcessCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 2000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

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
  const handleStepClick = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto mb-5 lg:mb-16">
      <div className="flex items-center justify-center my-6 md:my-8 lg:mt-[48px] lg:mb-[42px]">
        <Image
          src="/vector1.png"
          width={350}
          height={5}
          alt="vector line"
          className="w-10 md:w-[200px] lg:w-[350px]"
        />
        <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
          How it works?
        </h2>
        <Image
          src="/vector2.png"
          width={350}
          height={5}
          alt="vector line"
          className="w-10 md:w-[200px] lg:w-[350px]"
        />
      </div>
      <div className="relative flex justify-between items-center z-20 mt-5 md:my-8 lg:my-10 px-3 md:px-6 lg:px-0">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:h-[115px] lg:w-[140px]"
          >
            <div
              className={`relative z-20 cursor-pointer w-fit px-2 md:px-3.5 lg:px-5 py-1.5 lg:py-3 flex items-center justify-center rounded-full border-[2px] border-[#D75337] transition-colors duration-500 ${
                selectedIndex >= index
                  ? "bg-[#D75337] text-whites-light"
                  : "bg-whites-light text-[#D75337]"
              }`}
              onClick={() => handleStepClick(index)}
            >
              <span className=" lg:text-[22px] leading-4 md:leading-[22px] lg:leading-[26px] font-bold">
                {index + 1}
              </span>
            </div>
            <p
              className={`text-base mt-3 max-w-[20ch] hidden lg:block text-center ${
                selectedIndex >= index
                  ? "text-[#161616] font-medium"
                  : "text-[#696969]"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
        <div className="absolute inset-0 transform translate-y-[46%] lg:translate-y-[21%] z-10 w-[90%] mx-auto">
          <Line
            percent={selectedIndex * (100 / steps.length + 2)}
            strokeWidth={0.5}
            strokeColor="#D75337"
          />
        </div>
      </div>

      <div
        className={`overflow-hidden w-full  ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        ref={emblaRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          {steps.map((step, index) => (
            <div className="flex-none w-full text-center p-4 " key={index}>
              <div className="w-full max-w-[560px] md:w-[560px] h-[300px] md:h-[350px] lg:h-[410px] mx-auto mb-3 md:mb-8 lg:mb-12">
                <Image
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  width={1000}
                  height={800}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative mx-auto text-left w-fit px-6 lg:px-0">
                <div className="relative z-30 h-[120px]">
                  <h2 className="text-[#161616] text-lg md:text-xl lg:text-2xl leading-6 font-medium mb-1.5 lg:mb-[10px]">
                    {index + 1}. {step.title}
                  </h2>
                  <p className="lg:text-lg text-[#434343] max-w-[60ch] font-light">
                    {step.description}
                  </p>
                </div>
                <span className="absolute left-[-25%] lg:left-[-48%] bottom-[-20%] lg:bottom-[-35%] transform translate-x-1/2 text-[#F2F2F2] text-[130px] lg:text-[190px] leading-[200px] lg:leading-[240px] font-semibold z-10">
                  {`0${index + 1}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcessCarousel;
