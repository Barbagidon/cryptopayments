import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import cn from "classnames";

interface Props extends React.HTMLProps<HTMLDivElement> {}
const EasyApi = ({ ...props }: Props) => {
  return (
    <div {...props} className={cn(styles.easyApi, props.className)}>
      <div className={styles.textContent}>
        <div className={styles.title}>Easy API integration</div>
        <div className={styles.bottomText}>
          A Fully-Featured API Platform At Your Fingertips. We offer a
          full-featured platform for providing essential crypto services to your
          clients in a highly sophisticated and detailed way.
        </div>
      </div>
      <div className={styles.divider} />
      <Image
        className={styles.image}
        sizes="100vw"
        width={0}
        height={0}
        src={"/processing/easyApi.png"}
        alt={"easy api"}
        unoptimized
        quality={100}
      />
    </div>
  );
};

export default EasyApi;
