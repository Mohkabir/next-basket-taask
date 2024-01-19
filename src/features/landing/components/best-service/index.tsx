import React from "react";
import styles from "./best-service.module.css";
import SectionTitles from "../../../../components/section-titles";
import ServiceOne from "../../../../assets/images/service-one.png";
import ServiceTwo from "../../../../assets/images/service-two.png";
import ServiceThree from "../../../../assets/images/service-three.png";
import Image from "next/image";

function BestService() {
  const servicesData = [
    {
      title: "Easy Wins",
      description: "Get your best looking smile now!",
      image: ServiceOne,
    },
    {
      title: "Concrete",
      description:
        "Defalcate is most focused in helping you discover your most beautiful smile",
      image: ServiceTwo,
    },
    {
      title: "Hack Growth",
      description: "Overcame any hurdle or any other problem.",
      image: ServiceThree,
    },
  ];

  return (
    <div className={`wrapper`}>
      <SectionTitles
        titleOne="Featured Products"
        titleTwo="THE BEST SERVICES"
        titleThree="Problems trying to resolve the conflict between "
      />
      <div className={styles.service_wrap}>
        {servicesData.map((serviceData, idx) => (
          <div key={idx} className={styles.service}>
            <div className={styles.image_wrap}>
              <Image
                src={serviceData.image}
                alt={serviceData.title}
                className={styles.image}
                width={72}
                height={72}
              />
            </div>
            <div className={styles.contents}>
              <h4>{serviceData.title}</h4>
              <p>{serviceData.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestService;
