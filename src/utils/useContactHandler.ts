"use client";

import { useRouter } from "next/navigation";
import { useState } from "react"; // modal component

const useContactHandler = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleContactClick = () => {
    const isLargeScreen = window.innerWidth >= 1024;

    if (isLargeScreen) {
      setModalOpen(true);
    } else {
      router.push("/contact");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return { handleContactClick, isModalOpen, closeModal };
};

export default useContactHandler;
