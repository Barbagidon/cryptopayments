import React from "react";
import styles from "./styles.module.css";
import LinkItem from "./LinkItem";
import { links } from "./links";

interface Props {
  closeMenuHanlder: () => void;
}

const LinksList = ({ closeMenuHanlder }: Props) => {
  return (
    <div className={styles.linksList}>
      {links.map((item, key) => {
        return (
          <LinkItem
            closeMenuHanlder={closeMenuHanlder}
            linkData={item}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default LinksList;
