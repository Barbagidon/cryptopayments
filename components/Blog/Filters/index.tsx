import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

const filters = ["All", "Events", "News", "Explainers", "Articles"];

const Filters = () => {
  return (
    <div
      style={{
        overflowX: "auto",
      }}
      className={cn(styles.filters, "hideScroll")}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minWidth: 630,
          gap: 16,
        }}
      >
        {filters.map((filter, i) => {
          return (
            <div key={i} className={styles.filterItem}>
              {filter}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
