import Button from '../Button';
import styles from './SiteNav.module.css';

const SiteNav = () => {
  return (
    <nav className={styles.siteNav}>
      <div className="container">
        <div className={styles.navInner}>
          <div className={styles.navLogo}>
            Cadence
            <span>Leadership + Communication</span>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">Coaching</a>
            </li>
            <li>
              <a href="#">Courses & Training</a>
            </li>
            <li>
              <a href="#">360 Assessments</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <Button 
            btnText={"Work With Us"}
          />
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
