import React, { FC } from "react";
import styles from "./product-containers.module.css";
import Image from "next/image";
import Link from "next/link";
import LoaderSkelenton from "../loader-skelenton";

export interface IProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  formerPrice: string;
  price: string;
  thumbnail: string;
  discountPercentage: string;
}

interface ProductContainersProps {
  products: IProduct[];
  loadMore?: boolean;
  loading?: boolean;
  handleMore?: () => void;
}

const ProductContainers: FC<ProductContainersProps> = ({
  products,
  loadMore,
  loading,
  handleMore,
}) => {
  return (
    <>
      <div className={`wrapper ${styles.products}`}>
        {products &&
          products.map((product, idx) => (
            <div key={idx} className={styles.product}>
              <Link href={`/shop/${product.id}`}>
                <div className={styles.image_wrap}>
                  <Image
                    src={product.thumbnail}
                    className={styles.image}
                    alt={product.title}
                    width={183}
                    height={238}
                  />
                </div>
                <div className={styles.contents}>
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p className={styles.prices}>
                    <span>${product.discountPercentage}</span>
                    {""}
                    <span>${product.price}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        {loading && <LoaderSkelenton />}
      </div>
      {loadMore && (
        <button className={styles.btn} onClick={handleMore}>
          LOAD MORE PRODUCTS
        </button>
      )}
    </>
  );
};

export default ProductContainers;
