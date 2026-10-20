import CornerTab from "../CornerTab";
import styles from "./Testimonials.module.css";
import content from "../../content/testimonials.json";

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <CornerTab
          tabText={content.tab}
          marginBottom={true}
        />
        <article className={styles.testimonial}>
          <blockquote>{content.quote}</blockquote>

          <cite>{content.cite}</cite>
        </article>

      </div>
    </section>
  );
};

export default Testimonials;
