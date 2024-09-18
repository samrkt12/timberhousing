"use client";
import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import useContactHandler from "@/utils/useContactHandler";
import ContactModal from "./ContactModal";
type Props = {};

const Footer = (props: Props) => {
  const { handleContactClick, isModalOpen, closeModal } = useContactHandler();
  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <footer className="bg-[#4B325A] w-full  text-white overflow-hidden ">
        <div className="h-full w-full max-w-screen-xl mx-auto px-6 md:px-6 lg:px-8">
          <div className="py-5 lg:py-[40px] lg:pb-[20px] flex flex-wrap gap-0 lg:gap-12  justify-between">
            <div className="w-1/2 md:w-1/4 lg:w-fit">
              <h3 className="font-semibold mb-2 lg:mb-5 sm:text-lg md:text-xl lg:text-2xl ">
                Menu
              </h3>
              <ul className="space-y-2 font-extralight text-sm md:text-base lg:text-lg tracking-widest lg:tracking-normal">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/designs" className="hover:underline">
                    Designs
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li>
                  <div
                    onClick={handleContactClick}
                    className="hover:underline cursor-pointer"
                  >
                    Contact us
                  </div>
                </li>{" "}
              </ul>
            </div>

            <div className="w-1/2 md:w-1/4 lg:w-fit pb-8 lg:pb-4">
              <h3 className="font-semibold mb-2 lg:mb-5 sm:text-lg md:text-xl lg:text-2xl">
                Categories
              </h3>
              <ul className="space-y-2 font-extralight text-sm md:text-base lg:text-lg tracking-widest lg:tracking-normal">
                <li>
                  <Link href="/wooden-cottage" className="hover:underline">
                    Wooden Cottages
                  </Link>
                </li>
                <li>
                  <Link href="/wooden-house" className="hover:underline">
                    Wooden Houses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wooden-pergola-gazebo"
                    className="hover:underline"
                  >
                    Wooden Pergola/Gazebo
                  </Link>
                </li>
                <li>
                  <Link href="/wooden-cafe" className="hover:underline">
                    Wooden Cafe
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-1/2 md:w-1/4 lg:w-fit pb-4">
              <h3 className="font-semibold mb-2 lg:mb-5 sm:text-lg md:text-xl lg:text-2xl">
                Other page links
              </h3>
              <ul className="space-y-2 font-extralight text-sm md:text-base lg:text-lg tracking-widest lg:tracking-normal">
                <li>
                  <Link href="/why-wooden-house" className="hover:underline">
                    Why wooden house?
                  </Link>
                </li>
                <li>
                  <Link href="/3d-design-tour" className="hover:underline">
                    3D design tour
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-1/2 md:w-1/4 lg:w-fit pb-4">
              <h3 className="font-semibold mb-2 lg:mb-5 sm:text-lg md:text-xl lg:text-2xl">
                Support
              </h3>
              <ul className="space-y-2 font-extralight text-sm md:text-base lg:text-lg tracking-wider lg:tracking-normal">
                <li>
                  <Link href="/t&c" className="hover:underline">
                    Terms & conditions
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li> */}
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="hover:underline">
                    Cancellation policy
                  </Link>
                </li> */}
                <li>
                  <Link href="/referral-policy" className="hover:underline">
                    Referral policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <h3 className="font-semibold mb-5 text-2xl tracking-wide">
                Contact Us
              </h3>
              <ul className="space-y-2 font-extralight lg:text-lg">
                <li>
                  <Link href="#" className="hover:underline flex items-center">
                    <FaPhone className="inline-flex mr-2 w-5 h-5  " />
                    <span className="mr-1 font-semibold">+91</span>1234567890
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline flex items-center">
                    <IoMdMail className="inline-flex mr-1.5 w-6 h-6 " />
                    <span className=" font-medium">care@woodenhousing.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/vector3.png"
            width={720}
            height={10}
            alt="vector line"
            className="w-[500px] md:w-[720px] lg:w-[1200px]"
          ></Image>
        </div>

        {/**Large screen lowest footer */}
        <div className="hidden lg:block w-full bg-[#372442] py-6">
          <div className="flex h-full justify-between items-center max-w-screen-xl mx-auto px-1 md:px-2 lg:px-8">
            <div className="flex gap-1 md:gap-2">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt="logo"
                className="w-full h-full"
              />
              <p className="flex flex-col items-start justify-end uppercase text-[18px] font-bold leading-5 ">
                <span>wooden</span>
                <span>housing</span>
              </p>
            </div>

            <div>
              <p className="flex text-base font-light items-center tracking-widest">
                <FaRegCopyright className="mr-1.5 w-5 h-5" />
                Woodenhousing.com{" "}
                <span className="font-medium ml-1.5 tracking-wide ">
                  All rights reserved
                </span>
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="#">
                <FaWhatsapp className="w-6 h-6" />
              </Link>
              <Link href="#">
                <BsInstagram className="w-6 h-6" />
              </Link>
              <Link href="#">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="#">
                <FaXTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/**Small screen lowest footer */}
        <div className="lg:hidden w-full bg-[#372442] pt-6 pb-4">
          <div className="px-4 flex ">
            <div className="w-1/2 flex flex-col md:items-center justify-between pt-1.5">
              <div className="flex gap-1 md:gap-2 ">
                <Image
                  src="/logo.png"
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-9 h-9"
                />
                <p className="flex flex-col items-start justify-end uppercase md:text-[18px] font-bold leading-5 tracking-widest ">
                  <span>wooden</span>
                  <span>housing</span>
                </p>
              </div>
              <div className="flex gap-4 pl-1 items-center mt-2">
                <Link href="#">
                  <FaWhatsapp className="w-5 h-5" />
                </Link>
                <Link href="#">
                  <BsInstagram className="w-5 h-5" />
                </Link>
                <Link href="#">
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link href="#">
                  <FaXTwitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex flex-col md:items-center">
              <div className="w-fit">
                <h3 className="font-semibold mb-2 text-lg md:text-xl tracking-wide ">
                  Contact Us
                </h3>
                <ul className="space-y-2 font-extralight">
                  <li>
                    <Link
                      href="#"
                      className="hover:underline flex items-center text-sm md:text-base"
                    >
                      <FaPhone className="inline-flex mr-1.5 w-3 h-3  " />
                      <span className="mr-1 font-semibold ">+91</span>
                      1234567890
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:underline flex items-center"
                    >
                      <IoMdMail className="inline-flex mr-1.5 w-4 h-4 " />
                      <span className="text-xs md:text-sm font-medium">
                        care@woodenhousing.com
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <p className="flex  text-sm font-light items-center tracking-wider md:tracking-widest">
              <FaRegCopyright className="mr-1.5 w-4 h-4" />
              Woodenhousing.com{" "}
              <span className="font-medium ml-1.5  text-sm md:text-base tracking-wider md:tracking-widest ">
                All rights reserved
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
