"use client";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { FaSyncAlt } from "react-icons/fa";

type GLTFModelModalProps = {
  modelPath: string;
  onClose: () => void;
};

const GLTFModelModal: React.FC<GLTFModelModalProps> = ({
  modelPath,
  onClose,
}) => {
  const { scene } = useGLTF(modelPath);
  const [rotate, setRotate] = useState<boolean>(false);

  const handleRotateClick = () => {
    setRotate((prevRotate) => !prevRotate);
  };

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center">
      <div className="relative w-full  lg:w-[70%] h-[80%] bg-primary-base rounded-md p-[5px]">
        {/* Close button */}
        <div className="absolute top-4 right-4 flex gap-6 z-10">
          <button
            className={`text-black bg-white font-medium ${
              rotate ? "text-primary-base border-primary-base" : "border-white"
            } px-2.5 py-1 rounded-full border-[2px] hover:text-primary-base hover:border-primary-base transition-all duration-300`}
            onClick={handleRotateClick}
          >
            <FaSyncAlt className="w-5 h-5" />
          </button>
          <button
            className="text-black bg-white px-1.5 py-1 rounded-full border-[2px] border-white font-semibold hover:border-primary-base hover:text-primary-base  transition-all duration-300"
            onClick={onClose}
          >
            <MdClose className="w-7 h-7  " />
          </button>
        </div>
        {/* Canvas to render 3D model */}
        <Canvas camera={{ position: [350, 50, 1], near: 0.025 }}>
          <color attach="background" args={["#151515"]} />
          <ambientLight intensity={0.4} />
          <pointLight position={[1, 40, 1]} intensity={16000} />
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
      </div>
    </div>,
    document.body
  );
};

export default GLTFModelModal;
