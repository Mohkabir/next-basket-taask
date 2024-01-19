import React from "react";
import BgImage from "../../../../assets/images/problem-we-solve.png";
import styles from "./problem-we-solve.module.css";
import Image from "next/image";
import Socials from "@/components/socials";

const ProblemWeSolve = () => {
  return (
    <>
      <div className={styles.wrap}>
        <Image
          src={BgImage}
          alt="Description of the image"
          className={styles.image}
          width={1000}
          height={640}
        />
        <div className={styles.overlay}>
          <div>
            <span className={styles.blue_text}>
              Designing Better Experience
            </span>
            <h1>Problems trying to resolve the conflict between </h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
            </p>
            <span className={styles.price}>$16.48</span>
            <button>ADD YOUR CALL TO ACTION</button>
          </div>
        </div>
      </div>
      <Socials />
    </>
  );
};

export default ProblemWeSolve;
