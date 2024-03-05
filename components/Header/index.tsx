"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import LogoIcon from "../ui/icons/LogoIcon";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileBtnIcon from "./icons/mobileBtnIcon";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = showMenu ? "hidden" : "unset";
  }, [showMenu]);

  const closeMenuHanlder = () => {
    setShowMenu(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link className={styles.logoLink} href={"/"}>
            <LogoIcon />
          </Link>
          <Navigation />

          <div className={styles.links}>
            <div className={styles.btnLinks}>
              <Link className={styles.loginLink} href={"#"}>
                login
              </Link>
              <Link className={styles.joinLink} href={"#"}>
                join now
              </Link>
            </div>
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className={styles.mobileMenuBtn}
            >
              <MobileBtnIcon />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu showMenu={showMenu} closeMenuHanlder={closeMenuHanlder} />
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.blur}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
