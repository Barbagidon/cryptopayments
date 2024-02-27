import React from "react";
import styles from "./styles.module.css";
import Card from "./Card";

const CardList = () => {
  const cardData = [
    {
      title: "CRYPTO WALLETS",
      descr: "Securely store cryptocurrencies in one safety place",
    },
    {
      title: "CRYPTO PROCESSING",
      descr:
        "Get payed & receive crypto payments instantly directly to your wallet",
    },
    {
      title: "B2B EXCHANGE",
      descr: "Exchange Crypto and settle to Your Bank Account",
    },
  ];

  return (
    <div className={styles.cardList}>
      {cardData.map((card, i) => {
        return <Card cardData={card} key={i} />;
      })}
    </div>
  );
};

export default CardList;
