import React from "react";
import styles from "./styles.module.css";
import SectionWrap from "../ui/SectionWrap";
import FaqList from "../ui/FaqList";
import { IFaqItem } from "../ui/FaqList/types";

interface Props {
  data: {
    title: string;
    date: string;
    list: IFaqItem[];
  };
}

const Legal = ({ data }: Props) => {
  const { date, list, title } = data;

  return (
    <SectionWrap tag="main" className={styles.legal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.date}>Last Update: {date}</span>
        </div>

        {/* <div className={styles.descr}>
          Transactions with Cryptocurrencies involve various risks, including
          the risk of money laundering and terrorist financing. For this reason,
          Cryptopayments has implemented Anti-Money Laundering and Counter
          Terrorist Financing Compliance Guidelines (‘Guidelines’) and
          undertakes measures for the prevention of Money Laundering and
          Terrorist Financing.
        </div> */}

        <div className={styles.mainInfo}>
          <FaqList dangerousHtml data={list} />
        </div>
      </div>
    </SectionWrap>
  );
};

export default Legal;
