import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

interface Props {
  cardData: {
    title: string;
    descr: string;
    num: number;
  };

  className?: string;
}

const AdvCard = ({ cardData, className }: Props) => {
  const { descr, num, title } = cardData;

  return (
    <div className={cn(styles.advCard, className)}>
      <div className={styles.number}>
        <span>0{num}</span> <span>—</span>
      </div>

      <div className={styles.content}>
        <div className={styles.mainText}>{title}</div>
        <div className={styles.divider} />
        <div className={styles.text}>{descr}</div>
      </div>
    </div>
  );
};

export default AdvCard;
