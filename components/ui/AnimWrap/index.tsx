"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const AnimWrap = ({ children, className }: Props) => {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.85 }}
    >
      {children}
    </motion.main>
  );
};

export default AnimWrap;
