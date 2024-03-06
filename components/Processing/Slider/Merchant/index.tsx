import React, { Fragment } from "react";
import styles from "./styles.module.css";
import AdvItem from "../AdvItem";
import Image from "next/image";
import cn from "classnames";

const config = [
  "Permission levels for your team",
  "Complete all data that you need in one form",
  "Two-factor authentication",
  "Deposit, withdraw and payout",
  "Transaction export",
];

interface Props extends React.HTMLProps<HTMLDivElement> {}
const Merchant = ({ className, ...props }: Props) => {
  return (
    <div {...props} className={cn(styles.merchant, className)}>
      <div className={styles.header}>
        <div className={styles.leftText}>
          <div className={styles.title}>Merchant Account</div>
          <div className={styles.subTitle}>Just try it yourself.</div>
        </div>
        <div className={styles.rightText}>
          You can easily track each transaction and verify all data in your
          account. Our designers made this process simple.
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.list}>
          {config.map((item, i) => {
            return (
              <Fragment key={i}>
                <AdvItem
                  item={{
                    title: item,
                  }}
                />
                {i !== config.length - 1 && <div className={styles.divider} />}
              </Fragment>
            );
          })}
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
    </div>
  );
};

export default Merchant;
