import React from "react";
import styles from "./styles.module.css";

import BtcIcon from "./icons/btcIcon";
import EthIcon from "./icons/ethIcon";
import UsdtIcon from "./icons/usdtIcon";
import AdvItem from "../AdvItem";
import Image from "next/image";
import cn from "classnames";
import SlideBackings from "../SlideBackings";

const icons = [
  {
    title: "btc",
    icon: <BtcIcon />,
  },
  {
    title: "eth",
    icon: <EthIcon />,
  },
  {
    title: "usdt",
    icon: <UsdtIcon />,
  },
];
interface Props extends React.HTMLProps<HTMLDivElement> {}

const Exchange = ({ ...props }: Props) => {
  return (
    <div {...props} className={cn(styles.exchange, props.className)}>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.title}>exchange</div>
          <div className={styles.mobTitle}>
            exchange
            <div className={cn(styles.coins)}>
              {icons.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={cn(styles.iconWrap, {
                      [styles.usdtIcon]: item.title === "usdt",
                    })}
                  >
                    {item.icon} {item.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={cn(styles.coins, styles.pcCoins)}>
            {icons.map((item, i) => {
              return (
                <div key={i} className={styles.iconWrap}>
                  {item.icon} {item.title}
                </div>
              );
            })}
          </div>

          <div className={styles.text}>
            Instant exchange between crypto and fiat currencies at the best
            market rates
          </div>

          <AdvItem
            className={styles.advItem}
            iconClassName={styles.advIcon}
            item={{
              descr:
                "Receive the best exchange rates in your CryptoPayments merchant account at any given time.",
              title: "Best exchange rates",
            }}
          />
        </div>
        <Image
          className={styles.image}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/topUp.png"}
          alt={"btc phone"}
          unoptimized
          quality={100}
        />

        <Image
          className={styles.imageTablet}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/topUpTablet.png"}
          alt={"btc phone"}
          unoptimized
        />
        <Image
          className={styles.imageMob}
          sizes="100vw"
          width={0}
          height={0}
          src={"/processing/topUpMobile.png"}
          alt={"btc phone"}
          unoptimized
        />
      </div>
      <SlideBackings slideNum={1} />
    </div>
  );
};

export default Exchange;
