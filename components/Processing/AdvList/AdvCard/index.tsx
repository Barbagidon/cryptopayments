import React from "react";
import styles from "./styles.module.css";

const AdvCard = () => {
  return (
    <div className={styles.advCard}>
      <div className={styles.number}>
        <span>01</span> <span>—</span>
      </div>

      <div className={styles.content}>
        <div className={styles.mainText}>RELIABLE FEES</div>
        <div className={styles.divider}></div>
        <div className={styles.text}>No Setup Fees. No Hidden Fees</div>
      </div>
    </div>
  );
};

export default AdvCard;
