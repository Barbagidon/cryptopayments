"use client";

import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import cn from "classnames";
import { useTheme } from "@/stores/useTheme";

interface Props {
  className?: string;
}

const BigCircle = ({ className }: Props) => {
  const theme = useTheme((state) => state.theme);

  const src = theme === "light" ? "/gear.png" : "/gearDark.png";

  return (
    <div className={cn(styles.bigCircle, className, "bigCircleFaq")}>
      <div className={styles.gearIconWrap}>
        <Image
          priority
          alt={"gear icon"}
          fill
          src={src}
        />
      </div>
    </div>
  );
};

export default BigCircle;
