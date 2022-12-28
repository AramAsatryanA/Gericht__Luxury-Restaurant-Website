import NewsletterSection from "../FooterComponents/NewsletterSection";
import FooterBottom from "../FooterComponents/FooterBottom";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="section__overlay"></div>
      <NewsletterSection />
      <FooterBottom />
      <div className={styles.signature}>
        /// Development by <span>Aram Asatryan</span> ///
      </div>
    </footer>
  );
}

export default Footer;
