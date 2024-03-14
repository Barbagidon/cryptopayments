import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import TopLeftBlur from "./icons/topLeftBlur";
import BottomRightBlur from "./icons/bottomRightBlur";
import CenterBtmBlur from "./icons/centerBtmBlur";
import Image from "next/image";

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
      {/* <Image
        alt="macbook"
        width={676}
        height={470}
        src={"/exchange/macbook.png"}
      /> */}
    </section>
  );
};

export default Transactions;
