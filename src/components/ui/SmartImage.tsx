"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type SmartImageProps = Omit<ImageProps, "src"> & {
  src?: string | null;
  fallbackSrc?: string;
};

export default function SmartImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder-luxury.jpg",
  ...props
}: SmartImageProps) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}