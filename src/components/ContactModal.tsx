"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !isMounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center overflow-y-auto z-[99999]"
      onClick={handleOverlayClick}
    >
      <div
        className="modal-content bg-white  rounded-[28px] w-[900px] border-[5px] border-[#D75337] relative mt-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-1 p-1">
          <GrFormClose className="w-10 h-10" />
        </button>

        <div className="w-full h-full px-[50px] pt-10 pb-2">
          {/* Form Content */}
          <form>
            <div className="flex items-center justify-center mb-10">
              <Image
                src="/vector1.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-[300px]"
              />
              <h2 className="mx-1  text-3xl  leading-10  font-semibold text-[#352E39] whitespace-nowrap">
                Contact <span className="text-primary-base">Us</span>
              </h2>
              <Image
                src="/vector2.png"
                width={350}
                height={5}
                alt="vector line"
                className="w-[300px]"
              />
            </div>

            {/* First Row: First Name & Last Name */}
            <div className="flex space-x-7  mb-6 text-[#474747]">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-xl mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Satyam"
                  className="w-full px-2 py-1.5 text-lg bg-[#F6F6F6] border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-base  capitalize"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-xl mb-1">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Singh"
                  className="w-full px-2 py-1.5 text-lg bg-[#F6F6F6] border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-base  capitalize"
                />
              </div>
            </div>

            {/* Second Row: Email */}
            <div className="mb-6 text-[#474747]">
              <label htmlFor="email" className="block text-xl mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full px-2 py-1.5 text-lg bg-[#F6F6F6] border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-base"
              />
            </div>

            {/* Third Row: Mobile Number */}
            <div className="mb-6 text-[#474747]">
              <label htmlFor="mobile" className="block text-xl mb-1">
                Mobile Number:
              </label>
              <PhoneInput
                placeholder="12394567890"
                international
                countryCallingCodeEditable={false}
                value={value}
                onChange={setValue}
                defaultCountry="IN"
                className="custom-phone-input text-lg  w-full px-4 border border-[#D2D2D2]   py-1.5 rounded-[10px] bg-[#F6F6F6] focus:outline-primary-base"
              />
            </div>

            {/* Message (optional) */}
            <div className="mb-6 text-[#474747]">
              <label htmlFor="message" className="block text-xl mb-1">
                Message:{" "}
                <span className="text-sm leading-6 text-whites-grey font-light">
                  (optional)
                </span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Please write your message here"
                className="w-full px-2 py-1.5 text-lg bg-[#F6F6F6] border border-[#D2D2D2] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary-base"
                style={{ resize: "none" }}
              ></textarea>
            </div>

            {/*Reach on whatsapp toggle */}
            <div className="flex items-center gap-2 mb-6 text-[#474747]">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="whatsappToggle"
                  className="sr-only peer"
                />
                <div className="w-[37px] h-5 bg-secondary-light peer-focus:outline-none  rounded-full peer dark:bg-secondary-base peer-checked:bg-primary-base after:content-[''] after:absolute after:top-1 after:left-[-1px] after:bg-white after:border after:border-primary-base after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full  "></div>
                <span className="ml-3  text-lg font-normal ">
                  Reach me on WhatsApp
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-primary-base text-white py-3.5 rounded-[10px] text-xl font-semibold mb-10 hover:bg-primary-dark transition-colors tracking-wider"
            >
              Get a callback
              <span className="bg-[#F0AC27] px-2 py-0.5 ml-2.5 text-base rounded-md animate-wiggle">
                Now
              </span>
            </button>
          </form>
          {/* 'Or' Divider */}

          <div className="flex items-center justify-center mb-10">
            <Image
              src="/vector1.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-[250px]"
            />
            <h2 className="mx-4  text-[22px]  leading-10  font-semibold text-[#646464] whitespace-nowrap">
              or
            </h2>
            <Image
              src="/vector2.png"
              width={350}
              height={5}
              alt="vector line"
              className="w-[250px]"
            />
          </div>

          {/*Whatsapp animation */}
          <div className="flex flex-row items-center justify-center gap-3 relative z-30 mb-10">
            {/* WhatsApp Icon Section */}
            <div className="relative w-[6rem] h-[6rem]  flex items-center justify-center">
              <div className="relative z-10">
                <FaWhatsapp className="w-[4.5rem] h-[4.5rem] text-[#1DAF11]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute  w-[90%] h-[90%]  rounded-full border-[4px] border-[#1DAF11] opacity-80 animate-ripple"></div>
                <div className="absolute w-[110%] h-[110%] rounded-full border-[2px] border-[#1DAF11] opacity-40 animate-ripple"></div>
              </div>
            </div>

            {/* Text Section with Green Dot */}
            <div className="flex flex-col items-center justify-center lg:items-start">
              <h3 className=" text-[#1DAF11] text-[22px]  flex items-center  tracking-wide">
                WhatsApp us
                <span className="relative inline-block w-[13px] h-[13px] bg-[#1DAF11] rounded-full ml-2">
                  <div className="absolute  inset-0 flex items-center justify-center">
                    <div className="absolute w-[150%] h-[150%] rounded-full border-[2px] border-[#1DAF11] opacity-70 animate-ripple"></div>
                    <div className="absolute w-[150%] h-[150%] rounded-full border-[2px] border-[#1DAF11] opacity-35 animate-ripple"></div>
                  </div>
                </span>
              </h3>
              <p className="text-[#2D2D2D]  text-lg  leading-6 font-medium ">
                We are online now
              </p>
            </div>
          </div>
        </div>
        {/* Contact information*/}
        <div className="bg-[#FAFAFA] w-full h-full">
          <div className="rounded-[10px] px-[62px] pt-5 pb-10 flex items-center justify-between text-[#343434]">
            <div className="">
              <h4 className="font-medium text-xl leading-10 mb-2">
                Contact Information:
              </h4>
              <div className="flex items-center gap-3 mb-2 pl-1">
                <IoMdMail className="text-[#4B325A] w-5 h-5" />
                <p>info@woodenhousing.com</p>
              </div>
              <div className="flex items-center gap-3 mb-2 pl-1">
                <FaPhoneAlt className="text-[#4B325A] w-5 h-5" />
                <p className="font-light">
                  <span className="font-semibold">+91</span> 7388476677
                </p>
              </div>
              <div className="flex items-center gap-3 mb-1 pl-1">
                <FaLocationDot className="text-[#4B325A] w-5 h-5" />
                <div className="text-[15px]">
                  <p className="font-light leading-[20px]">
                    Plot No. 20, Block: H-1/A, SECTOR-63, Noida, UP, India
                  </p>
                  <p className="font-light leading-[20px]">Pin code - 201301</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:items-center justify-between pt-1.5">
              <div className="flex gap-1 ">
                <Image
                  src="/logo.png"
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-[55px] h-[55px] object-contain"
                />
                <p className="flex flex-col text-[#2C2C2C] items-start justify-end uppercase text-3xl font-bold leading-[29px] tracking-widest ">
                  <span>wooden</span>
                  <span>housing</span>
                </p>
              </div>
              <div className="flex gap-[22px] justify-between items-center mt-4 ">
                <Link href="#">
                  <FaYoutube className="w-10 h-10 text-[#4B325A]" />
                </Link>
                <Link href="#">
                  <BsInstagram className="w-10 h-10 text-[#4B325A]" />
                </Link>
                <Link href="#">
                  <FaFacebook className="w-10 h-10 text-[#4B325A]" />
                </Link>
                <Link href="#">
                  <FaXTwitter className="w-10 h-10 text-[#4B325A]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
