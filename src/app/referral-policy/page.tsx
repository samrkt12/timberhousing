"use client";
import ContactModal from "@/components/ContactModal";
import Button from "@/components/UI/Button";
import useContactHandler from "@/utils/useContactHandler";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";

type Props = {};

const faqs = [
  {
    question: "What is the WoodenHousing referral program?",
    answer:
      "The WoodenHousing referral program rewards you with ₹5000 for every friend you invite who books their dream home with us. It's our way of saying thank you for helping us grow our community of happy homeowners.",
  },
  {
    question: "How does the WoodenHousing referral program work?",
    answer:
      "Once you refer a friend to WoodenHousing, and they book their dream home with us, you will receive ₹5000 as a reward. Make sure your friend mentions your referral during the booking process to ensure you get credited.",
  },
  {
    question: "What does referrer mean?",
    answer:
      "A referrer is someone who invites others to use WoodenHousing's services. In our referral program, the referrer is the person who receives a reward when their referred friend books a home with us.",
  },
  {
    question: "How many times can a referrer invite others?",
    answer:
      "There is no limit to how many people a referrer can invite. Each successful referral that leads to a booking earns the referrer ₹5000, so the more friends you invite, the more you can earn.",
  },
  {
    question: "Can I refer multiple friends at once?",
    answer:
      "Yes, you can refer multiple friends at once. Each friend who books a home with us will count as a separate referral, and you'll earn ₹5000 for each successful booking.",
  },
  {
    question: "Are there any conditions for receiving the referral reward?",
    answer:
      "Yes, the referral reward is only given when the referred friend completes a booking of their dream home with WoodenHousing. The referral must be mentioned during the booking process to qualify for the reward.",
  },
  {
    question: "When will I receive my referral reward?",
    answer:
      "You will receive your referral reward within 30 days of the referred friend completing their booking. We will notify you via email once the reward has been processed.",
  },
];

