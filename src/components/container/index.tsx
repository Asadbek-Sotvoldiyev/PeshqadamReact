import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "w-full bg-transparent", // Ensures full-width by default
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", // Centering and max-width for content
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
