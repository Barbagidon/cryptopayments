import { getPlaiceholder } from "plaiceholder";
import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  className?: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  quality?: number;
}

const ImageWithBlur = async ({
  src,
  className,
  alt,
  height,
  width,
  sizes,
  quality,
}: Props) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      blurDataURL={base64}
      placeholder="blur"
      className={className}
      sizes={sizes}
      quality={quality}
    />
  );
};

export default ImageWithBlur;
