"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Theme = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Theme;
