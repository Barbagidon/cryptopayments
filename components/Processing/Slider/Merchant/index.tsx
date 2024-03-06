import React, { Fragment } from "react";
import styles from "./styles.module.css";
import AdvItem from "../AdvItem";
import Image from "next/image";
import cn from "classnames";

const config = [
  "Permission levels for your team",
  "Deposit, withdraw and payout",
  "Complete all data that you need in one form",

  "Transaction export",
  "Two-factor authentication",
];

interface Props extends React.HTMLProps<HTMLDivElement> {}
const Merchant = ({ className, ...props }: Props) => {
  return (
    <div {...props} className={cn(styles.merchant, className)}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>Merchant Account</div>
          <div className={styles.subTitle}>Just try it yourself.</div>
        </div>

        <div className={styles.text}>
          You can easily track each transaction and verify all data in your
          account. Our designers made this process simple.
        </div>

        <div className={styles.list}>
          {config.map((item, i) => {
            return (
              <Fragment key={i}>
                <AdvItem
                  className={styles.advItem}
                  item={{
                    title: item,
                  }}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
      <Image
        className={styles.image}
        sizes="100vw"
        width={0}
        height={0}
        src={"/processing/settingsPhone.png"}
        alt={"merchant account"}
        unoptimized
        quality={100}
      />
    </div>
  );
};

export default Merchant;
