"use client";
"use client";

import React from "react";
import styles from "./success.module.css";
import Link from "next/link";

const Success = () => {
  return (
    <div className="wrapper">
      <div className={styles.success}>
        <h2>Success</h2>
        <p>go home to shop more</p>
        <Link href="/">
          <button>Shop more</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
