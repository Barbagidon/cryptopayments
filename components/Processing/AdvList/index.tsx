"use client";

import SectionWrap from "@/components/ui/SectionWrap";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import AdvCard from "./AdvCard";
import { motion, useInView } from "framer-motion";
import cn from "classnames";

const config = [
  {
    title: "RELIABLE FEES",
    descr: "No Setup Fees. No Hidden Fees",
    num: 1,
  },
  {
    title: "AUTO CONVERSION",
    descr: "Swap crypto accets",
    num: 2,
  },
  {
    title: "NO CHARGEBACKS",
    descr: "Uninterrupted Financial Procedures",
    num: 3,
  },
];

const AdvList = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });

  return (
    <SectionWrap>
      <div ref={containerRef} className={styles.content}>
        <motion.div
          className={cn(styles.advList, { [styles.animAdvList]: isInView })}
        >
          {config.map((item, i) => {
            return (
              <AdvCard
                key={i}
                className={cn(styles.animWrap, {
                  [styles.showAnim]: isInView,
                })}
                cardData={item}
              />
            );
          })}
        </motion.div>
      </div>
    </SectionWrap>
  );
};

export default AdvList;
