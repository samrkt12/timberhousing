import React from "react";

type Props = {
  className?: string;
};

const ArrowDownIcon = ({ className = "" }: Props) => {
  return (
    <svg
      className={`h-4 w-4 transform transition-transform ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export default ArrowDownIcon;
