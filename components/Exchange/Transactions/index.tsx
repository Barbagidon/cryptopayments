"use client";

import React, { useRef } from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import TopLeftBlur from "./icons/topLeftBlur";

import Image from "next/image";
import LineIcon from "./icons/lineIcon";
import GearIcon from "./icons/gearIcon";
import { useInView } from "framer-motion";
import cn from "classnames";

const Transactions = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
  });

  return (
    <section
      ref={containerRef}
      className={cn(styles.transactions, {
        [styles.transactionsMobileAnim]: isInView,
      })}
    >
      <div
        className={cn(styles.content, { [styles.contentBorderAnim]: isInView })}
      >
        <div className={styles.mainContent}>
          <h1 className={cn(styles.title, { [styles.titleAnim]: isInView })}>
            <span className={styles.titleText}>
              Make transactions directly in your wallets
            </span>
            <span className={styles.subTitle}>All in one account. </span>
          </h1>
          <Image
            width={560}
            height={328}
            sizes="100vw"
            priority
            alt="macbook"
            src={"/exchange/macbookMob.png"}
            className={cn(styles.macbookMob, {
              [styles.macbookMobAnim]: isInView,
            })}
            unoptimized
            quality={100}
          />
          <div
            className={cn(styles.btnContent, {
              [styles.btnContentAnim]: isInView,
            })}
          >
            <span className={styles.btnText}>
              Deposit, exchange, withdraw without delays and unnecessary
              settings
            </span>

            <div className={styles.startedBtn}>
              <StartedBtn>Get started</StartedBtn>
            </div>
          </div>
        </div>
      </div>

      <TopLeftBlur className={styles.topLeftBlur} />

      <div className={styles.centerBtmBlur} />
      <div className={styles.bottomRightBlur} />
      <div className={styles.macBook}>
        <LineIcon className={styles.line} />
      </div>
      <GearIcon
        className={cn(styles.gearIcon, { [styles.gearIconAnim]: isInView })}
      />
    </section>
  );
};

export default Transactions;
