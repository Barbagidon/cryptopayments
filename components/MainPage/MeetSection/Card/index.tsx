"use client";
import React, { useRef } from "react";
import styles from "./styles.module.css";
import cn from "classnames";
import { useInView } from "framer-motion";
import Arrow from "./icons/arrow";
import CalendarIcon from "./icons/calendarIcon";
import Image from "next/image";
import Link from "next/link";
import { IEventAttributes } from "./types";
import { getImageSrc } from "@/utils/getImageSrc"

interface Props {
  cardData: IEventAttributes;
}

const Card = ({ cardData }: Props) => {
  const { date, place, name, link, img } = cardData;
  const containerRef = useRef<HTMLLIElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const imgLink = getImageSrc(img.data.attributes.url);
  console.log(imgLink)
  return (
    <li ref={containerRef} className={styles.card}>
      <Link className={styles.link} prefetch={false} href={link}>
        <div className={styles.header}>
          <span className={styles.title}>{name}</span>
          <Arrow />
        </div>

        <div className={styles.info}>
          <div className={styles.textContent}>
            <div className={styles.calendar}>
              <CalendarIcon />
              <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.descr}>{place}</div>
          </div>
          <Image
            src={imgLink}
            width={349}
            height={120}
            sizes="100vw"
            alt="card image"
            className={styles.image}
            priority
          />
        </div>
      </Link>
    </li>
  );
};

export default Card;
