import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import Link from "next/link";
import FaqList from "./FaqList";
import { getMainPageFaq } from "@/actions/getMainPageFaq";
import FaqHeader from "./FaqHeader";
import FaqGear from "./FaqGear";

const Faq = async () => {
  const faqData = await getMainPageFaq();
  return (
    <section className={styles.faq}>
      <div id="faq" className={styles.content}>
        <FaqHeader />
        <FaqList listData={faqData} />
        <div className={styles.showMore}>
          <span className={styles.showMoreText}>
            Didn&apos;t find the answer you were looking for?
          </span>
          <Arrow className={styles.arrowPc} />

          <Link href={"#"} className={styles.showMoreBtn}>
            show more
          </Link>
        </div>
      </div>

      <FaqGear />
    </section>
  );
};

export default Faq;
