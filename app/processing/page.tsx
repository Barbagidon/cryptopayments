import React from "react";
import styles from "./page.module.css";
import ReceivePayments from "@/components/Processing/ReceivePayments";

const Processing = () => {
  return (
    <main className={styles.processing}>
      <ReceivePayments />
    </main>
  );
};

export default Processing;
