import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import cn from "classnames";
import { useTheme } from "@/stores/useTheme";

interface Props {
  card: {
    title: string;
    descr: string;
  };

  className?: string;
}

const IntegrateCard = ({ card, className }: Props) => {
  const { descr, title } = card;
  const theme = useTheme((state) => state.theme);

  const src =
    theme === "light"
      ? "/processing/integrateCard.png"
      : "/processing/darkIntegrateCard.png";


  const srcMob =
    theme === "light"
      ? "/processing/integrateCardMob.png"
      : "/processing/darkIntegrateCard.png";

  return (
    <div className={cn(styles.integrateCard, className)}>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        alt="card bg"
        className={styles.image}
        src={src}
        priority
      />
      <Image
        width="0"
        height="0"
        sizes="100vw"
        alt="card bg"
        className={styles.mobImage}
        src={srcMob}
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
