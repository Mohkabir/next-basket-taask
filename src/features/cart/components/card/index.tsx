import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import Image from "next/image";
import { ICart } from "@/interface";
import { commaFormatted } from "@/components/utils";

interface CardProps {
  item: ICart;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  item,
  onUpdateQuantity,
  onRemoveFromCart,
}) => {
  const [inputQuantity, setinputQuantity] = useState(item.quantity);

  useEffect(() => {
    if (inputQuantity < 1) {
      setinputQuantity(1);
    } else {
      onUpdateQuantity(item.id, inputQuantity);
    }
  }, [inputQuantity]);

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
          <span style={{ color: "#23856D !important", fontWeight: "700" }}>
            <span className={styles.bold}> Price:</span> $
            {commaFormatted(item.price)}
          </span>
        </p>

        <div className={styles.quantity}>
          <span className={styles.bold}> Quantity:</span>
          <button
            onClick={(e) => {
              setinputQuantity(inputQuantity + 1);
            }}
          >
            +
          </button>
          <input
            type="number"
            value={inputQuantity}
            onChange={(e) => setinputQuantity(+e.target.value)}
          />
          <button
            onClick={(e) => {
              setinputQuantity(inputQuantity - 1);
            }}
          >
            -
          </button>
          <button
            className={styles.removeButton}
            onClick={() => onRemoveFromCart(item.id)}
          >
            x
          </button>
        </div>
        <span style={{ color: "#23856D !important", fontWeight: "700" }}>
          <span className={styles.bold}> Total:</span> $
          {commaFormatted(item.price * item.quantity)}
        </span>
      </div>
    </div>
  );
};

export default Card;
