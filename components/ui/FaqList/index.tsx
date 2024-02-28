"use client";

import React, { useState } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import Arrow from "./icons/arrow";
import { AnimatePresence, motion } from "framer-motion";
import { IFaqItem } from "./types";
import FaqItem from "./FaqItem";

interface Props {
  className?: string;
  data: IFaqItem[];
}

const FaqList = ({ className, data }: Props) => {
  return (
    <ul className={cn(styles.faqList, className)}>
      {data.map((item, i) => {
        return <FaqItem key={i} data={item} />;
      })}
    </ul>
  );
};

export default FaqList;
