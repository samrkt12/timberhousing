import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

type Props = {};

const WhatMakesUsUnique = (props: Props) => {
  return (
    <section className="relative w-full overflow-hidden pt-8 lg:pt-12 pb-8 lg:pb-16 ">
      <div className="hidden lg:block lg:absolute inset-y-0 top-[50px] right-[20px] w-[50%] h-[110%] z-0 overflow-hidden">
        <Image
          src="/unique-bg.png"
          alt="logo-vector"
          fill
          className="object-right object-contain"
        />
      </div>

      <div className="relative z-20 h-full flex flex-col  items-center  max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-1 lg:mb-1.5">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
          <h2 className="mx-1  text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
            What makes us <span className="text-primary-base">unique?</span>
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
        </div>
        <p className="text-sm lg:text-base lg:leading-[26px] mb-8  lg:mb-10 max-w-[50ch] lg:max-w-[65ch] mx-auto font-light text-center text-[#636363]">
          Wood cladding is a material applied to the outside of a building to
          protect the exterior from damage. It acts as a shield, keeping your
          building safe from the elements and extending its lifespan.
        </p>

        <div className="flex flex-col lg:flex-row lg:justify-evenly   gap-10 lg:gap-8 w-full">
          {/* Uniqueness Section */}
          <div className=" space-y-6 lg:space-y-8 my-auto mx-auto lg:mx-0">
            {[
              {
                image: "/unique1.png",
                title: "Quality of Wood",
                description:
                  "We use superior wood known for its natural insect protection, low moisture and natural sustainability.",
              },
              {
                image: "/unique2.png",
                title: "Customization",
                description:
                  "We offer personalized design options with 3D view to tailor every detail of your wooden house to your preferences, ensuring a unique and customized living experience.",
              },
              {
                image: "/unique3.png",
                title: "Deadline Commitment",
                description:
                  "We are dedicated to meeting our deadlines, ensuring your wooden house is completed on time without compromising quality.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center lg:items-start gap-2 lg:gap-4"
              >
                <div className="flex items-center justify-center w-[4.5rem] lg:w-24">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="m-auto">
                  <h3 className="text-lg lg:text-xl font-medium text-whites-darkest lg:mb-1 ">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base font-light text-[#3F3F3F] max-w-[57ch]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsUnique;
