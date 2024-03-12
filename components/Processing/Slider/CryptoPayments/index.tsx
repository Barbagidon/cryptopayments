"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import React, { Fragment } from "react";
import AdvItem from "../AdvItem";
import cn from "classnames";
import SlideBackings from "../SlideBackings";

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

interface Props extends React.HTMLProps<HTMLDivElement> {}

const CryptoPayments = ({ ...props }: Props) => {
  return (
    <div {...props} className={cn(styles.cryptoPayments, props.className)}>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <span className={styles.title}>
            <span className={styles.titleText}>Crypto payments</span>
            <span className={styles.mobSubTitle}>
              Send and receive payments in 10 virtual currencies 24/7
            </span>
          </span>
          <span className={styles.subTitle}>
            Send and receive payments in 10 virtual currencies 24/7
          </span>
          <div className={styles.advList}>
            {config.map((item, i) => {
              return (
                <Fragment key={i}>
                  <AdvItem
                    className={styles.advItem}
                    descrClassName={styles.advItemDescr}
                    titleClassName={styles.advItemTitle}
                    mobile
                    item={item}
                  />
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

        <Image
          className={styles.imageTablet}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/btcPhoneTablet.png"}
          alt={"btc phone"}
          unoptimized
          quality={100}
        />

        <Image
          className={styles.image544}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/btcPhone544.png"}
          alt={"btc phone"}
          unoptimized
          quality={100}
        />
        <Image
          className={styles.image311}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/btcPhone311.png"}
          alt={"btc phone"}
          unoptimized
          quality={100}
        />
      </div>
      <SlideBackings slideNum={0} />
    </div>
  );
};

export default CryptoPayments;
