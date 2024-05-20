import React from "react";
import styles from "./styles.module.css";
import SupportBlock from "./SupportBlock";
import Link from "next/link";
import Inst from "./icons/inst";
import Face from "./icons/face";
import Tlg from "./icons/tlg";
import Linked from "./icons/linked";
import { getContacts } from "@/actions/getContacts";

const Social = async () => {


  const {
    attributes: { email, Instagram, LinkedIn, facebook, telegram },
  } = await getContacts();

  return (
    <div className={styles.social}>
      <Link prefetch={false} href={`mailto:${email}`}>
        <SupportBlock />
      </Link>
      <div className={styles.iconsLinks}>
        <Link className={styles.link} href={Instagram}>
          <Inst />
        </Link>
        <Link className={styles.link} href={facebook}>
          <Face />
        </Link>
        <Link className={styles.link} href={telegram}>
          <Tlg />
        </Link>
        <Link className={styles.link} href={LinkedIn}>
          <Linked />
        </Link>
      </div>
    </div>
  );
};

export default Social;
