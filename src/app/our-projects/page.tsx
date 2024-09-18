"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { projectsData } from "@/utils/modelsData";
import ProjectsCarousel from "@/components/ProjectsCarousel";

type Props = {};

const Page = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const modelsPerPage = 6;
  const totalPages = Math.ceil(projectsData.length / modelsPerPage);

  const currentModels = projectsData.slice(
    (currentPage - 1) * modelsPerPage,
    currentPage * modelsPerPage
  );

  const handleScrollToTop = () => {
    const firstCard = document.querySelector(".design-card");
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
    <div className="relative w-full overflow-hidden ">
      {/*First section */}
      <div className="relative w-full text-[#352E39] pb-3 lg:pb-7">
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/designs-bg.jpg"
            alt="Background"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-white/95"></div>

        <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 pt-3 lg:pt-4 pb-0">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="text-sm leading-7 hover:text-primary-light transition-colors duration-300"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 h-4" />
            <Link
              href="/our-projects"
              className="text-sm leading-7 font-semibold hover:text-primary-light transition-colors duration-300"
            >
              Our projects
            </Link>
          </div>
          <div className="w-full my-10 lg:my-16">
            <div className="flex items-center justify-center mb-2.5">
              <Image
                src="/vector1.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-10 md:w-[200px] lg:w-[350px]"
              />
              <h2 className="mx-1 text-2xl lg:text-[42px] lg:leading-[46px]  font-semibold whitespace-nowrap">
                Our Projects
              </h2>
              <Image
                src="/vector2.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-10 md:w-[200px] lg:w-[350px]"
              />
            </div>
            <p className="text-sm lg:text-xl mx-auto font-light text-center">
              Wood is a high-performance building material
            </p>
          </div>
        </div>
      </div>

      {/*Second section */}
      <div className="relative z-20 flex flex-col h-full w-full max-w-[700px] lg:max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 lg:pt-4 pb-2">
        <div className="">
          <h3 className="text-[#212121] text-lg md:text-xl lg:text-2xl">
            Top Results{" "}
            <span className="font-normal text-whites-grey text-sm md:text-base lg:text-lg md:leading-6">
              ({projectsData.length} Designs)
            </span>
          </h3>
        </div>
      </div>

      {/* Display only current models */}
      {currentModels.map((model, index) => (
        <div
          key={model.id}
          className={`w-full overflow-hidden ${
            index % 2 === 0 ? "bg-white" : "bg-[#F6F6F6]"
          } model-card`}
        >
          <ProjectsCarousel model={model} index={index} />
        </div>
      ))}

      <div className="flex justify-between items-center  relative z-20  h-full w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-2 lg:py-4 mt-3 mb-6 lg:mb-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="p-2 rounded-full bg-secondary-base text-white disabled:opacity-50"
        >
          <IoIosArrowBack className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`w-9 h-9 md:w-10 md:h-10 p-4 flex items-center justify-center rounded-full ${
                currentPage === number
                  ? "bg-primary-base text-white"
                  : "bg-gray-200"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full bg-secondary-base text-white disabled:opacity-50"
        >
          <IoIosArrowForward className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </div>
  );
};

export default Page;
