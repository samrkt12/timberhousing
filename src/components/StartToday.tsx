import React from "react";
import Image from "next/image";
import Button from "./UI/Button";

type Props = {};

const StartToday = (props: Props) => {
  return (
    <section className="relative w-full overflow-hidden lg:py-5 px-4 ">
      <div className=" absolute top-0 left-0 w-[45%] h-full">
        <Image
          src="/start-today-bg2.jpg"
          alt="Scenery Left"
          className="object-cover transform scale-x-[-1]"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white"></div>
      </div>

      <div className=" absolute top-0 right-0 w-[55%] h-full">
        <Image
          src="/start-today-bg1.jpg"
          alt="Scenery Right"
          className="object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
      </div>

      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/start-today-logo-bg.png"
          alt="Logo Vector"
          width={420}
          height={420}
          className="object-contain "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-whites-light py-10 lg:py-20">
        <p className="text-lg lg:text-xl mb-1 lg:mb-1.5 text-[#242424]">
          Looking for a home?
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 relative inline-block bg-clip-text text-transparent bg-[url('/wood-text-image.jpg')] bg-contain">
          Let’s Start Today!
        </h1>
        <p className="text-sm lg:text-base max-w-[58ch] text-[#282828] mb-9 text-center">
          We have a floor plan for you! We deliver{" "}
          <span className="font-medium">world-class</span> log and Modular
          prefab home on time, on budget, and in balance with nature’s
          perfection. Our best design team also assist you in creating that
          customized home you’ve been dreaming of.
        </p>
        <Button className="bg-primary-base text-white text-lg lg:text-xl font-medium  px-7 py-2 lg:py-4 rounded-[10px] shadow-xl hover:bg-primary-dark transition-colors duration-200">
          Contact Us Now
        </Button>
      </div>
    </section>
  );
};

export default StartToday;
