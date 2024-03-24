import React from "react";
import styles from "./styles.module.css";

const filters = ["All", "Events", "News", "Explainers", "Articles"];

const Filters = () => {
  return (
    <div className={styles.filters}>
      {filters.map((filter, i) => {
        return (
          <div key={i} className={styles.filterItem}>
            {filter}
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
