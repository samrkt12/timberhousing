"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { TbArrowsVertical } from "react-icons/tb";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import StartToday from "@/components/StartToday";

const benefitsData = [
  { id: "comfort-energy-savings", title: "Comfort and energy savings" },
  { id: "economic-savings", title: "Economic savings" },
  { id: "anti-seismcity", title: "Anti-Seismcity" },
  { id: "fire-resistance", title: "Fire Resistance" },
  { id: "durability", title: "Durability" },
  { id: "solidity", title: "Solidity" },
  { id: "ductility", title: "Ductility" },
  { id: "environmental-impact", title: "Environmental Impact" },
];

const WhyWoodenHouse = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = window.innerWidth >= 1024 ? 2 : 2;

    if (element) {
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative w-full overflow-hidden">
      {/*First section */}
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
          <div className="flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className="text-sm leading-7 hover:text-primary-light transition-colors duration-300"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 h-4" />
            <Link
              href="/why-wooden-house"
              className="text-sm leading-7 font-semibold hover:text-primary-light transition-colors duration-300"
            >
              Why wooden house?
            </Link>
          </div>
          <div className="w-full my-10  lg:my-16">
            <div className="flex items-center justify-center mb-2.5">
              <Image
                src="/vector1.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-12 md:w-[200px] lg:w-[350px]"
              />
              <h2 className="mx-1 text-2xl lg:text-[42px] lg:leading-[46px] font-semibold whitespace-nowrap">
                Why Wooden <span className="text-primary-base">House?</span>
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

      {/*Second section*/}
      <div className="relative z-20 flex gap-10 justify-between flex-col md:flex-row h-full w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 py-5 lg:py-16">
        <div className="w-full md:w-fit text-[#352E39] px-3 lg:px-0">
          {/* Text Content */}
          <div className="w-full mb-3 lg:mb-5">
            <h3 className="text-[22px] lg:text-3xl leading-7 lg:leading-10 font-semibold mb-1">
              There are many benefits
            </h3>
            <p className="lg:text-lg font-light leading-7 lg:leading-9 md:max-w-[50ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="mb-4 lg:mb-6">
            <ul className="flex flex-col gap-1">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-center gap-1.5 lg:gap-2">
                  <IoIosCheckmarkCircle className="text-[#3CAB20] w-5 h-5" />
                  <p className="lg:text-lg leading-8 lg:leading-9 font-normal">
                    {benefit.title}
                  </p>
                  <span
                    className="relative group flex items-center justify-center cursor-pointer"
                    onClick={() => handleScrollToSection(benefit.id)}
                  >
                    <IoMdInformationCircleOutline className="group-hover:text-whites-darkest w-[18px] h-[18px] transition-colors duration-200" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="flex items-center gap-2 lg:text-lg leading-8 lg:leading-9 font-medium px-5 py-2 border border-[#BFBFBF] rounded-lg group">
              Learn more about benefits
              <TbArrowsVertical className="group-hover:text-primary-base transition-colors duration-200" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-grow  gap-4 hidden md:flex md:flex-col">
          <div className="flex gap-4">
            <div className="w-[60%] overflow-hidden rounded-[10px]">
              <Image
                src="/whyimage1.jpg"
                alt="Image 1"
                width={500}
                height={300}
                className="object-cover max-w-[390px] max-h-[256px]"
              />
            </div>
            <div className="w-[40%] overflow-hidden rounded-[10px]">
              <Image
                src="/whyimage2.jpg"
                alt="Image 2"
                width={400}
                height={400}
                className="object-cover w-full h-full max-w-[260px] max-h-[256px]"
              />
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-[10px]">
            <Image
              src="/whyimage3.jpg"
              alt="Image 3"
              width={1000}
              height={400}
              className="object-cover w-full h-full max-w-[672px] max-h-[257px]"
            />
          </div>
        </div>
      </div>

      {/*Third section */}
      <div id="comfort-energy-savings" className="bg-[#F6F6F6]">
        <div className="relative z-20 flex flex-col  items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-7 lg:px-12 py-5 lg:py-10 pb-10 lg:pb-16">
          <div className="flex items-center justify-center mb-1.5">
            <Image
              src="/vector1.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            ></Image>
            <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
              Comfort and energy savings
            </h2>
            <Image
              src="/vector2.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            ></Image>
          </div>
          <p className="text-sm lg:text-base mb-5 lg:mb-8 max-w-[38ch] mx-auto font-light text-center text-[#636363]">
            Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
            odio laborum
          </p>

          <div className="flex items-center justify-between gap-5 lg:gap-16 flex-col md:flex-row w-full">
            <div className="px-4 lg:px-0">
              <Image
                src="/thermal-image.png"
                alt="thermal image"
                width={600}
                height={600}
                className="max-w-[470px] max-h-[510px] w-full h-full"
              ></Image>
            </div>

            <div>
              <h3 className="text-[#352E39] mt-2 lg:mt-0 text-lg lg:text-xl leading-9 lg:leading-[46px] font-semibold">
                Thermal insulation and energy saving
              </h3>
              <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[60ch]">
                Wood has excellent insulation capacity, in fact its thermal
                conductivity coefficient, at the same thickness, is one third of
                that of brick and one tenth of that of concrete. Therefore,
                since thermal bridges, which generate condensation and
                dispersion, are not created, the energy performance and living
                comfort of the structure improve significantly.
              </p>
              <div className="flex gap-2 self-center my-3 lg:my-5">
                <BiSolidQuoteAltLeft className="text-primary-base w-4 h-4 lg:w-5 lg:h-5" />
                <p className="text-[#352E39] lg:text-lg leading-8 lg:leading-10 font-medium">
                  Thermal conductivity: is the ability of a material to conduct
                  heat.
                </p>
                <BiSolidQuoteAltRight className="text-primary-base w-4 h-4 lg:w-5 lg:h-5" />
              </div>
              <h3 className="text-[#352E39] text-lg lg:text-xl leading-9 lg:leading-[46px] font-semibold">
                Sound Insulation
              </h3>
              <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[60ch]">
                Thanks to the elasticity and intrinsic porosity of the material,
                wooden beams transmit fewer vibrations to the structure than
                concrete and steel, thus reducing the diffusion of sound waves.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Fourth section */}
      <div
        id="economic-savings"
        className="relative z-20 flex flex-col  items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-7 lg:px-12 py-5 lg:py-10 pb-10 lg:pb-16"
      >
        <div className="flex items-center justify-center mb-1.5">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
          <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
            Economic savings
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
        </div>
        <p className="text-sm lg:text-base mb-5 lg:mb-8 max-w-[38ch] mx-auto font-light text-center text-[#636363]">
          Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
          odio laborum
        </p>

        <div className="flex items-center justify-between gap-5 lg:gap-16 flex-col md:flex-row w-full">
          <div>
            <h3 className="text-[#352E39] text-lg lg:text-xl leading-9 lg:leading-10 font-semibold">
              Cost savings and speed of implementation
            </h3>
            <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[70ch] mb-2 lg:mb-4">
              A work in laminated wood, being a prefabricated structure in the
              factory, significantly reduces construction times. In fact, the
              processing and treatments of each element are already completed in
              the factory and therefore no further finishing will be necessary
              after installation.
            </p>

            <h3 className="text-[#352E39] text-lg leading-9 lg:text-xl lg:leading-10 font-semibold">
              Ideal for renovation
            </h3>
            <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[70ch]">
              Once installed, the structure is immediately able to support the
              operating load, without curing times, allowing to proceed with the
              subsequent construction phases, namely the assembly of the thermal
              package, the waterproofing and the covering. This makes it an
              ideal technology for renovation work, since it limits the exposure
              of the underlying structures to the elements.
            </p>
          </div>

          <div className="relative">
            <p className="absolute text-[#1B1B1B] tracking-wider font-medium text-lg lg:text-xl leading-8  left-1/2 transform -translate-x-1/2 top-8">
              Construction Times
            </p>
            <Image
              src="/economic-image.png"
              alt="thermal image"
              width={600}
              height={600}
              className="max-w-[550px] max-h-[370px] w-full h-full"
            />
          </div>
        </div>
      </div>

      {/*Fifth section */}
      <div id="anti-seismcity" className="bg-[#F6F6F6]">
        <div className="relative z-20 flex flex-col  items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-7 lg:px-12 py-5 lg:py-10 pb-10 lg:pb-16">
          <div className="flex items-center justify-center mb-1.5">
            <Image
              src="/vector1.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            ></Image>
            <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
              Earthquake resistance
            </h2>
            <Image
              src="/vector2.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            ></Image>
          </div>
          <p className="text-sm lg:text-base mb-5 lg:mb-8 max-w-[38ch] mx-auto font-light text-center text-[#636363]">
            Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
            odio laborum
          </p>

          <div className="flex items-center justify-between gap-5 lg:gap-8 flex-col md:flex-row w-full">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/earthquake.png"
                alt="thermal image"
                width={600}
                height={600}
                className="max-w-[550px] max-h-[360px] w-full h-full"
              ></Image>
            </div>

            <div>
              <h3 className="text-[#352E39] text-lg lg:text-xl  leading-9 lg:leading-[46px] font-semibold">
                Anti-seismic and Lightweight
              </h3>
              <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[70ch]">
                The lightness of wood and its elasticity make it a material
                particularly suitable for resisting seismic events . Having a
                density five times lower than concrete means receiving five
                times less seismic stress.
              </p>
              <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[70ch]">
                Elasticity, on the other hand, allows the structure not to
                suffer damage from oscillations. Ultimately, a wooden structure
                is not only able to resist earthquakes, but also comes out of
                them, except in special cases, substantially unharmed and
                without structural damage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Sixth section */}
      <div
        id="fire-resistance"
        className="relative z-20 flex flex-col  items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-7 lg:px-12 py-5 lg:py-10 pb-10 lg:pb-16"
      >
        <div className="flex items-center justify-center mb-1.5">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
          <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
            Fire resistance
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
        </div>
        <p className="text-sm lg:text-base mb-5 lg:mb-8 max-w-[38ch] mx-auto font-light text-center text-[#636363]">
          Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
          odio laborum
        </p>

        <div className="flex items-center justify-between gap-8 flex-col md:flex-row w-full mb-6">
          <div>
            <h3 className="text-[#352E39] text-lg lg:text-xl leading-9 lg:leading-10 font-semibold">
              Fire resistant
            </h3>
            <p className="font-light text-[#353535] leading-8 lg:leading-[35px] lg:text-lg max-w-[70ch]">
              Given that load-bearing structures never cause fires. It is known
              that wood is a combustible material, but this does not mean that
              it does not have fire resistance or that wooden structures are
              more vulnerable than steel or concrete structures.In fact, wood{" "}
              <span className="font-medium">burns very slowly</span>, as
              carbonization, which occurs at about 0.7 mm per minute, slows down
              the spread of combustion. The structure is therefore able to
              resist fires decisively and for a long time, regardless of the{" "}
              <span className="font-medium">temperature reached.</span>
            </p>
            <p className="font-light text-[#353535] leading-8 lg:leading-[35px] lg:text-lg max-w-[70ch] lg:mb-4">
              Mechanical failure occurs only when the part of the section that
              is not yet carbonized is reduced to such a point that it is no
              longer able to fulfill its structural function. Furthermore, the{" "}
              <span className="font-medium">low coefficient</span> of thermal
              expansion significantly limits the thrust exerted on the perimeter
              walls and therefore the risk of collapse.
            </p>
          </div>

          <div className="mb-2 lg:mb-0">
            <Image
              src="/fire-image1.png"
              alt="thermal image"
              width={600}
              height={600}
              className="max-w-[540px] max-h-[440px] w-full h-full"
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-between lg:flex-row gap-5 lg:gap-8 mb-6">
          {/* Image and Caption 1 */}
          <div className="flex flex-col items-start lg:items-center gap-2 w-full lg:w-1/3">
            <p className="lg:text-center text-left text-[#666666] text-sm leading-6 font-medium lg:order-2 lg:max-w-[30ch]">
              Wooden floor that did not collapse following a fire
            </p>
            <Image
              src="/fire-image4.png"
              alt="Image 1"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-full max-h-[260px] lg:order-1  object-cover rounded-lg"
            />
          </div>

          {/* Image and Caption 2 */}
          <div className="flex flex-col  items-start lg:items-center gap-2 w-full lg:w-1/3">
            <p className="lg:text-center text-left text-[#666666] text-sm leading-6 font-medium lg:order-2 lg:max-w-[30ch]">
              Wooden wall on the side exposed to fire
            </p>
            <Image
              src="/fire-image3.png"
              alt="Image 2"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-full max-h-[260px]  lg:order-1  object-cover rounded-lg"
            />
          </div>

          {/* Image and Caption 3 */}
          <div className="flex flex-col items-start lg:items-center gap-2 w-full lg:w-1/3">
            <p className="lg:text-center text-left text-[#666666] text-sm leading-6 font-medium lg:order-2 lg:max-w-[30ch]">
              Wooden wall on the side not exposed to fire
            </p>
            <Image
              src="/fire-image4.png"
              alt="Image 3"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-full max-h-[260px]  lg:order-1 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-full">
          <p className="text-[#352E39] text-lg lg:text-xl leading-7 lg:leading-8 font-semibold text-left mb-2 lg:mb-4">
            Why <span className="text-primary-base">wood</span> is more
            preferable than steel?
          </p>
          <div className="flex items-center justify-between gap-4 lg:gap-8 flex-col md:flex-row w-full">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/fire-image5.png"
                alt="fire image"
                width={600}
                height={600}
                className="max-w-[390px] max-h-[320px] w-full h-full object-cover"
              ></Image>
            </div>

            <div className="flex flex-col gap-2 justify-between">
              <div className="flex items-start">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                <p className="lg:text-lg text-[#353535] font-light max-w-[90ch] leading-8 lg:leading-[35px]">
                  <span className="font-medium">Steel</span> structural elements
                  do not burn, but undergo a rapid decay of mechanical
                  characteristics (resistance and rigidity) as a function of
                  temperature; since steel is a good heat conductor, the
                  temperature rises rapidly throughout the section; above 500°C
                  the steel deforms, leading, in an estimated time of between 5
                  and 10 minutes, to a collapse of the structure.
                </p>
              </div>

              <div className="flex items-start">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mt-2.5 mr-3 flex-shrink-0 "></span>
                <p className="lg:text-lg leading-[31px] lg:leading-[34px] text-[#353535] font-light max-w-[90ch]">
                  In reinforced concrete structural elements, the steel is
                  protected by a concrete cover of variable thickness and, what
                  is worse, it is sometimes made up in some areas of poorly
                  compacted and poorly homogeneous concrete. In the event of a
                  fire, these weak points become preferential channels for heat
                  flow, causing a localised increase in temperature that can
                  exceed 500°C in a very short time even in the presence of a
                  relatively thick concrete cover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Seventh section */}
      <div id="durability" className="bg-[#F6F6F6]">
        <div className="relative z-20 flex flex-col  items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-7 lg:px-12 py-5 lg:py-10 pb-10 lg:pb-16">
          <div className="flex items-center justify-center mb-1.5">
            <Image
              src="/vector1.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            ></Image>
            <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
              Durability
            </h2>
            <Image
              src="/vector2.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            ></Image>
          </div>
          <p className="text-sm lg:text-base mb-5 lg:mb-8 max-w-[38ch] mx-auto font-light text-center text-[#636363]">
            Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
            odio laborum
          </p>

          <div className="flex items-center justify-between gap-5 lg:gap-8 flex-col md:flex-row w-full">
            <div>
              <h3 className="text-[#352E39] text-lg lg:text-xl leading-9 lg:leading-10 font-semibold">
                Long-lasting
              </h3>
              <p className="font-light text-[#353535] leading-8 lg:leading-[34px] lg:text-lg max-w-[64ch]">
                Wooden structures guarantee high durability over time, as
                demonstrated by the numerous historic buildings scattered around
                the world and throughout our country. Today, the latest
                production technologies, which involve a careful drying process
                of the wood used for structural purposes, lead the single piece
                of wood to have a very low relative humidity. This determines an
                unfavorable habitat for the settlement and survival of mold and
                insects, if we then add the use of new antiseptic impregnation
                treatments, the guarantee of durability is total.
              </p>

              <h3 className="text-[#352E39] text-lg lg:text-xl leading-8 lg:leading-9 font-semibold mt-2 lg:mt-0">
                Low maintenance
              </h3>
              <p className="font-light text-[#353535]  leading-8 lg:leading-[34px] lg:text-lg max-w-[64ch]">
                High durability also means reduced maintenance costs, both
                ordinary and extraordinary, which are very important for steel
                structures such as corrosion controls, anti-rust treatments and
                painting.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/durability.png"
                alt="thermal image"
                width={600}
                height={600}
                className="max-w-[550px] max-h-[420px] w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/*Eight section */}
      <div
        id="solidity"
        className="relative z-20 flex flex-col  items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-7 lg:px-12 py-5 lg:py-10 pb-10 lg:pb-16"
      >
        <div className="flex items-center justify-center mb-1.5">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
          <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
            Solidity
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
        </div>
        <p className="text-sm lg:text-base mb-5 lg:mb-8 max-w-[38ch] mx-auto font-light text-center text-[#636363]">
          Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
          odio laborum
        </p>

        <div className="flex items-center justify-between gap-5 lg:gap-8 flex-col md:flex-row w-full">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/solidity.png"
              alt="solidity image"
              width={600}
              height={600}
              className="w-[540px] h-[350px] object-cover"
            ></Image>
          </div>

          <div>
            <h3 className="text-[#352E39] text-lg lg:text-xl leading-9 lg:leading-[40px] font-semibold">
              Tensile, flexural and compressive strength
            </h3>
            <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[60ch]">
              Its low weight and great resistance make it an exceptional
              material for construction. In fact, the admissible external stress
              load, compared to factory-produced concrete, is slightly higher in
              compression and decidedly higher in traction and bending.
            </p>
            <h3 className="text-[#352E39] text-lg lg:text-xl leading-9 lg:leading-[40px] font-semibold">
              Reduced sensitivity to temperature changes
            </h3>
            <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[60ch]">
              The expansion due to thermal changes is extremely limited, in fact
              the actual expansion is even lower than the theoretical one as it
              is compensated by the shrinkage due to the decrease in internal
              humidity,resulting from the increase in temperature. Consider that
              wood has a linear expansion coefficient equal to one third of that
              of steel.
            </p>
          </div>
        </div>
      </div>

      {/*Ninth section */}
      <div id="ductility" className="bg-[#F6F6F6]">
        <div className="relative z-20 flex flex-col  items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-7 lg:px-12 py-5 lg:py-10 pb-10 lg:pb-16">
          <div className="flex items-center justify-center mb-1.5">
            <Image
              src="/vector1.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            ></Image>
            <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
              Ductility
            </h2>
            <Image
              src="/vector2.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            ></Image>
          </div>
          <p className="text-sm lg:text-base mb-5 lg:mb-8 max-w-[38ch] mx-auto font-light text-center text-[#636363]">
            Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
            odio laborum
          </p>

          <div className="flex items-center justify-between  gap-5 lg:gap-8 flex-col md:flex-row w-full">
            <div>
              <h3 className="text-[#352E39] text-lg lg:text-xl leading-9 lg:leading-10 font-semibold">
                The right solution for every project
              </h3>
              <p className="font-light text-[#353535] leading-8 lg:leading-[34px] lg:text-lg max-w-[60ch] mb-2">
                The great ductility of the material allows the creation, with
                absolute precision, of multiple systems of extreme complexity
                and shapes of great charm, both through wood-wood joints and
                through the creation of connections with metal elements.
              </p>
              <div>
                <Image
                  src="/ductility1.png"
                  alt="thermal image"
                  width={700}
                  height={500}
                  className="max-w-[660px] max-h-[260px] w-full h-full object-cover rounded-[10px]"
                />
              </div>
            </div>

            <div>
              <Image
                src="/ductility2.png"
                alt="thermal image"
                width={600}
                height={600}
                className="w-[540px] h-[400px]  object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/*Tenth section */}
      <div
        id="environmental-impact"
        className="relative z-20 flex flex-col  items-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-7 lg:px-12 py-5 lg:py-10 pb-10 lg:pb-16"
      >
        <div className="flex items-center justify-center mb-1.5">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
          <h2 className="mx-1 text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
            Environmental Impact
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          ></Image>
        </div>
        <p className="text-sm lg:text-base mb-5 lg:mb-8 max-w-[38ch] mx-auto font-light text-center text-[#636363]">
          Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
          odio laborum
        </p>

        <div className="flex items-center justify-between gap-8 flex-col md:flex-row w-full">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/impact.jpg"
              alt="forest image"
              width={600}
              height={600}
              className="w-[640px] h-full object-cover"
            ></Image>
          </div>

          <div>
            <h3 className="text-[#352E39] text-lg lg:text-xl leading-6 lg:leading-[28px] font-semibold mb-1 lg:mb-2">
              Wood is the only building material that comes from renewable
              resources
            </h3>
            <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[60ch]">
              Its low weight and great resistance make it an exceptional
              material for construction. In fact, the admissible external stress
              load, compared to factory-produced concrete, is slightly higher in
              compression and decidedly higher in traction and bending.
            </p>
            <p className="font-light text-[#353535] leading-8 lg:leading-9 lg:text-lg max-w-[60ch]">
              During growth, trees transform CO 2 and water, producing oxygen.
              Using wood as a building material means storing, in the elements
              produced, all the CO 2 used by trees. Each cubic meter of wood,
              used as a replacement for other building materials, reduces CO 2
              emissions released into the atmosphere by an average of 1.1 tons
              per year.
            </p>
          </div>
        </div>
      </div>

      {/*Start today section */}
      <StartToday />
    </div>
  );
};

export default WhyWoodenHouse;
