import React from "react";
import styles from "./page.module.css";
import ReceivePayments from "@/components/Processing/ReceivePayments";
import Footer from "@/components/Footer";
import AdvList from "@/components/Processing/AdvList";
import Integrate from "@/components/Processing/Integrate";

const Processing = () => {
  return (
    <main className={styles.processing}>
      <ReceivePayments />
      <AdvList />
      <Integrate />
      <Footer />
    </main>
  );
};

export default Processing;
