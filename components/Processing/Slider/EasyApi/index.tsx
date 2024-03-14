import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import cn from "classnames";
import SlideBackings from "../SlideBackings";

interface Props extends React.HTMLProps<HTMLDivElement> {}
const EasyApi = ({ ...props }: Props) => {
  return (
    <div {...props} className={cn(styles.easyApi, props.className)}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.title}>
            <span className={styles.titleText}>Easy API integration</span>
          </div>
          <div className={styles.bottomText}>
            A Fully-Featured API Platform At Your Fingertips. We offer a
            full-featured platform for providing essential crypto services to
            your clients in a highly sophisticated and detailed way.
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
        <Image
          className={styles.imageTablet}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/easyApiTablet.png"}
          alt={"easy api"}
          unoptimized
          quality={100}
        />

        <Image
          className={styles.imageMob}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/easyApiMob.png"}
          alt={"easy api"}
          unoptimized
          quality={100}
        />

        <Image
          className={styles.imageLittle}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/easyApiLittle.png"}
          alt={"easy api"}
          unoptimized
          quality={100}
        />
      </div>
      <SlideBackings slideNum={2} />
    </div>
  );
};

export default EasyApi;
