import React, { useState } from "react";
import styles from "./styles.module.css";
import Arrow from "../icons/arrow";
import { IFaqItem } from "../types";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import ReactMarkdown from "react-markdown";
import { animVariants } from "./animVariants";

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
        <div id={title} className={cn(styles.arrowWrap)}>
          <Arrow
            className={cn(styles.arrow, {
              [styles.rotatedArrow]: showText,
            })}
          />
        </div>
      </div>

      <AnimatePresence>
        {showText && (
          <motion.div
            variants={animVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"initial"}
            className={styles.textWrap}
          >
            <ReactMarkdown className={styles.textContent}>
              {descr}
            </ReactMarkdown>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default FaqItem;
