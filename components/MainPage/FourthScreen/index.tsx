import React from "react";
import styles from "./styles.module.css";
import StartedBtn from "@/components/ui/StartedBtn";
import Image from "next/image";
import Bg from "./icons/bg";

const FourthScreen = () => {
  return (
    <div className={styles.fourthScreen}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <h2 className={styles.title}>Multicurrency support</h2>
          <div className={styles.descr}>
            Say Goodbye to traditional payment barriers and Hello to the future
            of commerce with Crypto Payments for your Business.
          </div>

          <StartedBtn className={styles.startedBtn} />
        </div>
        <div className={styles.coinsBlock}>
          <div className={styles.coinsHeader}>
            <h2 className={styles.coinsTitle}>Multicurrency support</h2>
            <div className={styles.coinsDescr}>
              Say Goodbye to traditional payment barriers and Hello to the
              future of commerce with Crypto Payments for your Business.
            </div>
          </div>

          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto", marginTop: "auto" }}
            alt="coins"
            src={"/mainPage/coins.png"}
          />
        </div>
        <div className={styles.lineBg}>
          {/* <FirstLine />
          <SecondLine />
          <ThirdLine /> */}
          <Bg />
        </div>
      </div>
    </div>
  );
};

export default FourthScreen;
