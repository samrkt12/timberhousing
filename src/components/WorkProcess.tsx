import Image from "next/image";
import React from "react";

type Props = {};

const WorkProcess = (props: Props) => {
  return (
    <section className="relative w-full overflow-hidden pt-8 lg:pt-12 pb-6 lg:pb-16">
      <div className="relative z-20 h-full flex flex-col items-center max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center justify-center mb-1 lg:mb-1.5">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          />
          <h2 className="mx-1  text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
            How design session works?
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          />
        </div>
        <p className="text-sm lg:text-base mb-6 lg:mb-10  max-w-[58ch] mx-auto font-light text-center text-[#636363]">
          Take a look at our work process below!
        </p>

        {/* Work Process Steps */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-2 lg:gap-0">
          {/* Step 1 */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
            <div className="w-[180px] h-[180px] lg:w-[95%] lg:h-[230px]">
              <Image
                src="/svg/workProcess1.svg"
                width={230}
                height={230}
                alt="Step 1"
                className="mb-4 w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex w-full items-center justify-center mb-4">
              <div className="relative z-10 flex flex-shrink-0 items-center justify-center w-10 h-10 text-white bg-primary-base rounded-full">
                1
              </div>
              <div className="w-full h-0.5 lg:h-0.5 lg:border-dashed lg:border-b-2 border-primary-base"></div>
            </div>
            <h3 className="flex items-center lg:text-lg font-semibold text-center lg:text-left mb-2">
              <span className="relative lg:hidden z-10 flex flex-shrink-0 items-center justify-center w-7 h-7 mr-1.5 text-white bg-primary-base rounded-full">
                1
              </span>
              Client Consultation
            </h3>
            <p className="text-[13px] lg:text-sm text-center lg:text-left text-[#636363] px-8 lg:px-0 lg:pr-8">
              Our team visits your location to discuss your requirements,
              expectations, design ideas, and budget, ensuring we fully
              understand your vision.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
            <div className="w-[180px] h-[180px] lg:w-[95%] lg:h-[230px] lg:relative">
              <Image
                src="/svg/workProcess2.svg"
                width={230}
                height={230}
                alt="Step 2"
                className="mb-4 w-full h-full object-contain lg:relative lg:top-3"
              />
            </div>
            <div className="hidden lg:flex w-full items-center justify-center mb-4">
              <div className="relative z-10 flex flex-shrink-0 items-center justify-center w-10 h-10 text-white bg-primary-base rounded-full">
                2
              </div>
              <div className="w-full h-0.5 lg:h-0.5 lg:border-dashed lg:border-b-2 border-primary-base"></div>
            </div>
            <h3 className="flex items-center lg:text-lg font-semibold text-center lg:text-left mb-2">
              <span className="relative lg:hidden z-10 flex flex-shrink-0 items-center justify-center w-7 h-7 mr-1.5 text-white bg-primary-base rounded-full">
                2
              </span>
              Design and Floor Plan Presentation
            </h3>
            <p className="text-[13px] lg:text-sm text-center lg:text-left text-[#636363] px-8 lg:px-0 lg:pr-8">
              We share reference designs for wooden resorts, including detailed
              floor plans and 3D drawings, to give you a clear picture of the
              project.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
            <div className="w-[180px] h-[180px] lg:w-[95%] lg:h-[230px]">
              <Image
                src="/svg/workProcess3.svg"
                width={230}
                height={230}
                alt="Step 3"
                className="mb-4 w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex w-full items-center justify-center mb-4">
              <div className="relative z-10 flex flex-shrink-0 items-center justify-center w-10 h-10 text-white bg-primary-base rounded-full">
                3
              </div>
              <div className="w-full h-0.5 lg:h-0.5 lg:border-dashed lg:border-b-2 border-primary-base"></div>
            </div>
            <h3 className="flex items-center lg:text-lg font-semibold text-center lg:text-left mb-2">
              <span className="relative lg:hidden z-10 flex flex-shrink-0 items-center justify-center w-7 h-7 mr-1.5 text-white bg-primary-base rounded-full">
                3
              </span>
              Materials & Specifications
            </h3>
            <p className="text-[13px] lg:text-sm text-center lg:text-left text-[#636363] px-8 lg:px-0 lg:pr-8">
              We work with you to select the perfect materials—laminates,
              veneers, metal strips, glass, paints, and fabrics—to bring your
              design to life.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/4">
            <div className="w-[180px] h-[180px] lg:w-[95%] lg:h-[230px]">
              <Image
                src="/svg/workProcess4.svg"
                width={230}
                height={230}
                alt="Step 4"
                className="mb-4 w-full h-full object-contain"
              />
            </div>
            <div className="hidden lg:flex items-center justify-center mb-4">
              <div className="relative z-10 flex flex-shrink-0 items-center justify-center w-10 h-10 text-white bg-primary-base rounded-full">
                4
              </div>
            </div>
            <h3 className="flex items-center lg:text-lg font-semibold text-center lg:text-left mb-2">
              <span className="relative lg:hidden z-10 flex flex-shrink-0 items-center justify-center w-7 h-7 mr-1.5 text-white bg-primary-base rounded-full">
                4
              </span>
              Execution & Delivery
            </h3>
            <p className="text-[13px] lg:text-sm text-center lg:text-left text-[#636363] px-8 lg:px-0 lg:pr-8">
              Our team manages the entire construction process, from material
              procurement to the smooth coordination of skilled professionals,
              ensuring your project is completed on time and to the highest
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
