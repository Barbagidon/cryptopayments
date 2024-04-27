

"use client";
import React, { useRef } from "react";
import BigCircle from "@/components/ui/BigCircle";
import styles from "../styles.module.css";

import cn from "classnames";
import { useInView } from "framer-motion";


const FaqGear = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <div ref={containerRef}>
            <BigCircle className={cn(styles.animeBigCircle, { [styles.animeBigCircle_active]: isInView })} />
        </div>
    );
};

export default FaqGear;