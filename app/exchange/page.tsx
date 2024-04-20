import React from "react";
import styles from "./page.module.css";
import Secure from "@/components/Exchange/Secure";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/MainPage/GetStartedSection";
import Transactions from "@/components/Exchange/Transactions";
import ExchangeSection from "@/components/Exchange/ExchangeSection";
import Choose from "@/components/Exchange/Choose";
import AnimWrap from "@/components/ui/AnimWrap";

const Exchange = () => {
  return (
    <AnimWrap className={styles.exchange}>
      <Transactions />
      <ExchangeSection />
      <Secure />
      <Choose />
      <GetStartedSection />
    </AnimWrap>
  );
};

export default Exchange;
