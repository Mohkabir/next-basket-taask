"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./dropdown.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { resetSearch } from "@/global-state/search-slice";

interface DropdownProps {
  search: any;
  searchData: string;
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobile?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  search,
  searchData,
  setSearchData,
  searchOpen,
  setSearchOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
        dispatch(resetSearch());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSearchOpen]);

  return (
    <div ref={dropdownRef} className={styles.mobile}>
      {searchOpen && (
        <>
          <input
            className={styles.searchInput}
            type="text"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <div className={styles.search}>
            {search &&
              search?.data?.map((item: any) => (
                <div key={item.id}>
                  <p
                    onClick={() => {
                      setSearchData("");
                      resetSearch();
                      setSearchOpen(false);
                    }}
                  >
                    <Link href={`/shop/${item.id}`}>{item.title}</Link>
                  </p>
                </div>
              ))}
            {search?.data.loader && <p>No result found</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
