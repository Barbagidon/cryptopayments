"use client";

import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import BlackArrow from "./icons/BlackArrow";
import cn from "classnames";

interface Props {
  className?: string;
  children?: ReactNode;
  arrowBtnSize?: number;
}

const StartedBtn = ({ className, children, arrowBtnSize }: Props) => {
  return (
    <div className={cn(styles.startedBtnWrap, className)}>
      <button className={cn(styles.startedBtn, styles.animate)}>
        {children ? children : "get started"}
      </button>
      <button
        style={{
          height: arrowBtnSize,
          width: arrowBtnSize,
        }}
        className={styles.arrowBtn}
      >
        <BlackArrow />
      </button>
    </div>
  );
};

export default StartedBtn;
