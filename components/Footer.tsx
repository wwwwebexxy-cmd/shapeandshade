import styles from "./Footer.module.css";
import { FaInstagram,  FaFacebookF, FaSnapchatGhost, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src="/logo-shapes-shade.png" alt="Shapes and Shades Logo" style={{ height: '80px', width: 'auto', display: 'block' }} />
          </div>
          <p className={styles.description}>
            Elevating your living spaces with bespoke interior design and premium aesthetics.
          </p>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Company</h4>
          <a href="#about" className={styles.link}>About</a>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#features" className={styles.link}>Portfolio</a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Legal</h4>
          <a href="#" className={styles.link}>Privacy Policy</a>
          <a href="#" className={styles.link}>Terms of Service</a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.columnTitle}>Social</h4>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/shapes_n_shades_interiors?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1CTPYv18Xd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://snapchat.com/t/2mm3iKk8" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Snapchat">
              <FaSnapchatGhost />
            </a>
            <a href="https://www.tiktok.com/@shapes.and.shades0?_r=1&_t=ZS-99zeQzYO2j6" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {currentYear} Shapes & Shades Interior Design. All rights reserved.</p>
      </div>
    </footer>
  );
}
