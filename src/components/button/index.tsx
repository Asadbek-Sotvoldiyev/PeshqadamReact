import React from "react";
import { cn } from "@/lib/utils"; // Adjust this path if necessary

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary"; // Only one option for button style now
  children: React.ReactNode; // Content inside the button
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "px-[50px] py-3 rounded-[5px] shadow-md text-sm md:text-base";

  const variants = {
    primary: "bg-gradient-to-l from-[#C88C61] to-[#EBBE9C] text-white",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
