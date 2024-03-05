import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const EasyApi = () => {
  return (
    <div className={styles.easyApi}>
      <div className={styles.textContent}>
        <div className={styles.title}>Easy API integration</div>
        <div className={styles.bottomText}>
          A Fully-Featured API Platform At Your Fingertips. We offer a
          full-featured platform for providing essential crypto services to your
          clients in a highly sophisticated and detailed way.
        </div>
      </div>
      <div className={styles.divider} />
      <Image
        className={styles.image}
        sizes="100vw"
        width={0}
        height={0}
        src={"/processing/easyApi.png"}
        alt={"easy api"}
        unoptimized
        quality={100}
      />
    </div>
  );
};

export default EasyApi;
