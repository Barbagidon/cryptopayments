import React from "react";
import styles from "./styles.module.css";
import LinkItem from "./LinkItem";
import { links } from "./links";

const LinksList = () => {
  return (
    <div className={styles.linksList}>
      {links.map((item, key) => {
        return <LinkItem linkData={item} key={key} />;
      })}
    </div>
  );
};

export default LinksList;
