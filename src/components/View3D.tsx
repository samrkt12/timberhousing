"use client";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import Image from "next/image";
import { FaPlay, FaSyncAlt } from "react-icons/fa";
import { ModelData } from "@/utils/modelsData";

type Props = {
  model: ModelData;
};

const View3D = ({ model }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const { scene } = useGLTF(model.model3DPath);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  const handleRotateClick = () => {
    setRotate((prevRotate) => !prevRotate);
  };
  return (
    <div className="relative z-20 flex flex-col h-full w-full max-w-screen-xl mx-auto px-2 md:px-4 lg:px-32 pt-4">
      <h3 className="text-[#352E39] text-[32px] leading-10 font-semibold mb-4">
        View in 3D
      </h3>
      <div className="max-w-[1280px] max-h-[600px] overflow-hidden relative rounded-[12px] shadow-md h-[600px] ">
        {isPlaying && (
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              className={`text-black bg-white font-semibold ${
                rotate
                  ? "text-primary-base border-primary-base"
                  : "border-white"
              } px-2 py-1 rounded-full border-[2px] hover:text-primary-base hover:border-primary-base transition-all duration-300`}
              onClick={handleRotateClick}
            >
              <FaSyncAlt className="" />
            </button>
            <button
              className="text-black bg-white px-3 py-1 rounded-full border-[2px] border-white font-semibold hover:border-primary-base hover:text-primary-base  transition-all duration-300"
              onClick={() => setIsPlaying(false)}
            >
              Exit 3D View
            </button>
          </div>
        )}
        {isPlaying ? (
          <Canvas
            style={{ height: "100%", width: "100%" }}
            camera={{ position: [350, 50, 1], near: 0.025 }}
          >
            <color attach="background" args={["#151515"]} />
            <ambientLight intensity={0.4} />
            <pointLight position={[1, 40, 1]} intensity={15000} />
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <gridHelper args={[510, 10]} />
            <axesHelper args={[150]} />
            <Suspense fallback={null}>
              <primitive object={scene} scale={0.3} />
              <Environment preset="night" />
            </Suspense>
            <OrbitControls
              minDistance={0}
              maxDistance={800}
              autoRotate={rotate}
            />
          </Canvas>
        ) : (
          <>
            <Image
              src={model.screenshot3D}
              alt="3D model image"
              width={1280}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button
                className="relative text-white text-5xl bg-black bg-opacity-80 pl-5 py-4 pr-4 rounded-full hover:scale-110 hover:bg-primary-base transition-all duration-300"
                onClick={handlePlayClick}
              >
                <FaPlay />
                <span className="absolute inset-0 flex items-center justify-center text-base font-bold pr-1 text-secondary-dark opacity-0 hover:opacity-100 transition-opacity duration-300">
                  3D
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default View3D;
