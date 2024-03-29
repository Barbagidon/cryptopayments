import React from "react";
import styles from "./styles.module.css";
import cn from "classnames";

const filters = ["All", "Events", "News", "Explainers", "Articles"];

const Filters = () => {
  return (
    <div className={cn(styles.filters, "hideScroll")}>
      <div className={styles.filtersWrap}>
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
