"use client";

import SectionWrap from "@/components/ui/SectionWrap";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import { config } from "./config";
import Card from "./Card";
import DashedCircle from "./icons/dashedCircle";
import GearIcon from "./icons/gearIcon";
import PurpleArrow from "./icons/purpleArrow";
import YellowArrow from "./icons/yellowArrow";
import DollarIcon from "./icons/dollarIcon";
import cn from "classnames";
import BtcIcon from "./icons/btcIcon";
import EurIcon from "./icons/eurIcon";
import UsdtIcon from "./icons/usdtIcon";
import { useInView } from "framer-motion";

const ExchangeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });

  return (
    <SectionWrap className={styles.exchangeSection}>
      <div ref={containerRef} className={styles.content}>
        <div className={cn(styles.title, { [styles.titleAnim]: isInView })}>
          <h2 className={styles.titleText}>EXCHANGE</h2>
          <span className={styles.subTitle}>Crypto — fiat — crypto</span>
        </div>

        <div
          className={cn(styles.cardList, { [styles.cardListAnim]: isInView })}
        >
          {config.map((card, i) => {
            return <Card key={i} cardData={card} />;
          })}
        </div>
      </div>
      <div className={styles.dashedCircleWrap}>
        <DashedCircle className={styles.dashedCircle} />
      </div>
      <div className={styles.whiteCircle} />

      <GearIcon
        className={cn(styles.gearIcon, { [styles.gearIconAnim]: isInView })}
      />
      <div
        className={cn(styles.purpleWrap, { [styles.arrowsWrapAnim]: isInView })}
      >
        <PurpleArrow className={styles.purpleArrow} />

        <div
          className={cn(styles.bage, styles.usdBage, {
            [styles.usdBageAnim]: isInView,
          })}
        >
          <DollarIcon />
          USD
        </div>

        <div
          className={cn(styles.bage, styles.eurBage, {
            [styles.eurBageAnim]: isInView,
          })}
        >
          <EurIcon />
          eur
        </div>
      </div>
      <div
        className={cn(styles.yellowWrap, { [styles.arrowsWrapAnim]: isInView })}
      >
        <YellowArrow className={styles.yellowArrow} />
        <div
          className={cn(styles.bage, styles.btcBage, {
            [styles.btcBageAnim]: isInView,
          })}
        >
          <BtcIcon />
          btc
        </div>
        <div
          className={cn(styles.bage, styles.usdtBage, {
            [styles.usdtBageAnim]: isInView,
          })}
        >
          <UsdtIcon />
          usdt
        </div>
      </div>
    </SectionWrap>
  );
};

export default ExchangeSection;
