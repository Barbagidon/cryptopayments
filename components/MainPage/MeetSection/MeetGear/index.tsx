"use client";
import React, { useRef } from "react";
import styles from "../styles.module.css";
import GearIcon from "../icons/gearIcon";

import cn from "classnames";
import { useInView } from "framer-motion";


const MeetGear = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });
    return (
        <div ref={containerRef}>
            <GearIcon className={cn(styles.gearIcon, {
                [styles.gearIcon_active]: isInView,
            })} />
        </div>
    );
};

export default MeetGear;