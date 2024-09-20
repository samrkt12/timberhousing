"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
  const router = useRouter();
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <>
      <div className=" bg-white max-w-[600px] mx-auto px-4 py-3 w-full h-full overflow-hidden ">
        <div
          className="flex items-center gap-1 mb-4 text-[#464646] cursor-pointer"
          onClick={() => router.back()}
        >
          <IoChevronBackOutline />
          <p>Back</p>
        </div>

        {/* Form Content */}
        <form>
          <div className="flex items-center justify-center mb-6 overflow-hidden">
            <Image
              src="/vector1.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-[100px]"
            />
            <h2 className="mx-2  text-[22px]  leading-8  font-semibold text-[#352E39] whitespace-nowrap">
              Contact <span className="text-primary-base">Us</span>
            </h2>
            <Image
              src="/vector2.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-[100px]"
            />
          </div>

          {/* First Row: First Name & Last Name */}
          <div className="flex space-x-4  mb-3 text-[#474747]">
            <div className="flex-1">
              <label htmlFor="firstName" className="block mb-1">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Satyam"
                className="w-full px-1.5 py-1.5 bg-[#F6F6F6] border border-[#D2D2D2] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base capitalize"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block  mb-1">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Singh"
                className="w-full px-1.5 py-1.5 bg-[#F6F6F6] border border-[#D2D2D2] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base capitalize"
              />
            </div>
          </div>

          {/* Second Row: Email */}
          <div className="mb-3 text-[#474747]">
            <label htmlFor="email" className="block  mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-1.5 py-1.5 bg-[#F6F6F6] border border-[#D2D2D2] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base"
            />
          </div>

          {/* Third Row: Mobile Number */}
          <div className="mb-3 text-[#474747]">
            <label htmlFor="mobile" className="block  mb-1">
              Mobile Number:
            </label>
            <PhoneInput
              placeholder="12394567890"
              international
              countryCallingCodeEditable={false}
              value={value}
              onChange={setValue}
              defaultCountry="IN"
              className="custom-phone-input  w-full px-3 border border-[#D2D2D2]   py-1.5 rounded-lg bg-[#F6F6F6] focus:outline-primary-base"
            />
          </div>

          {/* Message (optional) */}
          <div className="mb-3 text-[#474747]">
            <label htmlFor="message" className="block mb-1">
              Message:{" "}
              <span className="text-xs leading-6 text-whites-grey font-light">
                (optional)
              </span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Please write your message here"
              className="w-full px-1.5 py-1.5 bg-[#F6F6F6] border border-[#D2D2D2] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-base"
              style={{ resize: "none" }}
            ></textarea>
          </div>

          {/*Reach on whatsapp toggle */}
          <div className="flex items-center gap-2 mb-5 text-[#474747]">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="whatsappToggle"
                className="sr-only peer"
              />
              <div className="w-8 h-5 bg-secondary-light peer-focus:outline-none  rounded-full peer dark:bg-secondary-base peer-checked:bg-primary-base after:content-[''] after:absolute after:top-1 after:left-[-1px] after:bg-white after:border after:border-primary-base after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full  "></div>
              <span className="ml-2.5">Reach me on WhatsApp</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-primary-base text-white py-2.5 rounded-lg text-lg font-semibold mb-7 hover:bg-primary-dark transition-colors tracking-wider"
          >
            Get a callback
            <span className="bg-[#F0AC27] px-2 py-0.5 ml-2.5 text-sm rounded-md animate-wiggle">
              Now
            </span>
          </button>
        </form>
        {/* 'Or' Divider */}

        <div className="flex items-center justify-center mb-8">
          <Image
            src="/vector1.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-[100px]"
          />
          <h2 className="mx-4  text-[22px]  leading-10  font-semibold text-[#646464] whitespace-nowrap">
            or
          </h2>
          <Image
            src="/vector2.png"
            width={350}
            height={5}
            alt="vector line"
            className="w-[100px]"
          />
        </div>

        {/*Whatsapp animation */}
        <div className="flex flex-row items-center justify-center gap-3 relative z-30 mb-7">
          {/* WhatsApp Icon Section */}
          <div className="relative w-[5rem] h-[5rem]  flex items-center justify-center">
            <div className="relative z-10">
              <FaWhatsapp className="w-[3.5rem] h-[3.5rem] text-[#1DAF11]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute  w-[85%] h-[85%]  rounded-full border-[4px] border-[#1DAF11] opacity-80 animate-ripple"></div>
              <div className="absolute w-[105%] h-[105%] rounded-full border-[1px] border-[#1DAF11] opacity-40 animate-ripple"></div>
            </div>
          </div>

          {/* Text Section with Green Dot */}
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-[#2D2D2D] text-lg flex items-center gap-2">
              We are online now
              <span className="relative inline-block w-[12px] h-[12px] bg-[#1DAF11] rounded-full ml-2">
                <div className="absolute  inset-0 flex items-center justify-center">
                  <div className="absolute w-[150%] h-[150%] rounded-full border-[2px] border-[#1DAF11] opacity-70 animate-ripple"></div>
                  <div className="absolute w-[200%] h-[200%] rounded-full border-[2px] border-[#1DAF11] opacity-35 animate-ripple"></div>
                </div>
              </span>
            </h3>
            <p className=" text-[#1DAF11] text-lg  pl-0.5 tracking-wide leading-7 font-semibold ">
              WhatsApp us
            </p>
          </div>
        </div>

        {/* Contact information*/}
      </div>
      <div className="bg-[#FAFAFA] rounded-[10px] px-6 py-6 flex flex-col  text-[#343434]">
        <div className="">
          <h4 className="font-medium text-lg leading-9 mb-2">
            Contact Information:
          </h4>
          <div className="flex items-center gap-2 mb-2 text-sm">
            <IoMdMail className="text-[#4B325A] w-4 h-4" />
            <p>info@woodenhousing.com</p>
          </div>
          <div className="flex items-center gap-2 mb-2 text-sm">
            <FaPhoneAlt className="text-[#4B325A] w-4 h-4" />
            <p className="font-light">
              <span className="font-semibold">+91</span> 7388476677
            </p>
          </div>
          <div className="flex items-center gap-2 mb-2 text-sm">
            <FaLocationDot className="flex-shrink-0 text-[#4B325A] w-4 h-4" />
            <div>
              <p className="font-light leading-[20px]">
                Plot No. 20, Block: H-1/A, SECTOR-63, Noida, UP, India
              </p>
              <p className="font-light leading-[20px]">Pin code - 201301</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 pl-0.5 items-center mt-4 ">
          <Link href="#">
            <FaYoutube className="w-7 h-7 text-[#4B325A]" />
          </Link>
          <Link href="#">
            <BsInstagram className="w-7 h-7 text-[#4B325A]" />
          </Link>
          <Link href="#">
            <FaFacebook className="w-7 h-7 text-[#4B325A]" />
          </Link>
          <Link href="#">
            <FaXTwitter className="w-7 h-7 text-[#4B325A]" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
