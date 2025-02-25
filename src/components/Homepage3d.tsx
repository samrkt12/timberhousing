"use client";

import React from "react";
import Image from "next/image";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { Md3dRotation } from "react-icons/md";
import { RiFullscreenFill } from "react-icons/ri";
import useEmblaCarousel from "embla-carousel-react";
import Button from "./UI/Button";
import ContactModal from "./ContactModal";
import useContactHandler from "@/utils/useContactHandler";

type Props = {};

const modelsData = [
  { image: "/3dmodels/model4.png", modelLink: "/3dmodels/model1" },
  { image: "/3dmodels/model2.png", modelLink: "/3dmodels/model2" },
  { image: "/3dmodels/model1.png", modelLink: "/3dmodels/model3" },
  { image: "/3dmodels/model3.png", modelLink: "/3dmodels/model1" },
  { image: "/3dmodels/model2.png", modelLink: "/3dmodels/model2" },
  { image: "/3dmodels/model1.png", modelLink: "/3dmodels/model3" },
];

const Homepage3d = (props: Props) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(true);

  const { handleContactClick, isModalOpen, closeModal } = useContactHandler();

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  const onSelect = React.useCallback(() => {
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
    <>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      <div className="relative z-20 w-full flex flex-col items-center max-w-screen-xl mx-auto px-4 md:px-6 lg:px-16 mb-16 lg:mb-24">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="text-center lg:text-left mx-auto lg:mx-0">
            <h3 className="text-[#352E39] text-[22px] lg:text-[27px] leading-7 lg:leading-10 font-semibold mb-0.5">
              Get a glimpse of our personalized 3D models
            </h3>
            <p className="text-[#636363] text-sm lg:text-lg font-light">
              Our personalized timber houses 3D model gives you a clear,
              realistic view of your unique home design.
            </p>
          </div>
          <div className="hidden  h-full  lg:flex items-center justify-center">
            <Button
              onClick={handleContactClick}
              className="py-1 lg:py-3 rounded-[10px] px-1 lg:px-5 lg:tracking-wide text-sm font-semibold"
            >
              Get a free quote
            </Button>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full  mt-6 lg:mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 lg:gap-6">
              {modelsData.map((model, index) => (
                <div
                  key={index}
                  className="z-12 flex-shrink-0 w-[14rem] lg:w-[23rem] h-42 lg:h-60 bg-white rounded-[10px] shadow-lg relative "
                >
                  <div className="w-full h-full py-3 px-3 relative">
                    <Image
                      src={model.image}
                      alt={`Model ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-contain w-full h-full"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent to-black opacity-70 rounded-b-[10px]" />
                    {/* Icons */}
                    <div className="absolute z-30 bottom-4 w-[93%] flex items-center justify-between px-2">
                      <a href={model.modelLink}>
                        <Md3dRotation className="w-6 h-6 text-white hover:scale-125 transition-all duration-300" />
                      </a>
                      <a href={model.modelLink}>
                        <RiFullscreenFill className="w-6 h-6 text-white hover:scale-125 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            className={`absolute top-1/2 -left-3 lg:-left-5 bg-white rounded-full transform -translate-y-1/2 ${
              prevBtnEnabled ? "" : "hidden"
            }`}
            onClick={scrollPrev}
          >
            <IoIosArrowDropleftCircle className="w-8 h-8 lg:w-10 lg:h-10 text-primary-base hover:text-primary-dark transition-colors duration-200" />
          </button>
          <button
            className={`absolute top-1/2 -right-3 lg:-right-5 bg-white rounded-full transform -translate-y-1/2 ${
              nextBtnEnabled ? "" : "hidden"
            }`}
            onClick={scrollNext}
          >
            <IoIosArrowDroprightCircle className="w-8 h-8 lg:w-10 lg:h-10 text-primary-base hover:text-primary-dark transition-colors duration-200" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage3d;
