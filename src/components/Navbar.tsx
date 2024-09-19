"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button from "./UI/Button";
import Link from "next/link";
import ArrowDownIcon from "./UI/ArrowDownIcon";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsInstagram, BsQuestionSquare } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { TbHomeEdit } from "react-icons/tb";
import { SlInfo } from "react-icons/sl";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import useContactHandler from "@/utils/useContactHandler";
import ContactModal from "./ContactModal";
import { FaYoutube } from "react-icons/fa";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { handleContactClick, isModalOpen, closeModal } = useContactHandler();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <nav className="navbar sticky z-[100] inset-x-0 top-0 w-full backdrop-blur-lg transition-all border-b border-whites-base bg-whites-light/75 ">
        {/* Navbar content */}
        <div className="h-[3.5rem] md:h-[4rem] lg:h-[64px] flex w-full max-w-screen-xl mx-auto items-center justify-between  md:px-7 lg:px-8  px-4 ">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-end justify-center gap-1 md:gap-2"
          >
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="logo"
              className="w-8 h-8 lg:w-9 lg:h-9"
            />
            <p className="flex flex-col lg:flex-row uppercase text-base lg:text-[21px] font-bold leading-4 lg:leading-7 lg:tracking-wider lg:mb-[2px]">
              <span>wooden</span>
              <span>housing</span>
            </p>
          </Link>

          {/* Navbar Links */}
          <div className="hidden lg:flex text-lg leading-5 gap-10 text-whites-darkest">
            <Link
              href="/"
              className={`py-2 relative transition-colors duration-300 ${
                pathname === "/"
                  ? "text-primary-base after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-primary-dark"
                  : "hover:text-primary-base after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary-base after:transition-all after:duration-500 hover:after:w-full"
              }`}
            >
              Home
            </Link>

            <Link
              href="/designs"
              className={`py-2 relative transition-colors duration-300 ${
                pathname === "/designs"
                  ? "text-primary-base after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-primary-dark"
                  : "hover:text-primary-base after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary-base after:transition-all after:duration-500 hover:after:w-full"
              }`}
            >
              Designs
            </Link>

            {/*services*/}

            <div className="relative group py-2 h-full">
              <p
                className={`flex h-full items-center transition-colors duration-200  group-hover:text-primary-base cursor-pointer ${
                  pathname === "/services"
                    ? "text-primary-base after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-primary-dark"
                    : ""
                }`}
              >
                Services
                <ArrowDownIcon className="ml-0.5 " />
              </p>
              <div className="absolute z-999 pt-[10px] px-[20px] pb-[16px] hidden left-0 mt-2 w-max bg-whites-light  rounded-[10px] shadow-[0px_4px_32.3px_0px_rgba(0,_0,_0,_0.1)] duration-200 group-hover:block">
                <a
                  href="/wooden-cottage"
                  className="block text-base leading-5 py-[10px] border-b border-whites-base last:border-0 hover:text-primary-base transition-colors duration-200"
                >
                  Wooden Cottage
                </a>
                <a
                  href="/wooden-house"
                  className="block text-base leading-5 py-[10px] border-b border-whites-base last:border-0 hover:text-primary-base transition-colors duration-200"
                >
                  Wooden House
                </a>
                <a
                  href="/wooden-pergola-gazebo"
                  className="block text-base leading-5 py-[10px] border-b border-whites-base last:border-0 hover:text-primary-base transition-colors duration-200"
                >
                  Wooden Pergola/Gazebo
                </a>
                <a
                  href="/wooden-cafe"
                  className="block text-base leading-5 py-[10px] border-b border-whites-base last:border-0 hover:text-primary-base transition-colors duration-200"
                >
                  Wooden Cafe
                </a>
              </div>
            </div>

            <Link
              href="/about-us"
              className={`py-2 relative transition-colors duration-300 ${
                pathname === "/about-us"
                  ? "text-primary-base after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-primary-dark"
                  : "hover:text-primary-base after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary-base after:transition-all after:duration-500 hover:after:w-full"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className={`py-2 relative transition-colors duration-300 ${
                pathname === "/blog"
                  ? "text-primary-base after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-primary-dark"
                  : "hover:text-primary-base after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary-base after:transition-all after:duration-500 hover:after:w-full"
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden lg:flex">
            <Button
              onClick={handleContactClick}
              className="bg-primary-base hover:bg-primary-dark text-whites-light px-[24px] py-[8px] font-normal text-lg leading-[22px] tracking-wide"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleNav}
              aria-label="Open navigation"
              className="text-whites-darkest focus:outline-none"
            >
              <CgMenuRightAlt className="w-8 h-8 md:w-9 md:h-9" />
            </button>
          </div>
        </div>

        <div className="w-full border-t-[1px] h-[1px] border-[#D9D9D9] "></div>

        <div className="h-[42px] hidden lg:flex w-full max-w-screen-xl mx-auto items-center px-2.5 md:px-4 lg:px-8">
          <div className="flex items-center gap-10 text-base leading-5 text-whites-grey">
            <Link
              href="/why-wooden-house"
              className={`py-1.5 relative transition-colors duration-300 ${
                pathname === "/why-wooden-house"
                  ? "text-primary-base after:absolute after:left-1/2 after:bottom-0 after:h-[3px] after:w-[50%] after:bg-primary-dark after:translate-x-[-50%]"
                  : "hover:text-primary-base after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary-base after:transition-all after:duration-500 hover:after:w-[50%] hover:after:translate-x-[-50%]"
              }`}
            >
              Why wooden house?
            </Link>

            {/* <Link
            href="#"
            className="hover:text-primary-base transition-all duration-200"
          >
            Benefits of wooden house
          </Link> */}
            <Link
              href="/3d-design-tour"
              className={`py-1.5 relative transition-colors duration-300 ${
                pathname === "/3d-design-tour"
                  ? "text-primary-base after:absolute after:left-1/2 after:bottom-0 after:h-[3px] after:w-[50%] after:bg-primary-dark after:translate-x-[-50%]"
                  : "hover:text-primary-base after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary-base after:transition-all after:duration-500 hover:after:w-[50%] hover:after:translate-x-[-50%]"
              }`}
            >
              3D design tour
            </Link>
            <Link
              href="/our-projects"
              className={`py-1.5 relative transition-colors duration-300 ${
                pathname === "/our-projects"
                  ? "text-primary-base after:absolute after:left-1/2 after:bottom-0 after:h-[3px] after:w-[50%] after:bg-primary-dark after:translate-x-[-50%]"
                  : "hover:text-primary-base after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary-base after:transition-all after:duration-500 hover:after:w-[50%] hover:after:translate-x-[-50%]"
              }`}
            >
              Our projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden z-[9998]`}
        onClick={toggleNav}
      ></div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 -right-1 w-[85%] min-w-[350px] max-w-[500px] p-5 py-[25px] bg-whites-light text-[#3A2D41] transition-transform duration-500 transform ${
          isNavOpen ? "translate-x-0 " : "translate-x-full"
        } lg:hidden z-[9999] h-full overflow-y-scroll rounded-lg`}
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleNav}
            aria-label="Close navigation"
            className="flex gap-1 items-center font-medium tracking-wide border-b border-whites-light hover:border-[#3A2D41] transition-colors duration-200"
          >
            Close
            <IoMdClose className="w-[22px] h-[22px] " />
          </button>
        </div>

        <div className="flex justify-between  w-full mb-2.5 ">
          <Link
            href="/"
            onClick={toggleNav}
            className="bg-[#FFF1EC] w-[30%] flex  flex-col items-center justify-between rounded-lg py-4 gap-1 cursor-pointer"
          >
            <IoHomeOutline className="text-[#D75438] w-7 h-7" />
            <p className="text-[#282828] text-xs">Home</p>
          </Link>
          <Link
            href="/contact"
            onClick={toggleNav}
            className="bg-[#FFF1EC] w-[30%] flex flex-col items-center justify-between rounded-lg py-4 gap-1 cursor-pointer"
          >
            <FaWhatsapp className="text-[#D75438] w-7 h-7" />
            <p className="text-[#282828] text-xs">Contact Us</p>
          </Link>
          <Link
            href="/faq"
            onClick={toggleNav}
            className="bg-[#FFF1EC] w-[30%] flex flex-col items-center justify-between rounded-lg py-4 gap-1 cursor-pointer"
          >
            <BsQuestionSquare className="text-[#D75438] w-7 h-7" />
            <p className="text-[#282828] text-xs">FAQ</p>
          </Link>
        </div>

        <div className="w-full mb-2.5 bg-[#FFF1EC] p-2.5 rounded-md">
          <h4 className="text-[#282828] font-medium text-sm leading-[18px] mb-2.5">
            Services
          </h4>

          <div className="flex justify-between mb-2.5">
            <Link
              href="/wooden-cottage"
              onClick={toggleNav}
              className="bg-whites-light text-[#1A1A1A] text-[12px] leading-[13px] w-[23%] rounded-md overflow-hidden shadow-md cursor-pointer"
            >
              <div className="w-full ">
                <Image
                  src="/service1.jpg"
                  width={90}
                  height={70}
                  alt="cottage"
                  className="w-full h-auto object-cover"
                ></Image>
              </div>
              <div className="py-2 flex items-center justify-center w-full font-medium">
                <p className="text-center max-w-[10ch]">Wooden Cottage</p>
              </div>
            </Link>

            <Link
              href="/wooden-house"
              onClick={toggleNav}
              className="bg-whites-light text-[#1A1A1A] text-[12px] leading-[13px] w-[23%] rounded-md overflow-hidden shadow-md cursor-pointer"
            >
              <div className="w-full ">
                <Image
                  src="/service2.jpg"
                  width={90}
                  height={70}
                  alt="cottage"
                  className="w-full h-auto object-cover"
                ></Image>
              </div>
              <div className="py-2 flex items-center justify-center w-full font-medium">
                <p className="text-center max-w-[10ch]">Wooden House</p>
              </div>
            </Link>

            <Link
              href="/wooden-pergola-gazebo"
              onClick={toggleNav}
              className="bg-whites-light text-[#1A1A1A] text-[12px] leading-[13px] w-[23%] rounded-md overflow-hidden shadow-md cursor-pointer"
            >
              <div className="w-full ">
                <Image
                  src="/service3.jpg"
                  width={90}
                  height={70}
                  alt="cottage"
                  className="w-full h-auto object-cover"
                ></Image>
              </div>
              <div className="py-2 flex items-center justify-center w-full font-medium">
                <p className="text-center max-w-[10ch]">Pergola/ Gazebo</p>
              </div>
            </Link>

            <Link
              href="/wooden-cafe"
              onClick={toggleNav}
              className="bg-whites-light text-[#1A1A1A] text-[12px] leading-[13px] w-[23%] rounded-md overflow-hidden shadow-md cursor-pointer"
            >
              <div className="w-full ">
                <Image
                  src="/service1.jpg"
                  width={90}
                  height={70}
                  alt="cottage"
                  className="w-full h-auto object-cover"
                ></Image>
              </div>
              <div className="py-2 flex items-center justify-center w-full font-medium">
                <p className="text-center max-w-[10ch]">Wooden Cafe</p>
              </div>
            </Link>
          </div>

          <Link
            href="/3d-design-tour"
            onClick={toggleNav}
            className="w-full bg-whites-light text-[#282828] p-[10px] py-3 flex justify-between items-center rounded-[6px]  shadow-md cursor-pointer mb-2.5"
          >
            <p className="text-[13px] font-medium tracking-wide leading-4">
              3D design tour
            </p>
            <IoIosArrowForward className="text-primary-base " />
          </Link>

          <Link
            href="/why-wooden-house"
            onClick={toggleNav}
            className="w-full bg-whites-light text-[#282828] p-[10px] py-3 flex justify-between items-center rounded-[6px]  shadow-md cursor-pointer mb-2.5"
          >
            <p className="text-[13px] font-medium tracking-wide leading-4">
              Why wooden house?
            </p>
            <IoIosArrowForward className="text-primary-base " />
          </Link>
          <Link
            href="/our-projects"
            onClick={toggleNav}
            className="w-full bg-whites-light text-[#282828] p-[10px] py-3 flex justify-between items-center rounded-[6px]  shadow-md cursor-pointer"
          >
            <p className="text-[13px] font-medium tracking-wide leading-4">
              Our projects
            </p>
            <IoIosArrowForward className="text-primary-base " />
          </Link>
        </div>

        <div className="relative w-full mb-2.5 rounded-md bg-gradient-to-b from-[#F9F1FD] to-[#EBDDF4] p-2.5 overflow-hidden">
          <h4 className="mb-[3px] text-[15px] leading-[20px] font-medium text-[#262626] relative z-[100]">
            Book a <span className="text-[#6D2794] font-semibold">free</span>{" "}
            design consulation{" "}
          </h4>
          <p className="text-[#6D557B] mb-1 text-sm relative z-[100]">
            Meet our architect & start planning!{" "}
          </p>
          <Link
            href="/contact"
            onClick={toggleNav}
            className="flex items-center gap-1 text-[#6D2794] font-semibold"
          >
            Book now
            <IoIosArrowForward />
          </Link>

          <div className="absolute z-[40] -right-3 -top-8 z-1 w-[130px] h-[160px]">
            <Image
              src="/pana.png"
              alt="pana"
              width={150}
              height={150}
              className="w-full h-full object-contain"
            ></Image>
          </div>
        </div>

        <Link
          href="/referral-policy"
          onClick={toggleNav}
          className="w-full mb-2.5 rounded-md py-[12px] p-[10px] overflow-hidden flex items-center justify-between bg-[#FFF1EC]"
        >
          <div className="flex gap-2 items-center">
            <IoPersonAddOutline className="text-primary-base w-[18px] h-[18px] " />
            <p className="font-medium text-[#282828] text-sm ml-2">
              Refer a friend
            </p>
            <button className="bg-primary-base py-0.5 px-2 text-[11px] text-whites-light rounded-[3px] ">
              upto 10% cashback
            </button>
          </div>
          <IoIosArrowForward className="text-primary-base" />
        </Link>

        <div className="w-full mb-2.5 rounded-md overflow-hidden">
          <Link
            href="/designs"
            onClick={toggleNav}
            className="flex items-center justify-between py-3 px-2.5 bg-[#FFF1EC] border-b border-[#F4D6CB]"
          >
            <div className="flex gap-2 items-center">
              <TbHomeEdit className="text-primary-base w-[18px] h-[18px] " />
              <p className="font-medium text-[#282828] text-sm ml-2">Designs</p>
            </div>
            <IoIosArrowForward className="text-primary-base" />
          </Link>
          <Link
            href="/about-us"
            onClick={toggleNav}
            className="flex items-center justify-between py-3 px-2.5 bg-[#FFF1EC] border-b border-[#F4D6CB]"
          >
            <div className="flex gap-2 items-center">
              <SlInfo className="text-primary-base w-[18px] h-[18px] " />
              <p className="font-medium text-[#282828] text-sm ml-2">
                About us
              </p>
            </div>
            <IoIosArrowForward className="text-primary-base" />
          </Link>
          <Link
            href="/blog"
            onClick={toggleNav}
            className="flex items-center justify-between py-3 px-2.5 bg-[#FFF1EC] "
          >
            <div className="flex gap-2 items-center">
              <IoNewspaperOutline className="text-primary-base w-[18px] h-[18px] " />
              <p className="font-medium text-[#282828] text-sm ml-2">Blog</p>
            </div>
            <IoIosArrowForward className="text-primary-base" />
          </Link>
        </div>

        <div className="w-full flex items-center justify-around text-primary-base mt-6">
          <div className="h-1 w-[50px] border-b-[2px] border-whites-base"></div>
          <div className="flex gap-8 items-center">
            <Link href="#">
              <FaYoutube className="w-7 h-7" />
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
          <div className="h-1 w-[50px] border-b-[2px] border-whites-base"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
