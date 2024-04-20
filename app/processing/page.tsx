import React from "react";
import styles from "./page.module.css";
import ReceivePayments from "@/components/Processing/ReceivePayments";
import Footer from "@/components/Footer";
import AdvList from "@/components/Processing/AdvList";
import Integrate from "@/components/Processing/Integrate";
import Slider from "@/components/Processing/Slider";
import AnimWrap from "@/components/ui/AnimWrap";

const Processing = () => {
  return (
    <AnimWrap className={styles.processing}>
      <ReceivePayments />
      <AdvList />
      <Integrate />
      <Slider />
    </AnimWrap>
  );
};

export default Processing;
