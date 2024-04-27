"use client";
import React, { useRef } from "react";
import styles from "../styles.module.css";

import cn from "classnames";
import { useInView } from "framer-motion";


const FaqHeader = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <div ref={containerRef}>
            <div className={cn(styles.header, {
                [styles.header_active]: isInView,
            })}>
                <h2 className={styles.title}>FAQ</h2>
                <span className={styles.subTitle}>
                    Everything you need to know about the product
                </span>
            </div>
        </div>
    );
};

export default FaqHeader;