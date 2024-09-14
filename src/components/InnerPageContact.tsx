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
    <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#FEF8F6_47.65%,#FFFFFF_100%)] py-20 w-full flex items-center justify-center gap-8 relative overflow-hidden">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-[55%] -translate-y-1/2 z-0">
        <Image
          src="/bg-logo.png"
          alt="Logo Vector"
          width={520}
          height={520}
          className="object-contain "
        />
      </div>

      <div className="flex items-center justify-center gap-8 relative overflow-hidden pl-[8.5rem]">
        <div className="flex items-center justify-center gap-6 relative z-30">
          {/* WhatsApp Icon Section */}
          <div className="relative w-[7.7rem] h-[7.7rem] flex items-center justify-center">
            <div className="relative z-10">
              <FaWhatsapp className="w-24 h-24 text-[#1DAF11]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-[3px] border-[#1DAF11] opacity-80 animate-ripple"></div>
              <div className="absolute w-[140%] h-[140%] rounded-full border-[3px] border-[#1DAF11] opacity-40 animate-ripple"></div>
            </div>
          </div>

          {/* Text Section with Green Dot */}
          <div>
            <h3 className="text-[#2D2D2D] text-2xl flex items-center gap-2">
              We are online now
              <span className="relative inline-block w-[14px] h-[14px] bg-[#1DAF11] rounded-full ml-2">
                <div className="absolute  inset-0 flex items-center justify-center">
                  <div className="absolute w-[200%] h-[200%] rounded-full border-[2px] border-[#1DAF11] opacity-70 animate-ripple"></div>
                  <div className="absolute w-[300%] h-[300%] rounded-full border-[2px] border-[#1DAF11] opacity-35 animate-ripple"></div>
                </div>
              </span>
            </h3>
            <p className="text-[#1DAF11] text-2xl leading-10 font-semibold inline-flex items-center gap-2">
              WhatsApp us
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
          <h2 className="mx-1 text-3xl leading-10 font-semibold text-[#888686] whitespace-nowrap">
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

        <form className="p-8 border-[3px] border-[#D75337] rounded-[15px] bg-whites-light w-[580px] relative z-30">
          <h3 className="font-medium text-[28px] leading-8 mb-8">
            Get <span className="text-primary-base">free</span> consultation
          </h3>

          {/* Step 1: Mobile Number */}
          {step === 1 && (
            <div className="relative">
              <div className="flex justify-between mb-2">
                <label className="block text-lg text-[#474747] font-normal">
                  Please enter your mobile number:
                </label>
                <button
                  type="button"
                  className="text-[#9B9B9B]  flex gap-1 items-center text-[15px] leading-6 invisible"
                >
                  <FaArrowLeft className="w-4 h-4" />
                  Go Back
                </button>
              </div>
              <div className="flex items-center">
                <PhoneInput
                  placeholder="12394567890"
                  international
                  countryCallingCodeEditable={false}
                  value={mobile}
                  onChange={setMobile}
                  defaultCountry="IN"
                  className="custom-phone-input w-full px-3 py-3 rounded-lg bg-[#F8F8F8] focus:outline-primary-base"
                />
                <button
                  type="button"
                  className="ml-2  py-2 px-5 bg-primary-base hover:bg-primary-dark text-whites-light rounded-lg transition-colors duration-300 group"
                  onClick={handleNext}
                >
                  <FaArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Name */}
          {step === 2 && (
            <div className="relative">
              <div className="flex justify-between mb-2">
                <label className="block text-lg text-[#474747] font-normal">
                  Please enter your name:
                </label>
                <button
                  type="button"
                  className="  text-[#9B9B9B]  flex gap-1 items-center text-[15px] leading-6 group"
                  onClick={handleBack}
                >
                  <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1  transition-all duration-300" />
                  Go Back
                </button>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-3 rounded-lg bg-[#F8F8F8] focus:outline-primary-base"
                />
                <button
                  type="button"
                  className="ml-2 py-2 px-5 bg-primary-base hover:bg-primary-dark text-whites-light rounded-lg  transition-colors duration-300 group"
                  onClick={handleNext}
                >
                  <FaArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Email */}
          {step === 3 && (
            <div className="relative">
              <div className="flex justify-between mb-2">
                <label className="block text-lg text-[#474747] font-normal">
                  Please enter your email:
                </label>
                <button
                  type="button"
                  className="  text-[#9B9B9B]  flex gap-1 items-center text-[15px] leading-6 group"
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
                  className="w-full px-3 py-3 rounded-lg bg-[#F8F8F8] focus:outline-primary-base"
                />
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 mt-5 mb-8">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="whatsappToggle"
                className="sr-only peer"
              />
              <div className="w-8 h-5 bg-secondary-light peer-focus:outline-none  rounded-full peer dark:bg-secondary-base peer-checked:bg-primary-base after:content-[''] after:absolute after:top-1 after:left-[-1px] after:bg-white after:border after:border-primary-base after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full  "></div>
              <span className="ml-2 text-base font-normal ">
                Reach me on WhatsApp
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`flex items-center justify-center w-full bg-primary-base hover:bg-primary-dark text-whites-light py-3 rounded-lg text-lg font-medium transition-all duration-300 group ${
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
