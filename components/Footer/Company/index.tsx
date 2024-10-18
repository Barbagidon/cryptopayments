import React from "react";
import FooterTitle from "../FooterTitle";
import styles from "./styles.module.css";

const Company = () => {
  return (
    <div className={styles.company}>
      <FooterTitle>Company</FooterTitle>
      <div className={styles.list}>
        <div className={styles.topListItems}>
          <div className={styles.text}>Cleverlee UAB</div>
          <div className={styles.text}>Registry Code: 305935751</div>
        </div>
        <div className={(styles.text, styles.bottomText)}>
          Address: Vilnius, Eišiškių Sodų 18-oji st. 11, LT-02194
        </div>
      </div>
    </div>
  );
};

export default Company;
