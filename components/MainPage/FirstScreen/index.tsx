import React from "react";
import styles from "./styles.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import BlackArrow from "./icons/BlackArrow";
import StartedBtnBg from "./icons/startedBtnBg";

const FirstScreen = () => {
  return (
    <section className={styles.firstScreen}>
      <Header />
      <div className={styles.content}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>
            Crypto Payments for your{" "}
            <span className={styles.business}>Business</span>
          </h1>
          <Image
            width={400}
            height={400}
            className={styles.image}
            src={"/mainPage/firstScreenCircles.png"}
            alt="crypto payment ecosystem"
            layout="responsive"
          />
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.startedContent}>
            <div className={styles.startedBtnWrap}>
              <button className={styles.startedBtn}>get started</button>
              <button className={styles.arrowBtn}>
                <BlackArrow />
              </button>
            </div>
            <div className={styles.startedBtnBgWrap}>
              <StartedBtnBg />
            </div>
          </div>
          <div className={styles.bottomText}>
            A simple solution to start accepting cryptocurrencies
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstScreen;
