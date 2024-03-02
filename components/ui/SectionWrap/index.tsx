import React, { ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

interface Props {
  className?: string;
  children: ReactNode;
}

const SectionWrap = ({ className, children }: Props) => {
  return (
    <section className={cn(styles.sectionWrap, className)}>{children}</section>
  );
};

export default SectionWrap;
