import React from "react";
import { cn } from "@/lib/utils"; // Adjust this path if necessary

interface HeadingProps {
  level?: "h1" | "h2" | "h3"; // Default to h2, but allow flexibility
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<HeadingProps> = ({
  level = "h2",
  children,
  className,
}) => {
  const baseStyles = "font-cinzel font-bold mb-4 text-secondary text-cormorantSmall md:text-cormorantBig lg:text-middleSize"; // Base styles for all headers
  const sizeVariants = {
    h1: "text-4xl",
    h2: "text-2xl",
    h3: "text-xl",
  };

  const HeadingTag = level; // Dynamically set the tag

  return (
    <HeadingTag className={cn(baseStyles, sizeVariants[level], className)}>
      {children}
    </HeadingTag>
  );
};

export default Title;
