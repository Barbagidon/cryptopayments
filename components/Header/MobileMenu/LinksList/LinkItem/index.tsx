import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import Link from "next/link";

interface Props {
  linkData: {
    linkText: string;
    link: string;
  };
  closeMenuHanlder: () => void;
}

const LinkItem = ({ linkData, closeMenuHanlder }: Props) => {
  const { link, linkText } = linkData;

  return (
    <Link onClick={closeMenuHanlder} href={link} className={styles.linkItem}>
      {linkText}
      <Arrow />
    </Link>
  );
};

export default LinkItem;
