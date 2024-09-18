import InnerPageContact from "@/components/InnerPageContact";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RxDoubleArrowRight } from "react-icons/rx";
type Props = {};

const Page = (props: Props) => {
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
              href="/about-us"
              className="text-sm leading-7 font-semibold hover:text-primary-light transition-colors duration-300"
            >
              About us
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
                About <span className="text-primary-base">us</span>
              </h2>
              <Image
                src="/vector2.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-12 md:w-[200px] lg:w-[350px]"
              />
            </div>
            <p className="text-sm lg:text-xl mx-auto font-light text-center">
              Wood is a high-performance building material
            </p>
          </div>
        </div>
      </div>

      {/*Second section*/}
      <div className="bg-[#FAFAFA]">
        <div className="relative z-20 flex gap-4 lg:gap-10 justify-between flex-col md:flex-row h-full w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-10 py-5 lg:py-12">
          <div className="w-full md:w-[50%]  py-3 px-4 lg:p-6  rounded-2xl shadow-md lg:shadow-xl bg-whites-light">
            <div className="flex items-center gap-2 lg:gap-4 sm:mb-2 lg:mb-4">
              <RxDoubleArrowRight className="w-6 h-6  md:w-7 md:h-7 lg:w-10 lg:h-10 text-primary-base" />
              <h3 className="text-[#352E39] font-semibold text-lg md:text-xl lg:text-[28px] leading-10 lg:leading-[55px]">
                Our Mission
              </h3>
            </div>
            <p className="text-[#585858] font-light text-xs md:text-sm lg:text-base leading-6 lg:leading-7 mb-1 sm:mb-2 lg:mb-3 ">
              At the heart of our mission is a deep commitment to transforming
              the building industry through a harmonious blend of
              sustainability, innovation, and comfort. We are driven by the
              belief that the future of construction must prioritize not only
              the physical well-being of residents but also the health of our
              planet.
            </p>
            <p className="text-[#585858] font-light text-xs md:text-sm lg:text-base leading-6 lg:leading-7 sm:mb-0.5 lg:mb-3">
              Our goal is to redefine living spaces by moving beyond the
              limitations of traditional materials like concrete and bricks,
              embracing advanced technologies and eco-friendly methods that
              enhance both life quality and environmental stewardship.{" "}
            </p>
          </div>
          <div className="w-full md:w-[50%]  py-3 px-4 lg:p-6  rounded-2xl shadow-md lg:shadow-xl bg-whites-light">
            <div className="flex items-center gap-2 lg:gap-4 mb-2 lg:mb-4">
              <RxDoubleArrowRight className="w-7 h-7 lg:w-10 lg:h-10 text-primary-base" />
              <h3 className="text-[#352E39] font-semibold text-xl lg:text-[28px] leading-10 lg:leading-[55px]">
                Our Vision
              </h3>
            </div>
            <p className="text-[#585858] font-light text-xs md:text-sm lg:text-base leading-6 lg:leading-7 mb-2 lg:mb-3 ">
              Our vision is to lead a paradigm shift in the construction
              industry, where the principles of sustainability and innovation
              are not just ideals but integral aspects of every project we
              undertake. We envision a world where homes are more than just
              structures—they are living ecosystems that nurture their
              inhabitants while minimizing their ecological footprint.
            </p>
            <p className="text-[#585858] font-light text-xs md:text-sm lg:text-base leading-6 lg:leading-7 mb-0.5 lg:mb-3">
              By championing sustainable practices and cutting-edge
              technologies, we aim to create living spaces that are in harmony
              with nature, offering unparalleled comfort and modernity.
            </p>
          </div>
        </div>
      </div>

      {/*Third section - Moto */}
      <div className="bg-[#F2F2F2]">
        <div className="relative z-20 flex gap-3 lg:gap-12 justify-center flex-row h-full w-full max-w-screen-xl mx-auto px-4 lg:px-10 py-5 lg:py-10 lg:pr-[52px]">
          <p className="uppercase lg:text-[40px] font-medium lg:leading-[62px] text-[#522820]">
            sustainability
            <span className="font-black text-primary-base">.</span>
          </p>
          <p className="uppercase lg:text-[40px] font-medium lg:leading-[62px] text-[#522820]">
            comfort
            <span className="font-black text-primary-base">.</span>
          </p>
          <p className="uppercase lg:text-[40px] font-medium lg:leading-[62px] text-[#522820]">
            innovation
            <span className="font-black text-primary-base">.</span>
          </p>
        </div>
      </div>

      {/*Fourth section */}
      <div className="pt-8 lg:pt-[100px] pb-10 w-full max-w-[1920px]  mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-5 lg:mb-16">
          <div className="w-full lg:w-[45%] mb-6 lg:mb-0">
            <Image
              src="/about1.jpg"
              alt="wooden house image"
              width={1000}
              height={700}
              className="w-full h-auto object-contain"
            ></Image>
          </div>
          <div className="relative w-full lg:w-[55%] px-5 lg:px-16">
            <div className="absolute -top-[7.5%] lg:-top-[13%] -left-[1.5%] lg:-left-[5%] text-[#F3F3F3] text-[67px] lg:text-[130px] leading-[120px] lg:leading-[220px] font-semibold z-[1]">
              01
            </div>

            <div className="relative z-10">
              <h3 className="text-[#352E39] font-medium text-[17px] lg:text-[28px] leading-7 lg:leading-10 mb-3 lg:mb-6">
                <span className="text-primary-base">Sustainability:</span>{" "}
                Building a Greener Future
              </h3>
              <div className="mb-2 lg:mb-4">
                <h5 className="text-[#352E39] font-medium text-sm lg:text-lg leading-6 lg:leading-10">
                  1. Recyclable Materials for a Circular Economy
                </h5>
                <p className="text-[#5A5A5A] text-xs lg:text-base font-light leading-5 lg:leading-8">
                  We are committed to using materials that contribute to a
                  circular economy, where nothing is wasted, and everything has
                  a purpose. Cold-Formed Steel (CFS), the backbone of our
                  construction, is 100% recyclable, allowing us to reduce waste
                  and promote a sustainable life cycle. This approach not only
                  lowers the environmental impact but also ensures that our
                  buildings contribute to a healthier planet for future
                  generations.
                </p>
              </div>
              <div className="mb-2 lg:mb-4">
                <h5 className="text-[#352E39] font-medium text-sm lg:text-lg leading-6 lg:leading-10">
                  2. Energy Efficiency: Achieving NZEB Standards
                </h5>
                <p className="text-[#5A5A5A] text-xs lg:text-base font-light leading-5 lg:leading-8">
                  Our dedication to sustainability is reflected in our design
                  philosophy, where energy efficiency is paramount. We construct
                  buildings that meet and exceed the Near Zero Energy Building
                  (NZEB) standards, achieving energy class A4. Through the
                  integration of intelligent architectural design and the latest
                  in energy-saving technologies, we significantly reduce the
                  energy consumption of our homes, making them not only
                  cost-effective but also environmentally responsible.
                </p>
              </div>
              <div className="mb-2 lg:mb-4">
                <h5 className="text-[#352E39] font-medium text-sm lg:text-lg leading-6 lg:leading-10">
                  3. Reducing Carbon Footprint: A Commitment to Biodiversity
                </h5>
                <p className="text-[#5A5A5A] text-xs lg:text-base font-light leading-5 lg:leading-8">
                  We actively seek out and implement eco-friendly construction
                  solutions that minimize carbon emissions. Our projects are
                  designed to have a low carbon footprint, contributing to the
                  global effort to combat climate change. By choosing materials
                  and methods that promote biodiversity and environmental
                  health, we ensure that our constructions are not only
                  sustainable but also respectful of the ecosystems they
                  inhabit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center mb-5 lg:mb-16">
          <div className="w-full lg:w-[45%] mb-6 lg:mb-0">
            <Image
              src="/about2.jpg"
              alt="wooden house image"
              width={1000}
              height={700}
              className="w-full h-auto object-contain"
            ></Image>
          </div>
          <div className="relative w-full lg:w-[55%] px-5 lg:px-16 lg:pl-24 ">
            <div className="absolute -top-[7.5%] lg:-top-[13%] -left-[1.5%] lg:-left-[0%] text-[#F3F3F3] text-[67px] lg:text-[130px] leading-[120px] lg:leading-[220px] font-semibold z-[1]">
              02
            </div>

            <div className="relative z-10">
              <h3 className="text-[#352E39] font-medium text-[17px] lg:text-[28px] leading-7 lg:leading-10 mb-3 lg:mb-6">
                <span className="text-primary-base">Comfort:</span> Creating
                Spaces that Enhance Well-being
              </h3>
              <div className="mb-2 lg:mb-4">
                <h5 className="text-[#352E39] font-medium text-sm lg:text-lg leading-6 lg:leading-10">
                  1. Superior Insulation for Optimal Comfort
                </h5>
                <p className="text-[#5A5A5A] text-xs lg:text-base font-light leading-5 lg:leading-8">
                  Comfort begins with the right insulation. We use
                  state-of-the-art insulation materials that provide superior
                  thermal and acoustic protection, ensuring that our homes
                  maintain a consistent and comfortable internal environment
                  regardless of external conditions. This results in quiet,
                  serene spaces that promote relaxation and well-being
                  throughout the year.
                </p>
              </div>
              <div className="mb-2 lg:mb-4">
                <h5 className="text-[#352E39] font-medium text-sm lg:text-lg leading-6 lg:leading-10">
                  2. Customized Environments Tailored to Your Needs
                </h5>
                <p className="text-[#5A5A5A] text-xs lg:text-base font-light leading-5 lg:leading-8">
                  Every home we build is a reflection of its owner’s unique
                  lifestyle and needs. Our design process is highly
                  personalized, allowing us to create spaces that are not just
                  functional but also deeply connected to the daily lives of our
                  clients. From the layout to the finishes, every aspect of the
                  design is carefully considered to enhance comfort, usability,
                  and aesthetic appeal.
                </p>
              </div>
              <div className="mb-2 lg:mb-4">
                <h5 className="text-[#352E39] font-medium text-sm lg:text-lg leading-6 lg:leading-10">
                  3. Modern Living Technologies: Seamless Integration for a
                  Smart Home
                </h5>
                <p className="text-[#5A5A5A] text-xs lg:text-base font-light leading-5 lg:leading-8">
                  We believe that comfort in the modern world is closely tied to
                  technology. Our homes are equipped with the latest
                  advancements in home automation and climate control, offering
                  residents the ability to manage their living environment with
                  ease. Whether through a simple touch or a voice command, our
                  integrated systems ensure that every aspect of your home is
                  attuned to your preferences, enhancing your daily comfort and
                  convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <div className="w-full lg:w-[45%] mb-6 lg:mb-0">
            <Image
              src="/about3.jpg"
              alt="wooden house image"
              width={1000}
              height={700}
              className="w-full h-auto object-contain"
            ></Image>
          </div>
          <div className="relative w-full lg:w-[55%] px-5 lg:px-16">
            <div className="absolute -top-[7.5%] lg:-top-[13%] -left-[1.5%] lg:-left-[5%] text-[#F3F3F3] text-[67px] lg:text-[130px] leading-[120px] lg:leading-[220px] font-semibold z-[1]">
              03
            </div>

            <div className="relative z-10">
              <h3 className="text-[#352E39] font-medium text-[17px] lg:text-[28px] leading-7 lg:leading-10 mb-3 lg:mb-6">
                <span className="text-primary-base">Innovation:</span>{" "}
                Pioneering the Future of Construction
              </h3>
              <div className="mb-2 lg:mb-4">
                <h5 className="text-[#352E39] font-medium text-sm lg:text-lg leading-6 lg:leading-10">
                  1. Cutting-Edge CFS Technology: The Backbone of Modern
                  Construction
                </h5>
                <p className="text-[#5A5A5A] text-xs lg:text-base font-light leading-5 lg:leading-8">
                  Innovation is the cornerstone of our construction philosophy.
                  Cold-Formed Steel (CFS) technology represents a significant
                  advancement in the building industry, offering a lightweight
                  yet robust alternative to traditional materials. This
                  technology allows for greater design flexibility, enabling us
                  to create structures that are not only resilient but also
                  adaptable to a wide range of architectural styles and
                  environmental conditions.
                </p>
              </div>
              <div className="mb-2 lg:mb-4">
                <h5 className="text-[#352E39] font-medium text-sm lg:text-lg leading-6 lg:leading-10">
                  2. Continuous Research and Development: Staying Ahead of the
                  Curve
                </h5>
                <p className="text-[#5A5A5A] text-xs lg:text-base font-light leading-5 lg:leading-8">
                  In a rapidly evolving industry, staying ahead means
                  continuously pushing the boundaries of what’s possible. Our
                  dedicated research and development team is constantly
                  exploring new materials, methods, and technologies to ensure
                  that every project we undertake is at the cutting edge of
                  innovation. This commitment to R&D ensures that our clients
                  receive the most advanced solutions available, tailored to
                  meet the specific demands of modern living.
                </p>
              </div>
              <div className="mb-2 lg:mb-4">
                <h5 className="text-[#352E39] font-medium text-sm lg:text-lg leading-6 lg:leading-10">
                  3. Integrated Design Process: Efficiency and Precision with
                  BIM
                </h5>
                <p className="text-[#5A5A5A] text-xs lg:text-base font-light leading-5 lg:leading-8">
                  We employ Building Information Modeling (BIM) methodology to
                  streamline the design and construction process. This advanced
                  modeling tool allows us to visualize and optimize every aspect
                  of the project before construction begins, reducing waste,
                  improving accuracy, and enhancing overall efficiency. By
                  integrating BIM into our workflow, we can deliver projects
                  that are not only innovative but also executed with precision
                  and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Fifth section */}
      <div className="bg-[#F9F9F9] py-5 lg:py-8">
        <div className="relative z-20 h-full w-full max-w-screen-xl mx-auto overflow-hidden px-4">
          <div className="flex items-center justify-center mb-1 lg:mb-1.5">
            <Image
              src="/vector1.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[100px] lg:w-[250px]"
            />
            <h2 className="mx-1 lg:mx-3 text-xl md:text-[22px] leading-[30px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] text-center lg:whitespace-nowrap">
              Your Journey with Us: From Vision to Reality
            </h2>
            <Image
              src="/vector2.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[100px] lg:w-[250px]"
            />
          </div>
          <p className="text-sm  lg:text-base mb-6 lg:mb-12 max-w-[70ch] mx-auto font-light text-center text-[#636363] px-6 lg:px-0">
            Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
            odio laborum
          </p>

          <div className="w-full mb-3 lg:mb-5  sm:px-3 lg:px-16">
            <h6 className="text-[#352E39] text-[13px] md:text-base lg:text-lg lg:leading-10 font-medium mb-1 lg:mb-0">
              1. Discovering Your Vision: Let’s Get to Know Each Other
            </h6>
            <p className="text-[5A5A5A] text-xs lg:text-base leading-6 lg:leading-8 font-light">
              Building a home is a deeply personal journey, and we believe it
              starts with understanding your vision. During our initial
              consultation, we’ll explore what inspired you to choose a wooden
              house, and discuss how our values align with your aspirations.
              This dialogue is essential for creating a synergy between us,
              ensuring that the final product is a true reflection of your
              dream.
            </p>
          </div>
          <div className="w-full mb-3 lg:mb-5  sm:px-3 lg:px-16">
            <h6 className="text-[#352E39] text-[13px] md:text-base lg:text-lg lg:leading-10 font-medium mb-1 lg:mb-0">
              2. Requesting a Free, Detailed Quote
            </h6>
            <p className="text-[5A5A5A] text-xs lg:text-base leading-6 lg:leading-8 font-light">
              Once we have a clear understanding of your project, we will
              provide a comprehensive, obligation-free quote. This detailed
              proposal will outline the costs, timeframes, and technologies
              involved in bringing your vision to life, giving you a clear
              picture of what to expect as we move forward.
            </p>
          </div>
          <div className="w-full mb-3 lg:mb-5  sm:px-3 lg:px-16">
            <h6 className="text-[#352E39] text-[13px] md:text-base lg:text-lg lg:leading-10 font-medium mb-1 lg:mb-0">
              3. Commencing Construction: Bringing Your Dream to Life
            </h6>
            <p className="text-[5A5A5A] text-xs lg:text-base leading-6 lg:leading-8 font-light">
              When you’re ready to proceed, we’ll begin the construction process
              with a focus on transparency and collaboration. Throughout every
              phase of the project, from foundation to finish, you’ll be kept
              informed and involved, allowing you to enjoy the experience of
              seeing your dream home take shape. We handle all aspects of the
              project, ensuring a stress-free experience where you can trust our
              expertise and professionalism.
            </p>
          </div>
          <div className="w-full mb-3 lg:mb-5  sm:px-3 lg:px-16">
            <h6 className="text-[#352E39] text-[13px] md:text-base lg:text-lg lg:leading-10 font-medium mb-1 lg:mb-0">
              4. Delivery and Ongoing Support: A Commitment to Excellence
            </h6>
            <p className="text-[5A5A5A] text-xs lg:text-base leading-6 lg:leading-8 font-light">
              Our commitment to you doesn’t end when we hand over the keys. We
              stand by the quality of our work, offering two post-sales
              assistance visits per year for the first two years following the
              completion of your home. This ensures that any adjustments or
              issues are promptly addressed, allowing you to enjoy your new home
              with complete peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/*Sixth section */}
      <InnerPageContact />
    </div>
  );
};

export default Page;
