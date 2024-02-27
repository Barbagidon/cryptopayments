import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";

interface Props {
  cardData: {
    title: string;
    descr: string;
  };
}

const Card = ({ cardData }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.purpleBg} />
      <div className={styles.pcArrow}>
        <Arrow />
      </div>

      <div className={styles.cardContent}>
        <span className={styles.cardTitle}>
          <span className={styles.title}> {cardData.title}</span>

          <span className={styles.mobileArrow}>
            <Arrow />
          </span>
        </span>
        <div className={styles.divider} />
        <span className={styles.descr}>{cardData.descr}</span>
      </div>
    </div>
  );
};

export default Card;
