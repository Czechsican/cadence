import styles from "./Band.module.css";
import Button from "../Button";

const Band = ({ 
  title = "Band Title",
  copy,
  cta,
  dark = false
}) => {

  const darkBg = dark && `${styles.dark}`;

  return (
    <section className={`${styles.band} ${darkBg}`}>
      <div className={styles.container}>
        <div>
          <h2>{title}</h2>
          { copy && <p>{copy}</p>}
        </div>
        <div className={styles.cta}>
          <Button {...cta} />
        </div>
      </div>
    </section>
  );
};

export default Band;
