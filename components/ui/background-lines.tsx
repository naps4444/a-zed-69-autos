"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  const paths = [
    "M-200 0C-100 0 0 100 100 100S300 0 400 0s200 100 300 100 200-100 300-100 200 100 300 100 200-100 300-100 200 100 300 100",
    "M-200 40C-100 40 0 140 100 140S300 40 400 40s200 100 300 100 200-100 300-100 200 100 300 100 200-100 300-100 200 100 300 100",
    "M-200 80C-100 80 0 180 100 180S300 80 400 80s200 100 300 100 200-100 300-100 200 100 300 100 200-100 300-100 200 100 300 100",
    "M-200 120C-100 120 0 220 100 220S300 120 400 120s200 100 300 100 200-100 300-100 200 100 300 100 200-100 300-100 200 100 300 100",
    "M-200 160C-100 160 0 260 100 260S300 160 400 160s200 100 300 100 200-100 300-100 200 100 300 100 200-100 300-100 200 100 300 100",
  ];

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden",
        className,
      )}
    >
      <svg
        className="absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 1600 600"
        fill="none"
        preserveAspectRatio="none"
      >
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.12"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: svgOptions?.duration ?? 10,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
