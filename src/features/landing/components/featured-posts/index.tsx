import React from "react";
import styles from "./featured-posts.module.css";
import SectionTitles from "../../../../components/section-titles";
import featuredPostOne from "../../../../assets/images/featured-post-one.png";
import featuredPostTwo from "../../../../assets/images/featured-post-two.png";
import featuredPostThree from "../../../../assets/images/featured-post-three.png";
import ProfilePic from "../../../../assets/images/profile.png";
import Rating from "../../../../assets/images/ratings.png";
import AboutImage from "../../../../assets/images/abou-image.png";

import Image from "next/image";
import {
  CaretRightIcon,
  CommentsIcon,
  DateIcon,
} from "../../../../components/icons";

function FeaturedPosts() {
  const featuredPostsData = [
    {
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: featuredPostOne,
      date: "22 April 2021",
      comment: "10 comments",
    },
    {
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: featuredPostTwo,
      date: "22 April 2021",
      comment: "10 comments",
    },
    {
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image: featuredPostThree,
      date: "22 April 2021",
      comment: "10 comments",
    },
  ];

  return (
    <div className={`wrapper`}>
      <SectionTitles
        titleOne="Practice Advice"
        titleTwo="Featured Posts"
        blueTitle={true}
      />
      <div className={styles.featuredPosts_wrap}>
        {featuredPostsData.map((featuredPostsData, idx) => (
          <div key={idx} className={styles.featuredPosts}>
            <div className={styles.image_wrap}>
              <Image
                src={featuredPostsData.image}
                alt={featuredPostsData.title}
                className={styles.image}
                width={272}
                height={272}
              />
              <div className={styles.overlay}>
                <span>NEW</span>
              </div>
            </div>
            <div className={styles.contents}>
              <div className={styles.tags}>
                <span>Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>
              <h3 style={{ marginBottom: "1rem" }}>
                {featuredPostsData.title}
              </h3>
              <p>{featuredPostsData.description}</p>
              <div className={styles.date_wrap}>
                <span>
                  <DateIcon /> {featuredPostsData.date}
                </span>
                <span>
                  <CommentsIcon /> {featuredPostsData.comment}
                </span>
              </div>
              <button>
                Learn More <CaretRightIcon />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.about_us}>
        <div className={styles.box_one}>
          <h2>What they say about us</h2>
          <Image
            src={ProfilePic}
            alt="profile pic"
            className={styles.profile_pic}
            width={90}
            height={90}
          />
          <Image src={Rating} alt="rating" width={130} height={22} />

          <div>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <p>Regina Miles</p>
            <p>Designer</p>
          </div>
        </div>
        <div>
          <Image
            src={AboutImage}
            alt="About us"
            className={styles.img}
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedPosts;
