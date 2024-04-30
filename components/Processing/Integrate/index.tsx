"use client";
import SectionWrap from "@/components/ui/SectionWrap";
import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.css";
import IntegrateCard from "./IntegrateCard";
import CircleBg from "./icons/circleBg";
import TriangeIcon from "./icons/triangeIcon";
import CircleText from "./icons/circleText";
import UsdtIcon from "./icons/usdtIcon";
import { useInView } from "framer-motion";
import cn from "classnames";

const cardConfig = [
  {
    title: "One click solution",
    descr:
      "Save time. Widget is quick and easy to integrate, and you won't have to involve those tech guys.",
  },
  {
    title: "Restful API Architecture",
    descr:
      "Our API Developer Portal is packed with all the documentation and additional support you need to get started.",
  },
  {
    title: "Track customers",
    descr:
      "All cardholder data in real time to monitor and manage everything going on in the sandbox.",
  },
];

const Integrate = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.45,
  });

  const [visibleCardNum, setVisibleCardNum] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInView && visibleCardNum < cardConfig.length - 1) {
      intervalId = setInterval(() => {
        setVisibleCardNum((prev) => prev + 1);
      }, 800);
    }

    return () => clearInterval(intervalId);
  }, [isInView, visibleCardNum]);

  return (
    <SectionWrap className={styles.integrate}>
      <div ref={containerRef} className={styles.content}>
        <div className={cn(styles.titleWrap, { [styles.titleAnim]: isInView })}>
          <h2>
            <span className={styles.titleText}>Integrate</span>
            <TriangeIcon className={styles.triangleIcon} />
          </h2>
        </div>
        <span className={cn(styles.subTitle, { [styles.titleAnim]: isInView })}>
          how you prefer
        </span>
        <div className={styles.cardList}>
          {cardConfig.map((card, i) => {
            return (
              <IntegrateCard
                className={cn(styles.integrateCard, {
                  [styles.visibleCard]: visibleCardNum >= i,
                })}
                card={card}
                key={i}
              />
            );
          })}
        </div>
        <CircleText
          className={cn(styles.circleText, {
            [styles.circleTextAnim]:
              isInView && visibleCardNum !== cardConfig.length - 1,
            [styles.circleTextAnim1]: visibleCardNum === 1,
          })}
        />
        <UsdtIcon
          className={cn(styles.usdtIcon, { [styles.usdtIconAnim]: isInView })}
        />
      </div>
      <CircleBg
        className={cn(styles.circleBg, {
          [styles.circleBgAnim1]: visibleCardNum === 1,
          [styles.circleBgAnim2]: visibleCardNum === 2,
        })}
      />
    </SectionWrap>
  );
};

export default Integrate;
