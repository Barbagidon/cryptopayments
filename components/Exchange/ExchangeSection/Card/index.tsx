import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

interface Props {
  cardData: {
    title: string;
    descr: string;
  };
  className?: string;
}

const Card = ({ cardData, className }: Props) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.purpleBg} />

      <div className={styles.cardContent}>
        <span className={styles.cardTitle}>{cardData.title}</span>
        <div className={styles.divider} />
        <span className={styles.descr}>{cardData.descr}</span>
      </div>
    </div>
  );
};

export default Card;
