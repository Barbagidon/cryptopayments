import React from "react";
import styles from "./styles.module.css";
import FaqList from "@/components/ui/FaqList";
import { config } from "./config";
import BigCircle from "@/components/ui/BigCircle";

const Faq = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>
          <span className={styles.subTitle}>
            Everything you need to know about the product
          </span>
        </div>

        <FaqList className={styles.faqList} data={config} />
        <div
          style={{
            height: 209,
            width: "100%",
          }}
        ></div>
      </div>
      <BigCircle />
    </section>
  );
};

export default Faq;
