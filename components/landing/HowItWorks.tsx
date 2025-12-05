import React from "react";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade"; // Ensure correct import path

import { IphoneWithScreen } from "./IphoneWithScreen";
import { Eyebrow } from "./Eyebrow";
import { IOSDownloadButton } from "./IOSDownloadButton";

export const howItWorksSteps = [
  {
    title: "How I use AI",
    description: "I Automate everything. Find out how.",
    mediaSrc: "/screen1.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Scale Operations",
    description: "Automated workflows to handle enterprise volume.",
    mediaSrc: "/screen2.jpg",
    imagePosition: "right" as const,
  },
  {
    title: "Maximize Profit",
    description: "Optimized margins through strategic engineering.",
    mediaSrc: "/screen3.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Maximize Profit",
    description: "Optimized margins through strategic engineering.",
    mediaSrc: "/screen4.jpg",
    imagePosition: "left" as const,
  },
  {
    title: "Maximize Profit",
    description: "Optimized margins through strategic engineering.",
    mediaSrc: "/screen5.jpg",
    imagePosition: "left" as const,
  },
];

export const HowItWorksStep = ({
  title,
  description,
  mediaSrc,
  imagePosition,
}: {
  title: React.ReactNode;
  description: string;
  mediaSrc: string;
  imagePosition: "left" | "right";
}) => {
  const imageComponent = (
    <div className="w-full lg:w-[390px] h-auto lg:h-[632px] shrink-0 relative flex justify-center">
      <BlurFade 
        inView 
        duration={0.6} 
        offset={10} 
        className={cn(
          "w-[270px] h-[551px] relative lg:mt-[41px]",
          imagePosition === "right" ? "lg:ml-[120px]" : "lg:ml-0"
        )}
      >
        <IphoneWithScreen screenSrc={mediaSrc} />
      </BlurFade>
    </div>
  );

  const textComponent = (
    <div className="flex flex-col gap-[0px] md:gap-[16px] justify-center items-center lg:items-start grow shrink-0 basis-0 text-center lg:text-left">
      <BlurFade delay={0.2} inView direction="up">
        <span className="self-stretch basis-auto font-syne text-[36px]  leading-[1] lg:text-[64px] lg:leading-[64px] font-medium text-foreground tracking-[-1.8px] lg:tracking-[-3.2px] relative capitalize block mb-4">
            {title}
        </span>
      </BlurFade>
      <BlurFade delay={0.3} inView direction="up">
        <span className="flex w-full max-w-[300px] font-sans text-center md:text-left text-pretty lg:max-w-[490px] justify-center lg:justify-start items-start self-stretch text-[18px] leading-[1.2] lg:text-[20px] lg:leading-[24px] font-normal  text-foreground/60 relative capitalize">
            {description}
        </span>
      </BlurFade>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[20px] items-center self-stretch">
      <div className={cn(imagePosition === "right" && "lg:order-last")}>
        {imageComponent}
      </div>
      {textComponent}
    </div>
  );
};

export const HowItWorks = () => {
//   const { open } = useMentorship(); 
  return (
    <div className="py-4 bg-background flex w-full max-w-[1200px] lg:pt-[95px] lg:pr-[150px] lg:pb-[95px] lg:pl-[150px] flex-col gap-[30px] md:gap-[140px] justify-center items-center flex-nowrap relative overflow-hidden mx-auto my-0">
      <div className="flex w-[504px] flex-col  gap-[28px] justify-center items-center shrink-0 flex-nowrap relative">
        <Eyebrow text="My Message to You" />
        <span className="flex w-[504px] justify-center items-start shrink-0 font-syne text-[40px] tracking-[-2px] md:text-[76px] font-medium leading-[40px] md:leading-[76px]  text-foreground md:tracking-[-3.8px] relative text-center capitalize  z-[3]">
          You can also
          <br />
          Be an Ecom
          <br />
          Millionaire
        </span>
      </div>

      <div className="flex flex-col gap-[30px] md:gap-[60px] items-start self-stretch shrink-0 flex-nowrap relative">
        {howItWorksSteps.map((step, index) => (
          <HowItWorksStep key={index} {...step} />
        ))}
      </div>
      <IOSDownloadButton label="Start Printing">
      </IOSDownloadButton>
    </div>
  );
};