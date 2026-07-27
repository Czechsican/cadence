import { useEffect, useState } from 'react';
import styles from './StatItem.module.css';
import StatCounter from '../../../StatCounter';

const StatItem = ({info = {val: 0, title: "Stat Title"}}) => {
  const [value, setValue] = useState(0);
  const {val, title} = info;

  return (
    <div className={styles.StatItem}>
      <p className={styles.val} data-count={val} data-count-suffix="+">
        <StatCounter target={val} duration={800} />+</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default StatItem;
