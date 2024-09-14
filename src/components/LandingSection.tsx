"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";

const phrases = [
  "Modern Design",
  "Better Cost",
  "Eco Friendly",
  "Efficient Process",
];

const LandingSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false); // New state to handle initialization

  useEffect(() => {
    setIsInitialized(true); // Mark as initialized
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full lg:h-[500px] overflow-hidden diagonal-section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Landing-bg.png"
          alt="Background"
          className="object-cover"
          fill
        />
      </div>

      {/* Text Container */}
      <div className="relative z-20 flex flex-col items-center lg:items-start h-full lg:justify-center w-full max-w-screen-xl mx-auto px-2 lg:px-8 pt-8 lg:pt-0">
        <h1 className="text-[30px] leading-9 lg:text-[39px] lg:leading-[52px] font-semibold max-w-[20ch] md:max-w-[25ch] mb-2 md:mb-4 lg:mb-6 text-center lg:text-left">
          Our Crafted Wooden house is the future of{" "}
          <span className="text-primary-base">
            {isInitialized ? (
              <TextTransition
                springConfig={presets.wobbly}
                className="inline-block"
                inline
              >
                {phrases[currentPhrase]}
              </TextTransition>
            ) : (
              phrases[0]
            )}
          </span>
        </h1>
        <p className="text-lg lg:text-2xl leading-7 lg:leading-8 font-light max-w-[32ch] md:max-w-[40ch] text-center lg:text-left mb-4">
          <span className="font-medium mr-1.5">WoodenHousing</span>
          made 50+ hassle-free building process that delivers a beautiful,
          sustainable home.
        </p>
        <div className="relative lg:hidden h-full w-full">
          <Image
            src="/Landing-home.png"
            alt="House"
            className="z-10 h-full w-full object-cover"
            width={800}
            height={500}
          />
        </div>
      </div>

      <div className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 h-auto w-full lg:max-w-[700px] xl:max-w-[850px] 2xl:max-w-[1050px]">
        <Image
          src="/Landing-home.png"
          alt="House"
          className="z-10 h-full w-auto object-cover"
          width={1000}
          height={600}
        />
      </div>
    </section>
  );
};

export default LandingSection;
