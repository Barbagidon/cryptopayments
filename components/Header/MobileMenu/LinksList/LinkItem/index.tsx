import React from "react";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import Link from "next/link";

interface Props {
  linkData: {
    linkText: string;
    link: string;
  };
}

const LinkItem = ({ linkData }: Props) => {
  const { link, linkText } = linkData;

  return (
    <Link href={link} className={styles.linkItem}>
      {linkText}
      <Arrow />
    </Link>
  );
};

export default LinkItem;
