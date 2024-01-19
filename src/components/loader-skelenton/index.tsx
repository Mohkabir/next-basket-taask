import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import styles from "./loader-skelenton.module.css";

export default function LoaderSkelenton() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10];

  return (
    <div className={styles.flex}>
      {arr.map((_, idx) => (
        <div key={idx} className={styles.card}>
          <Skeleton variant="rectangular" width={200} height={340} />
        </div>
      ))}
    </div>
  );
}
