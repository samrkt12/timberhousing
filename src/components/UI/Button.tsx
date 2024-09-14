import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md transition-colors duration-300 outline-none bg-primary-base text-whites-light ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
