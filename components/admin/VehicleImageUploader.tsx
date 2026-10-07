"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

export interface UploadedVehicleImage {
  url: string;
  publicId: string;
  name: string;
}

interface VehicleImageUploaderProps {
  onChange: (images: UploadedVehicleImage[]) => void;
  initialImages?: UploadedVehicleImage[];
}

export default function VehicleImageUploader({
  onChange,
  initialImages = [],
}: VehicleImageUploaderProps) {
  const [images, setImages] =
    useState<UploadedVehicleImage[]>(initialImages);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const lastInitialImagesSignature = useRef("");

  const initialImagesSignature = initialImages
    .map(
      (image) =>
        `${image.url}|${image.publicId}|${image.name}`
    )
    .join("||");

  useEffect(() => {
    if (
      lastInitialImagesSignature.current ===
      initialImagesSignature
    ) {
      return;
    }

    lastInitialImagesSignature.current =
      initialImagesSignature;

    setImages(initialImages);
  }, [initialImages, initialImagesSignature]);

  async function uploadImage(file: File) {
    const signatureResponse = await fetch(
      "/api/admin/cloudinary-signature",
      {
        method: "POST",
      }
    );

    const signatureData =
      await signatureResponse.json();

    if (!signatureResponse.ok) {
      throw new Error(
        signatureData.error ||
          "Could not prepare image upload."
      );
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append(
      "api_key",
      signatureData.apiKey
    );
    formData.append(
      "timestamp",
      String(signatureData.timestamp)
    );
    formData.append(
      "signature",
      signatureData.signature
    );

    const cloudinaryResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${signatureData.cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const cloudinaryData =
      await cloudinaryResponse.json();

    if (!cloudinaryResponse.ok) {
      throw new Error(
        cloudinaryData.error?.message ||
          "Cloudinary upload failed."
      );
    }

    return {
      url: cloudinaryData.secure_url,
      publicId: cloudinaryData.public_id,
      name: file.name,
    };
  }

  async function handleFiles(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const files = Array.from(
      event.target.files || []
    );

    if (!files.length) {
      return;
    }

    setError("");
    setUploading(true);

    try {
      const uploadedImages: UploadedVehicleImage[] =
        [];

      for (const file of files) {
        if (!file.type.startsWith("image/")) {
          throw new Error(
            `${file.name} is not a valid image.`
          );
        }

        if (file.size > 10 * 1024 * 1024) {
          throw new Error(
            `${file.name} is larger than 10MB.`
          );
        }

        const uploadedImage =
          await uploadImage(file);

        uploadedImages.push(uploadedImage);
      }

      const updatedImages = [
        ...images,
        ...uploadedImages,
      ];

      setImages(updatedImages);
      onChange(updatedImages);
    } catch (uploadError) {
      setError(
        uploadError instanceof Error
          ? uploadError.message
          : "Image upload failed."
      );
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  function removeImage(url: string) {
    const updatedImages = images.filter(
      (image) => image.url !== url
    );

    setImages(updatedImages);
    onChange(updatedImages);
  }

  return (
    <div>
      <label
        htmlFor="vehicle-images"
        className="flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50 px-6 text-center transition hover:border-red-600 hover:bg-red-50/30"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-zinc-400 shadow-sm">
          <ImageIcon />
        </div>

        <p className="mt-4 text-sm font-bold text-black">
          {uploading
            ? "Uploading images..."
            : "Select vehicle images"}
        </p>

        <p className="mt-2 text-xs leading-5 text-zinc-500">
          PNG, JPG or WEBP • Maximum 10MB per image
        </p>

        <input
          id="vehicle-images"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          multiple
          onChange={handleFiles}
          disabled={uploading}
          className="hidden"
        />
      </label>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {images.length > 0 && (
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Vehicle Images
            </p>

            <p className="text-xs font-bold text-zinc-400">
              {images.length} image
              {images.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={`${image.url}-${index}`}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white"
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="aspect-[4/3] w-full object-cover"
                />

                <button
                  type="button"
                  onClick={() =>
                    removeImage(image.url)
                  }
                  className="absolute right-2 top-2 rounded-full bg-black/80 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-red-600"
                >
                  Remove
                </button>

                <div className="truncate border-t border-zinc-100 px-3 py-2 text-xs text-zinc-500">
                  {image.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ImageIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
      />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}
