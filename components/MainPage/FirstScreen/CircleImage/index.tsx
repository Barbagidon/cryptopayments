import React from "react";
import Image from "next/image";
import { useTheme } from "@/stores/useTheme";

interface Props {
  className?: string;
}

const CircleImage = ({ className }: Props) => {
  const theme = useTheme((state) => state.theme);
  const src =
    theme === "light"
      ? "/mainPage/firstScreenCircles.png"
      : "/mainPage/firstScreenCirclesDark.png";
  return (
    <Image
      width={400}
      height={400}
      sizes="100vw"
      className={className}
      src={src}
      alt="crypto payment ecosystem"
      priority
      quality={100}
    />
  );
};

export default CircleImage;
