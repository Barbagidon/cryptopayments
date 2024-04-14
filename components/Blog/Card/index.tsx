import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ArrowIcon from "./icons/arrowIcon";
import CaterogyBage from "../CategoryBage";
import DateBage from "../DateBage";
import Link from "next/link";
import { IArticle } from "../types";
import { getImageSrc } from "@/utils/getImageSrc";

interface Props {
  cardData: IArticle;
}

const Card = ({ cardData }: Props) => {
  const {
    id,
    attributes: { img, type, title, date },
  } = cardData;

  const imgSrc = img.data[0].attributes.url;

  return (
    <Link className={styles.card} href={`/blog/${id}`}>
      <div>
        <div className={styles.info}>
          <div className={styles.header}>
            <CaterogyBage category={type} />
            <DateBage date={date} />
          </div>

          <div className={styles.textInfo}>{title}</div>
        </div>
        <Image
          className={styles.cardImage}
          width={397}
          height={122}
          sizes="100vw"
          alt={"card image"}
          src={getImageSrc(imgSrc)}
          priority
        />
        <div className={styles.linkBtn}>
          <ArrowIcon />
        </div>
      </div>
    </Link>
  );
};

export default Card;
