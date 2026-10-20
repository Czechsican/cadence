import styles from "./Footer.module.css";
import content from "../../content/footer.json";

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerLogo}>
              {`${content.logo} `}<span>{content.logoSub}</span>
            </div>
            <p className={styles.footerTagline}>{content.tagline}</p>
          </div>

          {content.columns.map((col) => (
            <div className={styles.footerCol} key={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.items.map((item) => (
                  <li key={item.text}>
                    {item.href ? <a href={item.href}>{item.text}</a> : item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <p>{content.copyright}</p>
          <p><a href={content.privacy.href}>{content.privacy.text}</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
