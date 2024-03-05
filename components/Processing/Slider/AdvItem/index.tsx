import React from "react";
import styles from "./styles.module.css";
import CheckedIcon from "./icons/checkedIcon";

interface Props {
  item: {
    title: string;
    descr?: string;
  };
}

const AdvItem = ({ item }: Props) => {
  const { descr, title } = item;
  return (
    <div className={styles.advItem}>
      <div className={styles.title}>
        <CheckedIcon />
        <span className={styles.text}>{title}</span>
      </div>
      {descr && <div className={styles.descr}>{descr}</div>}
    </div>
  );
};

export default AdvItem;
