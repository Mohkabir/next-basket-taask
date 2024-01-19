import React from "react";
import styles from "./contact-us.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons";

const ContactUs = () => {
  return (
    <address className={styles.address}>
      <div className="container">
        <div className={styles.flex}>
          <div>
            <span>
              <PhoneIcon />
              <a href="tel:+2255550118">(225) 555-0118</a>
            </span>
            <span className={styles.mail}>
              <MailIcon />
              <a href="mailto:michelle.rivera@example.com">
                <h5> michelle.rivera@example.com</h5>
              </a>
            </span>
          </div>
          <h5>Follow Us and get a chance to win 80% off</h5>
          <h5 className={styles.socials}>
            <span> Follow Us</span> <span style={{ marginLeft: "8px" }}>:</span>
            <span>
              <InstagramIcon color="#ffffff" /> <YoutubeIcon />{" "}
              <FacebookIcon color="#ffffff" />
              <TwitterIcon color="#ffffff" />
            </span>
          </h5>
        </div>
      </div>
    </address>
  );
};

export default ContactUs;
