import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface IOSDownloadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  variant?: "primary" | "secondary";
}

export function IOSDownloadButton({ 
  className, 
  label = "Label Here", 
  variant = "primary",
  ...props
}: IOSDownloadButtonProps) {
  
  const isSecondary = variant === "secondary";

  return (
    <button
      className={cn(
        // Base layout styles
        "flex w-[197px] pt-[14px] pr-[26px] pb-[14px] pl-[26px] gap-[4px] justify-center items-center shrink-0 flex-nowrap rounded-[100px] relative shadow-[0_0_10px_0_rgba(255,255,255,0.65)_inset]",
        
        // Variant Styles for Background
        variant === "primary" && "bg-primary",
        variant === "secondary" && "bg-secondary", 
        
        className
      )}
      {...props}
    >
      <span 
        className={cn(
          "capitalize font-dmsans text-[16px] font-medium leading-[20.8px] tracking-[-0.52px] text-center whitespace-nowrap",
          // Text color logic
          isSecondary ? "text-black" : "text-white"
        )}
      >
        {label}
      </span>
      <ArrowUpRight
        className={cn(
          "w-[20px] h-[20px] stroke-3 shrink-0 transform-gpu [backface-visibility:hidden] [will-change:transform]",
          // Icon color logic
          isSecondary ? "text-black" : "text-white"
        )}
      />
    </button>
  );
}