"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
type Props = {};

const InnerPageContact = (props: Props) => {
  const [step, setStep] = useState<number>(1);
  const [mobile, setMobile] = useState<string | undefined>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleNext = (): void => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = (): void => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#FEF8F6_47.65%,#FFFFFF_100%)] py-8 md:py-10 lg:py-20 w-full flex items-center justify-center relative overflow-hidden">
      <div className=" absolute hidden lg:block top-1/2 left-1/2 transform -translate-x-[55%] -translate-y-1/2 z-0">
        <Image
          src="/bg-logo.png"
          alt="Logo Vector"
          width={520}
          height={520}
          className="object-contain "
        />
      </div>

      <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-center gap-5 lg:gap-8 relative overflow-hidden lg:pl-[8.5rem] px-3">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-1.5 relative z-30 pb-3">
          {/* WhatsApp Icon Section */}
          <div className="relative w-[6rem] h-[6rem] lg:w-[7.7rem] lg:h-[7.7rem] flex items-center justify-center">
            <div className="relative z-10">
              <FaWhatsapp className="w-[3.5rem] h-[3.5rem] md:w-20 md:h-20 lg:w-24 lg:h-24 text-[#1DAF11]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[90%] h-[90%] rounded-full border-[4px] border-[#1DAF11] opacity-80 animate-ripple"></div>
              <div className="absolute w-[110%] h-[110%] rounded-full border-[2px] border-[#1DAF11] opacity-40 animate-ripple"></div>
            </div>
          </div>

          {/* Text Section with Green Dot */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <h3 className=" text-[#1DAF11] text-xl lg:text-2xl flex items-center gap-1 tracking-wide">
              WhatsApp us
              <span className="relative inline-block w-3 h-3 lg:w-[14px] lg:h-[14px] bg-[#1DAF11] rounded-full ml-2">
                <div className="absolute  inset-0 flex items-center justify-center">
                  <div className="absolute w-[150%] h-[150%] rounded-full border-[2px] border-[#1DAF11] opacity-70 animate-ripple"></div>
                  <div className="absolute w-[200%] h-[200%] rounded-full border-[2px] border-[#1DAF11] opacity-35 animate-ripple"></div>
                </div>
              </span>
            </h3>
            <p className="inline-flex text-[#2D2D2D] text-lg lg:text-xl pl-1 lg:pl-[1px] lg:leading-8 font-medium items-center gap-2">
              We are online now
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mb-1.5 relative z-30">
          <Image
            src="/vector1.png"
            width={50}
            height={5}
            alt="vector line"
            className="w-8"
          />
          <h2 className="mx-1 text-2xl lg:text-3xl leading-10 font-semibold text-[#222222] whitespace-nowrap">
            or
          </h2>
          <Image
            src="/vector2.png"
            width={50}
            height={5}
            alt="vector line"
            className="w-8"
          />
        </div>

        <form className="p-5 lg:p-8 border-[2px] lg:border-[3px]  border-[#D75337] rounded-[15px] bg-whites-light w-full max-w-[580px] lg:w-[580px] relative z-30">
          <h3 className="font-medium text-[22px] lg:text-[28px] leading-7 lg:leading-8 mb-4 lg:mb-8">
            Get <span className="text-primary-base">free</span> consultation
          </h3>

          {/* Step 1: Mobile Number */}
          {step === 1 && (
            <div className="relative">
              <div className="flex justify-between mb-2">
                <label className=" block text-sm md:text-base lg:text-lg text-[#474747] font-normal">
                  Please enter your mobile number:
                </label>
                <button
                  type="button"
                  className="text-[#9B9B9B] flex gap-1 items-center text-[13px] md:text-[15px] leading-6 invisible"
                >
                  <FaArrowLeft className="w-4 h-4" />
                  Go Back
                </button>
              </div>
              <div className="flex w-full items-center">
                <PhoneInput
                  placeholder="12394567890"
                  international
                  countryCallingCodeEditable={false}
                  value={mobile}
                  onChange={setMobile}
                  defaultCountry="IN"
                  className="custom-phone-input w-full pr-0    px-1.5 md:px-2 lg:px-3 py-2  lg:py-3  rounded-lg bg-[#F8F8F8] focus:outline-primary-base"
                />
                <button
                  type="button"
                  className="ml-2 py-2 px-3 lg:px-5 flex-shrink-0 bg-primary-base hover:bg-primary-dark text-whites-light rounded-lg transition-colors duration-300 group"
                  onClick={handleNext}
                >
                  <FaArrowRight className="w-4 h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Name */}
          {step === 2 && (
            <div className="relative w-full">
              <div className="flex w-full justify-between mb-2">
                <label className=" block text-sm md:text-base lg:text-lg text-[#474747] font-normal">
                  Please enter your name:
                </label>
                <button
                  type="button"
                  className="text-[#9B9B9B] flex gap-1 items-center text-[13px] md:text-[15px] leading-6 group"
                  onClick={handleBack}
                >
                  <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1  transition-all duration-300" />
                  Go Back
                </button>
              </div>
              <div className="flex w-full items-center">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-1.5 md:px-2 lg:px-3 py-2   lg:py-3 rounded-lg bg-[#F8F8F8] focus:outline-primary-base text-sm lg:text-base leading-6"
                />
                <button
                  type="button"
                  className="ml-2 py-2 px-3 lg:px-5 bg-primary-base hover:bg-primary-dark text-whites-light rounded-lg  transition-colors duration-300 group"
                  onClick={handleNext}
                >
                  <FaArrowRight className="w-4 h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Email */}
          {step === 3 && (
            <div className="relative">
              <div className="flex justify-between mb-2">
                <label className=" block text-sm md:text-base lg:text-lg text-[#474747] font-normal">
                  Please enter your email:
                </label>
                <button
                  type="button"
                  className="text-[#9B9B9B] flex gap-1 items-center text-[13px] md:text-[15px] leading-6 group"
                  onClick={handleBack}
                >
                  <FaArrowLeft className="w-4 h-4  group-hover:-translate-x-1  transition-all duration-300" />
                  Go Back
                </button>
              </div>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-1.5 md:px-2 lg:px-3 py-2   lg:py-3 rounded-lg bg-[#F8F8F8] focus:outline-primary-base text-sm lg:text-base leading-6"
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 mt-4 lg:mt-5 mb-4 lg:mb-8">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="whatsappToggle"
                className="sr-only peer"
              />
              <div className="w-8 h-5 bg-secondary-light peer-focus:outline-none  rounded-full peer dark:bg-secondary-base peer-checked:bg-primary-base after:content-[''] after:absolute after:top-1 after:left-[-1px] after:bg-white after:border after:border-primary-base after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full  "></div>
              <span className="ml-2 text-sm leading-6 lg:text-base font-normal ">
                Reach me on WhatsApp
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`flex items-center justify-center w-full bg-primary-base hover:bg-primary-dark text-whites-light py-2 lg:py-3 rounded-lg leading-7 lg:text-lg lg:font-medium transition-all duration-300 group ${
              step === 3 ? "opacity-100" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={step !== 3}
          >
            Meet our architect
            <span className="bg-[#F0AC27] px-2 py-1.5 ml-2 text-xs leading-3 rounded-md group-hover:scale-110 transition-all duration-300">
              FREE
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default InnerPageContact;
