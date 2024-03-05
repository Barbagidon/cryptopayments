"use client";

import Image from "next/image";
import AdvItem from "./AdvItem";
import styles from "./styles.module.css";
import React, { Fragment } from "react";

const config = [
  {
    title: "Flexible fees",
    descr:
      "Fees starting just from 0,5% from your turnover. No setup fees. No any hidden fees.",
  },
  {
    title: "Swap crypto",
    descr: "Instant and limitless exchange.",
  },
  {
    title: "No chargebacks or rolling reserve",
    descr:
      "Chargebacks and rolling reserves change the concept of uninterrupted financial procedures.",
  },
];

const CryptoPayments = () => {
  return (
    <div className={styles.cryptoPayments}>
      <div className={styles.header}>
        <span className={styles.leftText}>Crypto payments</span>
        <span className={styles.rightText}>
          Send and receive payments in 10 virtual currencies 24/7
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.advList}>
          {config.map((item, i) => {
            return (
              <Fragment key={i}>
                <AdvItem item={item} />
                {i < 2 && <div className={styles.divider} />}
              </Fragment>
            );
          })}
        </div>
        <Image
          className={styles.image}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/btcPhone.png"}
          alt={"btc phone"}
          unoptimized
          quality={100}
        />
      </div>
    </div>
  );
};

export default CryptoPayments;
