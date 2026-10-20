import ButtonLink from "../Button";
import Image from "../Image";
import styles from "./FeatureSection.module.css";

const FeatureSection = ({
  featureLabel = "Feature Label",
  featureTitle = "Feature Title",
  featureCopy = "Feature Copy here",
  cta = { label: "Click the button", href: "#", variant: "secondary" }
}) => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.featureSectionContainer}>
        <div className={styles.feature}>
          <p className={styles.featureLabel}>{featureLabel}</p>
          <h2>{featureTitle}</h2>
          <p>{featureCopy}</p>
          <ButtonLink {...cta} />
        </div>
        <div className={styles.featureImage}>
          <Image id="aboutTeam" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
