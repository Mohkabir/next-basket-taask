import React from "react";
import BrandOne from "../../../../assets/images/brand-one.png";
import BrandTwo from "../../../../assets/images/brand-two.png";
import BrandThree from "../../../../assets/images/brand-three.png";
import BrandFour from "../../../../assets/images/brand-four.png";
import BrandFive from "../../../../assets/images/brand-five.png";
import BrandSix from "../../../../assets/images/brand-six.png";
import styles from "./brands.module.css";
import Image from "next/image";

const Brands = () => {
  return (
    <div className={`wrapper ${styles.brands}`}>
      <span>
        <Image src={BrandOne} alt="hooli logo" />
      </span>
      <span>
        <Image src={BrandTwo} alt="lya" />
      </span>
      <span>
        <Image src={BrandThree} alt="brand logo" />
      </span>
      <span>
        <Image src={BrandFour} alt="stripe logo" />
      </span>
      <span>
        <Image src={BrandFive} alt=" aws logo" />
      </span>
      <span>
        <Image src={BrandSix} alt="brand logo" />
      </span>
    </div>
  );
};

export default Brands;
