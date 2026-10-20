import styles from "./Assessments.module.css";
import Image from "../Image";
import CornerTab from "../CornerTab";
import ButtonLink from "../Button";
import Step from "./Step";
import content from "../../content/assessments.json";

export default function Assessments() {
  return (
    <section className={styles.assessments}>
      <div className="container">
        <Image
          className={styles.banner}
          id={content.bannerImage.id}
          alt={content.bannerImage.alt}
        />
        <CornerTab tabText={content.tab} marginBottom={true} altColor />
        <div className={styles.sectionColumns}>
          <div className={styles.leftColumn}>
            <h2>{content.title}</h2>
            {content.paragraphs.map((text) => (
              <p key={text} className={styles.assessmentBody}>
                {text}
              </p>
            ))}
            <ButtonLink {...content.cta} />
          </div>
          <div className={styles.processSteps}>
            {
              content.steps.map( step => (
                <Step 
                  key={step.stepNum}
                  stepNum={step.stepNum}
                  stepTitle={step.stepTitle}
                  stepBody={step.stepBody}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
