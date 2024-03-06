import React from "react";
import styles from "./styles.module.css";
import FooterTitle from "../FooterTitle";
import Image from "next/image";
import Link from "next/link";
import Arrow from "./icons/arrow";
import Inst from "./icons/inst";
import Face from "./icons/face";
import Tlg from "./icons/tlg";
import Linked from "./icons/linked";

const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles.supportBlock}>
        <FooterTitle>Support:</FooterTitle>
        <Link
          className={styles.link}
          prefetch={false}
          href={"mailto:support@cryptopayments.com"}
        >
          support@cryptopayments.com
        </Link>
        <div className={styles.logo}>
          <Image
            src={"/footerSocialBg.png"}
            alt="'logo"
            width={74}
            height={74}
          />
        </div>
        <Arrow className={styles.arrow} />
      </div>
      <div className={styles.iconsLinks}>
        <Link className={styles.link} href={"#"}>
          <Inst />
        </Link>
        <Link className={styles.link} href={"#"}>
          <Face />
        </Link>
        <Link className={styles.link} href={"#"}>
          <Tlg />
        </Link>
        <Link className={styles.link} href={"#"}>
          <Linked />
        </Link>
      </div>
    </div>
  );
};

export default Social;
