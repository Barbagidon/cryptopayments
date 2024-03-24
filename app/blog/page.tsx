import React from "react";
import styles from "./page.module.css";
import SectionWrap from "@/components/ui/SectionWrap";
import Filters from "@/components/Blog/Filters";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <>
      <main className={styles.blog}>
        <SectionWrap>
          <div className={styles.content}>
            <Filters />
          </div>
        </SectionWrap>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
