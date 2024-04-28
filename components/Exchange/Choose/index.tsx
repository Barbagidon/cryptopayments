"use client";

import cn from "classnames";
import React, { useState, useRef } from "react";
import styles from "./styles.module.css";
import BtcIcon from "./icons/btcIcon";
import Card from "./Card";
import { bottomRow, topRow } from "./config";
import GearIcon from "./icons/gearIcon";
import StartedBtn from "@/components/ui/StartedBtn";
import CornerIcon from "./icons/cornerIcon";

import { useInView } from "framer-motion";

const Choose = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });


  const [counterCard, setCounterCard] = useState(1);
  const counterCardHandler = () => {
    setCounterCard((prev) => {
      if (prev === 4) return prev;
      return prev + 1;
    });

  };

  return (
    <section onClick={counterCardHandler} className={styles.choose}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          why cho{<BtcIcon className={styles.btcIcon} />}se Cryptopayments —
        </h2>

        <div className={styles.topRow}>
          <Card className={styles.border} data={topRow[0]}
          />
          <Card
            rightText
            data={topRow[1]}
            className={cn(styles.rightCard, styles.border, styles.secondCard, {
              [styles.CardAnim]: counterCard >= 2,
            })}
          />
        </div>

        <div className={styles.bottomRow}>
          <Card
            data={bottomRow[0]}
            className={cn(styles.bottomAlign, styles.border, styles.thirdCard, {
              [styles.CardAnim]: counterCard >= 3,
            })}
          />
          <Card rightText data={bottomRow[1]}
            className={cn(styles.bottomRight, styles.fourthCard, {
              [styles.CardAnim]: counterCard >= 4,
            })}
          />
        </div>
        <div className={styles.divider} />
        <div ref={containerRef}>
          <GearIcon
            className={cn(styles.gearIcon, {
              [styles.gearIcon_1]: counterCard === 1,
              [styles.gearIcon_2]: counterCard === 2,
              [styles.gearIcon_3]: counterCard === 3,
              [styles.gearIcon_4]: counterCard === 4,
              [styles.gearIcon_mob]: isInView
            })}
          />
        </div>
        <div className={styles.startedBtn}>
          <StartedBtn />
        </div>
        <CornerIcon className={cn(styles.cornerIcon, styles.topLeftCorner)} />
        <CornerIcon
          className={cn(styles.cornerIcon, styles.bottomLeftCorner)}
        />
        <CornerIcon className={cn(styles.cornerIcon, styles.topRightCorner)} />
        <CornerIcon
          className={cn(styles.cornerIcon, styles.bottomRightCorner)}
        />
      </div>
    </section>
  );
};

export default Choose;
