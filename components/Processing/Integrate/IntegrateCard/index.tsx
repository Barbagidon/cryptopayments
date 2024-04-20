import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import cn from "classnames";

interface Props {
  card: {
    title: string;
    descr: string;
  };

  className?: string;
  onClick: () => void;
}

const IntegrateCard = ({ card, className, onClick }: Props) => {
  const { descr, title } = card;

  return (
    <div onClick={onClick} className={cn(styles.integrateCard, className)}>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        alt="card bg"
        className={styles.image}
        src={"/processing/integrateCard.png"}
        priority
      />
      <Image
        width="0"
        height="0"
        sizes="100vw"
        alt="card bg"
        className={styles.mobImage}
        src={"/processing/integrateCardMob.png"}
        priority
      />
      <div className={styles.textContent}>
        <span className={styles.title}>{title}</span>
        <span className={styles.descr}>{descr}</span>
      </div>
    </div>
  );
};

export default IntegrateCard;
