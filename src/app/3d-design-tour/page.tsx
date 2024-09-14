"use client";

import React, { useState } from "react";
import modelsData from "@/utils/modelsData";
import Model3dCard from "@/components/Model3dCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const ModelsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const modelsPerPage = 4;
  const totalPages = Math.ceil(modelsData.length / modelsPerPage);

  const currentModels = modelsData.slice(
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
        <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-2.5 md:px-4 lg:px-12 pt-4 pb-3">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-sm leading-7 hover:text-primary-light transition-colors duration-300"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 h-4" />
            <Link
              href="/3d-design-tour"
              className="text-sm leading-7 font-semibold hover:text-primary-light transition-colors duration-300"
            >
              3D Design Tour
            </Link>
          </div>
          <div className="w-full my-16">
            <div className="flex items-center justify-center mb-2.5">
              <Image
                src="/vector1.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-10 md:w-[200px] lg:w-[350px]"
              />
              <h2 className="mx-1 text-[42px] leading-[46px] font-semibold whitespace-nowrap">
                3D Design <span className="text-primary-base">Tour</span>
              </h2>
              <Image
                src="/vector2.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-10 md:w-[200px] lg:w-[350px]"
              />
            </div>
            <p className="text-xl mx-auto font-light text-center">
              Wood is a high-performance building material
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-2.5 md:px-4 lg:px-12 py-10">
        <div className="mb-7">
          <h3 className="text-[#212121] font-medium text-2xl">
            Top Results{" "}
            <span className="font-normal text-whites-grey text-lg leading-6">
              ({modelsData.length} Designs)
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {currentModels.map((model) => (
            <Model3dCard key={model.id} model={model} />
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-secondary-base text-white disabled:opacity-50"
          >
            <IoIosArrowBack size={32} />
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`p-4 w-10 h-10 flex items-center justify-center rounded-full ${
                    currentPage === number
                      ? "bg-primary-base text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {number}
                </button>
              )
            )}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-secondary-base text-white disabled:opacity-50"
          >
            <IoIosArrowForward size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;
