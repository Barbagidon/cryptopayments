"use client";

import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import CryptoPayments from "./CryptoPayments";
import Exchange from "./Exchange";
import EasyApi from "./EasyApi";
import Merchant from "./Merchant";

const Slider = () => {
  return (
    <SectionWrap className={styles.slider}>
      <div className={styles.content}>
        {/* <CryptoPayments /> */}
        <Exchange />
        {/* <EasyApi /> */}
        {/* <Merchant /> */}
      </div>
    </SectionWrap>
  );
};

export default Slider;
