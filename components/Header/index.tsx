import React from "react";
import styles from "./styles.module.css";
import LogoIcon from "../ui/icons/LogoIcon";
import Navigation from "./Navigation";
import Link from "next/link";
import ThemeChanger from "./themeChanger";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <LogoIcon />
        <Navigation />
        <div className={styles.btnLinks}>
          <Link className={styles.loginLink} href={"#"}>
            login
          </Link>
          <Link className={styles.joinLink} href={"#"}>
            join now
          </Link>
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
};

export default Header;
