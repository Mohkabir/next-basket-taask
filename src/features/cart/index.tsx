"use client";
import React from "react";
import styles from "./cart.module.css";
import { RootState } from "@/global-state/store";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card";
import { commaFormatted } from "@/components/utils";
import {
  removeFromCart,
  resetCart,
  updateCartItemQuantity,
} from "@/global-state/cart-slice";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state: RootState) => state.carts);

  return (
    <div className={`wrapper ${styles.container}`}>
      <h2>Shopping Cart ({carts.cart.length})</h2>
      <div className={styles.card_wrap}>
        {carts &&
          carts?.cart?.map((cartItem) => (
            <Card
              item={cartItem}
              onUpdateQuantity={(id: number, quantity: number) => {
                dispatch(updateCartItemQuantity({ id, quantity }));
              }}
              onRemoveFromCart={(id: number) => {
                dispatch(removeFromCart(id));
              }}
            />
          ))}
        {carts.cart.length < 1 && (
          <div className={styles.empty}>
            <h3>Your cart is empty</h3>
          </div>
        )}
      </div>
      {carts?.cart.length > 0 && (
        <div className={styles.total}>
          <h3>
            {" "}
            Total:{" "}
            <span className={styles.bold}>
              ${commaFormatted(carts.totalAmount)}
            </span>
          </h3>
          <Link href="/success">
            <button onClick={() => dispatch(resetCart())}>Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
