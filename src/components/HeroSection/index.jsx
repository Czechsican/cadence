import React from 'react';
import styles from "./HeroSection.module.css";
import ButtonLink from "../Button";
import { getImage } from "../../content/images";
import content from "../../content/hero.json";

const HeroSection = ({eyebrow}) => {
  return (
    <section
      className={styles.siteHero}
      style={{ "--hero-image": `url("${getImage("workspace").src}")` }}
    >
      <div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyeBrow}>{eyebrow}</p>
          <h1>
            {`${content.titleLead} `}
            <br />
            <em>{content.titleEmphasis}</em>
          </h1>
          <p>{content.body}</p>
          <div className={styles.heroCtas}>
            <ButtonLink
              {...content.primaryCta}
             />
             
            <ButtonLink
              {...content.secondaryCta}
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
