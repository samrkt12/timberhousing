import { notFound } from "next/navigation";
import modelsData, { Category } from "@/utils/modelsData";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Carousel3d from "../../../components/Carousel3d";
import VideoSection from "@/components/VideoSection";
import PropertyImageCarousel from "@/components/PropertyImageCarousel";
import WorkProcessCarousel from "@/components/WorkProcessCarousel";
import InnerPageContact from "@/components/InnerPageContact";
import FloorPlan from "@/components/FloorPlan";
import View3D from "@/components/View3D";

function convertCategoryToSlug(category: string): string {
  return category.toLowerCase().replace(/[\s/]+/g, "-");
}

interface ModelDetailsProps {
  params: {
    id: string;
  };
}

const stepsData = [
  {
    image: "/svg/step1.svg",
    title: "Raise a request",
    description:
      "Reach out to us to express your interest in building a wooden house/cottage.",
  },
  {
    image: "/svg/step2.svg",
    title: "Meet our expert",
    description:
      "Our architect will visit you to discuss your ideas, preferences, and budget, ensuring we capture your vision perfectly.",
  },
  {
    image: "/svg/step3.svg",
    title: "Explore design options",
    description:
      "We’ll present you with various design options and reference images to help you choose the style and layout that best suits your needs.",
  },
  {
    image: "/svg/step4.svg",
    title: "Book with us",
    description:
      "Once you’re satisfied with the design, secure your booking to begin the next steps.",
  },
  {
    image: "/svg/step5.svg",
    title: "Receive 3D designs",
    description:
      "We create a detailed 3D model of your wooden house, allowing you to visualize every aspect before construction begins.",
  },
  {
    image: "/svg/step6.svg",
    title: "Finalize Materials & Specifications",
    description:
      "Work with us to select the perfect materials, from wood types to finishes, ensuring every detail aligns with your preferences.",
  },
  {
    image: "/svg/step7.svg",
    title: "Monitor Construction Progress",
    description:
      "Stay informed as our team keeps you updated on the construction progress, from foundation to final touches.",
  },
  {
    image: "/svg/step8.svg",
    title: "Handover to Client",
    description:
      "Upon completion, we hand over your fully finished wooden house, ready for you to move in and enjoy.",
  },
];

