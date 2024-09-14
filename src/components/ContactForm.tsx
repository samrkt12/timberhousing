"use client";
import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type Props = {};

const ContactForm = (props: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <div className=" bg-whites-light px-5 lg:px-7 py-3.5 lg:py-5 rounded-xl border-[3px] border-primary-light max-w-[800px] mx-auto lg:mx-0">
      <h3 className="flex flex-row justify-center text-[19px] leading-8 md:leading-9 lg:text-2xl lg:leading-10 font-medium text-whites-darkest mb-4 text-center">
        Book
        <span className="mx-2 text-primary-base">free</span>
        design consultation{" "}
        <span className="relative group flex items-center justify-center">
          <span className="text-[#AFAFAF] cursor-pointer ml-2">
            <GoQuestion />
          </span>
          <span className="absolute bottom-0 left-0 transform -translate-x-[85%] -mb-8 w-max p-2 text-xs bg-whites-light text-whites-darkest rounded-md border shadow-md hidden group-hover:block transition-all duration-200">
            Get in touch with our experts.
          </span>
        </span>
      </h3>
      <form className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm md:text-base lg:text-lg text-[#474747] font-normal mb-1">
            Name:
          </label>
          <input
            type="text"
            placeholder="Satyam S."
            className="w-full text-sm md:text-base px-2 py-3 bg-[#F8F8F8] rounded-lg  focus:outline-primary-base"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm md:text-base lg:text-lg text-[#474747] font-normal mb-1">
            Email:
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full text-sm md:text-base px-2 py-3  bg-[#F8F8F8] rounded-lg  focus:outline-primary-base "
          />
        </div>

        {/* Mobile Number Field */}
        <div>
          <label className="block text-sm md:text-base lg:text-lg text-[#474747] font-normal mb-1">
            Mobile Number:
          </label>
          <PhoneInput
            placeholder="12394567890"
            international
            countryCallingCodeEditable={false}
            value={value}
            onChange={setValue}
            defaultCountry="IN"
            className="custom-phone-input text-sm md:text-base w-full px-2  lg:px-3 py-3 rounded-lg bg-[#F8F8F8] focus:outline-primary-base"
          />
        </div>

        {/* WhatsApp Toggle */}
        <div className="flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="whatsappToggle"
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-secondary-light peer-focus:outline-none  rounded-full peer dark:bg-secondary-base peer-checked:bg-primary-base after:content-[''] after:absolute after:top-1 after:left-[-1px] after:bg-white after:border after:border-primary-base after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full  "></div>
            <span className="ml-2  font-normal ">Reach me on WhatsApp</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center w-full bg-primary-base hover:bg-primary-dark text-whites-light py-2.5 md:py-3 rounded-lg text-sm md:text-base lg:text-lg font-medium transition-all duration-200"
        >
          Meet our architect
          <span className="bg-[#F0AC27] px-2 py-1 lg:py-1.5 ml-2 text-xs leading-3 rounded-md">
            FREE
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
