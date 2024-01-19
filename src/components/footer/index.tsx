import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const footerData = [
    {
      title: "Company Info",
      links: [
        {
          name: "About us",
          link: "#",
        },
        {
          name: "Carrier",
          link: "#",
        },
        {
          name: "We are hiring",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          name: "About us",
          link: "#",
        },
        {
          name: "Carrier",
          link: "#",
        },
        {
          name: "We are hiring",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
      ],
    },
    {
      title: "Features",
      links: [
        {
          name: "Business Marketing",
          link: "#",
        },
        {
          name: "User Analytic",
          link: "#",
        },
        {
          name: "Live Chat",
          link: "#",
        },
        {
          name: "Unlimited Support",
          link: "#",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "IOS & Android",
          link: "#",
        },
        {
          name: "Watch a Demo",
          link: "#",
        },

        {
          name: "Customers",
          link: "#",
        },
        {
          name: "API",
          link: "#",
        },
      ],
    },
  ];
  return (
    <>
      <footer className="wrapper">
        <div className={styles.flex}>
          {footerData.map((footerData, idx) => (
            <div key={idx} className={styles.card}>
              <h4>{footerData.title}</h4>
              <div>
                {footerData.links.map((link, idx) => (
                  <a key={idx} href={link.link}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.card}>
            <h4>Get In Touch</h4>
            <div className={styles.get_in_touch}>
              <input type="text" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
            <p>Lore imp sum dolor Amit</p>
          </div>
        </div>
      </footer>
      <div className={styles.rights}>
        <div>
          <p>Made With Love By Finland All Right Reserved </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
