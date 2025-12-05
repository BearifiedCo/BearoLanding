"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useInView } from "motion/react";

// Simple Icon Components
const VolumeX = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" x2="17" y1="9" y2="15" />
    <line x1="17" x2="23" y1="9" y2="15" />
  </svg>
);

const Volume2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

const Play = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const Pause = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export const IphoneWithScreen = ({
  screenSrc,
  className,
}: {
  screenSrc: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const isInView = useInView(containerRef, { 
    amount: 0.4, 
    margin: "0px 0px -100px 0px" 
  });

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const isVideo = screenSrc.endsWith(".mp4") || screenSrc.endsWith(".webm");

  useEffect(() => {
    if (!videoRef.current || !isVideo) return;

    if (isInView) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => console.log("Autoplay prevented:", error));
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView, isVideo]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", className)}>
      <div
        className="absolute rounded-2xl overflow-hidden z-0 bg-black"
        style={{
          width: "90.07%",
          height: "95.58%",
          top: "2.2%",
          left: "4.96%",
        }}
        onClick={isVideo ? togglePlay : undefined}
      >
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={screenSrc}
              className="object-cover w-full h-full cursor-pointer"
              muted={isMuted}
              loop
              playsInline
            />

            {/* Mute Toggle Button (Bottom Right) */}
            <div className="absolute bottom-4 right-4 z-20">
              <button
                onClick={toggleMute}
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all border border-white/10"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
            
            {/* Play/Pause Button (Bottom Left) */}
            <div className="absolute bottom-4 left-4 z-20">
               <button 
                  onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-all border border-white/10"
               >
                 {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
               </button>
             </div>
          </>
        ) : (
          <Image
            alt="iphonescreen"
            src={screenSrc}
            fill
            quality={100}
            placeholder="blur"
            blurDataURL="L671cwRN0ftSxBW@RhoI0Moa~CV["
            className="object-cover"
          />
        )}
      </div>
      
      {/* Phone Frame */}
      <div className="absolute inset-0 z-10 pointer-events-none">
         <Image
            alt="iphoneoutline"
            src="/iphoneOutline.png"
            fill
            className="object-fill"
        />
      </div>
    </div>
  );
};