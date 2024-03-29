import React from "react";
import styles from "./page.module.css";
import SectionWrap from "@/components/ui/SectionWrap";
import Filters from "@/components/Blog/Filters";
import Footer from "@/components/Footer";
import Card from "@/components/Blog/Card";
import YellowGearIcon from "@/components/Blog/icons/yellowGearIcon";
import TriangleIcon from "@/components/Blog/icons/triangleIcon";
import CircleIcon from "@/components/Blog/icons/circleIcon";
import { cardsConfig } from "@/components/Blog/cardsConfig";

const Blog = () => {
  return (
    <main className={styles.blog}>
      <section className={styles.blogSection}>
        <div className={styles.content}>
          <Filters />

          <div className={styles.cardList}>
            {cardsConfig.map((card, i) => {
              return <Card cardData={card} key={i} />;
            })}
          </div>
          <CircleIcon className={styles.circleIcon} />
        </div>
      </section>
      <YellowGearIcon className={styles.gearIcon} />
      <TriangleIcon className={styles.triangleIcon} />
    </main>
  );
};

export default Blog;
