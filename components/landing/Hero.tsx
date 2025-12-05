import React from "react";
import { ArrowUpRight, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-background font-dmsans text-foreground selection:bg-[#E6FF46] selection:text-black">
      {/* 
        Custom Animation Styles
        In a real project, these would be in tailwind.config.ts
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
      `}} />

      {/* Navigation */}
      <header className="z-50 mt-8 flex items-center gap-3">
        {/* Logo Icon */}
        <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-white/20 to-white/5">
          <ArrowUpRight className="h-4 w-4 text-foreground" strokeWidth={3} />
        </div>
        <span className="font-syne text-2xl font-extrabold tracking-wide text-foreground">
          bearo.cash
        </span>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-1 w-full max-w-[1440px] flex-col items-center justify-center px-4 pb-12 pt-8">
        
        {/* Hero Title */}
        <h1 className="z-10 mb-8 font-syne text-[clamp(4rem,12vw,8rem)] font-extrabold leading-none text-foreground sm:mb-12">
          BEARO
        </h1>

        {/* Central Visual Composition */}
        {/* The container is responsive: constrained on desktop, adaptable on mobile */}
        <div className="relative flex aspect-square w-[90vw] items-center justify-center md:max-w-[700px]">
          <video
            className="absolute inset-0 h-full w-full object-cover rounded-[3rem]"
            src="/bearo-cash.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Purple Floating Card (Top Right) */}
          <div className="animate-float-slow absolute -right-2 top-0 z-20 md:-right-6 md:-top-12">
            <div className="relative flex h-[160px] w-[150px] items-center justify-center rounded-[40px] bg-[#CFA3F2] shadow-[0_20px_40px_rgba(207,163,242,0.4)] transition-transform duration-500 hover:scale-105 md:h-[235px] md:w-[220px] md:rounded-[70px]">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm md:h-36 md:w-36">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/30 md:h-32 md:w-32">
                  <DollarSign className="h-12 w-12 text-white/90 md:h-20 md:w-20" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Yellow Floating Card (Bottom Left) */}
          <div className="animate-float-delayed absolute -bottom-4 -left-2 z-20 md:-bottom-12 md:-left-12">
            <div className="relative flex h-[220px] w-[200px] flex-col justify-between rounded-[50px] bg-[#E6FF46] p-6 shadow-[0_20px_40px_rgba(230,255,70,0.3)] transition-transform duration-500 hover:scale-105 md:h-[309px] md:w-[288px] md:rounded-[80px] md:p-9">
              
              {/* Card Header */}
              <div className="flex flex-col">
                <span className="font-syne text-lg font-extrabold tracking-wide text-black md:text-2xl">
                  $BEARO
                </span>
                <span className="font-mono text-5xl font-extrabold tracking-tighter text-black md:text-[61px]">
                  $67
                </span>
              </div>

              {/* Bar Chart */}
              <div className="flex h-24 items-end gap-2 md:h-[127px] md:gap-[14px] md:pl-2">
                {[
                  { h: "59%", color: "bg-[#A6B734]" },
                  { h: "30%", color: "bg-[#CDE62D]" },
                  { h: "50%", color: "bg-[#A6B734]" },
                  { h: "25%", color: "bg-[#CDE62D]" },
                  { h: "40%", color: "bg-[#A6B734]" },
                  { h: "100%", color: "bg-[#CDE62D]" },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-4 rounded-full transition-all duration-500 hover:opacity-80 md:w-[22px]",
                      bar.color
                    )}
                    style={{ height: bar.h }}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Section */}
        <div className="relative z-30 mt-20 w-full max-w-[443px] md:mt-32">
          <div className="group relative flex h-16 w-full items-center justify-between rounded-full border border-border bg-white py-2 pl-8 pr-2 shadow-xl transition-all hover:shadow-2xl md:h-20">
            <input 
              type="email" 
              placeholder="email" 
              className="w-full min-w-0 bg-transparent font-syne text-xl font-bold text-black placeholder:text-[#181818]/40 focus:outline-none"
            />
            <button className="flex shrink-0 items-center gap-2 rounded-full bg-[#181818] px-6 py-3 transition-transform duration-300 group-hover:scale-[1.02] active:scale-95 md:px-8 md:py-4">
              <span className="font-syne text-lg font-extrabold text-white md:text-xl">
                Sign up
              </span>
              <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

      </main>

      {/* Decorative Glow (Subtle atmosphere) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />
    </div>
  );
}