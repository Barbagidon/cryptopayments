import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import TopLeftBlur from "./icons/topLeftBlur";
import BottomRightBlur from "./icons/bottomRightBlur";
import CenterBtmBlur from "./icons/centerBtmBlur";
import Image from "next/image";
import LineIcon from "./icons/lineIcon";

const Transactions = () => {
  return (
    <section className={styles.transactions}>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>
            <span className={styles.titleText}>
              Make transactions directly in your wallets
            </span>
            <span className={styles.subTitle}>All in one account. </span>
          </h1>

          <div className={styles.btnContent}>
            <span className={styles.btnText}>
              Deposit, exchange, withdraw without delays and unnecessary
              settings
            </span>
            <StartedBtn>Get started</StartedBtn>
          </div>
        </div>
      </div>
      {/* <TopLeftBlur className={styles.topLeftBlur} />
      <BottomRightBlur className={styles.bottomRightBlur} />
      <CenterBtmBlur className={styles.centerBtmBlur} /> */}
      <div className={styles.macBook} />
      <LineIcon className={styles.line} />
    </section>
  );
};

export default Transactions;
