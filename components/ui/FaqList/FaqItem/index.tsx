import React, { useState } from "react";
import styles from "./styles.module.css";
import Arrow from "../icons/arrow";
import { IFaqItem } from "../types";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

interface Props {
  className?: string;
  data: IFaqItem;
}

const FaqItem = ({ data, className }: Props) => {
  const { title, descr } = data;

  const [showText, setShowText] = useState(false);
  return (
    <li className={cn(styles.listItem, className)}>
      <div
        onClick={() => setShowText((prev) => !prev)}
        className={styles.header}
      >
        <span className={styles.title}>{title}</span>
        <div
          className={cn(styles.arrowWrap, {
            [styles.rotatedArrow]: showText,
          })}
        >
          <Arrow />
        </div>
      </div>

      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className={styles.textWrap}
          >
            <div className={styles.textContent}> {descr}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default FaqItem;
