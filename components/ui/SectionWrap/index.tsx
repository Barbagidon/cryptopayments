import React, { ReactNode } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

interface Props {
  className?: string;
  children: ReactNode;
  tag?: string;
}

const SectionWrap = ({ className, children, tag = "section" }: Props) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements;

  return (
    <CustomTag className={cn(styles.sectionWrap, className)}>
      {children}
    </CustomTag>
  );
};

export default SectionWrap;
