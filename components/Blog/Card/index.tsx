import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ArrowIcon from "./icons/arrowIcon";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.header}>
          <span className={styles.categoryBage}>News</span>
          <span className={styles.dateBage}>16th August 2022</span>
        </div>

        <div className={styles.textInfo}>
          The Biden administration working group will start regular meetings on
          digital dollar launch.
        </div>
      </div>
      <Image
        className={styles.cardImage}
        width="0"
        height="0"
        sizes="100vw"
        alt={"card image"}
        src={"/mainPage/mainPageFirstScreen.png"}
      />
      <div className={styles.linkBtn}>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Card;
