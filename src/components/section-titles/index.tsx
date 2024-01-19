import React, { FC } from "react";
import styles from "./section-titles.module.css";

interface SectionTitlesProps {
  titleOne?: string;
  titleTwo?: string;
  titleThree?: string;
  blueTitle?: boolean;
}

const SectionTitles: FC<SectionTitlesProps> = ({
  titleOne,
  titleTwo,
  titleThree,
  blueTitle,
}) => {
  return (
    <div className={styles.wrap}>
      <h3
        style={{
          color: blueTitle ? "#23A6F0" : "#737373",
          fontWeight: blueTitle ? "700" : "400",
          fontSize: blueTitle ? "14px" : "20px",
        }}
      >
        {titleOne}
      </h3>
      <h2
        style={{
          fontSize: blueTitle ? "40px" : "24px",
        }}
      >
        {titleTwo}
      </h2>
      <p>{titleThree}</p>
    </div>
  );
};

export default SectionTitles;
