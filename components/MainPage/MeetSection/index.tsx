import React from "react";
import styles from "./styles.module.css";
import Card from "./Card";
import GearIcon from "./icons/gearIcon";

const MeetSection = () => {
  return (
    <div className={styles.meetSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>where to meet us in 2024</h2>

        <ul className={styles.cardList}>
          <Card />
          <Card />
          <Card />
          <GearIcon className={styles.gearIcon} />
        </ul>
      </div>
    </div>
  );
};

export default MeetSection;
