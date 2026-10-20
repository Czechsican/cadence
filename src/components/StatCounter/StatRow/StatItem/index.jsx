import styles from './StatItem.module.css';
import StatCounter from '../../../StatCounter';

const StatItem = ({info = {val: 0, title: "Stat Title"}}) => {
  const {val, title} = info;

  return (
    <div className={styles.StatItem}>
      <p className={styles.val} data-count={val} data-count-suffix="+">
        <span aria-hidden="true">
          <StatCounter target={val} duration={800} />+
        </span>
        <span className="sr-only">{val}+</span>
      </p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default StatItem;
