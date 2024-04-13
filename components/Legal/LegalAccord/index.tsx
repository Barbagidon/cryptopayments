"use client";

import React, { useState } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import FaqItem from "./AccordItem";
import { IAccordeonData } from "@/components/Legal/types";
import AccordItem from "./AccordItem";
import { IAccordItem } from "./AccordItem/types";

interface Props {
  className?: string;
  data: IAccordItem[];
}

const LegalAccord = ({ className, data }: Props) => {
  return (
    <ul className={cn(styles.faqList, className)}>
      {data.map((item, i) => {
        return <AccordItem key={i} data={item} />;
      })}
    </ul>
  );
};

export default LegalAccord;
