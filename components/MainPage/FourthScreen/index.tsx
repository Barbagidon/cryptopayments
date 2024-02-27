import React from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";

const FourthScreen = () => {
  return (
    <div className={styles.fourthScreen}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <h2 className={styles.title}>Multicurrency support</h2>
          <div className={styles.descr}>
            Say Goodbye to traditional payment barriers and Hello to the future
            of commerce with Crypto Payments for your Business.
          </div>

          <StartedBtn />
        </div>
        <div className={styles.coinsBlock}></div>
      </div>
    </div>
  );
};

export default FourthScreen;
