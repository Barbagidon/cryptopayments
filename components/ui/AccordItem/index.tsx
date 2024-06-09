import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import ReactMarkdown from "react-markdown";
import Arrow from "./icons/arrow";
import { IAccordItem } from "./types";

interface Props {
  className?: string;
  data: IAccordItem;
}

const AccordItem = ({ data, className }: Props) => {
  const { title, descr } = data;

  const [showText, setShowText] = useState(false);

  const stringFormatter = (value: string) => {
    return value.replace(/[^a-zA-Z]/g, "").toLowerCase();
  };

  useEffect(() => {
    const urlHash = stringFormatter(
      decodeURIComponent(location.hash.substring(1))
    );

    if (!urlHash) return;

    const formattedTitle = stringFormatter(title);
    setShowText(urlHash === formattedTitle);
  }, [title]);

  return (
    <li className={cn(styles.listItem, className)}>
      <div
        onClick={() => setShowText((prev) => !prev)}
        className={styles.header}
      >
        <span className={styles.title}>{title}</span>
        <div id={title.replace("?", "")} className={cn(styles.arrowWrap)}>
          <Arrow
            className={cn(styles.arrow, {
              [styles.rotatedArrow]: showText,
            })}
          />
        </div>
      </div>

      <div className={cn(styles.textWrap, { [styles.activeItem]: showText })}>
        <ReactMarkdown
          className={cn(styles.textContent, {
            [styles.hideTextContent]: !showText,
          })}
        >
          {descr}
        </ReactMarkdown>
      </div>
    </li>
  );
};

export default AccordItem;
