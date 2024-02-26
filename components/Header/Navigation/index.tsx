import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Navigation = () => {
  const links = ["processing", "exchange", "api", "blog"];

  return (
    <nav className={styles.navigation}>
      {links.map((link, i) => {
        return (
          <Link className={styles.navLink} href={`/${link}`} key={i}>
            {link}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
