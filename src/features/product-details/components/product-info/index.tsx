"use client";

import React, { useState } from "react";
import styles from "./product-info.module.css";
import infoImage from "../../../../assets/images/info-image.png";
import Image from "next/image";

const ProductInfo = () => {
  const [active, setActive] = useState(2);

  return (
    <div className={`wrapper ${styles.wrap}`}>
      <div className={styles.header}>
        <button
          onClick={() => setActive(1)}
          style={{ fontWeight: active === 1 ? "700" : "400" }}
        >
          Description
        </button>
        <button
          onClick={() => setActive(2)}
          style={{ fontWeight: active === 2 ? "700" : "400" }}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActive(3)}
          style={{ fontWeight: active === 3 ? "700" : "400" }}
        >
          Reviews <span style={{ color: "#23856D" }}>(0)</span>
        </button>
      </div>
      {active === 1 && (
        <div className={styles.additional_info}>
          <div className={styles.box_one}>
            <h2>Description</h2>
            <p>
              Color: <span>Black, Brown, Red</span>
            </p>
            <p>
              Size: <span>L, M, S</span>
            </p>
          </div>
        </div>
      )}
      {active === 2 && (
        <div className={styles.additional_info}>
          <div className={styles.box_one}>
            <h2>the quick fox jumps over </h2>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div>
            <Image
              src={infoImage}
              alt="the quick fox jumps over"
              className={styles.image}
            />
          </div>
        </div>
      )}
      {active === 3 && (
        <div className={styles.additional_info}>
          <div className={styles.box_one}>
            <h2>Reviews</h2>
            <p>There are no reviews yet.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
