import React from "react";
import styles from "./styles.module.css";
import LogoIcon from "@/components/ui/icons/LogoIcon";
import CloseIcon from "./icons/closeIcon";
import LinksList from "./LinksList";
import Link from "next/link";
import cn from "classnames";

interface Props {
  closeMenuHanlder: () => void;
  showMenu: boolean;
}

const MobileMenu = ({ closeMenuHanlder, showMenu }: Props) => {
  return (
    <div
      className={cn(styles.mobileMenu, {
        [styles.showMenu]: showMenu,
        [styles.hideMenu]: !showMenu,
      })}
    >
      <div className={styles.header}>
        <LogoIcon />
        <button onClick={closeMenuHanlder} className={styles.closeBtn}>
          <CloseIcon />
        </button>
      </div>
      <LinksList closeMenuHanlder={closeMenuHanlder} />

      <div className={styles.btnLinks}>
        <Link className={styles.joinLink} href={"#"}>
          join now
        </Link>
        <Link className={styles.loginLink} href={"#"}>
          login
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
