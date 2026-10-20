import { useState } from "react";
import Button from "../Button";
import styles from "./SiteNav.module.css";
import content from "../../content/siteNav.json";

const NAV_LINKS_ID = "site-nav-links";

const SiteNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const siteNavStyles = menuOpen ? 
  `${styles.siteNav} ${styles.open}` :
  `${styles.siteNav}`;

  const containerStyles = menuOpen ? 
  `${styles.navLinksContainer} ${styles.open}` :
  `${styles.navLinksContainer}`;

  return (
    <nav className={siteNavStyles} aria-label={content.navLabel}>
      <div className="container">
        <div className={styles.navInner}>
          <div className={styles.navLogo}>
            {content.logo}
            <span>{content.logoSub}</span>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className={styles.burgerMenu}
            aria-label={content.menuLabel}
            aria-controls={NAV_LINKS_ID}
            aria-expanded={menuOpen}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
          <div id={NAV_LINKS_ID} className={containerStyles}>
            <ul className={styles.navLinks}>
              {content.links.map((link) => (
                <li key={link.text}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
            <Button {...content.cta} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
