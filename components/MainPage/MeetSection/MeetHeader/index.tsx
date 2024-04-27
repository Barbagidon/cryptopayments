"use client";
import React, { useRef } from "react";
import styles from "../styles.module.css";

import cn from "classnames";
import { useInView } from "framer-motion";


const MeetHeader = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <div ref={containerRef}>
            <h2 className={cn(styles.title, {
                [styles.title_active]: isInView,
            })}>where to meet us in 2024</h2>

        </div>
    );
};

export default MeetHeader;