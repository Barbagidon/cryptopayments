import React from "react";
import styles from "./page.module.css";
import Secure from "@/components/Exchange/Secure";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/MainPage/GetStartedSection";
import Transactions from "@/components/Exchange/Transactions";
import ExchangeSection from "@/components/Exchange/ExchangeSection";

const Exchange = () => {
  return (
    <main className={styles.exchange}>
      <Transactions />
      <ExchangeSection />
      <Secure />
      <GetStartedSection />
      <Footer />
    </main>
  );
};

export default Exchange;
