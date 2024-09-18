"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "/icons/icon1.png",
    title: "Eco-Friendly",
    description: "Built with sustainable materials.",
  },
  {
    icon: "/icons/icon2.png",
    title: "Modern Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisci",
  },
  {
    icon: "/icons/icon3.png",
    title: "Eco-Friendly",
    description: "Built with sustainable materials.",
  },
  {
    icon: "/icons/icon4.png",
    title: "Modern Design",
    description: "Stylish and futuristic homes.",
  },
  {
    icon: "/icons/icon5.png",
    title: "Eco-Friendly",
    description: "Built with sustainable materials.",
  },
  {
    icon: "/icons/icon1.png",
    title: "Modern Design",
    description: "Stylish and futuristic homes.",
  },
  {
    icon: "/icons/icon4.png",
    title: "Modern Design",
    description: "Stylish and futuristic homes.",
  },
  {
    icon: "/icons/icon2.png",
    title: "Modern Design",
    description: "Stylish and futuristic homes.",
  },
  {
    icon: "/icons/icon3.png",
    title: "Modern Design",
    description: "Stylish and futuristic homes.",
  },
  {
    icon: "/icons/icon1.png",
    title: "Modern Design",
    description: "Stylish and futuristic homes.",
  },
];

const allFeatures = [...features, ...features];
const firstRow = features.slice(0, features.length / 2);
const firstRowFeatures = [...firstRow, ...firstRow];
const secondRow = features.slice(features.length / 2);
const secondRowFeatures = [...secondRow, ...secondRow];

const WhyChooseUs = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, startDelay: 0 })]
  );

  const [emblaRefFirstRow] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      startDelay: 0,
      direction: "forward",
    }),
  ]);

  const [emblaRefSecondRow] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      startDelay: 0,
      direction: "backward",
    }),
  ]);

  return (
    <section className="w-full text-center pt-6 lg:pt-8 pb-10 lg:pb-14 overflow-hidden ">
      {/* Heading */}
      <div className="flex items-center justify-center mb-1.5 ">
        <Image
          src="/vector1.png"
          width={350}
          height={5}
          alt="vector line"
          className="w-10 md:w-[200px] lg:w-[350px]"
        ></Image>
        <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10 font-semibold text-[#352E39] whitespace-nowrap">
          Why Choose <span className="text-primary-base">WoodenHousing?</span>
        </h2>
        <Image
          src="/vector2.png"
          width={350}
          height={5}
          alt="vector line"
          className="w-10 md:w-[200px] lg:w-[350px]"
        ></Image>
      </div>
      <p className="text-[12px] leading-[18px] lg:text-[17px] lg:leading-[26px] mb-6 lg:mb-10 max-w-[40ch] mx-auto font-light text-[#636363]">
        We build smart, futuristic, and effortlessly stylish wooden homes and
        resorts.
      </p>

      {/* Feature Boxes */}
      <div
        className="hidden lg:block relative w-full overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {allFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Mobile View with Two Rows */}
      <div className="lg:hidden space-y-2.5">
        <div className="relative w-full overflow-hidden" ref={emblaRefFirstRow}>
          <div className="flex">
            {firstRowFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        <div
          className="relative w-full overflow-hidden"
          ref={emblaRefSecondRow}
        >
          <div className="flex">
            {secondRowFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
