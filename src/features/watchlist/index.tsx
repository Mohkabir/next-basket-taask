"use client";

import React from "react";
import styles from "./watchlist.module.css";
import { RootState } from "@/global-state/store";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card";
import { removeFromwatchlist } from "@/global-state/watchlist-slice";

const Watchlist = () => {
  const dispatch = useDispatch();

  const watchlists = useSelector(
    (state: RootState) => state.watchlists
  ).watchlist;

  return (
    <div className={`wrapper ${styles.container}`}>
      <h2>Shopping Watchlist ({watchlists.length})</h2>
      <div className={styles.card_wrap}>
        {watchlists &&
          watchlists?.map((watchlistItem) => (
            <Card
              item={watchlistItem}
              onRemoveFromWatchlist={(id: number) => {
                dispatch(removeFromwatchlist(id));
              }}
            />
          ))}
        {watchlists.length < 1 && (
          <div className={styles.empty}>
            <h3>Your watchlist is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
