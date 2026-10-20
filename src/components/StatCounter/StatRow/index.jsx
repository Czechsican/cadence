import styles from "./StatRow.module.css";
import StatItem from "./StatItem";
import stats from "../../../content/stats.json";

const StatRow = () => {
  return (
    <section className={`${styles.StatSection}`}>
      <div className={`${styles.row} container`}>
        {
          stats.map(
            stat => <StatItem info={stat} key={stat.title} />
          )
        }
      </div>
    </section>
  )
};

export default StatRow;