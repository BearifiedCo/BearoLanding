import React from "react";

export const Eyebrow = ({ text }: { text: string }) => {
  return (
    <div className="flex pt-[12px] pr-[20px] pb-[12px] pl-[20px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg- rounded-[100px] relative shadow-[0_0_9px_0_var(--primary)_inset]">
      <span className="font-medium text-xl text-primary tracking-[-0.4px] capitalize">
        {text}
      </span>
    </div>
  );
}