import React from "react";
import styles from "./hero-section.module.css";
import CoverOne from "../../../../assets/images/card-cover-1.png";
import CoverTwo from "../../../../assets/images/card-cover-2.png";
import CoverThree from "../../../../assets/images/card-cover-3.png";
import CoverFour from "../../../../assets/images/card-cover-4.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const herorDatas = [
    {
      title: "FURNITURE",
      itemsCount: "5 Items",
      image: CoverOne,
    },
    {
      title: "FURNITURE",
      itemsCount: "5 Items",
      image: CoverTwo,
    },
    {
      title: "FURNITURE",
      itemsCount: "5 Items",
      image: CoverThree,
    },
    {
      title: "FURNITURE",
      itemsCount: "5 Items",
      image: CoverFour,
    },
  ];

  return (
    <div className={`wrapper ${styles.heroSection}`}>
      {herorDatas.map((herorData, idx) => (
        <div className={styles.card} key={idx}>
          <Image
            src={herorData.image}
            alt="Description of the image"
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <span>{herorData.itemsCount}</span>
            {idx === 0 ? (
              <h1>{herorData.title}</h1>
            ) : (
              <h2>{herorData.title}</h2>
            )}
            <Link href={"#"}>Read more</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
