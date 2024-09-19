"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ModelData } from "@/utils/modelsData";
import { RiFullscreenFill } from "react-icons/ri";
import { Md3dRotation } from "react-icons/md";
import Link from "next/link";
import GLTFModelModal from "./Model3DModal";

const Model3dCard = ({ model }: { model: ModelData }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="model-card border rounded-[10px] shadow-lg flex flex-col overflow-hidden px-1 md:px-2 py-1 md:py-2">
        <div
          className="w-full h-full relative overflow-hidden cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <Image
            src={model.screenshot3D}
            alt={model.name}
            width={700}
            height={500}
            className="object-cover w-[110%] h-[110%] overflow-hidden rounded-md"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent to-black opacity-70 pointer-events-none" />
          {/* Icons */}
          <div className="absolute z-30 bottom-4 md:bottom-5 w-[100%] flex items-center justify-between px-4 md:px-6">
            <a onClick={() => setModalOpen(true)} className="cursor-pointer">
              <Md3dRotation className="w-6 h-6 text-white hover:scale-125 transition-all duration-300" />
            </a>
            <a onClick={() => setModalOpen(true)} className="cursor-pointer">
              <RiFullscreenFill className="w-6 h-6 text-white hover:scale-125 transition-all duration-300" />
            </a>
          </div>
        </div>

        <div className="px-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#606060] text-xs md:text-sm mt-2 md:mt-4 md:mb-1">
                {model.description}
              </p>
              <h4 className="text-[#1D1D1D] text-sm sm:text-base md:text-lg md:leading-6 font-medium mb-3">
                {model.name}
              </h4>
            </div>
            <div>
              <Link href={`models/${model.id}`} className="group">
                <button className="border border-[#B0B0B0] px-2.5 md:px-5 py-[3px] text-sm md:text-base text-[#4D4453] md:leading-8 font-medium rounded-[62px] group-hover:text-primary-base transition-colors duration-300 group-hover:border-primary-base">
                  Floor Plan
                </button>
              </Link>
            </div>
          </div>

          <div className="text-[#292929] border border-[#DFDFDF] rounded-[10px] py-1 pb-0 mb-3 overflow-hidden">
            <div className="flex justify-between text-sm mb-2 px-2.5">
              <span className="font-light text-sm tracking-wide md:text-base leading-[22px] md:leading-6">
                Gross living area:
              </span>
              <span className="text-[#1B1B1B] leading-5">
                {model.grossLivingArea} sqft
              </span>
            </div>
            <div className="flex justify-between  tracking-wide text-sm bg-[#F9F9F9] py-[5px] px-[10px]">
              <span className="font-light text-sm tracking-wide md:text-base leading-[22px] md:leading-6">
                Total area:
              </span>
              <span className="text-[#1B1B1B] leading-5">
                {model.totalArea} sqft
              </span>
            </div>
          </div>
        </div>

        {/* Render modal */}
      </div>
      {isModalOpen && (
        <GLTFModelModal
          modelPath={model.model3DPath}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Model3dCard;
