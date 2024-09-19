"use client";
import StartToday from "@/components/StartToday";
import blogsData from "@/utils/blogsData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { useRef } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

interface BlogDetailsProps {
  params: {
    blogId: string;
  };
}

const truncateSummary = (summary: string, maxChars: number) => {
  return summary.length > maxChars
    ? `${summary.substring(0, maxChars)}...`
    : summary;
};

const Page = ({ params }: BlogDetailsProps) => {
  const blog = blogsData.find((b) => b.id === params.blogId);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  if (!blog) {
    return notFound();
  }

  const smallSummary = truncateSummary(blog.summary, 80);
  const mediumSummary = truncateSummary(blog.summary, 130);
  const largeSummary = truncateSummary(blog.summary, 180);

  const handleScroll = (index: number) => {
    const section = sectionRefs.current[index];
    const navbar = document.querySelector("nav");
    if (section) {
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: sectionTop - navbarHeight - 15,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* First section */}
      <div className="relative w-full text-whites-light pb-2 lg:pb-5 mb-2 lg:mb-5">
        <div className="absolute inset-0 z-0 ">
          <Image
            src={blog.mainImage}
            alt="Background"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.75)] z-10"></div>
        <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-4 pr-0 md:px-8 lg:px-12 py-3 md:py-4">
          <div className="flex items-center gap-0.5 md:gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="text-xs lg:text-sm leading-6 lg:leading-7 hover:text-primary-light transition-colors duration-300"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 md:w-5 h-4 md:h-5" />
            <Link
              href={`/blog`}
              className="text-xs md:text-[13px] lg:text-sm text-center leading-6 lg:leading-7 font-semibold hover:text-primary-light transition-colors duration-300"
            >
              Blog
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 md:w-5 h-4 md:h-5" />
            <Link
              href={`${blog.id}`}
              className="text-xs lg:text-sm text-center leading-6 lg:leading-7 hover:text-primary-light transition-colors duration-300"
            >
              {`${blog.title}`}
            </Link>
          </div>
          <div className="my-10 md:my-20 lg:my-36 text-left border-l-[6px] px-2.5 md:px-5 py-2">
            <h1 className="font-semibold text-[22px] md:text-[28px] lg:text-[42px] leading-8 md:leading-9 lg:leading-[52px] mb-1">
              {blog.title}
            </h1>
            <p className="text-primary-base sm:text-lg md:text-xl lg:text-2xl lg:leading-10 font-semibold">
              <span className="block md:hidden">{smallSummary}</span>
              <span className="hidden md:block lg:hidden">{mediumSummary}</span>
              <span className="hidden lg:block">{largeSummary}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="relative z-20 w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <div className="w-full px-2 md:px-4 lg:px-7 py-2 md:py-3 lg:py-5 shadow-lg border border-[#D6D6D6] rounded-[15px] mb-5 lg:mb-10">
          <h2 className="text-base md:text-xl lg:text-2xl font-medium mb-2.5 lg:mb-4">
            Table of Contents
          </h2>
          <ul className="space-y-2 lg:space-y-2.5">
            {blog.sections.map((section, index) => (
              <li
                key={index}
                className="group flex pt-1 pb-1.5 lg:pb-2 justify-between items-center text-primary-base hover:text-primary-dark cursor-pointer border-b border-[#D7D7D7] last:border-none"
                onClick={() => handleScroll(index)}
              >
                <span className="px-2 text-primary-base group-hover:text-primary-dark text-sm md:text-lg lg:text-xl">
                  {section.heading}
                </span>
                <IoIosArrowDown className="w-4 h-4 md:w-5 md:h-5" />
              </li>
            ))}
          </ul>
        </div>

        <p className="font-light text-sm md:text-base lg:text-lg text-[#414141] my-2">
          Published: <span className="font-normal">{blog.publishedDate}</span>
        </p>

        <hr className="border-[#C5C5C5] mb-2 lg:mb-3" />

        {/* Sections content */}
        {blog.sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="mb-3 lg:mb-4"
          >
            <h3 className="text-[#1E1E1E] text-sm md:text-xl lg:text-[22px] lg:leading-8 font-medium mb-2 lg:mb-3.5">
              {section.heading}
            </h3>
            {section.content.map((paragraph, i) => (
              <div
                key={i}
                className="mb-1 text-[#414141] text-xs md:text-base lg:text-lg font-light"
              >
                {paragraph}
              </div>
            ))}
            {section.image && (
              <div className="w-full h-40 md:h-64 lg:h-96 my-4 overflow-hidden rounded-xl">
                <Image
                  src={section.image}
                  alt={section.heading}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            {index !== blog.sections.length - 1 && (
              <hr className="border-[#C5C5C5]" />
            )}
          </div>
        ))}

        <div className="flex items-center justify-center text-[#ADADAD] text-sm md:text-base lg:text-lg mt-4 lg:mt-6 my-2 lg:my-3">
          End of Blog
        </div>
      </div>

      <StartToday />
    </div>
  );
};

export default Page;
