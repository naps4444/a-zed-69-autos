"use client";

import Image from "next/image";
import { useState } from "react";

interface VehicleGalleryProps {
  name: string;
  year: number;
  condition: string;
  images: string[];
}

export default function VehicleGallery({
  name,
  year,
  condition,
  images,
}: VehicleGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedThumbnails, setLoadedThumbnails] = useState<
    Record<number, boolean>
  >({});

  const currentImage = images[activeImage] || images[0];

  const handleImageChange = (index: number) => {
    setIsLoading(true);
    setActiveImage(index);
  };

  const handleThumbnailLoad = (index: number) => {
    setLoadedThumbnails((previous) => ({
      ...previous,
      [index]: true,
    }));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gray-900">
        <div className="relative aspect-[4/3]">
          {isLoading && (
            <div
              className="absolute inset-0 z-10 overflow-hidden bg-gray-900"
              aria-hidden="true"
            >
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />

              <div className="absolute left-5 top-5 h-8 w-24 animate-pulse rounded-full bg-gray-700" />

              <div className="absolute bottom-5 left-5 h-5 w-12 animate-pulse rounded bg-gray-700" />

              <div className="absolute bottom-5 right-5 h-7 w-12 animate-pulse rounded-full bg-gray-700" />
            </div>
          )}

          <Image
            key={currentImage}
            src={currentImage}
            alt={`${year} ${name} - Image ${activeImage + 1}`}
            fill
            priority={activeImage === 0}
            onLoad={() => setIsLoading(false)}
            className={`object-cover transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              {condition}
            </span>
          </div>

          <div className="absolute bottom-5 left-5">
            <span className="text-sm font-bold text-white">{year}</span>
          </div>

          <div className="absolute bottom-5 right-5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
            {activeImage + 1} / {images.length}
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => handleImageChange(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                activeImage === index
                  ? "border-red-600"
                  : "border-transparent opacity-70 hover:border-gray-400 hover:opacity-100"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              {!loadedThumbnails[index] && (
                <div
                  className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
                  aria-hidden="true"
                />
              )}

              <Image
                src={image}
                alt={`${year} ${name} thumbnail ${index + 1}`}
                fill
                onLoad={() => handleThumbnailLoad(index)}
                className={`object-cover transition-opacity duration-300 ${
                  loadedThumbnails[index] ? "opacity-100" : "opacity-0"
                }`}
                sizes="150px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
