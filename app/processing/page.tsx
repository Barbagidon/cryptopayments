import React from "react";
import styles from "./page.module.css";
import ReceivePayments from "@/components/Processing/ReceivePayments";
import Footer from "@/components/Footer";

const Processing = () => {
  return (
    <main className={styles.processing}>
      <ReceivePayments />
      <Footer />
    </main>
  );
};

export default Processing;
