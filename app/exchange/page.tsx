import React from "react";
import styles from "./page.module.css";
import Secure from "@/components/Exchange/Secure";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/MainPage/GetStartedSection";

const Exchange = () => {
  return (
    <main className={styles.exchange}>
      <Secure />
      <GetStartedSection />
      <Footer />
    </main>
  );
};

export default Exchange;
