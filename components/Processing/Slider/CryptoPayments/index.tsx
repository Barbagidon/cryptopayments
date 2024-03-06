"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import React, { Fragment } from "react";
import AdvItem from "../AdvItem";
import cn from "classnames";

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
    descr: "Instant and limitless exchange.",
  },
];

interface Props extends React.HTMLProps<HTMLDivElement> {}

const CryptoPayments = ({ ...props }: Props) => {
  return (
    <div {...props} className={cn(styles.cryptoPayments, props.className)}>
      <div className={styles.content}>
        <span className={styles.title}>Crypto payments</span>
        <span className={styles.subTitle}>
          Send and receive payments in 10 virtual currencies 24/7
        </span>
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
  );
};

export default CryptoPayments;
