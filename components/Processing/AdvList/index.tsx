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

  const transition = { duration: 0.7, ease: "easeOut" };

  return (
    <SectionWrap>
      <div ref={containerRef} className={styles.content}>
        <motion.div
          className={cn(styles.advList, { [styles.animAdvList]: isInView })}
        >
          {/* {config.map((item, i) => {
            return (
              <motion.div key={i}>
                <AdvCard
                  // className={cn(styles.advItem, {
                  //   [styles.advItemAnim]: isInView,
                  // })}
                  cardData={item}
                />
              </motion.div>
            );
          })} */}

          <motion.div
            className={cn(styles.animWrap, { [styles.showAnim]: isInView })}
            // style={{
            //   position: "relative",
            //   bottom: -526,
            // }}
            // animate={{
            //   bottom: isInView ? 0 : -526,
            // }}
            // initial={{
            //   bottom: -526,
            // }}
            // whileInView={{
            //   bottom: 0,
            // }}
            transition={transition}
          >
            <AdvCard
              // className={cn(styles.advItem, {
              //   [styles.advItemAnim]: isInView,
              // })}
              cardData={config[0]}
            />
          </motion.div>
          <motion.div
            className={cn(styles.animWrap, { [styles.showAnim]: isInView })}
            // style={{
            //   position: "relative",
            //   bottom: -357,
            // }}
            // initial={{ bottom: -357 }}
            // whileInView={{
            //   bottom: 0,
            // }}

            // animate={{ bottom: isInView ? 0 : -357 }}
            transition={transition}
          >
            <AdvCard
              // className={cn(styles.advItem, {
              //   [styles.advItemAnim]: isInView,
              // })}
              cardData={config[1]}
            />
          </motion.div>
          <motion.div
            className={cn(styles.animWrap, { [styles.showAnim]: isInView })}
            // style={{
            //   position: "relative",
            //   bottom: -189,
            // }}
            // animate={{
            //   bottom: isInView ? 0 : -189,
            // }}
            // initial={{
            //   bottom: -189,
            // }}
            // whileInView={{
            //   bottom: 0,
            // }}
            transition={transition}
          >
            <AdvCard
              // className={cn(styles.advItem, {
              //   [styles.advItemAnim]: isInView,
              // })}
              cardData={config[2]}
            />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrap>
  );
};

export default AdvList;
