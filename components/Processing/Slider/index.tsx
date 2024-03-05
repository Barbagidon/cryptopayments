"use client";

import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import CryptoPayments from "./CryptoPayments";
import Exchange from "./Exchange";
import EasyApi from "./EasyApi";

const Slider = () => {
  return (
    <SectionWrap className={styles.slider}>
      <div className={styles.content}>
        {/* <CryptoPayments /> */}
        {/* <Exchange /> */}
        <EasyApi />
      </div>
    </SectionWrap>
  );
};

export default Slider;
