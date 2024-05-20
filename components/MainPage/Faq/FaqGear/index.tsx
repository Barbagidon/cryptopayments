"use client";
import React, { useRef } from "react";
import BigCircle from "@/components/ui/BigCircle";
import styles from "./styles.module.css";

import cn from "classnames";
import { useInView } from "framer-motion";

interface Props {
  className?: string;
}

const FaqGear = ({ className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <div className={styles.faqGear} ref={containerRef}>
      <BigCircle
        className={cn(styles.initialAnim, { [styles.activeAnim]: isInView })}
      />
    </div>
  );
};

export default FaqGear;
