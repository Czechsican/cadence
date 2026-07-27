import styles from "./HeroSection.module.css";
import ButtonLink from "../Button";

const HeroSection = ({eyebrow}) => {
  return (
    <section className={styles.siteHero}>
      <div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyeBrow}>{eyebrow}</p>
          <h1>
            Most leadership development asks good questions. <br />
            <em>We take positions.</em>
          </h1>
          <p>
            Cadence works with senior leaders and the teams they're accountable
            for — coaching, developing, and assessing the people who carry
            organizations forward. We're built on a psychology-based approach
            that pushes people through real change, not around it.
          </p>
          <div className={styles.heroCtas}>
            <ButtonLink
              btnText={"Work With Us"}
             />
             
            <ButtonLink
              style={"secondary"}
              btnText={"See How Our 360 Works"}
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
