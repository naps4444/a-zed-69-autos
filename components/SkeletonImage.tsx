"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function SkeletonImage({
  className,
  onLoad,
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {!isLoaded && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gray-800">
          <div className="h-full w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />
        </div>
      )}

      <Image
        {...props}
        className={`transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
      />
    </div>
  );
}