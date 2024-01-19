import React from "react";
import styles from "./watchlist.module.css";
import Image from "next/image";
import { IProduct } from "@/interface";

interface CardProps {
  item: IProduct;
  onRemoveFromWatchlist: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ item, onRemoveFromWatchlist }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image_wrap}>
        <Image
          src={item?.thumbnail}
          className={styles.image}
          alt={item.title}
          width={150}
          height={150}
        />
      </div>
      <div className={styles.contents}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p className={styles.prices}>
          <span>
            <span className={styles.bold}>Former price:</span> $
            {item.discountPercentage}
          </span>
        </p>
        <p className={styles.prices}>
          <span>
            <span className={styles.bold}>Price:</span>{" "}
            <span style={{ color: "#23856D !important", fontWeight: "700" }}>
              ${item.price}
            </span>
          </span>
        </p>
        <button
          className={styles.removeButton}
          onClick={() => onRemoveFromWatchlist(item.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Card;
