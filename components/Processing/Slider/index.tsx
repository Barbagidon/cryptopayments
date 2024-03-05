"use client";

import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import CryptoPayments from "./CryptoPayments";

const Slider = () => {
  return (
    <SectionWrap className={styles.slider}>
      <div className={styles.content}>
        <CryptoPayments />
      </div>
    </SectionWrap>
  );
};

export default Slider;
