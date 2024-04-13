import React, { useState } from "react";
import styles from "./styles.module.css";
import Arrow from "../icons/arrow";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import { IAccordItem } from "./types";
import ReactMarkdown from "react-markdown";

interface Props {
  className?: string;
  data: IAccordItem;
}

const AccordItem = ({ data, className }: Props) => {
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
            <ReactMarkdown>{descr}</ReactMarkdown>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default AccordItem;