const Page = (props: Props) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { handleContactClick, isModalOpen, closeModal } = useContactHandler();

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full bg-[#FFE8E3] ">
        <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 py-3">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Link
              href="/"
              className="text-xs md:text-sm leading-7 hover:text-primary-light transition-colors duration-300 text-[#42302D]"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-primary-base w-4 h-4" />
            <Link
              href="/referral-policy"
              className="text-sm  md:text-sm leading-7 font-semibold hover:text-primary-light transition-colors duration-300 text-[#42302D]"
            >
              Referral Policy
            </Link>
          </div>
          <div className="w-full my-5 lg:my-10 mb-10 lg:mb-44">
            <div className="flex items-center justify-center mb-2.5">
              <Image
                src="/vector1.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-16 md:w-[200px] lg:w-[350px]"
              />
              <h2 className="mx-1 text-2xl lg:text-[42px] lg:leading-[46px] text-[#322A29]  font-semibold whitespace-nowrap">
                Referral Policy
              </h2>
              <Image
                src="/vector2.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-16 md:w-[200px] lg:w-[350px]"
              />
            </div>
            <p className="text-sm lg:text-xl mx-auto font-light text-[#322A29] text-center">
              Wood is a high-performance building material
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex items-center justify-center h-full w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 ">
        <div className="relative  bg-whites-light shadow-lg -top-10 lg:top-0 lg:-translate-y-1/2 w-full md:w-fit rounded-[17px]  flex items-center justify-between gap-6 lg:gap-10 p-4 py-6 lg:p-10">
          <div className="flex-shrink-0 w-fit max-w-[120px] max-h-[120px] md:max-w-[170px] md:max-h-[170px] lg:max-w-[230px] lg:max-h-[220px] h-full">
            <Image
              src="/referral-main.png"
              alt="referral image"
              width={300}
              height={300}
              className="w-full h-full object-contain"
            ></Image>
          </div>
          <div>
            <p className="text-sm md:text-lg lg:text-2xl text-[#322A29] text-nowrap">
              Refer a friend to get <span className="font-semibold">upto</span>
            </p>
            <p className="text-[#4B325A] text-[32px] lg:text-[60px] font-semibold">
              ₹5000/-
            </p>
            <p className="text-xs md:text-sm lg:text-base text-[#5B5B5B] font-light max-w-[30ch] leading-5 lg:leading-7">
              Lorem ipsum dolor sit amet, conse aipiscing elitconse aip
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 h-full flex flex-col  items-center max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 -mt-2 lg:-mt-28">
        <div className="flex items-center justify-center mb-1">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          />
          <h2 className="mx-1 lg:mx-3 text-xl leading-[26px] lg:text-3xl lg:leading-10  font-semibold text-[#352E39] whitespace-nowrap">
            How referral works?
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-10 md:w-[200px] lg:w-[350px]"
          />
        </div>
        <p className="text-sm lg:text-base mb-7 lg:mb-16 max-w-[58ch] mx-auto font-light text-center text-[#636363] px-6 lg:px-0">
          Lorem ipsum dolor sit amet, conse aipiscing elitconse aip
        </p>
        <div className="relative flex flex-col lg:flex-row w-full justify-between items-center mb-5 lg:mb-10 gap-8 lg:gap-0">
          <div className="relative max-w-[205px] md:max-w-[250px] lg:max-w-[280px] ">
            <div className="w-full h-full max-h-[250px]">
              <Image
                src="/referral-img1.png"
                alt="referral img 1"
                width={200}
                height={300}
                className="w-full h-auto object-contain"
              ></Image>
            </div>
            <div className="p-2 lg:p-4">
              <h4 className="text-[#161616] leading-5 md:leading-7  md:text-lg lg:text-xl font-medium text-center mb-1">
                Invite your Friends to{" "}
                <span className="font-semibold text-primary-base">
                  WoodenHousing
                </span>
              </h4>
              <p className="text-[#5B5B5B] text-xs lg:text-sm leading-4 lg:leading-6 text-center px-1">
                Lorem ipsum dolor sit amet, conse aipiscing elitconse aip
              </p>
            </div>
          </div>
          <div className="absolute max-w-[200px] lg:hidden -rotate-[270deg] top-[31%] translate-x-[63%] md:translate-x-[72%] ">
            <Image
              src="/referral-arrow1.png"
              alt="arrow 1"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
            ></Image>
          </div>
          <div className="relative -top-24 mr-1 hidden lg:block">
            <Image
              src="/referral-arrow1.png"
              alt="arrow 1"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
            ></Image>
          </div>
          <div className="max-w-[205px] md:max-w-[250px] lg:max-w-[280px]">
            <div className="w-full h-full max-h-[250px]">
              <Image
                src="/referral-img2.png"
                alt="referral img 2"
                width={200}
                height={300}
                className="w-auto h-auto object-contain"
              ></Image>
            </div>
            <div className="p-2 lg:p-4">
              <h4 className="text-[#161616] leading-5 md:leading-7  md:text-lg lg:text-xl font-medium text-center mb-1">
                Your friend books his dream house from us
              </h4>
              <p className="text-[#5B5B5B] text-xs lg:text-sm leading-4 lg:leading-6 text-center px-1">
                Lorem ipsum dolor sit amet, conse aipiscing elitconse aip
              </p>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="/referral-arrow1.png"
              alt="arrow 1"
              width={200}
              height={200}
              className="w-full h-auto object-contain -scale-y-100"
            ></Image>
          </div>
          <div className="absolute max-w-[200px] lg:hidden -rotate-[90deg] top-[68%] -translate-x-[61%] md:-translate-x-[72%] ">
            <Image
              src="/referral-arrow1.png"
              alt="arrow 1"
              width={200}
              height={200}
              className="w-full h-auto object-contain -scale-x-100"
            ></Image>
          </div>
          <div className="max-w-[205px] md:max-w-[250px] lg:max-w-[280px]">
            <div className="w-full h-full max-h-[250px] flex items-center justify-center">
              <Image
                src="/referral-img3.png"
                alt="referral img 1"
                width={200}
                height={300}
                className="w-auto h-auto max-h-[250px] object-contain"
              ></Image>
            </div>
            <div className="p-2 lg:p-4">
              <h4 className="text-[#161616] leading-5 md:leading-7  md:text-lg lg:text-xl font-medium text-center mb-1">
                You get upto{" "}
                <span className="font-semibold text-primary-base">₹5000</span>{" "}
                as referral reward
              </h4>
              <p className="text-[#5B5B5B] text-xs lg:text-sm leading-4 lg:leading-6 text-center px-1">
                Lorem ipsum dolor sit amet, conse aipiscing elitconse aip
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA]">
        <div className="relative z-20 h-full flex flex-col items-center max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-4 lg:py-7 lg:pb-12">
          <div className="flex items-center justify-center mb-1">
            <Image
              src="/vector1.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            />
            <h2 className="mx-1 lg:mx-3 text-xl leading-[26px] lg:text-3xl lg:leading-10 font-semibold text-[#352E39] whitespace-nowrap">
              Frequently Asked Questions
            </h2>
            <Image
              src="/vector2.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-10 md:w-[200px] lg:w-[350px]"
            />
          </div>
          <p className="text-sm lg:text-base mb-5 lg:mb-10 max-w-[58ch] mx-auto font-light text-center text-[#636363] px-6 lg:px-0">
            Lorem ipsum dolor sit amet, conse aipiscing elitconse aip
          </p>

          <div className="w-full max-w-screen-xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full mb-2 md:mb-3">
                <div
                  className="flex justify-between items-center cursor-pointer px-2.5 py-2 md:px-4 md:py-3 border-b border-[#DEDEDE] rounded-lg shadow-md hover:bg-gray-50 transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-sm md:text-base lg::text-lg font-medium text-[#352E39]">
                    {faq.question}
                  </h3>
                  <span className="ml-2">
                    {expandedIndex === index ? (
                      <IoIosArrowUp className="w-5 h-5 text-primary-dark" />
                    ) : (
                      <IoIosArrowDown className="w-5 h-5 text-gray-600" />
                    )}
                  </span>
                </div>

                {expandedIndex === index && (
                  <div className="py-2 px-3 lg:p-4 bg-white border-x-4 shadow-md border-primary-base rounded-b-lg text-gray-700">
                    <p className="text-[13px] md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="relative w-full overflow-hidden lg:pt-10 lg:pb-6 px-4 ">
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-whites-light py-10 lg:py-20 pb-5 lg:pb-5">
          <p className="text-lg lg:text-xl mb-1 lg:mb-1.5 text-[#242424]">
            So what are you waiting for?
          </p>
          <h1 className="text-3xl text-primary-base md:text-4xl lg:text-5xl font-bold mb-5">
            Refer your friend now!
          </h1>
          <p className="text-sm lg:text-base max-w-[58ch] text-[#282828] mb-9 text-center">
            We have a floor plan for you! We deliver{" "}
            <span className="font-medium">world-class</span> log and Modular
            prefab home on time, on budget, and in balance with nature’s
            perfection. Our best design team also assist you in creating that
            customized home you’ve been dreaming of.
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-primary-base text-white text-lg lg:text-xl font-medium  px-7 py-2 lg:py-4 rounded-[10px] shadow-xl hover:bg-primary-dark transition-colors duration-200"
          >
            Contact Us Now
          </Button>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Page;
