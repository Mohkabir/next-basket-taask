"use client";
import React from "react";
import styles from "./hero-section-product-details.module.css";
import RatingImage from "../../../../assets/images/ratings.png";

import Image from "next/image";
import Link from "next/link";
import {
  CaretRightIcon,
  CartIcon,
  LoveIcon,
  WatchIcon,
} from "@/components/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "@/global-state/cart-slice";
import { addTowatchlist } from "@/global-state/watchlist-slice";
import { commaFormatted } from "@/components/utils";

const HeroSection = ({
  productDetails,
  loading,
}: {
  productDetails: any;
  loading: boolean;
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.heroSection}>
      <div className={styles.wrap}>
        <div className={styles.page_route}>
          <Link href="/">Home</Link> <CaretRightIcon color="#BDBDBD" />
          <span>Shop</span>
        </div>
        <div>
          <div className={styles.box_one}>
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Image
                  src={productDetails?.thumbnail}
                  alt="Description of the image"
                  className={styles.image}
                  width={500}
                  height={500}
                />
              )}
            </div>
            <div className={styles.image_group}>
              {loading && <p>Loading...</p>}
              {!loading &&
                productDetails &&
                productDetails?.images
                  .slice(0, 5)
                  .map((image: string, idx: number) => (
                    <Image
                      key={idx}
                      src={image}
                      alt="Description of the image"
                      className={styles.image}
                      width={300}
                      height={300}
                    />
                  ))}
            </div>
          </div>
          <div className={styles.box_two}>
            <h3>Floating Phone</h3>
            <div className={styles.reviews}>
              <Image
                src={RatingImage}
                alt="Description of the image"
                className={styles.image}
                height={22}
                width={130}
              />
              <span>10 Reviews</span>
            </div>
            <h2>${commaFormatted(productDetails?.price)}</h2>
            <p>
              <span>Availability : </span>
              <span>In Stock </span>
            </p>
            <div className={styles.colors}>
              <div className={styles.color_group}>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
              </div>
            </div>
            <div className={styles.action_wrap}>
              <div>
                <button className={styles.btn}>Select Options</button>
              </div>
              <button
                className={styles.actions}
                onClick={() => dispatch(addTowatchlist(productDetails))}
              >
                <LoveIcon color="#000000" />
              </button>
              <button
                className={styles.actions}
                onClick={() => dispatch(addToCart(productDetails))}
              >
                <CartIcon color="#000000" />
              </button>
              <button
                className={styles.actions}
                onClick={() => dispatch(addTowatchlist(productDetails))}
              >
                <WatchIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
