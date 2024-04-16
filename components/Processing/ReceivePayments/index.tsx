"use client";

import SectionWrap from "@/components/ui/SectionWrap";
import StartedBtn from "@/components/ui/StartedBtn";
import React, { useRef } from "react";
import ButtonBg from "./icons/buttonBg";
import * as animationData from "./anim/ellipsAnim.json";
import Lottie from "lottie-react";
import UsdtIcon from "./icons/usdtIcon";
import EthIcon from "./icons/ethIcon";
import BtcIcon from "./icons/btcIcon";
import styles from "./styles.module.css";
import { useInView } from "framer-motion";
import cn from "classnames";

const ReceivePayments = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  return (
    <section ref={containerRef} className={styles.receivePayments}>
      <SectionWrap tag="div" className={styles.sectionWrap}>
        <div className={styles.content}>
          <h1 className={cn(styles.title, { [styles.titleAnim]: isInView })}>
            <span className={styles.titleText}>
              wanna receive payments in{" "}
              <span className={styles.shadowText}>crypto</span> ?
            </span>
            <span className={styles.colorText}>— Easy</span>
          </h1>

          <div
            className={cn(styles.btnContent, {
              [styles.animBtnContent]: isInView,
            })}
          >
            <span className={styles.btnText}>We’ve got you covered</span>
            <StartedBtn arrowBtnSize={50} className={styles.startedBtn}>
              Open a free account
            </StartedBtn>
            <ButtonBg className={styles.buttonBg} />
          </div>
        </div>
        <Lottie
          className={styles.ellipse}
          loop={false}
          animationData={animationData}
        />
        <UsdtIcon
          className={cn(styles.usdtIcon, { [styles.animIcon]: isInView })}
        />
        <BtcIcon
          className={cn(styles.btcIcon, { [styles.animIcon]: isInView })}
        />
        <EthIcon
          className={cn(styles.ethIcon, { [styles.animIcon]: isInView })}
        />
      </SectionWrap>
    </section>
  );
};

export default ReceivePayments;
