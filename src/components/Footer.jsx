
import styles from './footer.module.css';

const Footer = () => {
  const anioActual = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerNav}>
        <li>
          <a href="#" className={styles.footerLink}>React student</a>
        </li>
        <li>
          <a href="#" className={styles.footerLink}>Privacy Policy</a>
        </li>
      </ul>      
      <p className={styles.copyright}>
        © {anioActual} PE Store. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;