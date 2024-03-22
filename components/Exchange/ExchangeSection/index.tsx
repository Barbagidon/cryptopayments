import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import { config } from "./config";
import Card from "./Card";

const ExchangeSection = () => {
  return (
    <SectionWrap className={styles.exchangeSection}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.titleText}>EXCHANGE</h2>
          <span className={styles.subTitle}>Crypto— fiat — crypto</span>
        </div>

        <div className={styles.cardList}>
          {config.map((card, i) => {
            return <Card key={i} cardData={card} />;
          })}
        </div>
      </div>
    </SectionWrap>
  );
};

export default ExchangeSection;
