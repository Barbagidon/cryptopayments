import React from "react";
import styles from "./styles.module.css";
import Header from "@/components/Header";

const FirstScreen = () => {
  return (
    <div className={styles.firstScreen}>
      <Header />
      <div
        style={{
          height: 656,
        }}
      ></div>
    </div>
  );
};

export default FirstScreen;
