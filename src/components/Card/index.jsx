import React from "react";
import styles from "./Card.module.css";
import Image from "../Image";

const Card = ({
  tall,
  cardLabel,
  cardTitle = "Default Card Title",
  cardImg = {
    id: "workspace",
    alt: "Default Image alt",
  },
  cardCopy = "Psychology-based coaching built for senior leaders navigating real pressure.",
  cardLink = {
    src: "/#",
    text: "Link Text",
  },
}) => {
  return (
    <div
      className={`${styles.card} ${tall ? styles.tall : ""}`}
      key={cardTitle}
    >
      <div className={styles.cardImg}>
        <Image id={cardImg.id} alt={cardImg.alt} />
      </div>
      <div className={styles.cardAccent}></div>

      <div className={styles.cardBody}>
        {cardLabel && <div className={styles.cardLabel}>{cardLabel}</div>}
        <h3 className={styles.cardTitle}>{cardTitle}</h3>
        <p>{cardCopy}</p>
        {cardLink.src && cardLink.text && (
          <a href={cardLink.src} className={styles.cardLink}>
            {cardLink.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
