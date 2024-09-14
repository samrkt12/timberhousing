import React from "react";
import Image from "next/image";
import Button from "./UI/Button";
import { RxDoubleArrowRight } from "react-icons/rx";
type Props = {};

const Contact3d = (props: Props) => {
  return (
    <section className="relative w-full bg-[#F6F3F6] overflow-hidden pt-8 lg:pt-12 pb-6 lg:pb-16 contact3d-section">
      <div className="relative z-20 bg-[#4A3456] w-full h-full flex items-center lg:rounded-2xl max-w-[1160px] mx-auto px-2.5 md:px-4 lg:px-4 overflow-visible lg:overflow-hidden ">
        <div className="w-full h-full flex items-center py-6 lg:py-8">
          {/* Text Content */}
          <div className="relative z-10 flex flex-col my-auto items-start max-w-[15rem] md:max-w-[32rem] lg:max-w-[42rem] p-2 lg:p-6 text-whites-light">
            <h3 className="md:text-2xl lg:text-3xl lg:leading-9 font-medium mb-1.5 md:mb-3 lg:mb-6">
              India-
              <span className="mr-1 lg:mr-2 text-primary-base">
                focused
              </span>{" "}
              Wooden company tailoring solutions to meet client needs.
            </h3>
            <p className="text-sm md:text-xl lg:text-2xl lg:leading-9 font-light mb-1 md:mb-2 lg:mb-4">
              Built over <span className="font-medium">50+</span> homes
            </p>
            <p className="text-sm md:text-base lg:text-lg font-light max-w-[38ch] text-whites-light/75 mb-3 md:mb-5 lg:mb-8">
              Contact us today and take the first step to building your forever
              home.
            </p>
            <Button className="flex items-center font-bold uppercase bg-gradient-to-r from-[#EA6043] to-[#D75337] hover:from-[#D75337] hover:to-[#EA6043] text-white text-sm lg:text-base px-6 lg:px-8 py-3 rounded-lg shadow-md transition-colors duration-300">
              Contact now
              <RxDoubleArrowRight className="ml-2 font-bold w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Shadow Image */}
        <div className="hidden lg:block scale-x-[-1] lg:scale-x-1 absolute w-[980px] h-[890px] -right-32 -top-[58%]">
          <Image
            src="/house3d.png"
            alt="Shadow of 3D House"
            fill
            className="overflow-visible filter brightness-0 opacity-[0.05] invert object-contain"
          />
        </div>

        {/* Background with 3D House */}
        <div className="scale-x-[-1] lg:scale-x-1 absolute w-[580px] h-[580px] md:w-[750px] md:h-[640px] lg:w-[900px] lg:h-[850px] -right-80 lg:-right-32 lg:-top-[53%]">
          <Image
            src="/house3d.png"
            alt="3D House"
            fill
            className="overflow-visible object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact3d;
