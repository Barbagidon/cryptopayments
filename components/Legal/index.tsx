import React from "react";
import styles from "./styles.module.css";
import SectionWrap from "../ui/SectionWrap";
import FaqList from "../ui/FaqList";
import { IFaqItem } from "../ui/FaqList/types";

interface Props {
  data: {
    title: string;
    date: string;
    mainDescr?: string;
    list: IFaqItem[];
  };
}

const Legal = ({ data }: Props) => {
  const { date, list, title, mainDescr } = data;

  const showDescr = mainDescr && mainDescr.length > 0;

  return (
    <SectionWrap tag="main" className={styles.legal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.date}>Last Update: {date}</span>
        </div>

        {showDescr && <div className={styles.descr}>{mainDescr}</div>}

        <div className={styles.mainInfo}>
          <FaqList dangerousHtml data={list} />
        </div>
      </div>
    </SectionWrap>
  );
};

export default Legal;
