"use client";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import useContactHandler from "@/utils/useContactHandler";
import ContactModal from "./ContactModal";

const phrases = [
  "Modern Design",
  "Better Cost",
  "Eco Friendly",
  "Efficient Process",
];

const LandingSection = () => {
  const { handleContactClick, isModalOpen, closeModal } = useContactHandler();
  return (
    <section className="relative w-full lg:h-[500px] overflow-hidden diagonal-section">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/Landing-bg.png"
          alt="Background"
          className="object-cover"
          fill
        />
      </div>

      {/* Text Container */}
      <div className="relative lg:-top-6 z-20 flex flex-col items-center lg:items-start h-full lg:justify-center w-full max-w-screen-xl mx-auto px-2 lg:px-8 pt-8 lg:pt-0">
        <h1 className="hidden lg:block text-[30px] leading-9 lg:text-[42px] lg:leading-[50px] font-semibold  mb-0.5 text-center lg:text-left">
          Our Crafted Wooden house is
        </h1>
        <h1 className="lg:hidden text-[30px] leading-9 lg:text-[42px] lg:leading-[50px] font-semibold max-w-[20ch] mb-1 lg:mb-1.5 text-center lg:text-left">
          Our Crafted Wooden house is the future of
        </h1>
        <div className="lg:w-full text-[30px] leading-9 lg:text-[42px] lg:leading-[50px] font-semibold mb-1.5 md:mb-2 lg:mb-2.5 lg:text-left flex  relative -left-[115px] lg:left-0">
          <span className="hidden lg:block">the future of</span>
          <div className="w-max flex justify-center cube-spinner-text animate-3 cube-spinner lg:ml-4 mb-1 lg:mb-0">
            <div
              className="cube-face text-[30px] text-nowrap leading-9 lg:text-[42px] lg:leading-[50px] font-semibold text-[#D75337] left-1 lg:left-0"
              style={{ transform: "rotateX(0deg) translateZ(17px)" }}
            >
              Modern Design.
            </div>
            <div
              className="cube-face text-nowrap text-[30px] leading-9 lg:text-[42px] lg:leading-[50px] font-semibold text-[#D75337] -left-3 lg:left-0"
              style={{ transform: "rotateX(120deg) translateZ(17px)" }}
            >
              Better Air Quality.
            </div>

            <p
              className="cube-face text-nowrap text-[30px] leading-9 lg:text-[42px] lg:leading-[50px] font-semibold text-[#D75337] "
              style={{ transform: "rotateX(240deg) translateZ(17px)" }}
            >
              Energy Efficient.
            </p>
          </div>
        </div>

        <p className="text-sm text-[#423C45] lg:text-lg leading-[21px] lg:leading-[30px] font-light max-w-[36ch] md:max-w-[55ch] text-center lg:text-left mb-4 lg:mb-7">
          <span className="font-medium mr-1.5">WoodenHousing</span>
          has successfully delivered 100+ hassle free, beautiful and sustainable
          housing solutions to its customers.
        </p>

        <p className="text-[#3B353E] text-[15px] md:text-base lg:text-lg lg:leading-[30px] mb-1 lg:mb-2">
          Book a <span className="font-medium">free</span> design consultation
          now!
        </p>

        <div className="flex items-center gap-2 md:gap-4 mb-4 lg:mb-0">
          <Link href="/designs">
            <button
              className="
            px-3  lg:px-5 py-[9px] lg:py-3 
            flex items-center gap-1.5 lg:gap-2.5 
            rounded-lg 
            text-whites-light lg:text-lg leading-[22px] 
            bg-gradient-to-r from-[#D75337] to-[#EA674B] 
            
            shadow-[0px_9px_28.3px_0px_rgba(230,99,71,0.28)] 
            hover:scale-[1.02] 
            transition-all duration-300 
            hover:shadow-[0px_15px_35px_0px_rgba(230,99,71,0.5)] 
            "
            >
              <span>Explore Designs</span>
              <BsArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </Link>

          <button
            onClick={handleContactClick}
            className="px-3  lg:px-5 py-2 lg:py-3  rounded-lg text-[#352E39] lg:text-lg leading-[21px] font-medium border-2 border-[#352E39]/30 hover:border-primary-base hover:text-primary-base transition-colors duration-300"
          >
            Book Now
          </button>
        </div>

        <div className="relative lg:hidden h-full w-full -top-1">
          <Image
            src="/Landing-home.png"
            alt="House"
            className="z-10 h-full w-full object-contain"
            width={800}
            height={500}
          />
        </div>
      </div>

      <div className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 h-auto w-full lg:max-w-[700px] xl:max-w-[850px] 2xl:max-w-[1050px] z-70">
        <Image
          src="/Landing-home.png"
          alt="House"
          className="z-10 h-full w-auto object-cover"
          width={1000}
          height={600}
        />
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default LandingSection;

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import TextTransition, { presets } from "react-text-transition";

// const phrases = [
//   "Modern Design",
//   "Better Cost",
//   "Eco Friendly",
//   "Efficient Process",
// ];

// const LandingSection = () => {
//   const [currentPhrase, setCurrentPhrase] = useState(0);
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {
//     setIsInitialized(true);
//     const interval = setInterval(() => {
//       setCurrentPhrase((prev) => (prev + 1) % phrases.length);
//     }, 1500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full lg:h-[500px] overflow-hidden diagonal-section">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/Landing-bg.png"
//           alt="Background"
//           className="object-cover"
//           fill
//         />
//       </div>

//       {/* Text Container */}
//       <div className="relative z-20 flex flex-col items-center lg:items-start h-full lg:justify-center w-full max-w-screen-xl mx-auto px-2 lg:px-8 pt-8 lg:pt-0">
//         <h1 className="text-[30px] leading-9 lg:text-[39px] lg:leading-[52px] font-semibold max-w-[20ch] md:max-w-[25ch] mb-2 md:mb-4 lg:mb-6 text-center lg:text-left">
//           Our Crafted Wooden house is the future of{" "}
//           <span className="text-primary-base">
//             {isInitialized ? (
//               <TextTransition
//                 springConfig={presets.wobbly}
//                 className="inline-block"
//                 inline
//               >
//                 {phrases[currentPhrase]}
//               </TextTransition>
//             ) : (
//               phrases[0]
//             )}
//           </span>
//         </h1>
//         <p className="text-lg lg:text-2xl leading-7 lg:leading-8 font-light max-w-[32ch] md:max-w-[40ch] text-center lg:text-left mb-4">
//           <span className="font-medium mr-1.5">WoodenHousing</span>
//           made 50+ hassle-free building process that delivers a beautiful,
//           sustainable home.
//         </p>
//         <div className="relative lg:hidden h-full w-full">
//           <Image
//             src="/Landing-home.png"
//             alt="House"
//             className="z-10 h-full w-full object-cover"
//             width={800}
//             height={500}
//           />
//         </div>
//       </div>

//       <div className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 h-auto w-full lg:max-w-[700px] xl:max-w-[850px] 2xl:max-w-[1050px]">
//         <Image
//           src="/Landing-home.png"
//           alt="House"
//           className="z-10 h-full w-auto object-cover"
//           width={1000}
//           height={600}
//         />
//       </div>
//     </section>
//   );
// };

// export default LandingSection;
