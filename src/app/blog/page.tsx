"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import blogsData from "@/utils/blogsData";
import StartToday from "@/components/StartToday";
type Props = {};

const page = (props: Props) => {
  const blogsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="relative w-full  overflow-hidden">
      {/*First section */}
      <div className="relative w-full text-whites-light pb-2 lg:pb-5 mb-2 lg:mb-5">
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/blogs/main.jpg"
            alt="Background"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10"></div>
        <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-3  md:px-8 lg:px-12 py-3 md:py-4">
          <div className="flex items-center gap-0.5 md:gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="text-xs lg:text-sm leading-6 lg:leading-7 hover:text-primary-light transition-colors duration-300"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 md:w-5 h-4 md:h-5" />
            <Link
              href="/blog"
              className="text-xs lg:text-sm  text-center leading-6 lg:leading-7 hover:text-primary-light transition-colors duration-300"
            >
              Blog
            </Link>
          </div>
          <div className="w-full my-10  lg:my-24 px-4 ">
            <div className="flex items-center justify-center mb-2.5">
              <Image
                src="/vector1.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-12 md:w-[200px] lg:w-[350px]"
              />
              <h2 className="mx-1 lg:mx-4 text-2xl lg:text-[42px] lg:leading-[46px] font-semibold whitespace-nowrap">
                Blog <span className="text-primary-base">articles</span>
              </h2>
              <Image
                src="/vector2.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-12 md:w-[200px] lg:w-[350px]"
              />
            </div>
            <p className="text-sm lg:text-xl mx-auto font-light text-center max-w-[55ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-7 lg:px-12 py-4 lg:py-6 grid gap-4 lg:gap-10 grid-cols-2 ">
        {currentBlogs.map((blog, index) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className={`relative bg-white shadow-lg rounded-[15px] overflow-hidden hover:scale-[1.03] transition-transform duration-300 ${
              index % 3 === 2 ? "col-span-full" : ""
            }`}
          >
            <Image
              src={blog.mainImage}
              alt={blog.title}
              width={800}
              height={400}
              className={`w-full ${
                index % 3 === 2
                  ? "h-[120px] md:h-[180px] lg:h-[380px]"
                  : "h-[110px] md:h-[140px] lg:h-[230px]"
              } object-cover`}
            />
            <div className="p-2 md:p-3 lg:p-4 lg:pb-7">
              <h3 className="text-xs md:text-base lg:text-xl text-[#1E1E1E] font-semibold mb-1">
                {blog.title}
              </h3>
              <p className="text-[10px] leading-3 md:leading-5 md:text-sm lg:text-lg text-[#232323] lg:leading-6 font-light mb-1">
                {blog.summary.length > 100
                  ? `${blog.summary.substring(0, 100)}...`
                  : blog.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex max-w-screen-xl mx-auto  justify-between items-center my-3 mb-5 lg:my-8 px-4 md:px-8 lg:px-12">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="p-1.5 lg:p-2 rounded-full bg-secondary-base text-white disabled:opacity-50"
        >
          <IoIosArrowBack className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="flex justify-center space-x-2 lg:space-x-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3  lg:px-4 py-1.5 lg:py-2 text-sm lg:text-base rounded-full ${
                i + 1 === currentPage
                  ? "bg-primary-base text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="p-1.5 lg:p-2 rounded-full bg-secondary-base text-white disabled:opacity-50"
        >
          <IoIosArrowForward className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      <StartToday />
    </div>
  );
};

export default page;
