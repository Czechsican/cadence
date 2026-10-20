import React from 'react';
import styles from "./Step.module.css";

export default function Step({stepNum, stepTitle, stepBody}) {
  return (
    <div className={styles.step}>
      <div className={styles.processStepNum}>{stepNum}</div>
      <div>
        <div className={styles.processStepTitle}>
          {stepTitle}
        </div>
        <div className={styles.processStepBody}>
          {stepBody}
        </div>
      </div>
    </div>
  );
}
