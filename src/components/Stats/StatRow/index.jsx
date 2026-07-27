import styles from "./StatRow.module.css";
import StatItem from "./StatItem";

const dummyStats = [
  {
    title: "Years in Practice",
    val: 10,
  },
  {
    title: "Leaders Coached",
    val: 75,
  },
  {
    title: "Courses Taught",
    val: 250,
  },
];

const StatRow = () => {
  return (
    <section className={`${styles.StatSection}`}>
      <div className={`${styles.row} container`}>
        {
          dummyStats.map(
            stats => <StatItem info={stats} key={stats.title} />
          )
        }
      </div>
    </section>
  )
};

export default StatRow;