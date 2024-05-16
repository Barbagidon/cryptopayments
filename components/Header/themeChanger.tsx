"use client";

import { useTheme } from "@/stores/useTheme";

const ThemeChanger = () => {
  const setTheme = useTheme((state) => state.setTheme);

  return (
    <div>
      <button
        onClick={() => {
          const html = document.querySelector("html");
          if (html) {
            setTheme(html.dataset.theme === "light" ? "dark" : "light");
            html.dataset.theme =
              html.dataset.theme === "light" ? "dark" : "light";
          }
        }}
      >
        change
      </button>
    </div>
  );
};

export default ThemeChanger;
