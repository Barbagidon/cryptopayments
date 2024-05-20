"use client";

import { useTheme } from "@/stores/useTheme";
import styles from "./styles.module.css";
import SunIcon from "./icons/sunIcon";
import { motion } from "framer-motion";
import cn from "classnames";
import MoonIcon from "./icons/moonIcon";

const ThemeChanger = () => {
  const setTheme = useTheme((state) => state.setTheme);
  const theme = useTheme((state) => state.theme);

  return (
    <motion.div
      onClick={() => {
        const html = document.querySelector("html");
        if (html) {
          setTheme(html.dataset.theme === "light" ? "dark" : "light");
          html.dataset.theme =
            html.dataset.theme === "light" ? "dark" : "light";
        }
      }}
      className={cn(styles.themeChanger, {
        [styles.darkTheme]: theme === "dark",
      })}
    >
      <motion.button
        layout
        className={cn(styles.btn, { [styles.darkThemeBtn]: theme === "dark" })}
      >
        {theme === "dark" && <MoonIcon />}
        {theme === "light" && <SunIcon />}
      </motion.button>
    </motion.div>
  );
};

export default ThemeChanger;
