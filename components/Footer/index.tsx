import React from "react";
import styles from "./styles.module.css";
import Company from "./Company";
import Legal from "./Legal";
import Products from "./Products";
import Social from "./Social";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <Company />

          <div className={styles.mobileWrap}>
            <Legal />
            <Products />
            <Social />
          </div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.bottomTextWrap}>
            <span className={styles.bottomText}>
              Cryptopayments is a brand name of Cleverlee UAB, Registry code: 302935751
            </span>
            <span className={styles.bottomText}>
              Registered office: Vilnius, Eišiškių Sodų 18-oji st. 11, LT-02194
            </span>
          </div>
          <div className={styles.date}>
            © Copyright Cleverlee UAB {currentYear}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
