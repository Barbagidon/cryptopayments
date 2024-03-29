import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ArrowIcon from "./icons/arrowIcon";
import CaterogyBage from "../CategoryBage";
import DateBage from "../DateBage";
import Link from "next/link";

interface Props {
  cardData: {
    title: string;
    image: string;
    id: number;
  };
}

const Card = ({ cardData }: Props) => {
  const { id, image, title } = cardData;

  return (
    <Link className={styles.card} href={`/blog/${id}`}>
      <div>
        <div className={styles.info}>
          <div className={styles.header}>
            <CaterogyBage />
            <DateBage />
          </div>

          <div className={styles.textInfo}>{title}</div>
        </div>
        <Image
          className={styles.cardImage}
          width="0"
          height="0"
          sizes="100vw"
          alt={"card image"}
          src={image}
        />
        <div className={styles.linkBtn}>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
};

export default Card;
