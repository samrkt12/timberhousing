"use client";

import React, { useState, useEffect } from "react";
import modelsData from "@/utils/modelsData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import ServiceModelCard from "@/components/ServiceModelCard";
import { RxDash } from "react-icons/rx";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const modelsPerPage = 10;

  const [selectedBedrooms, setSelectedBedrooms] = useState<number | null>(null);
  const [minLivingArea, setMinLivingArea] = useState<number | null>(null);
  const [maxLivingArea, setMaxLivingArea] = useState<number | null>(null);

  const villaModels = modelsData.filter(
    (model) => model.category === "Timber Cottage"
  );

  const filteredModels = villaModels.filter((model) => {
    const matchesBedrooms = selectedBedrooms
      ? model.bedroomCount === selectedBedrooms
      : true;
    const matchesLivingArea =
      (!minLivingArea || model.grossLivingArea >= minLivingArea) &&
      (!maxLivingArea || model.grossLivingArea <= maxLivingArea);

    return matchesBedrooms && matchesLivingArea;
  });

  const totalPages = Math.ceil(filteredModels.length / modelsPerPage);

  const currentModels = filteredModels.slice(
    (currentPage - 1) * modelsPerPage,
    currentPage * modelsPerPage
  );

  const handleScrollToTop = () => {
    const firstCard = document.querySelector(".model-card");
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 171;

    if (firstCard) {
      window.scrollTo({
        top:
          firstCard.getBoundingClientRect().top + window.scrollY - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handleScrollToTop();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      handleScrollToTop();
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBedrooms, minLivingArea, maxLivingArea]);

  const handleBedroomsFilter = (bedroom: number) => {
    setSelectedBedrooms(selectedBedrooms === bedroom ? null : bedroom);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full text-whites-light pb-7">
        <div className="absolute inset-0 z-0">
          <Image
            src="/approach-bg.jpg"
            alt="Background"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(38,33,41,0.91)] z-10"></div>
        <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 pt-4 pb-3">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="text-sm leading-7 hover:text-primary-light transition-colors duration-300"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 h-4" />
            <Link
              href="/timber-cottage"
              className="text-sm leading-7 font-semibold hover:text-primary-light transition-colors duration-300"
            >
              Timber Cottage Series
            </Link>
          </div>
          <div className="w-full my-5 lg:my-8 mb-10 lg:mb-16">
            <div className="flex items-center justify-center mb-2.5">
              <Image
                src="/vector1.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-16 md:w-[200px] lg:w-[350px]"
              />
              <h2 className="mx-1 text-2xl lg:text-[42px] lg:leading-[46px]  font-semibold whitespace-nowrap">
                Timber <span className="text-primary-base">Cottage</span>
              </h2>
              <Image
                src="/vector2.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-16 md:w-[200px] lg:w-[350px]"
              />
            </div>
            <p className="text-sm lg:text-xl mx-auto font-light text-center">
              Wood is a high-performance building material
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12 py-10">
        <div className="relative  bg-whites-light shadow-lg -top-24 rounded-[10px] flex flex-col lg:flex-row lg:justify-evenly lg:items-center px-3 lg:px-4 py-2 lg:py-6">
          <div className="mb-2 lg:mb-0">
            <h4 className="md:text-lg lg:text-xl leading-6 text-[#1D1D1D] font-semibold mb-1 md:mb-1.5 lg:mb-4">
              No. of Bedrooms
            </h4>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((bedroom) => (
                <button
                  key={bedroom}
                  onClick={() => handleBedroomsFilter(bedroom)}
                  className={`px-[8px] md:px-2.5 lg:px-3 py-[1px] md:py-0.5 lg:py-1 border-[2px] rounded-lg text-sm md:text-base ${
                    selectedBedrooms === bedroom
                      ? "bg-primary-base text-white border-primary-dark"
                      : "bg-whites-light  border-[#A0A0A0] "
                  }`}
                >
                  {bedroom}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3 lg:mb-0">
            <h4 className="md:text-lg lg:text-xl leading-6 text-[#1D1D1D] font-semibold mb-1 md:mb-1.5 lg:mb-4">
              Gross Living Area
            </h4>
            <div className="flex items-center lg:space-x-0.5">
              <select
                className="p-1 lg:p-2 border-[2px] border-[#A0A0A0] text-sm md:text-base rounded-lg outline-none"
                value={minLivingArea || ""}
                onChange={(e) => setMinLivingArea(Number(e.target.value))}
              >
                <option value="">Min sqft</option>
                {[
                  50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600,
                ].map((size) => (
                  <option key={size} value={size}>
                    {size} sqft
                  </option>
                ))}
              </select>
              <RxDash className="text-primary-base w-8 h-8" />
              <select
                className="p-1 lg:p-2  border-[2px] border-[#A0A0A0]  text-sm md:text-base   rounded-lg disabled:cursor-not-allowed outline-none"
                value={maxLivingArea || ""}
                onChange={(e) => setMaxLivingArea(Number(e.target.value))}
                disabled={!minLivingArea}
              >
                <option value="">Max sqft</option>
                {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600]
                  .filter((size) => !minLivingArea || size > minLivingArea)
                  .map((size) => (
                    <option key={size} value={size}>
                      {size} sqft
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <div className="-mt-[5rem] lg:-mt-[3.5rem] mb-3 lg:mb-7">
          <h3 className="text-[#212121] font-medium text-lg md:text-xl lg:text-2xl">
            Results{" "}
            <span className="font-normal text-whites-grey text-sm md:text-base lg:text-lg leading-6">
              ({filteredModels.length} Designs)
            </span>
          </h3>
        </div>

        {currentModels.length === 0 ? (
          <div className="w-full text-center text-lg md:text-xl lg:text-2xl text-whites-grey py-4 pt-8 lg:py-10">
            No models found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-12">
            {currentModels.map((model) => (
              <ServiceModelCard key={model.id} model={model} />
            ))}
          </div>
        )}

        {filteredModels.length > 0 ? (
          <div className="flex justify-between items-center mt-6 lg:mt-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-secondary-base text-white disabled:opacity-50"
            >
              <IoIosArrowBack className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => {
                    setCurrentPage(index + 1);
                    handleScrollToTop();
                  }}
                  className={`p-4 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full ${
                    currentPage === index + 1
                      ? "bg-primary-base text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages || totalPages === 0}
              className="p-2 rounded-full bg-secondary-base text-white disabled:opacity-50"
            >
              <IoIosArrowForward className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        ) : (
          <div className="py-5"></div>
        )}
      </div>
    </div>
  );
};

export default Page;