export default function ModelDetails({ params }: ModelDetailsProps) {
  const model = modelsData.find((m) => m.id === params.id);

  if (!model) {
    return notFound();
  }
  const slug = convertCategoryToSlug(model.category);

  const carouselImages = [...model.model3DImages, ...model.modelImagesWithLand];

  const propertyImages = [...model.modelImagesWithLand, ...model.model3DImages];

  return (
    <div className="relative w-full  overflow-hidden">
      {/*First section */}
      <div className="relative w-full text-whites-light pb-2 lg:pb-5 mb-2 lg:mb-5">
        <div className="absolute inset-0 z-0 ">
          <Image
            src={model.modelImagesWithLand[0]}
            alt="Background"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-10"></div>
        <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-3 pr-0 md:px-8 lg:px-12 py-3 md:py-4">
          <div className="flex items-center gap-0.5 md:gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="text-xs lg:text-sm leading-6 lg:leading-7 hover:text-primary-light transition-colors duration-300"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 md:w-5 h-4 md:h-5" />
            <Link
              href={`/${slug}`}
              className="text-xs lg:text-sm  text-center leading-6 lg:leading-7 hover:text-primary-light transition-colors duration-300"
            >
              {`${model.category}`}
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 md:w-5 h-4 md:h-5" />
            <Link
              href={`/models/${model.id}`}
              className="text-xs md:text-[13px] lg:text-sm text-center leading-6 lg:leading-7 font-semibold hover:text-primary-light transition-colors duration-300"
            >
              {model.name}
            </Link>
          </div>
          <div className="my-10 md:my-20 lg:my-48 text-left border-l-[6px] px-2.5 md:px-5 py-2">
            <h1 className="font-semibold text-[22px] md:text-[28px] lg:text-[42px]  leading-8 md:leading-9 lg:leading-[52px] mb-1">
              {model.name}
            </h1>
            <p className="text-[#ff6542] text-xl md:text-2xl lg:text-[34px]  lg:leading-10 font-semibold">
              {model.category}
            </p>
          </div>
        </div>
      </div>

      {/*Second section */}
      <div className="relative z-20 flex justify-between gap-1 lg:gap-2 h-full w-full max-w-screen-xl mx-auto px-2.5 md:px-4 lg:px-0 py-1.5 mb-0 lg:my-4 ">
        <div className="w-[18%] lg:w-[201px] flex flex-col items-center">
          <div className=" rounded-full p-1 lg:p-2  border-[2px] lg:border-[2.5px] border-[#D75337] mb-2 lg:mb-4 hover:bg-primary-base transition-colors duration-300">
            <div className="bg-[#FFF1EC] rounded-full">
              <Image
                src="/svg/innerIcon1.svg"
                alt="earthquake"
                width={80}
                height={80}
                className="w-9 lg:w-16 h-9 lg:h-16 rounded-full"
              ></Image>
            </div>
          </div>
          <p className="w-full text-[#232323]  text-[10px] leading-4 lg:text-lg lg:leading-5 text-center">
            Earthquake Resistance
          </p>
        </div>

        <div className="w-[18%] lg:w-[225px] flex flex-col items-center">
          <div className=" rounded-full  p-1 lg:p-2 border-[2px] lg:border-[2.5px] border-[#D75337] mb-2 lg:mb-4 hover:bg-primary-base transition-colors duration-300">
            <div className="bg-[#FFF1EC] rounded-full">
              <Image
                src="/svg/innerIcon2.svg"
                alt="heat and cold"
                width={80}
                height={80}
                className="w-9 lg:w-16 h-9 lg:h-16 rounded-full"
              ></Image>
            </div>
          </div>
          <p className="w-full text-[#232323]  text-[10px] leading-4 lg:text-lg lg:leading-5 text-center">
            Heat and Cold Resistance
          </p>
        </div>

        <div className="w-[18%] lg:w-[200px] flex flex-col items-center">
          <div className=" rounded-full  p-1 lg:p-2 border-[2px] lg:border-[2.5px] border-[#D75337] mb-2 lg:mb-4 hover:bg-primary-base transition-colors duration-300">
            <div className="bg-[#FFF1EC] rounded-full">
              <Image
                src="/svg/innerIcon3.svg"
                alt="fire"
                width={80}
                height={80}
                className="w-9 lg:w-16 h-9 lg:h-16 rounded-full"
              ></Image>
            </div>
          </div>
          <p className="w-full text-[#232323]   text-[10px] leading-4 lg:text-lg lg:leading-5 text-center">
            Fire Resistance
          </p>
        </div>

        <div className="w-[18%] lg:w-[200px] flex flex-col items-center">
          <div className=" rounded-full  p-1 lg:p-2 border-[2px] lg:border-[2.5px] border-[#D75337] mb-2 lg:mb-4 hover:bg-primary-base transition-colors duration-300">
            <div className="bg-[#FFF1EC] rounded-full">
              <Image
                src="/svg/innerIcon4.svg"
                alt="sound proof"
                width={80}
                height={80}
                className="w-9 lg:w-16 h-9 lg:h-16 rounded-full"
              ></Image>
            </div>
          </div>
          <p className="w-full text-[#232323]  text-[10px] leading-4 lg:text-lg lg:leading-5 text-center">
            Sound Proof
          </p>
        </div>

        <div className="w-[18%] lg:w-[200px] flex flex-col items-center">
          <div className=" rounded-full  p-1 lg:p-2 border-[2px] lg:border-[2.5px] border-[#D75337] mb-2 lg:mb-4 hover:bg-primary-base transition-colors duration-300">
            <div className="bg-[#FFF1EC] rounded-full">
              <Image
                src="/svg/innerIcon5.svg"
                alt="warranty"
                width={80}
                height={80}
                className="w-9 lg:w-16 h-9 lg:h-16 rounded-full"
              ></Image>
            </div>
          </div>
          <p className="w-full text-[#232323]   text-[10px] leading-4 lg:text-lg lg:leading-5 text-center">
            15 Years Warranty
          </p>
        </div>
      </div>

      {/*third section */}
      <div className="relative z-20 flex flex-col lg:flex-row justify-between items-center gap-7 lg:gap-32 h-full w-full max-w-screen-xl mx-auto px-3 md:px-6 lg:px-0 py-3 my-2 lg:my-4 lg:mb-[44px]">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <PropertyImageCarousel porpertyImages={propertyImages} />
        </div>
        <div className="flex-1 w-full max-w-[600px]">
          <h3 className="text-black font-medium text-[19px] md:text-xl lg:text-[24px] leading-7 mb-3 md:mb-4">
            Project Details
          </h3>
          <div className="border border-[#D4D4D4] rounded-[10px]">
            {Object.entries(model.projectDetails).map(
              ([property, [value, icon]], index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-2.5 py-2.5 md:py-3 md:px-5 border-b border-[#D4D4D4] last:border-none"
                >
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="bg-[#F4EFF5] flex items-center justify-center rounded-full w-[34px] h-[34px] md:w-[38px] md:h-[38px] overflow-hidden">
                      <Image
                        src={icon}
                        alt={`${property} icon`}
                        width={30}
                        height={30}
                        className="w-5 h-5"
                      />
                    </div>
                    <span className="text-[#313131]  md:text-lg">
                      {property}
                    </span>
                  </div>
                  <div className="text-black text-lg">{value}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/*Fourth section - Floor plan */}
      <FloorPlan modelName={model.name} floors={model.floors} />

      {/*Fifth section - View in 3D */}
      <div className="w-full bg-[#F6F3F6] pt-2 pb-8 lg:pt-8 lg:pb-16">
        <View3D model={model} />
        <Carousel3d images={carouselImages} />
      </div>

      {/*Sixth section - video section */}
      <VideoSection src={model.walkthroughVideo} />

      {/*Seventh section - Steps Carousel */}
      <WorkProcessCarousel steps={stepsData} />

      {/*Eight section - Inner page contact form */}
      <InnerPageContact />
    </div>
  );
}
