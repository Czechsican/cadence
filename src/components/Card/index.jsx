import styles from "./Card.module.css";

const Card = (props) => {

  const {
    cardLabel = "Default Card Label",
    cardTitle = "Default Card Title",
    cardImg = {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=900&q=85",
      alt: "Default Image alt"
    },
    cardCopy = "Psychology-based coaching built for senior leaders navigating real pressure.",
    cardLink = {
      src: "https://www.google.com/",
      text: "Default Link Copy"
    }
  } = props;

  return (
    <div className={styles.card} key={cardTitle}>
      
      <div className={styles.cardImg}>
        <img src={cardImg.src} alt={cardImg.alt} />
      </div>
      <div className={styles.cardAccent}></div>

      <div className={styles.cardBody}>
        <div className={styles.cardLabel}>
          {cardLabel}
        </div>
        <h3 className={styles.cardTitle}>
          {cardTitle}
        </h3>
        <p>{cardCopy}</p>
        <a href={cardLink.src} className={styles.cardLink}>
          {cardLink.text}
        </a>
      </div>
    </div>
  );
};

export default Card;