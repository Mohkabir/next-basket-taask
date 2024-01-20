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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/global-state/store";
import { searchProductDetails } from "@/services/api";
import { addSearchResult } from "@/global-state/search-slice";
import Dropdown from "../dropdown";

const Header = () => {
  const { carts, watchlists, search } = useSelector(
    (state: RootState) => state
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const dispatch = useDispatch();
  console.log(search, "search");
  useEffect(() => {
    const searchProduct = async () => {
      if (search) {
        try {
          const data = await searchProductDetails(searchData as string);
          dispatch(addSearchResult({ search: data.products }));
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };
    searchProduct();
  }, [searchData]);

  return (
    <div style={{ position: "relative" }}>
      <header className={`container ${styles.header}`}>
        <div>
          <Link href="/" style={{ textDecoration: "none" }}>
            <h2>Bandage</h2>
          </Link>

          <div className={styles.menu_box}>
            <span style={{ position: "relative" }}>
              <button
                onClick={() => setSearchOpen(true)}
                style={{ border: "none", background: "none" }}
              >
                <SearchIcon color="#000000" />
              </button>
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
                <button
                  onClick={() => setSearchOpen(true)}
                  style={{ border: "none", background: "none" }}
                >
                  <SearchIcon />
                </button>
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

        <Dropdown
          search={search}
          setSearchData={setSearchData}
          searchData={searchData}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
        />
      </header>
    </div>
  );
};

export default Header;
