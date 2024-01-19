"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import {
  CartIcon,
  LoveIcon,
  MenuIcon,
  ProfileIcon,
  SearchIcon,
} from "../icons";
import { useSelector } from "react-redux";
import { RootState } from "@/global-state/store";

const Header = () => {
  const { carts, watchlists } = useSelector((state: RootState) => state);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`container ${styles.header}`}>
      <div>
        <Link href="/" style={{ textDecoration: "none" }}>
          <h2>Bandage</h2>
        </Link>

        <div className={styles.menu_box}>
          <span>
            <SearchIcon color="#000000" />
          </span>
          <span>
            <Link href="/cart">
              <CartIcon color="#000000" />
              <span>{carts.totalQuantity}</span>
            </Link>
          </span>
          <span>
            <Link href="/watchlist">
              <LoveIcon color="#000000" />
              {watchlists.totalQuantity}
            </Link>
          </span>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon />
          </button>
        </div>
      </div>
      <nav
        className={`${styles.nav} ${
          menuOpen ? styles.menu_open : styles.menu_close
        }`}
      >
        <div className={styles.box_one}>
          <Link href="/">Home</Link>
          <Link href="">Shop</Link>
          <Link href="">About</Link>
          <Link href="">Blog</Link>
          <Link href="">Contant</Link>
          <Link href="">Pages</Link>
        </div>
        <div className={styles.box_two}>
          <span>
            <span>
              <ProfileIcon />
              <span style={{ marginLeft: "5px" }}>Login / Register</span>
            </span>
            <span>
              <SearchIcon />
            </span>
            <span>
              <Link href="/cart">
                <CartIcon />
                {carts.totalQuantity}
              </Link>
            </span>
            <span>
              <Link href="/watchlist">
                <LoveIcon />
                {watchlists.totalQuantity}
              </Link>
            </span>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
