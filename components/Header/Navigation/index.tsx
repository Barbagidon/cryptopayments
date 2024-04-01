import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Navigation = () => {
  const links = [
    { title: "processing", href: "/processing" },
    { title: "exchange", href: "/exchange" },
    { title: "api", href: "https://app.cryptopayments.com/swagger/" },
    { title: "blog", href: "/blog" },
  ];

  return (
    <nav className={styles.navigation}>
      {links.map((link, i) => {
        return (
          <Link className={styles.navLink} href={link.href} key={i}>
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
