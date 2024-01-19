import React from "react";
import styles from "./socials.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../components/icons";

const Socials = ({ bg }: { bg?: string }) => {
  return (
    <div
      className={`${styles.socials}`}
      style={{ background: bg ? bg : "#fafafa" }}
    >
      <div>
        <h2>Bandage</h2>
        <span>
          <FacebookIcon color="#23A6F0" />
          <InstagramIcon color="#23A6F0" />
          <TwitterIcon color="#23A6F0" />
        </span>
      </div>
    </div>
  );
};

export default Socials;
