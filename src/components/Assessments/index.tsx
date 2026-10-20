import React from "react";
import styles from "./Assessments.module.css";
import CornerTab from "../CornerTab";
import ButtonLink from "../Button";
import Step from "./Step";

const assessmentSteps = [
  {
    stepNum: "01",
    stepTitle: "We Interview the people around you",
    stepBody: "Peers, direct reports, and stakeholders — up to 12 people. Conducted by a Cadence coach. Confidential, qualitative, and built to surface what surveys can't."
  },
  {
    stepNum: "02",
    stepTitle: "We build a narrative report",
    stepBody: "Not a dashboard. A written account of how you're experienced —themes, patterns, and specific behaviours the data actually supports. Honest without being brutal."
  },
  {
    stepNum: "03",
    stepTitle: "We debrief and build a path forward",
    stepBody: "A structured debrief with your coach, followed by a development plan grounded in what came out of the 360. Most leaders continue into coaching from here."
  },
];

export default function Assessments() {
  return (
    <section className={styles.assessments}>
      <div className="container">
        <img
          className={styles.banner}
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&h=540&q=85"
          alt="360 assessment in practice"
        />
        <CornerTab tabText={"360 Assessments"} marginBottom={true} altColor />
        <div className={styles.sectionColumns}>
          <div className={styles.leftColumn}>
            <h2>The 360 isn't just an assessment. It's a foothold.</h2>
            <p className={styles.assessmentBody}>
              Our 360 process introduces you to your organization differently.
              Leaders who've been through one consistently say the same thing:
              they didn't expect it to go that deep.
            </p>
            <p className={styles.assessmentBody}>
              Every engagement reaches the people around a leader — peers,
              direct reports, stakeholders — which means every 360 opens more
              doors than it starts with.
            </p>
            <ButtonLink btnText={"How Our 360 Works"} style={"secondary"} />
          </div>
          <div className={styles.processSteps}>
            {
              assessmentSteps.map( step => (
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
