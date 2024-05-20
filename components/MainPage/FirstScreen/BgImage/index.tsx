import React from "react";
import Image from "next/image";
import { useTheme } from "@/stores/useTheme";

interface Props {
  className?: string;
}

const BgImage = ({ className }: Props) => {
  const theme = useTheme((state) => state.theme);

  const src =
    theme === "light"
      ? "/mainPage/mainPageFirstScreen.png"
      : "/mainPage/mainPageFirstScreenDark.png";

  return (
    <Image
      className={className}
      width={0}
      height={0}
      sizes="100vw"
      src={src}
      alt="bg"
      unoptimized
      priority
    />
  );
};

export default BgImage;
