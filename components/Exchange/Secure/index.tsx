"use client";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import Circle from "./icons/circle";
import AdvItem from "@/components/ui/AdvItem";
import Lamp from "./icons/lamp";
import Vectors from "./icons/vectors";
import HalfCircle from "./icons/halfCircle";
import Image from "next/image";
import MobileVectors from "./icons/mobileVectors";
import cn from "classnames";
import { useInView } from "framer-motion";

const config = [
  {
    title: "Systematic internal and external security audits of the platform",
  },
  {
    title:
      "Customised alert system for detecting atypical user operations with subsequent manual processing",
  },
];

const Secure = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.7 });
  const isInViewVector = useInView(containerRef, { once: true, amount: 0.7 });

  return (
    <div className={styles.secure}>
      <div className={styles.content}>
        <div ref={containerRef} className={styles.textContent}>
          <h2 className={cn(styles.title, { [styles.title_active]: isInView })}>
            <span className={styles.titleText}>Secure</span>
            <Circle className={styles.circle} />
          </h2>
          <span className={cn(styles.text, { [styles.text_active]: isInView })}>
            An extremly important aspect of cryptocurrency services and
            solutions is the secure storage of funds
          </span>
          <MobileVectors
            className={cn(styles.mobileVectors, {
              [styles.mobileVectors_active]: isInViewVector,
            })}
          />
        </div>
        <div className={styles.cardBlock}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>We make sure that: </div>
            <div className={styles.list}>
              {config.map((item, i) => {
                return (
                  <AdvItem className={styles.advItem} key={i} item={item} />
                );
              })}
            </div>
            <Lamp className={styles.lamp} />
          </div>

          <HalfCircle className={styles.halfCircle} />
        </div>
      </div>
      <Vectors
        className={cn(styles.vectors, {
          [styles.vectors_active]: isInViewVector,
        })}
      />
    </div>
  );
};

export default Secure;
