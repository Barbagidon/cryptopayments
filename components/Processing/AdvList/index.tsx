import SectionWrap from "@/components/ui/SectionWrap";
import React from "react";
import styles from "./styles.module.css";
import AdvCard from "./AdvCard";

const AdvList = () => {
  return (
    <SectionWrap>
      <div className={styles.content}>
        <div className={styles.advList}>
          <AdvCard />
          <AdvCard />
          <AdvCard />
        </div>
      </div>
    </SectionWrap>
  );
};

export default AdvList;
