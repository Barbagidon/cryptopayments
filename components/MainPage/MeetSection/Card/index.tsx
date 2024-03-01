import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import CalendarIcon from "./icons/calendarIcon";
import Image from "next/image";

const Card = () => {
  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>Crypto Expo Europe</span>
        <Arrow />
      </div>

      <div className={styles.info}>
        <div className={styles.textContent}>
          <div className={styles.calendar}>
            <CalendarIcon />
            <span className={styles.date}>March 3-4, 2024</span>
          </div>
          <div className={styles.descr}>
            Radisson Blu Hotel (Bucharest, Romania)
          </div>
        </div>
        <Image
          src={"/mainPage/cardImage.png"}
          width="0"
          height="0"
          sizes="100vw"
          alt="card image"
          className={styles.image}
        />
      </div>
    </li>
  );
};

export default Card;
