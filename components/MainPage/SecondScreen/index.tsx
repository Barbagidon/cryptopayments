import React from "react";
import styles from "./styles.module.css";
import CardList from "./CardList";

const SecondScreen = () => {
  return (
    <section className={styles.secondScreen}>
      <div className={styles.content}>
        <div className={styles.titleWrap}>
          <span className={styles.subTitle}>
            Full circle of payments products
          </span>
          <h2 className={styles.title}>TAILORED TO YOUR NEEDS</h2>
        </div>
        <CardList />
      </div>
    </section>
  );
};

export default SecondScreen;
