import React from "react";
import styles from "./styles.module.css";
import BlackArrow from "./icons/BlackArrow";
import cn from "classnames";

interface Props {
  className?: string;
}

const StartedBtn = ({ className }: Props) => {
  return (
    <div className={cn(styles.startedBtnWrap, className)}>
      <button className={cn(styles.startedBtn, styles.animate)}>
        get started
      </button>
      <button className={styles.arrowBtn}>
        <BlackArrow />
      </button>
    </div>
  );
};

export default StartedBtn;
