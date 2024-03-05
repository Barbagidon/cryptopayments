import React from "react";
import styles from "./styles.module.css";
import FooterTitle from "../FooterTitle";
import Link from "next/link";

const Legal = () => {
  const leftLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Risk Disclaimer",
    "Fees and Limits",
  ];
  const rightLinks = [
    "Complaints policy",
    "Cookies Policy",
    "AML Policy",
    "FAQ",
  ];
  return (
    <div className={styles.legal}>
      <FooterTitle>Legal</FooterTitle>
      <div className={styles.listsWrap}>
        <ul className={styles.list}>
          {leftLinks.map((item, i) => {
            return (
              <li key={i}>
                <Link href={"#"} className={styles.link}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className={styles.list}>
          {rightLinks.map((item, i) => {
            return (
              <li key={i}>
                <Link href={"#"} className={styles.link}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Legal;
